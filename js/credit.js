/* Crédito: pagos mensuales y provisiones por operación. */
function creditMonthly(){
 for(let i=db.loans.length-1;i>=0;i--){const l=db.loans[i];l.monthsLeft ||= Math.max(1,l.qLeft*3);l.provAllocated ||= 0;
 if(l.status==="Vigente"){
 if(Math.random()<l.defProb/12){markCreditArrears(l.id);continue;}
 const interest=money(l.bal*l.rate/1200),principal=Math.min(l.bal,money(l.bal/l.monthsLeft));db.cashHnl+=interest+principal;l.bal=money(l.bal-principal);l.monthsLeft--;l.qLeft=Math.ceil(l.monthsLeft/3);const excess=Math.max(0,l.provAllocated-l.bal);if(excess){db.provisions-=excess;l.provAllocated-=excess;postPL(excess,"prov","Liberación proporcional");}postPL(interest,"loans","Cuota mensual "+l.client);updateCustomerScore(l,4,"Cuota pagada");tx360(l,"Cuota préstamo",principal+interest,interest);
 if(l.bal===0){const rel=Math.min(db.provisions,l.provAllocated);db.provisions-=rel;postPL(rel,"prov","Liberación al cancelar");db.loans.splice(i,1);}
 }else{const add=Math.max(0,money(l.bal*.55)-l.provAllocated);if(add){db.provisions+=add;l.provAllocated+=add;postPL(-add,"prov","Ajuste mora "+l.client);}}
 }}
function markCreditArrears(id){const l=db.loans.find(x=>x.id===id);if(!l||l.status!=="Vigente")return;l.status="Mora";const add=Math.max(0,money(l.bal*.30)-(l.provAllocated||0));l.provAllocated=(l.provAllocated||0)+add;db.provisions+=add;postPL(-add,"prov","Provisión mora "+l.client);updateCustomerScore(l,-25,"Mora");}
function refinanceCredit(id){const l=db.loans.find(x=>x.id===id);if(!l||l.status!=="Mora"||l.refinanced)return;tx360(l,"Refinanciamiento",0);l.refinanced=true;l.status="Vigente";l.monthsLeft=Math.max(1,l.monthsLeft||l.qLeft*3)+6;l.qLeft=Math.ceil(l.monthsLeft/3);logEvent("Refinanciado +6 meses; provisión conservada.","warn");}
function settleCredit(id){const i=db.loans.findIndex(x=>x.id===id);if(i<0)return;const l=db.loans[i];db.cashHnl+=l.bal;const rel=Math.min(db.provisions,l.provAllocated||0);db.provisions-=rel;postPL(rel,"prov","Liberación pago total");updateCustomerScore(l,10,"Cancelación total");tx360(l,"Cancelación préstamo",l.bal);db.loans.splice(i,1);}
