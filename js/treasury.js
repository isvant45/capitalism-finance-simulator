/* Entrega 3. Todas las tasas y contrapartes son simuladas. */
function initTreasury(){
 db.govBonds??=0;db.interbankBorrowed??=0;db.remittances??=[];db.treasurySeq??=1;db.ibHistory??=[];
 for(const c of db.contracts){if(!c.id){c.id=db.treasurySeq++;c.side="LEND";c.daysLeft=Math.max(1,(c.qLeft||2)*90);c.elapsed=0;}}
}
function newInterbank(side,amount,days=90){
 if(!["LEND","BORROW"].includes(side)||!isMoney(amount)||amount<=0||!Number.isInteger(days)||days<1||days>365)return;
 const eq=Math.max(0,db.paidCap+db.retained),exposure=side==="LEND"?db.interbankLoans:db.interbankBorrowed+db.rediscount;
 if(exposure+amount>Math.floor(eq*.5)||(side==="LEND"&&db.cashHnl<amount)){logEvent("Límite interbancario simulado o liquidez insuficiente.","warn");return;}
 if(side==="LEND"){db.cashHnl-=amount;db.interbankLoans+=amount;}else{db.cashHnl+=amount;db.interbankBorrowed+=amount;}
 db.contracts.push({id:db.treasurySeq++,side,amount,rate:side==="LEND"?.095:.085,daysLeft:days,elapsed:0,bank:db.rivals[db.contracts.length%db.rivals.length]?.name||"Contraparte ficticia"});
}
function settleInterbank(id){
 const i=db.contracts.findIndex(c=>c.id===id);if(i<0)return;const c=db.contracts[i],interest=money(c.amount*c.rate*c.elapsed/365);
 if(c.side==="BORROW"&&db.cashHnl<c.amount+interest){logEvent("Fondeo interbancario pendiente: liquidez insuficiente.","warn");return;}
 if(c.side==="LEND"){db.interbankLoans-=c.amount;db.cashHnl+=c.amount+interest;postPL(interest,"loans","Interés interbancario");}
 else{db.interbankBorrowed-=c.amount;db.cashHnl-=c.amount+interest;postPL(-interest,"dep","Costo interbancario");}
 db.ibHistory.push({...c,interest,status:"Liquidado",date:db.calendarDate});db.contracts.splice(i,1);
}
function bondTrade(side,amount){
 if(!isMoney(amount)||amount<=0)return;
 if(side==="BUY"&&db.cashHnl>=amount){db.cashHnl-=amount;db.govBonds+=amount;}
 if(side==="SELL"&&db.govBonds>=amount){db.cashHnl+=amount;db.govBonds-=amount;}
}
function treasuryDaily(key){
 if(db.lastTreasuryDay===key)return;
 const old=db.fxRate,next=Math.max(20,+(old*(1+Math.random()*.0018-.0007)).toFixed(2));
 db.fxRate=next;const delta=money(db.usdBalance*next)-money(db.usdBalance*old);if(delta)postPL(delta,"fx","Revaluación diaria USD");
 for(const c of [...db.contracts]){c.daysLeft--;c.elapsed++;if(c.daysLeft<=0)settleInterbank(c.id);}
 db.lastTreasuryDay=key;
}
function treasuryMonthly(){const coupon=money(db.govBonds*.08/12);if(coupon){db.cashHnl+=coupon;postPL(coupon,"loans","Cupón simulado bonos");}}
function renderTreasury(){
 const e=document.getElementById("treasury-details");if(e)e.innerHTML="<p>Bonos al costo: "+fmtL(db.govBonds)+" · Fondeo interbancario: "+fmtL(db.interbankBorrowed)+"</p><table><tr><th>Contraparte</th><th>Tipo</th><th>Principal</th><th>Tasa anual</th><th>Días restantes</th><th>Acción</th></tr>"+db.contracts.map(c=>"<tr><td>"+safeHtml(c.bank)+"</td><td>"+c.side+"</td><td>"+fmtL(c.amount)+"</td><td>"+(c.rate*100).toFixed(2)+"%</td><td>"+Math.max(0,c.daysLeft)+"</td><td><button class='op-btn' onclick='settleInterbank("+c.id+")'>Liquidar</button></td></tr>").join("")+"</table><p>Contratos liquidados: "+db.ibHistory.length+"</p>";
 const r=document.getElementById("remittance-history");if(r)r.innerHTML="<p>Historial de lotes simulados (no conexión SWIFT real).</p><table><tr><th>Referencia</th><th>Origen</th><th>Volumen USD</th><th>Comisión HNL</th></tr>"+db.remittances.slice(-12).reverse().map(x=>"<tr><td>"+x.ref+"</td><td>"+x.origin+"</td><td>"+fmtU(x.usd)+"</td><td>"+fmtL(x.fee)+"</td></tr>").join("")+"</table>";
}
