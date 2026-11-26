/* Slots y portabilidad; solo formato nativo de este juego. */
let testMode=false,batchMode=false;
function validateSave(p){
 if(!p||typeof p!=="object"||Array.isArray(p))throw Error("Formato inválido");
 const base=initialState();for(const [k,v] of Object.entries(base)){if(!(k in p)||typeof p[k]!==typeof v||Array.isArray(v)!==Array.isArray(p[k]))throw Error("Campo inválido: "+k);}
 function walk(v,depth=0){if(depth>20)throw Error("Estructura profunda");if(typeof v==="number"&&!Number.isFinite(v))throw Error("Número inválido");if(typeof v==="string"&&/[<>]/.test(v))throw Error("Texto no permitido");if(v&&typeof v==="object"){for(const [k,x] of Object.entries(v)){if(["__proto__","constructor","prototype"].includes(k))throw Error("Clave inválida");walk(x,depth+1);}}}
 walk(p);if(!Number.isInteger(p.yr)||p.yr<1900||p.yr>2200||!Number.isInteger(p.q)||p.q<1||p.q>4||!Number.isInteger(p.branches)||p.branches<1||p.branches>30||p.fxRate<=0)throw Error("Fecha, agencias o FX inválidos");
 for(const k of ["cashHnl","usdBalance","govBonds","interbankBorrowed","interbankLoans","fixedAssets","savingsDep","checkingDep","paidCap","retained","provisions","rediscount"])if(!Number.isSafeInteger(p[k])||(!["cashHnl","retained"].includes(k)&&p[k]<0))throw Error("Saldo inválido "+k);
 for(const k of ["apps","loans","cards","cdps","contracts","eventualAssets"])for(const x of p[k])if(!x||typeof x!=="object"||typeof x.id!=="number")throw Error("Registro inválido "+k);
 for(const l of p.loans)if(!Number.isSafeInteger(l.bal)||l.bal<0||!Number.isFinite(l.rate)||!["Vigente","Mora"].includes(l.status)||typeof l.client!=="string"||typeof l.label!=="string")throw Error("Crédito inválido");
 for(const c of p.cards)if(!Number.isSafeInteger(c.bal)||c.bal<0||!Number.isSafeInteger(c.limit)||c.limit<=0||!Number.isFinite(c.rate)||typeof c.client!=="string")throw Error("Tarjeta inválida");
 for(const a of p.apps)if(typeof a.client!=="string"||typeof a.label!=="string"||!Number.isFinite(a.rate)||!Number.isFinite(a.defProb)||!Number.isSafeInteger(a.amt)||a.amt<=0)throw Error("Solicitud inválida");
 if(!p.pl||!p.hist||!Object.keys(base.pl).every(k=>Number.isFinite(p.pl[k]))||!Object.keys(base.hist).every(k=>Array.isArray(p.hist[k])))throw Error("Historial inválido");
 const old=db;try{db=p;const audit=getAuditImbalance();if(audit.diff!==0||!Number.isFinite(audit.totAssets))throw Error("Balance no cuadra");}finally{db=old;}return true;
}
function applyPortableSave(p){validateSave(p);const old=db;try{db=p;initTreasury();initRivals();initHR();initRegulation();ensureCustomers();renderAll();}catch(e){db=old;renderAll();throw e;}}
function saveSlot(n){if(![1,2,3].includes(n))return;try{localStorage.setItem("bch98_slot_"+n,JSON.stringify(db));logEvent("Guardado en espacio "+n,"pos");}catch(e){logEvent("No se pudo guardar: "+e.message,"neg");}}
function loadSlot(n){if(![1,2,3].includes(n))return;try{const raw=localStorage.getItem("bch98_slot_"+n);if(!raw)throw Error("Espacio vacío");if(!confirm("¿Reemplazar partida activa por espacio "+n+"?"))return;applyPortableSave(JSON.parse(raw));}catch(e){logEvent("Carga rechazada: "+e.message,"neg");}}
function exportGame(){const blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),link=document.createElement("a");link.href=url;link.download="bch98-"+db.calendarDate+".json";link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
async function importGame(input){try{const f=input.files?.[0];if(!f)return;if(f.size>30*1024*1024)throw Error("Archivo demasiado grande");const p=JSON.parse(await f.text());validateSave(p);if(confirm("¿Reemplazar partida actual por el archivo?"))applyPortableSave(p);}catch(e){logEvent("Importación rechazada: "+e.message,"neg");}finally{input.value="";}}
function runFullTestSuite(){
 const original=db,oldRandom=Math.random;const results=[];let seed=42;const check=(name,ok)=>results.push({name,ok:!!ok});const audit=()=>getAuditImbalance().diff===0;
 testMode=true;try{Math.random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};db=initialState();initTreasury();initRivals();initHR();initRegulation();generateAppsList();db.calendarDate="2026-01-01";
 check("1 Balance inicial",audit());attractDeposits("SAVINGS",10000000);check("2 Captación",db.savingsDep===105000000&&audit());const before=db.cashHnl;wrapOperation(()=>{db.cashHnl+=1000},"Prueba")();check("3 Reversión",db.cashHnl===before&&audit());
 db.apps.push({id:901,client:"Prueba",seg:"PERSONAS",label:"Préstamo Vehicular",income:200000,score:800,amt:650000,q:8,rate:12,defProb:0});approveApp(901);check("4 Crédito",db.loans.some(l=>l.id===901)&&audit());registerCollateral(901,"VEHICULO",800000);check("5 Garantía",db.collaterals.length===1);markCreditArrears(901);check("6 Mora",db.provisions>0&&audit());refinanceCredit(901);check("7 Refinanciación",db.loans[0].status==="Vigente");settleCredit(901);check("8 Cancelación",db.loans.length===0&&db.provisions===0&&audit());
 const p=CARD_CATALOG[0];db.apps.push({id:902,client:"Prueba tarjeta",seg:p.seg,label:p.label,cardTier:p.cardTier,income:30000,score:790,amt:100000,rate:p.apr});const cash=db.cashHnl;approveApp(902);check("9 Emisión sin desembolso",db.cards.length===1&&db.cashHnl===cash);cardSpend(902,10000);cardPay(902,2000);check("10 Revolvente",db.cards[0].bal===8000&&audit());
 const u=db.usdBalance;tradeFX("BUY",250000);tradeFX("SELL",250000);check("11 FX",db.usdBalance===u&&audit());for(let n=0;n<10;n++)processRemittances();check("12 Cupo remesas",db.remittances.length===3);newInterbank("LEND",5000000,10);newInterbank("BORROW",5000000,10);advanceCalendarDays(10);check("13 Interbancario",db.contracts.length===0&&db.ibHistory.length===2&&audit());bondTrade("BUY",10000000);check("14 Bonos",db.govBonds===10000000&&audit());
 openManagedBranch("Puerto Cortés");hireManagedStaff(db.hrBranches.at(-1).id,"Cajero",2);check("15 Agencia y personal",db.branches===4&&db.hrBranches.at(-1).staff===8&&audit());closeManagedBranch();
 const r=db.rivals.findIndex(x=>x.stress>=55);makePortfolioOffer(r);check("16 Compra cartera",db.deals.length===1&&audit());
 inspectBank();check("17 Inspección",db.regulation.lastInspection!=="Sin inspección");intervene("Prueba");const c=db.cashHnl;tradeFX("BUY",100000);check("18 Bloqueo",db.cashHnl===c&&db.locked);rescueBank();check("19 Regularización única",!db.locked&&db.regulation.rescueUsed&&audit());
 // Escenario independiente de diez años: cartera conservadora de bonos y operación normal.
 db=initialState();initTreasury();initRivals();initHR();initRegulation();generateAppsList();db.calendarDate="2026-01-01";bondTrade("BUY",100000000);
 let balanced=true;for(let k=0;k<10;k++){const start=new Date(db.yr+"-01-01T00:00:00Z"),end=new Date((db.yr+1)+"-01-01T00:00:00Z");const days=Math.round((end-start)/86400000);advanceCalendarDays(days);balanced=balanced&&audit()&&Number.isFinite(db.cashHnl)&&Number.isFinite(db.retained);if(db.locked)break;}
 check("20 Estrés 10 años",balanced&&db.calendarDate==="2036-01-01"&&!db.locked);
 }catch(e){results.push({name:"Excepción: "+e.message,ok:false});}finally{db=original;Math.random=oldRandom;testMode=false;batchMode=false;renderAll();}
 return results;
}
function showFullTests(){const e=document.getElementById("test-results");const r=runFullTestSuite();e.innerHTML="<p><b>"+r.filter(x=>x.ok).length+"/20 aprobadas</b></p>"+r.map(x=>"<p>"+(x.ok?"✓ ":"✗ ")+safeHtml(x.name)+"</p>").join("");}
