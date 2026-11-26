/* Aritmética monetaria en centavos; el estado conserva HNL para compatibilidad. */
function toCents(v){if(typeof v!=="number"||!Number.isFinite(v))throw Error("Importe inválido");const n=Math.round((v+Math.sign(v)*Number.EPSILON)*100);if(!Number.isSafeInteger(n))throw Error("Importe fuera de rango");return n;}
function money(v){return toCents(v)/100}
function isMoney(v){return typeof v==="number"&&Number.isFinite(v)&&Math.abs(v)<Number.MAX_SAFE_INTEGER/100&&Math.abs(v-money(v))<0.000001;}
function moneySum(xs){return xs.reduce((s,x)=>s+toCents(x),0)/100}
function annualPL(){const p=emptyPL();for(const r of [...db.periods.filter(x=>x.yr===db.yr),db.pl])for(const k of Object.keys(p))p[k]=money(p[k]+(r[k]||0));return p;}
function normalizeMoney(){for(const k of ["cashHnl","interbankLoans","interbankBorrowed","govBonds","fixedAssets","savingsDep","checkingDep","paidCap","retained","provisions","rediscount","goodwill"])db[k]=money(db[k]||0);for(const k of Object.keys(db.pl))db.pl[k]=money(db.pl[k]);for(const l of db.loans){l.bal=money(l.bal);l.provAllocated=money(l.provAllocated||0);}for(const c of db.cards)c.bal=money(c.bal);}
/* Motor contable y auditoría — funciones compartidas. */
function recordJournal(concept, debit, haber) {
  db.journal.unshift({
    concept,
    debit: money(debit),
    haber: money(haber)
  });
  if (db.journal.length > 40) db.journal.pop();
}

function recomputeNetIncome() {
  db.pl.net = money(
    db.pl.incLoans + db.pl.incFees - db.pl.expDep - db.pl.expOpex - db.pl.expProv + db.pl.fxPnl
  );
}

// Registra impacto contable en utilidades retenidas y en el estado de resultados
function postPL(delta, bucket, concept) {
  const val = money(delta);
  db.retained += val;
  if (bucket === "loans") db.pl.incLoans += val;
  else if (bucket === "fees") db.pl.incFees += val;
  else if (bucket === "dep") db.pl.expDep += (-val);
  else if (bucket === "opex") db.pl.expOpex += (-val);
  else if (bucket === "prov") db.pl.expProv += (-val);
  else if (bucket === "fx") db.pl.fxPnl += val;

  recomputeNetIncome();
  if (concept) {
    if (val >= 0) recordJournal(concept, val, val);
    else recordJournal(concept, Math.abs(val), Math.abs(val));
  }
}

function clampProvisions() {
  const totLoans = db.loans.reduce((s, l) => s + l.bal, 0);
  if (db.provisions > totLoans) db.provisions = totLoans;
  if (db.provisions < 0) db.provisions = 0;
}

function getAuditImbalance() {
  const okLoans = db.loans.filter(l => l.status === "Vigente").reduce((s, l) => s + l.bal, 0);
  const badLoans = db.loans.filter(l => l.status === "Mora").reduce((s, l) => s + l.bal, 0);
  const evVal = db.eventualAssets.reduce((s, e) => s + e.bookVal, 0);
  const usdHnl = money(db.usdBalance * db.fxRate);
  const cardBal=(db.cards||[]).reduce((s,c)=>s+c.bal,0);
  const totAssets = db.cashHnl + usdHnl + db.interbankLoans + okLoans + badLoans + cardBal + evVal - db.provisions + db.fixedAssets + (db.govBonds||0) + (db.goodwill||0);

  const cdpVal = db.cdps.reduce((s, c) => s + c.amount, 0);
  const totDep = db.savingsDep + db.checkingDep + cdpVal;
  const totLiab = totDep + db.rediscount + (db.interbankBorrowed||0);
  const eq = db.paidCap + db.retained;
  const totLP = totLiab + eq;

  return {
    totAssets,
    totLP,
    diff: (toCents(totAssets)-toCents(totLP))/100,
    okLoans:okLoans+cardBal,
    badLoans,
    evVal,
    usdHnl,
    cdpVal,
    totDep,
    totLiab,
    eq
  };
}

function balanceAccounts(){const p=annualPL(),n=money(p.incLoans+p.incFees-p.expDep-p.expOpex-p.expProv+p.fxPnl),undrawn=moneySum(db.cards.map(c=>Math.max(0,c.limit-c.bal))),custody=moneySum((db.collaterals||[]).filter(g=>g.status==='Custodia'&&db.loans.some(l=>l.id===g.loanId)).map(g=>g.appraisal)),auction=moneySum(db.eventualAssets.map(e=>e.bookVal));return {"1101 Caja HNL":db.cashHnl,"1102 Caja USD":money(db.usdBalance*db.fxRate),"1201 Interbancario":db.interbankLoans,"1202 Bonos":db.govBonds||0,"1301 Cartera créditos":db.loans.reduce((s,l)=>s+l.bal,0),"1302 Tarjetas":db.cards.reduce((s,c)=>s+c.bal,0),"1401 Adjudicados":db.eventualAssets.reduce((s,e)=>s+e.bookVal,0),"1501 Activos fijos":db.fixedAssets,"1399 Provisiones":-db.provisions,"2101 Ahorro":-db.savingsDep,"2102 Cheques":-db.checkingDep,"2103 CDP":-db.cdps.reduce((s,c)=>s+c.amount,0),"2201 Redescuento":-db.rediscount,"2202 Fondeo interbancario":-(db.interbankBorrowed||0),"3101 Capital":-db.paidCap,"1601 Crédito mercantil":db.goodwill||0,"3201 Resultados acumulados":money(-db.retained+n),"4101 Ingresos intereses":-p.incLoans,"4102 Comisiones":-p.incFees,"4104 Ganancia FX":-Math.max(0,p.fxPnl),"5101 Gastos intereses":p.expDep,"5102 Gastos operativos":p.expOpex,"5201 Provisiones netas":p.expProv,"5203 Pérdida FX":Math.max(0,-p.fxPnl),"6101 Líneas disponibles":undrawn,"6201 Contrapartida líneas":-undrawn,"7101 Garantías custodia":custody,"7201 Contrapartida custodia":-custody,"7102 Adjudicados control":auction,"7202 Contrapartida adjudicados":-auction}}
