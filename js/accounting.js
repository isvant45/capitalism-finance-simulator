/* Motor contable y auditoría — funciones compartidas. */
function recordJournal(concept, debit, haber) {
  db.journal.unshift({
    concept,
    debit: Math.round(debit),
    haber: Math.round(haber)
  });
  if (db.journal.length > 40) db.journal.pop();
}

function recomputeNetIncome() {
  db.pl.net = Math.round(
    db.pl.incLoans + db.pl.incFees - db.pl.expDep - db.pl.expOpex - db.pl.expProv + db.pl.fxPnl
  );
}

// Registra impacto contable en utilidades retenidas y en el estado de resultados
function postPL(delta, bucket, concept) {
  const val = Math.round(delta);
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
  const usdHnl = Math.round(db.usdBalance * db.fxRate);
  const cardBal=(db.cards||[]).reduce((s,c)=>s+c.bal,0);
  const totAssets = db.cashHnl + usdHnl + db.interbankLoans + okLoans + badLoans + cardBal + evVal - db.provisions + db.fixedAssets + (db.govBonds||0);

  const cdpVal = db.cdps.reduce((s, c) => s + c.amount, 0);
  const totDep = db.savingsDep + db.checkingDep + cdpVal;
  const totLiab = totDep + db.rediscount + (db.interbankBorrowed||0);
  const eq = db.paidCap + db.retained;
  const totLP = totLiab + eq;

  return {
    totAssets,
    totLP,
    diff: Math.round(totAssets - totLP),
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

function balanceAccounts(){return {"1101 Caja HNL":db.cashHnl,"1102 Caja USD":Math.round(db.usdBalance*db.fxRate),"1201 Interbancario":db.interbankLoans,"1202 Bonos":db.govBonds||0,"1301 Cartera créditos":db.loans.reduce((s,l)=>s+l.bal,0),"1302 Tarjetas":db.cards.reduce((s,c)=>s+c.bal,0),"1401 Adjudicados":db.eventualAssets.reduce((s,e)=>s+e.bookVal,0),"1501 Activos fijos":db.fixedAssets,"1399 Provisiones":-db.provisions,"2101 Ahorro":-db.savingsDep,"2102 Cheques":-db.checkingDep,"2103 CDP":-db.cdps.reduce((s,c)=>s+c.amount,0),"2201 Redescuento":-db.rediscount,"2202 Fondeo interbancario":-(db.interbankBorrowed||0),"3101 Capital":-db.paidCap,"3201 Resultados acumulados":-db.retained}}
