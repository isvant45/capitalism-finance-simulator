/* Garantías vinculadas a un crédito; no son activos del banco hasta adjudicación. */
function registerCollateral(id,type,value){
 const l=db.loans.find(x=>x.id===id);if(!l||!["INMUEBLE","VEHICULO","MAQUINARIA","OTRO"].includes(type)||!Number.isSafeInteger(value)||value<=0||value>l.bal*3||db.collaterals.some(x=>x.loanId===id&&x.status==="Custodia"))return;
 db.collaterals.push({id:db.marketSeq++,loanId:id,owner:l.client,type,appraisal:value,liquidation:Math.round(value*.75),status:"Custodia"});
}
function registerSelectedCollateral(){const id=Number(document.getElementById("gar-loan").value),type=document.getElementById("gar-type").value,value=Number(document.getElementById("gar-value").value);registerCollateral(id,type,value);}
function recoverCollateral(id){
 const i=db.loans.findIndex(l=>l.id===id&&l.status==="Mora");if(i<0)return;const l=db.loans[i],g=db.collaterals.find(x=>x.loanId===id&&x.status==="Custodia"),rel=Math.min(db.provisions,l.provAllocated||0);
 db.provisions-=rel;
 const recovered=g?Math.min(l.bal,g.liquidation):Math.round(l.bal*.30);
 if(g){g.status="Adjudicada";db.eventualAssets.push({id:Date.now()+Math.random(),title:g.type+" · "+l.client,bookVal:recovered,collateralId:g.id,auctionPrice:Math.round(recovered*.94)});}
 else db.cashHnl+=recovered;
 postPL(recovered-l.bal+rel,"prov",g?"Adjudicación vinculada":"Castigo y recuperación simulada");db.loans.splice(i,1);
}
function renderMarket(){
 for(const g of db.collaterals)if(g.status==="Custodia"&&!db.loans.some(l=>l.id===g.loanId))g.status="Liberada";
 const sel=document.getElementById("gar-loan");if(sel){const old=sel.value;sel.innerHTML=db.loans.filter(l=>!db.collaterals.some(g=>g.loanId===l.id&&g.status==="Custodia")).map(l=>"<option value='"+l.id+"'>"+safeHtml(l.client)+" · "+fmtL(l.bal)+"</option>").join("");if(old)sel.value=old;}
 const e=document.getElementById("guarantee-list");if(e)e.innerHTML="<table><tr><th>Garantía</th><th>Titular</th><th>Avalúo</th><th>Liquidación estimada</th><th>Estado</th></tr>"+db.collaterals.map(g=>"<tr><td>"+g.type+"</td><td>"+safeHtml(g.owner)+"</td><td>"+fmtL(g.appraisal)+"</td><td>"+fmtL(g.liquidation)+"</td><td>"+g.status+"</td></tr>").join("")+"</table>";
}
