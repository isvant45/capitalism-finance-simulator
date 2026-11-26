
const STORAGE_KEY = "bch98_pro_v50_save";

const CARD_CATALOG = [
  {
    "label": "Tarjeta Visa Clásica",
    "cardTier": "Clásica",
    "brand": "Visa",
    "seg": "PERSONAS",
    "minInc": 18000,
    "minScore": 600,
    "minAmt": 25000,
    "maxAmt": 120000,
    "apr": 36,
    "fee": 650,
    "reward": "Puntos comercio",
    "minQ": 4,
    "maxQ": 12,
    "rateAdj": 0,
    "baseDef": 0.06,
    "collateral": "Línea revolvente"
  },
  {
    "label": "Tarjeta Visa Oro",
    "cardTier": "Oro",
    "brand": "Visa",
    "seg": "PERSONAS",
    "minInc": 35000,
    "minScore": 650,
    "minAmt": 100000,
    "maxAmt": 350000,
    "apr": 33.5,
    "fee": 1400,
    "reward": "Cashback / puntos",
    "minQ": 4,
    "maxQ": 12,
    "rateAdj": 0,
    "baseDef": 0.06,
    "collateral": "Línea revolvente"
  },
  {
    "label": "Tarjeta Visa Platinum",
    "cardTier": "Platinum",
    "brand": "Visa",
    "seg": "PERSONAS",
    "minInc": 70000,
    "minScore": 710,
    "minAmt": 300000,
    "maxAmt": 900000,
    "apr": 30,
    "fee": 2800,
    "reward": "Millas / seguros",
    "minQ": 4,
    "maxQ": 12,
    "rateAdj": 0,
    "baseDef": 0.06,
    "collateral": "Línea revolvente"
  },
  {
    "label": "Tarjeta Visa Signature",
    "cardTier": "Signature",
    "brand": "Visa",
    "seg": "PRIVADA",
    "minInc": 120000,
    "minScore": 740,
    "minAmt": 750000,
    "maxAmt": 2200000,
    "apr": 27.5,
    "fee": 4500,
    "reward": "Viajes / salas VIP",
    "minQ": 4,
    "maxQ": 12,
    "rateAdj": 0,
    "baseDef": 0.06,
    "collateral": "Línea revolvente"
  },
  {
    "label": "Tarjeta Visa Infinite",
    "cardTier": "Infinite",
    "brand": "Visa",
    "seg": "PRIVADA",
    "minInc": 220000,
    "minScore": 775,
    "minAmt": 1500000,
    "maxAmt": 5000000,
    "apr": 25,
    "fee": 7500,
    "reward": "Concierge",
    "minQ": 4,
    "maxQ": 12,
    "rateAdj": 0,
    "baseDef": 0.06,
    "collateral": "Línea revolvente"
  },
  {
    "label": "Tarjeta Mastercard Clásica",
    "cardTier": "Clásica",
    "brand": "Mastercard",
    "seg": "PERSONAS",
    "minInc": 18000,
    "minScore": 600,
    "minAmt": 25000,
    "maxAmt": 120000,
    "apr": 36,
    "fee": 650,
    "reward": "Puntos compras",
    "minQ": 4,
    "maxQ": 12,
    "rateAdj": 0,
    "baseDef": 0.06,
    "collateral": "Línea revolvente"
  },
  {
    "label": "Tarjeta Mastercard Gold",
    "cardTier": "Gold",
    "brand": "Mastercard",
    "seg": "PERSONAS",
    "minInc": 35000,
    "minScore": 650,
    "minAmt": 100000,
    "maxAmt": 350000,
    "apr": 33.5,
    "fee": 1400,
    "reward": "Promociones",
    "minQ": 4,
    "maxQ": 12,
    "rateAdj": 0,
    "baseDef": 0.06,
    "collateral": "Línea revolvente"
  },
  {
    "label": "Tarjeta Mastercard Platinum",
    "cardTier": "Platinum",
    "brand": "Mastercard",
    "seg": "PERSONAS",
    "minInc": 70000,
    "minScore": 710,
    "minAmt": 300000,
    "maxAmt": 900000,
    "apr": 30,
    "fee": 2800,
    "reward": "Seguros / puntos",
    "minQ": 4,
    "maxQ": 12,
    "rateAdj": 0,
    "baseDef": 0.06,
    "collateral": "Línea revolvente"
  },
  {
    "label": "Tarjeta Mastercard Black",
    "cardTier": "Black",
    "brand": "Mastercard",
    "seg": "PRIVADA",
    "minInc": 180000,
    "minScore": 760,
    "minAmt": 1200000,
    "maxAmt": 4500000,
    "apr": 26,
    "fee": 6500,
    "reward": "Beneficios VIP",
    "minQ": 4,
    "maxQ": 12,
    "rateAdj": 0,
    "baseDef": 0.06,
    "collateral": "Línea revolvente"
  },
  {
    "label": "Tarjeta Mastercard Empresarial PyME",
    "cardTier": "Empresarial",
    "brand": "Mastercard",
    "seg": "PYME",
    "minInc": 90000,
    "minScore": 670,
    "minAmt": 250000,
    "maxAmt": 1800000,
    "apr": 29,
    "fee": 2200,
    "reward": "Gastos operativos",
    "minQ": 4,
    "maxQ": 12,
    "rateAdj": 0,
    "baseDef": 0.06,
    "collateral": "Línea revolvente"
  },
  {
    "label": "Tarjeta Visa Corporativa",
    "cardTier": "Corporativa",
    "brand": "Visa",
    "seg": "EMPRESARIAL",
    "minInc": 300000,
    "minScore": 730,
    "minAmt": 1000000,
    "maxAmt": 8000000,
    "apr": 24.5,
    "fee": 5000,
    "reward": "Control corporativo",
    "minQ": 4,
    "maxQ": 12,
    "rateAdj": 0,
    "baseDef": 0.06,
    "collateral": "Línea revolvente"
  }
];
const PRODUCTS = [
  { seg: "PERSONAS", label: "Préstamo Vehicular", cardTier: null, minInc: 30000, minAmt: 650000, maxAmt: 3800000, minQ: 8, maxQ: 20, rateAdj: 1.0, baseDef: 0.055, collateral: "Vehículo (Prenda)" },
  { seg: "PERSONAS", label: "Crédito Hipotecario", cardTier: null, minInc: 55000, minAmt: 2500000, maxAmt: 16000000, minQ: 12, maxQ: 28, rateAdj: -1.0, baseDef: 0.04, collateral: "Bien Inmueble" },
  { seg: "PRIVADA", label: "Crédito con respaldo CDP", cardTier: null, minInc: 100000, minAmt: 1000000, maxAmt: 12000000, minQ: 4, maxQ: 12, rateAdj: -1, baseDef: 0.025, collateral: "Depósito pignorado simulado" },
  { seg: "PYME", label: "Capital de Trabajo PyME", cardTier: null, minInc: 90000, minAmt: 1200000, maxAmt: 8500000, minQ: 4, maxQ: 12, rateAdj: 1.5, baseDef: 0.085, collateral: "Inventarios / CxC" },
  { seg: "EMPRESARIAL", label: "Financiamiento Corporativo", cardTier: null, minInc: 350000, minAmt: 12000000, maxAmt: 65000000, minQ: 8, maxQ: 24, rateAdj: -1.5, baseDef: 0.03, collateral: "Garantía Real / Flujo" },
  ...CARD_CATALOG
];

const CLIENT_NAMES = [
  "Carlos Valladares", "Valeria Kafati", "Grupo Industrial Sula", "Comercial del Valle",
  "Agroexportadora Olancho", "Diana Castellanos", "Logística Cortés", "Constructora del Litoral",
  "Inversiones Morazán", "José Roberto Zelaya", "Distribuidora Atlántida", "Textiles y Confecciones HN"
];

let db;

function initialState() {
  // Activos iniciales:
  // cashHnl (284,300,000) + usdBalance (1,200,000 * 24.75 = 29,700,000) + fixedAssets (36,000,000) = 350,000,000
  // Pasivos iniciales:
  // savingsDep (95,000,000) + checkingDep (65,000,000) + CDP (40,000,000) = 200,000,000
  // Patrimonio inicial:
  // paidCap (120,000,000) + retained (30,000,000) = 150,000,000
  return {
    q: 1,
    yr: 2026,
    focus: "ALL",
    fxRate: 24.75,
    actRate: 14.0,
    savRate: 3.5,
    cdRate: 7.5,
    minScore: 580,
    branches: 3,
    refreshesLeft: 0, govBonds:0, goodwill:0, mergers:[], scenarios:[], interbankBorrowed:0, remittances:[], treasurySeq:1, ibHistory:[], collaterals:[], marketSeq:1, deals:[], profiles: [], customerSeq: 1, cards: [], contracts: [], periods: [], ledger: [], remittanceQuota: 3, capitalQuota: 1, capitalAuthorized: 300000000, appHistory: [],
    paidCap: 120000000,
    retained: 30000000,
    cashHnl: 284300000,
    usdBalance: 1200000,
    interbankLoans: 0,
    fixedAssets: 36000000,
    savingsDep: 95000000,
    checkingDep: 65000000,
    cdps: [
      { id: 1, name: "CDP Banca Privada #101", amount: 40000000, rate: 7.5, qLeft: 4 }
    ],
    depQuotaLeft: 90000000,
    rediscount: 0,
    provisions: 0,
    clients: 5200,
    shareholders: 140,
    apps: [],
    loans: [],
    eventualAssets: [],
    journal: [],
    rivals: [
      { name: "Banco Atlántida (Rival)", portfolio: 420000000, stress: 18 },
      { name: "Banco Ficohsa (Rival)", portfolio: 390000000, stress: 22 },
      { name: "BAC Credomatic (Rival)", portfolio: 360000000, stress: 35 },
      { name: "Banpaís (Rival)", portfolio: 240000000, stress: 68 }
    ],
    pl: {
      incLoans: 0,
      incFees: 0,
      expDep: 0,
      expOpex: 0,
      expProv: 0,
      fxPnl: 0,
      net: 0
    },
    hist: {
      labels: ["T1-26"],
      eq: [150.0],
      loans: [0.0],
      dep: [200.0],
      act: [14.0],
      cdp: [7.5],
      sav: [3.5]
    },
    locked: false
  };
}

function saveGame() {
  if (transactionActive || testMode || batchMode) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  } catch (e) {}
}

function loadGame() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("bch98_pro_v40_save");
    if (!raw) return null;
    const p = JSON.parse(raw);
    if (!p || typeof p.cashHnl !== "number") return null;
    return p;
  } catch (e) {
    return null;
  }
}

function fmtL(n) {
  const s=n<0?"-":"";return s+"L "+Math.abs(money(n)).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});
}

function fmtU(n) {
  const s = n < 0 ? "-" : "";
  return s + "$" + Math.abs(Math.round(n)).toLocaleString("en-US");
}

function logEvent(text, cls = "") {
  if(testMode)return;
  const box = document.getElementById("ticker-log");
  const d = document.createElement("div");
  if (cls) d.className = cls;
  d.textContent = `[T${db.q}-${db.yr}] ${text}`;
  box.appendChild(d);
  box.scrollTop = box.scrollHeight;
  recordBankActivity(text,cls);
}






function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  document.getElementById("btn-theme").textContent = isDark ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
  if (document.getElementById("t-graficos").classList.contains("active")) drawGraphs();
}

function openTab(id, el) {
  document.querySelectorAll(".tab-content").forEach(x => x.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(x => x.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  el.classList.add("active");
  if (id === "t-graficos") drawGraphs();
  updateBankRoute(id);
}

function changeFocus() {
  if(db.locked)return;
  db.focus = document.getElementById("sel-focus").value;
  if(db.locked) return;
  logEvent(`División seleccionada: ${document.getElementById("sel-focus").selectedOptions[0].text}`);
  renderAll();
}

function syncControls() {
  if(db.locked)return;
  db.actRate = parseFloat(document.getElementById("rng-act-rate").value);
  db.savRate = parseFloat(document.getElementById("rng-sav-rate").value);
  db.cdRate = parseFloat(document.getElementById("rng-cd-rate").value);
  db.minScore = parseInt(document.getElementById("rng-min-score").value);

  document.getElementById("lbl-act-rate").textContent = db.actRate.toFixed(2) + "%";
  document.getElementById("lbl-sav-rate").textContent = db.savRate.toFixed(2) + "%";
  document.getElementById("lbl-cd-rate").textContent = db.cdRate.toFixed(2) + "%";
  document.getElementById("lbl-min-score").textContent = `${db.minScore} pts`;
  saveGame();
}

function getScoreDiscount(score) {
  if (score >= 780) return -2.25;
  if (score >= 720) return -1.25;
  if (score >= 660) return -0.50;
  if (score < 580) return +2.00;
  return 0;
}

function generateAppsList() {
  ensureCustomers();
  db.apps = [];
  const pool = PRODUCTS;
  const count = 6 + Math.min(5, db.branches);

  for (let i = 0; i < count; i++) {
    const prod = pool[Math.floor(Math.random() * pool.length)];
    const score = 500 + Math.floor(Math.random() * 330); // buró simulado 500 - 829
    if (score < db.minScore) continue;

    const income = Math.round((prod.minInc * (0.9 + Math.random() * 1.4)) / 1000) * 1000;
    const amt = Math.min(prod.maxAmt,Math.max(prod.minAmt,Math.round((prod.minAmt+Math.random()*(prod.maxAmt-prod.minAmt))/5000)*5000));
    const q = prod.minQ + Math.floor(Math.random() * (prod.maxQ - prod.minQ + 1));

    const scoreAdj = getScoreDiscount(score);
    const rate = Math.max(5.5, +((prod.apr ?? (db.actRate+prod.rateAdj)) + scoreAdj).toFixed(2));

    const scoreRiskFactor = score >= 750 ? 0.55 : (score >= 680 ? 0.85 : (score < 600 ? 1.55 : 1.0));
    const defProb = Math.min(0.45, Math.max(0.01, +(prod.baseDef * scoreRiskFactor).toFixed(3)));

    const client = CLIENT_NAMES[Math.floor(Math.random() * CLIENT_NAMES.length)] + " #"+db.customerSeq;
    const profile=createProfile(client,prod.seg,income,score);

    db.apps.push({
      id: Date.now() + Math.random(),
      client,
      customerId:profile.id,
      income,
      seg: prod.seg,
      label: prod.label,
      cardTier: prod.cardTier,
      collateral: prod.collateral,
      score,
      amt,
      q,
      rate,
      defProb
    });
  }
}

function refreshApps() {
  if (db.locked) return;
  if (db.refreshesLeft <= 0) {
    logEvent("Límite de regeneraciones de solicitudes alcanzado este trimestre.", "warn");
    renderAll();
    return;
  }
  db.refreshesLeft -= 1;
  generateAppsList();
  logEvent(`Solicitudes regeneradas (Restan ${db.refreshesLeft} en el trimestre).`);
  renderAll();
}

function approveApp(id) {
  if (db.locked) return;
  const idx = db.apps.findIndex(a => a.id === id);
  if (idx === -1) return;
  const a = db.apps[idx];
  ensureCustomers();const profile=customerFor(a);
  const prod=PRODUCTS.find(p=>p.label===a.label) || CARD_CATALOG.find(p=>p.cardTier===a.cardTier&&p.seg===a.seg);
  if (a.score<Math.max(db.minScore,prod?.minScore ?? tierFloor(a.cardTier)) || a.income<(prod?.minInc||0)) {logEvent("Solicitud no cumple ingreso mínimo o score simulado.","warn");return;}
  if(a.cardTier && a.label.includes("Tarjeta")){
    const limit=Math.min(a.amt,prod?.maxAmt??a.amt,Math.round(a.income*4));
    if(limit<=0||limit<(prod?.minAmt??0)){logEvent("Capacidad insuficiente para el límite mínimo de esta categoría. Considera una tarjeta inferior.","warn");return;}
    db.cards.push({id:a.id,customerId:a.customerId,client:a.client,label:a.label,seg:a.seg,score:a.score,income:a.income,limit,bal:0,rate:a.rate,brand:prod?.brand||"",reward:prod?.reward||"",annualFee:prod?.fee||0,status:"Activa"});
    db.appHistory.push({...a,status:"Línea aprobada"});
    db.apps.splice(idx,1);logEvent("Tarjeta emitida sin desembolso: "+fmtL(limit),"pos");renderAll();return;
  }
  if(profile && (customerDebtPayment(profile)+a.amt/Math.max(1,a.q*3)+a.amt*a.rate/1200)>profile.income*.45){logEvent("Capacidad de pago insuficiente (45% simulado).","warn");return;}
  if (db.cashHnl < a.amt) {
    logEvent(`Caja HNL insuficiente para desembolsar ${fmtL(a.amt)} a ${a.client}.`, "neg");
    return;
  }

  db.cashHnl -= a.amt;
  const fee = Math.round(a.amt * 0.015);
  db.cashHnl += fee;
  postPL(fee, "fees", `Comisión desembolso ${a.label} (${a.client})`);

  db.loans.push({
    id: a.id,
    customerId:a.customerId,seg:a.seg,income:a.income,monthsLeft:a.q*3,
    client: a.client,
    label: a.label,
    score: a.score,
    bal: a.amt,
    rate: a.rate,
    qLeft: a.q,
    defProb: a.defProb,
    status: "Vigente",
    provAllocated: 0
  });

  db.appHistory.push({...a,status:"Desembolsada"});
  db.apps.splice(idx, 1);
  logEvent(`Aprobado ${a.label} (Score ${a.score}) a ${a.client} por ${fmtL(a.amt)} al ${a.rate.toFixed(2)}%.`, "pos");
  renderAll();
}

function rejectApp(id) {
  if (db.locked) return;
  const rejected=db.apps.find(a=>a.id===id);if(rejected)db.appHistory.push({...rejected,status:"Rechazada"});
  db.apps = db.apps.filter(a => a.id !== id);
  renderAll();
}

function approvePrimeClients() {
  if (db.locked) return;
  const prime = db.apps.filter(a => a.score >= 720);
  if (!prime.length) {
    logEvent("No hay solicitudes con Score simulado ≥ 720 pendientes.", "warn");
    return;
  }
  prime.forEach(a => approveApp(a.id));
}

function seizeOrRecover(id) {
  if (db.locked) return;
  const idx = db.loans.findIndex(l => l.id === id);
  if (idx === -1) return;
  const l = db.loans[idx];
  if(l.status!=="Mora")return;

  const releasedProv = Math.min(db.provisions, l.provAllocated || 0);
  db.provisions -= releasedProv;

  if (l.label.includes("Hipotecario") || l.label.includes("Vehicular")) {
    const bookVal = Math.round(l.bal * 0.65);
    const netImpact = (bookVal - l.bal) + releasedProv;
    db.eventualAssets.push({
      id: Date.now() + Math.random(),
      title: l.label.includes("Hipotecario") ? `Inmueble Adjudicado (${l.client})` : `Vehículo Adjudicado (${l.client})`,
      bookVal
    });
    postPL(netImpact, "prov", `Adjudicación bien ${l.client}`);
    logEvent(`Adjudicado a Activo Eventual: ${l.client} por ${fmtL(bookVal)}.`, "warn");
  } else {
    const rec = Math.round(l.bal * 0.30);
    db.cashHnl += rec;
    const netImpact = (rec - l.bal) + releasedProv;
    postPL(netImpact, "prov", `Castigo/Recuperación ${l.client}`);
    logEvent(`Castigo con recuperación de ${fmtL(rec)} (${l.client}).`, "warn");
  }

  db.loans.splice(idx, 1);
  clampProvisions();
  renderAll();
}

function sellEventual(idx) {
  if (db.locked) return;
  const item = db.eventualAssets[idx];
  if (!item) return;
  const sale = item.auctionPrice ?? money(item.bookVal * 0.92);
  const diff = sale - item.bookVal;
  db.cashHnl += sale;
  postPL(diff, "fees", `Liquidación activo eventual: ${item.title}`);
  db.eventualAssets.splice(idx, 1);
  const g=db.collaterals.find(x=>x.id===item.collateralId);if(g)g.status="Vendida";
  logEvent(`Vendido ${item.title} por ${fmtL(sale)} (${diff >= 0 ? "+" : ""}${fmtL(diff)}).`, diff >= 0 ? "pos" : "warn");
  renderAll();
}

function attractDeposits(type, amt) {
  if (db.locked) return;
  if(!["SAVINGS","CHECKING","CDP"].includes(type)||!isMoney(amt)||amt<=0)return;
  if (db.depQuotaLeft < amt) {
    logEvent(`Cupo comercial trimestral de captación agotado (${fmtL(db.depQuotaLeft)}).`, "warn");
    return;
  }
  db.depQuotaLeft -= amt;
  db.cashHnl += amt;

  if (type === "SAVINGS") {
    db.savingsDep += amt;
    db.clients += 160;
    recordJournal("Captación Cuenta de Ahorro", amt, amt);
    logEvent(`Captados ${fmtL(amt)} en Cuentas de Ahorro.`, "pos");
  } else if (type === "CHECKING") {
    db.checkingDep += amt;
    db.clients += 55;
    recordJournal("Captación Cuenta de Cheques", amt, amt);
    logEvent(`Captados ${fmtL(amt)} en Cuentas de Cheques.`, "pos");
  } else if (type === "CDP") {
    db.cdps.push({
      id: Date.now() + Math.random(),
      name: `CDP 4T #${100 + db.cdps.length}`,
      amount: amt,
      rate: db.cdRate,
      qLeft: 4
    });
    recordJournal("Emisión Certificado de Depósito (CDP)", amt, amt);
    logEvent(`Emitido CDP por ${fmtL(amt)} a 4 trimestres (${db.cdRate.toFixed(2)}%).`, "pos");
  }
  renderAll();
}

function processRemittances() {
  if (db.locked) return;
  if(db.remittanceQuota<=0){logEvent("No hay más lotes pendientes este trimestre.","warn");return;}
  db.remittanceQuota--;
  const usd=Math.round(25000*Math.max(1,db.branches)*db.clients/6400),fee=Math.round(usd*.025*db.fxRate);
  db.remittances.push({ref:"REM-"+db.treasurySeq++,origin:["EE.UU.","España","Canadá"][db.remittances.length%3],usd,fee,date:db.calendarDate});
  db.cashHnl += fee;
  postPL(fee, "fees", "Comisión Remesas y Transferencias");
  logEvent(`Lote de remesas y transferencias liquidado. Comisión: ${fmtL(fee)}.`, "pos");
  renderAll();
}

// Compra y venta de divisas con contabilidad exacta del costo, comisión y resultado cambiario
function tradeFX(side, usdAmt) {
  if (db.locked || !["BUY","SELL"].includes(side)||!Number.isSafeInteger(usdAmt)||usdAmt<=0) return;
  const spread = 0.18;
  const commRate = 0.012;

  if (side === "BUY") {
    const buyPrice = +(db.fxRate + spread).toFixed(4);
    const acquisitionCost = money(usdAmt * buyPrice);
    const commPaid = money(acquisitionCost * commRate);
    const totalCashOut = acquisitionCost + commPaid;

    if (db.cashHnl < totalCashOut) {
      logEvent(`Caja HNL insuficiente para comprar ${fmtU(usdAmt)} (Requiere ${fmtL(totalCashOut)}).`, "neg");
      return;
    }

    // Valor de referencia del ingreso en USD al tipo de cambio de referencia actual
    const refBookValue = money((db.usdBalance+usdAmt)*db.fxRate)-money(db.usdBalance*db.fxRate);
    // Resultado real de la operación: diferencia vs referencia menos la comisión pagada
    const realFxResult = (refBookValue - acquisitionCost) - commPaid;

    db.cashHnl -= totalCashOut;
    db.usdBalance += usdAmt;
    postPL(realFxResult, "fx", `Compra FX ${fmtU(usdAmt)} (Comisión ${fmtL(commPaid)})`);

    logEvent(
      `Compra FX ${fmtU(usdAmt)} @ L ${buyPrice.toFixed(2)} | Costo ${fmtL(acquisitionCost)} + Com. ${fmtL(commPaid)} | Impacto ${fmtL(realFxResult)}.`,
      realFxResult >= 0 ? "pos" : "warn"
    );
  } else {
    if (db.usdBalance < usdAmt) {
      logEvent(`Saldo en USD insuficiente para vender ${fmtU(usdAmt)}.`, "neg");
      return;
    }
    const sellPrice = Math.max(1, +(db.fxRate - spread).toFixed(4));
    const grossHnl = money(usdAmt * sellPrice);
    const commPaid = money(grossHnl * commRate);
    const netCashIn = grossHnl - commPaid;
    const refBookValue = money(db.usdBalance*db.fxRate)-money((db.usdBalance-usdAmt)*db.fxRate);
    const realFxResult = netCashIn - refBookValue;

    db.usdBalance -= usdAmt;
    db.cashHnl += netCashIn;
    postPL(realFxResult, "fx", `Venta FX ${fmtU(usdAmt)} (Comisión ${fmtL(commPaid)})`);

    logEvent(
      `Venta FX ${fmtU(usdAmt)} @ L ${sellPrice.toFixed(2)} | Caja +${fmtL(netCashIn)} | Impacto ${fmtL(realFxResult)}.`,
      realFxResult >= 0 ? "pos" : "warn"
    );
  }
  renderAll();
}

function lendInterbank(amt) {
  if (db.locked) return;
  if (db.cashHnl < amt) {
    logEvent("Caja HNL insuficiente para colocación interbancaria.", "neg");
    return;
  }
  db.cashHnl -= amt;
  db.interbankLoans += amt;
  db.contracts.push({amount:amt,rate:0.09,qLeft:2,bank:db.rivals[0]?.name||"Mercado simulado"});
  recordJournal("Colocación Mercado Interbancario", amt, amt);
  logEvent(`Colocados ${fmtL(amt)} en el Mercado Interbancario.`, "pos");
  renderAll();
}

function mergeWeakCompetitor() {
  if (db.locked) return;
  const targetIdx = db.rivals.findIndex(r => r.stress >= 55);
  if (targetIdx === -1) {
    logEvent("Ningún banco competidor presenta estrés crítico para fusión/adquisición.", "warn");
    return;
  }
  const target = db.rivals[targetIdx];
  const absorbLoans = Math.round(target.portfolio * 0.25);
  const absorbDep = Math.round(absorbLoans * 0.85);
  const cashNeeded = Math.round(absorbLoans * 0.15);

  if (db.cashHnl < cashNeeded) {
    logEvent(`Caja HNL insuficiente para absorber cartera de ${target.name} (${fmtL(cashNeeded)}).`, "neg");
    return;
  }

  db.cashHnl -= cashNeeded;
  db.savingsDep += absorbDep;
  db.loans.push({
    id: Date.now() + Math.random(),
    client: `Cartera Absorbida (${target.name})`,
    label: "Cartera Corporativa",
    score: 690,
    bal: absorbLoans,
    rate: db.actRate,
    qLeft: 12,
    defProb: 0.05,
    status: "Vigente",
    provAllocated: 0
  });
  target.portfolio-=absorbLoans;target.stress=Math.max(10,target.stress-15);
  logEvent(`Fusión completada: absorbida cartera de ${fmtL(absorbLoans)} de ${target.name}.`, "pos");
  renderAll();
}

function issueNewShares() {
  if (db.locked) return;
  const capAdd = 30000000;
  if(db.capitalQuota<=0||db.paidCap+capAdd>db.capitalAuthorized||db.paidCap+db.retained<90000000){logEvent("No hay suscripción disponible.","warn");return;}
  db.capitalQuota--;
  db.paidCap += capAdd;
  db.sharesIssued+=capAdd/100;
  db.cashHnl += capAdd;
  db.shareholders += 15;
  recordJournal("Ampliación de Capital Suscrito y Pagado", capAdd, capAdd);
  logEvent(`Ampliación de capital por ${fmtL(capAdd)} suscrita por accionistas.`, "pos");
  renderAll();
}

function requestRediscount() {
  if (db.locked) return;
  const amt = 20000000;
  const maxAllowed = Math.round(Math.max(0, db.paidCap + db.retained) * 0.50)-db.interbankBorrowed;
  if (db.rediscount + amt > maxAllowed) {
    logEvent(`Límite de redescuento BCH excedido (Máx ${fmtL(maxAllowed)} = 50% Patrimonio).`, "neg");
    return;
  }
  db.cashHnl += amt;
  db.rediscount += amt;
  recordJournal("Redescuento Banco Central", amt, amt);
  logEvent(`Redescuento BCH aprobado por ${fmtL(amt)}.`, "warn");
  renderAll();
}

function repayRediscount() {
  if (db.locked) return;
  const pay = Math.min(20000000, db.rediscount);
  if (pay <= 0) {
    logEvent("No hay saldo de redescuento pendiente.");
    return;
  }
  if (db.cashHnl < pay) {
    logEvent("Caja HNL insuficiente para pagar redescuento.", "neg");
    return;
  }
  db.cashHnl -= pay;
  db.rediscount -= pay;
  recordJournal("Pago Redescuento Banco Central", pay, pay);
  logEvent(`Pagados ${fmtL(pay)} de redescuento BCH.`, "pos");
  renderAll();
}

function openBranch() {
  if (db.locked) return;
  const cost = 12000000;
  if (db.cashHnl < cost) {
    logEvent("Caja HNL insuficiente para abrir agencia (L 12,000,000).", "neg");
    return;
  }
  db.cashHnl -= cost;
  db.fixedAssets += cost;
  db.branches += 1;
  // Cupo nuevo solo en el próximo trimestre.
  recordJournal("Apertura Agencia Bancaria", cost, cost);
  logEvent(`Agencia #${db.branches} inaugurada.`, "pos");
  renderAll();
}

function closeBranch() {
  if (db.locked) return;
  if (db.branches <= 1) {
    logEvent("Debe permanecer al menos 1 agencia principal.", "warn");
    return;
  }
  const fixedCost = 12000000;
  const saleVal = 9000000;
  db.branches -= 1;
  db.fixedAssets -= fixedCost;
  db.cashHnl += saleVal;
  db.depQuotaLeft = Math.min(db.depQuotaLeft,db.branches*30000000);
  postPL(saleVal - fixedCost, "opex", "Cierre y liquidación de agencia");
  logEvent(`Agencia cerrada: liquidada en ${fmtL(saleVal)}.`, "warn");
  renderAll();
}

function nextQuarter() {
  if (db.locked) return;

  // Acumular hasta el cierre efectivo.

  // 4. Comisiones por servicios financieros
  const svcFee = Math.round(db.clients * 40);
  db.cashHnl += svcFee;
  postPL(svcFee, "fees", "Comisiones servicios y banca electrónica");

  // 5. Intereses pagados por captación y redescuento
  const intSav = Math.round(db.savingsDep * (db.savRate / 100 / 4));
  const intChk = Math.round(db.checkingDep * (0.005 / 4));
  const intCdp = Math.round(db.cdps.reduce((s, c) => s + c.amount * (c.rate / 100 / 4), 0));
  const intRed = Math.round(db.rediscount * (0.085 / 4));
  const totDepExp = intSav + intChk + intCdp + intRed;

  db.cashHnl -= totDepExp;
  postPL(-totDepExp, "dep", "Intereses pagados a depositantes y redescuento");

  // 6. Vencimiento de CDP: devuelve capital desde caja
  for (let i = db.cdps.length - 1; i >= 0; i--) {
    db.cdps[i].qLeft -= 1;
    if (db.cdps[i].qLeft <= 0) {
      const matAmt = db.cdps[i].amount;
      const matName = db.cdps[i].name;
      db.cashHnl -= matAmt;
      recordJournal(`Vencimiento ${matName}`, matAmt, matAmt);
      db.cdps.splice(i, 1);
      logEvent(`Venció ${matName}: capital pagado de ${fmtL(matAmt)}.`, "warn");
    }
  }

  // 7. Gastos operativos
  const opex = db.loans.length * 30000;
  db.cashHnl -= opex;
  postPL(-opex, "opex", "Gastos operativos y planilla agencias");

  // 8. Flujo natural de ahorros y renovación de cupos trimestrales
  const dSav = Math.round(db.savingsDep * ((db.savRate - 3.0) * 0.015));
  if (db.savingsDep + dSav >= 10000000) {
    db.savingsDep += dSav;
    db.cashHnl += dSav;
  }

  db.depQuotaLeft = db.branches * 30000000;
  db.refreshesLeft = 0;
  db.remittanceQuota=Math.max(1,Math.floor(db.clients/1500));
  db.capitalQuota=db.pl.net>0?1:0;

  // 9. Supervisión CNBS (Encaje legal mínimo 15%)
  clampProvisions();
  const cdpVal = db.cdps.reduce((s, c) => s + c.amount, 0);
  const totDep = db.savingsDep + db.checkingDep + cdpVal;
  const encaje = totDep > 0 ? (db.cashHnl / totDep) * 100 : 100;

  inspectBank();

  recomputeNetIncome();

  db.periods.push({q:db.q,yr:db.yr,...db.pl});
  db.pl=emptyPL();
  // Avanzar trimestre
  db.q += 1;
  if (db.q > 4) {
    db.q = 1;
    db.yr += 1;
  }

  const eq = db.paidCap + db.retained;
  const loansSum = db.loans.reduce((s, l) => s + l.bal, 0);
  db.hist.labels.push(`T${db.q}-${String(db.yr).slice(-2)}`);
  db.hist.eq.push(+(eq / 1e6).toFixed(1));
  db.hist.loans.push(+(loansSum / 1e6).toFixed(1));
  db.hist.dep.push(+(totDep / 1e6).toFixed(1));
  db.hist.act.push(db.actRate);
  db.hist.cdp.push(db.cdRate);
  db.hist.sav.push(db.savRate);

  if (db.hist.labels.length > 24) {
    Object.keys(db.hist).forEach(k => db.hist[k].shift());
  }

  if (eq <= 0 || db.cashHnl < -10000000) {
    intervene("Patrimonio o liquidez crítica");
    logEvent("🚨 INTERVENCIÓN CNBS: PATRIMONIO O LIQUIDEZ EN NIVEL CRÍTICO. OPERACIONES BLOQUEADAS.", "neg");
    if(!testMode)logEvent("Revisa el módulo de regularización.","warn");
  } else if(!db.locked) {
    db.apps.forEach(a=>db.appHistory.push({...a,status:"Vencida"}));generateAppsList();
  }

  renderAll();
}

function renderTables() {
  document.getElementById("cnt-apps").textContent = db.apps.length;
  document.getElementById("lbl-ref-left").textContent = db.refreshesLeft;

  const tbApps = document.getElementById("tbody-apps");
  tbApps.innerHTML = "";
  if (!db.apps.length) {
    tbApps.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-muted);">No hay solicitudes que cumplan los criterios actuales.</td></tr>`;
  } else {
    db.apps.filter(a => db.focus === "ALL" || a.seg === db.focus).forEach(a => {
      const mPct = (a.defProb * 100).toFixed(1) + "%";
      const cls = a.defProb > 0.12 ? "neg" : (a.defProb > 0.06 ? "warn" : "pos");
      const tierTxt = a.cardTier ? ` <span class="badge-seg">${a.cardTier}</span>` : "";
      tbApps.innerHTML += `
        <tr>
          <td><b>${a.client}</b><br><small style="color:var(--text-muted);">Ingreso: ${fmtL(a.income)}/mes</small></td>
          <td><span class="badge-seg">${a.seg}</span></td>
          <td>${a.label}${tierTxt}</td>
          <td class="num mono">${a.score}</td>
          <td class="num mono">${fmtL(a.amt)}</td>
          <td class="num mono pos">${a.rate.toFixed(2)}%</td>
          <td class="num mono ${cls}">${mPct}</td>
          <td>
            <button class="op-btn" onclick="approveApp(${a.id})" style="padding:2px 6px;">Aprobar</button>
            <button class="op-btn" onclick="rejectApp(${a.id})" style="padding:2px 6px;">Rechazar</button>
          </td>
        </tr>
      `;
    });
  }

  const tbLoans = document.getElementById("tbody-loans");
  tbLoans.innerHTML = "";
  if (!db.loans.length) {
    tbLoans.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted);">Sin créditos ni tarjetas activas.</td></tr>`;
  } else {
    db.loans.forEach(l => {
      const bad = l.status === "Mora";
      tbLoans.innerHTML += `
        <tr>
          <td>${l.client}</td>
          <td>${l.label}</td>
          <td class="num mono">${fmtL(l.bal)}</td>
          <td class="num mono">${l.rate.toFixed(2)}%</td>
          <td class="num mono">${l.qLeft}</td>
          <td class="${bad ? 'neg' : 'pos'}"><b>${l.status}</b></td>
          <td>${bad ? `<button class="op-btn" onclick="seizeOrRecover(${l.id})">Adjudicar / Cobrar</button> <button class="op-btn" onclick="refinanceCredit(${l.id})">Refinanciar</button>` : `<button class="op-btn" onclick="markCreditArrears(${l.id})">Mora simulada</button>`} <button class="op-btn" onclick="settleCredit(${l.id})">Pago total simulado</button></td>
        </tr>
      `;
    });
  }

  const tbCdps = document.getElementById("tbody-cdps");
  tbCdps.innerHTML = "";
  db.cdps.forEach(c => {
    tbCdps.innerHTML += `
      <tr>
        <td>${c.name}</td>
        <td class="num mono">${fmtL(c.amount)}</td>
        <td class="num mono">${c.rate.toFixed(2)}%</td>
        <td class="num mono">${c.qLeft}T</td>
      </tr>
    `;
  });

  const loansSum = db.loans.reduce((s, l) => s + l.bal, 0);
  const rivalsSum = db.rivals.reduce((s, r) => s + r.portfolio, 0);
  const totalSys = Math.max(1, loansSum + rivalsSum);

  const tbRivals = document.getElementById("tbody-rivals");
  tbRivals.innerHTML = "";
  tbRivals.innerHTML += `
    <tr style="font-weight:bold;">
      <td>ÁUREO BANK</td>
      <td class="num mono">${fmtL(loansSum)}</td>
      <td class="num mono pos">${((loansSum / totalSys) * 100).toFixed(1)}%</td>
      <td class="pos">Activo</td>
    </tr>
  `;
  db.rivals.forEach(r => {
    const stLbl = r.stress >= 55 ? `<span class="neg">Estrés (${r.stress})</span>` : `<span class="warn">Normal (${r.stress})</span>`;
    tbRivals.innerHTML += `
      <tr>
        <td>${r.name}</td>
        <td class="num mono">${fmtL(r.portfolio)}</td>
        <td class="num mono">${((r.portfolio / totalSys) * 100).toFixed(1)}%</td>
        <td>${stLbl}</td>
      </tr>
    `;
  });

  const tbEv = document.getElementById("tbody-eventual");
  tbEv.innerHTML = "";
  if (!db.eventualAssets.length) {
    tbEv.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-muted);">Sin bienes adjudicados.</td></tr>`;
  } else {
    db.eventualAssets.forEach((ev, i) => {
      tbEv.innerHTML += `
        <tr>
          <td>${safeHtml(ev.title)} · ${safeHtml(ev.highestBidder||"Sin puja")} · Ronda ${ev.auctionRound||0}/4</td>
          <td class="num mono">${fmtL(ev.bookVal)} / Oferta ${fmtL(ev.auctionPrice||0)}</td>
          <td><button class="op-btn" onclick="placeAuctionBid(${i})">Pujar</button> <button class="op-btn" onclick="sellEventual(${i})">Cerrar / venta directa</button></td>
        </tr>
      `;
    });
  }

  const tbJ = document.getElementById("tbody-journal");
  tbJ.innerHTML = "";
  if (!db.journal.length) {
    tbJ.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-muted);">Sin asientos registrados aún.</td></tr>`;
  } else {
    db.journal.slice(0, 12).forEach(j => {
      tbJ.innerHTML += `
        <tr>
          <td>${j.concept}</td>
          <td class="num mono">${fmtL(j.debit)}</td>
          <td class="num mono">${fmtL(j.haber)}</td>
        </tr>
      `;
    });
  }
}

function renderAll() {
  if(testMode||batchMode)return;
  initTreasury();initRivals();initHR();initRegulation();initAdvanced();
  clampProvisions();
  recomputeNetIncome();

  const aud = getAuditImbalance();
  const encaje = aud.totDep > 0 ? (db.cashHnl / aud.totDep) * 100 : 100;
  const rwa = Math.max(1, aud.okLoans + aud.badLoans + aud.evVal + db.fixedAssets);
  const car = (aud.eq / rwa) * 100;

  const rivalsSum = db.rivals.reduce((s, r) => s + r.portfolio, 0);
  const totalLoansAll = aud.okLoans + aud.badLoans;
  const sharePct = ((totalLoansAll / Math.max(1, totalLoansAll + rivalsSum)) * 100).toFixed(1) + "%";

  document.getElementById("clock-lbl").textContent = `TRIMESTRE ${db.q} — AÑO ${db.yr}`;
  document.getElementById("fx-lbl").textContent = `USD/HNL: L ${db.fxRate.toFixed(2)}`;
  document.getElementById("fx-ref").textContent = `L ${db.fxRate.toFixed(2)}`;
  document.getElementById("fx-pos").textContent = fmtU(db.usdBalance);
  document.getElementById("fx-val-hnl").textContent = fmtL(aud.usdHnl);

  document.getElementById("kpi-equity").textContent = fmtL(aud.eq);
  document.getElementById("kpi-equity").className = "kpi-val mono " + (aud.eq >= db.paidCap ? "pos" : "neg");
  document.getElementById("kpi-cash-hnl").textContent = fmtL(db.cashHnl);
  document.getElementById("kpi-usd").textContent = fmtU(db.usdBalance);

  const encEl = document.getElementById("kpi-encaje");
  encEl.textContent = encaje.toFixed(1) + "%";
  encEl.className = "kpi-val mono " + (encaje >= 15 ? "pos" : "neg");

  const carEl = document.getElementById("kpi-car");
  carEl.textContent = car.toFixed(1) + "%";
  carEl.className = "kpi-val mono " + (car >= 10 ? "pos" : "neg");

  document.getElementById("kpi-share").textContent = sharePct;

  const audEl = document.getElementById("kpi-audit");
  if (aud.diff === 0) {
    audEl.textContent = "CUADRADO (L 0)";
    audEl.className = "kpi-val mono pos";
  } else {
    audEl.textContent = `DESCUADRE (${fmtL(aud.diff)})`;
    audEl.className = "kpi-val mono neg";
  }

  document.getElementById("lbl-branches").textContent = `${db.branches} Agencias`;
  document.getElementById("lbl-dep-quota").textContent = fmtL(db.depQuotaLeft);

  // Captación
  document.getElementById("dep-sav").textContent = fmtL(db.savingsDep);
  document.getElementById("dep-chk").textContent = fmtL(db.checkingDep);
  document.getElementById("dep-cdp").textContent = fmtL(aud.cdpVal);
  document.getElementById("dep-tot").textContent = fmtL(aud.totDep);

  // Estado de resultados en vivo
  document.getElementById("pl-inc-loans").textContent = fmtL(db.pl.incLoans);
  document.getElementById("pl-inc-fees").textContent = fmtL(db.pl.incFees);
  document.getElementById("pl-exp-dep").textContent = fmtL(-db.pl.expDep);
  document.getElementById("pl-exp-opex").textContent = fmtL(-db.pl.expOpex);
  document.getElementById("pl-exp-prov").textContent = fmtL(-db.pl.expProv);

  const fxEl = document.getElementById("pl-fx-pnl");
  fxEl.textContent = fmtL(db.pl.fxPnl);
  fxEl.className = "num mono " + (db.pl.fxPnl >= 0 ? "pos" : "neg");

  const netEl = document.getElementById("pl-net");
  netEl.textContent = fmtL(db.pl.net);
  netEl.className = "num mono " + (db.pl.net >= 0 ? "pos" : "neg");

  // Balance
  document.getElementById("bs-tot-assets").textContent = fmtL(aud.totAssets);
  document.getElementById("bs-cash-hnl").textContent = fmtL(db.cashHnl);
  document.getElementById("bs-cash-usd").textContent = fmtL(aud.usdHnl);
  document.getElementById("bs-interbank").textContent = fmtL(db.interbankLoans);
  document.getElementById("bs-loans-ok").textContent = fmtL(aud.okLoans);
  document.getElementById("bs-loans-bad").textContent = fmtL(aud.badLoans);
  document.getElementById("bs-eventual").textContent = fmtL(aud.evVal);
  document.getElementById("bs-prov").textContent = fmtL(-db.provisions);
  document.getElementById("bs-fixed").textContent = fmtL(db.fixedAssets);

  document.getElementById("bs-dep-liq").textContent = fmtL(db.savingsDep + db.checkingDep);
  document.getElementById("bs-dep-cdp").textContent = fmtL(aud.cdpVal);
  document.getElementById("bs-rediscount").textContent = fmtL(db.rediscount);
  document.getElementById("bs-tot-liab").textContent = fmtL(aud.totLiab);
  document.getElementById("bs-cap").textContent = fmtL(db.paidCap);
  document.getElementById("bs-ret").textContent = fmtL(db.retained);
  document.getElementById("bs-eq").textContent = fmtL(aud.eq);
  document.getElementById("bs-tot-lp").textContent = fmtL(aud.totLP);

  document.getElementById("st-meta").textContent = `Clientes: ${db.clients.toLocaleString()} | Accionistas: ${db.shareholders}`;
  document.getElementById("st-msg").textContent = db.locked
    ? "🔒 BANCO INTERVENIDO POR CNBS — Operaciones suspendidas"
    : (aud.diff !== 0
      ? `⚠️ AUDITORÍA: Diferencia contable de ${fmtL(aud.diff)}`
      : (encaje < 15 ? "⚠️ CNBS: Encaje legal bajo el 15% obligatorio" : "SISTEMA ACTIVO — Supervisión CNBS y Auditoría Contable Activa"));

  // Bloqueo de controles operativos si el banco fue intervenido
  document.querySelectorAll(".op-btn").forEach(btn => {
    btn.disabled = db.locked || (btn.id === "btn-refresh-apps" && db.refreshesLeft <= 0);
  });
  document.querySelectorAll(".op-inp").forEach(inp => {
    inp.disabled = db.locked;
  });

  renderTables();
  if (document.getElementById("t-graficos").classList.contains("active")) drawGraphs();
  renderV5();
  renderAccountLedger();
  ensureCustomers();renderCustomers();renderCardOperations();
  renderCalendar();
  renderTrialBalance();
  renderTreasury();renderMarket();renderCompetitors();renderFinalUI();renderBankDashboard();
  document.getElementById("bs-goodwill").textContent=fmtL(db.goodwill||0);document.getElementById("bs-bonds").textContent=fmtL(db.govBonds);document.getElementById("bs-ib-borrow").textContent=fmtL(db.interbankBorrowed);
  document.querySelectorAll(".op-btn").forEach(b=>{if(db.locked)b.disabled=true;});
  saveGame();
}

function drawGraphs() {
  const styles = getComputedStyle(document.body);
  const bg = styles.getPropertyValue("--crt-bg").trim();
  const fg = styles.getPropertyValue("--crt-fg").trim();
  const grid = styles.getPropertyValue("--crt-grid").trim();
  const pos = styles.getPropertyValue("--pos").trim();
  const neg = styles.getPropertyValue("--neg").trim();
  const warn = styles.getPropertyValue("--warn").trim();

  plotSeries("cv-main", db.hist.labels, [
    { data: db.hist.eq, color: fg },
    { data: db.hist.loans, color: "#00aaff" },
    { data: db.hist.dep, color: warn }
  ], "M", bg, fg, grid);

  plotSeries("cv-rates", db.hist.labels, [
    { data: db.hist.act, color: neg },
    { data: db.hist.cdp, color: pos },
    { data: db.hist.sav, color: fg }
  ], "%", bg, fg, grid);
}

function plotSeries(canvasId, labels, series, unit, bg, fg, grid) {
  const cv = document.getElementById(canvasId);
  const ctx = cv.getContext("2d");
  const w = cv.width, h = cv.height;
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = grid;
  ctx.lineWidth = 1;
  for (let x = 55; x < w; x += 60) {
    ctx.beginPath(); ctx.moveTo(x, 10); ctx.lineTo(x, h - 22); ctx.stroke();
  }
  for (let y = 15; y < h - 20; y += 30) {
    ctx.beginPath(); ctx.moveTo(55, y); ctx.lineTo(w - 10, y); ctx.stroke();
  }

  let all = [];
  series.forEach(s => all.push(...s.data));
  const maxV = Math.max(10, Math.ceil(Math.max(...all) * 1.15));
  const minV = Math.min(0, Math.floor(Math.min(...all)));
  const span = Math.max(1, maxV - minV);

  ctx.fillStyle = fg;
  ctx.font = "12px system-ui";
  for (let i = 0; i <= 4; i++) {
    const val = minV + (span * i / 4);
    const yPos = (h - 24) - ((val - minV) / span) * (h - 38);
    ctx.fillText(val.toFixed(0) + unit, 4, yPos + 4);
  }

  const stepX = (w - 75) / Math.max(1, labels.length - 1);
  series.forEach(s => {
    ctx.strokeStyle = s.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    s.data.forEach((v, i) => {
      const x = 60 + i * stepX;
      const y = (h - 24) - ((v - minV) / span) * (h - 38);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  });

  ctx.fillStyle = fg;
  labels.forEach((lb, i) => {
    if (labels.length <= 12 || i % 2 === 0) {
      ctx.fillText(lb, 48 + i * stepX, h - 6);
    }
  });
}

function resetSim() {
  if(!confirm("¿Iniciar nueva partida? La copia de v4 se conserva."))return;
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  db = initialState();initAdvanced();initTreasury();initRivals();initHR();initRegulation();
  document.getElementById("rng-act-rate").value = db.actRate;
  document.getElementById("rng-sav-rate").value = db.savRate;
  document.getElementById("rng-cd-rate").value = db.cdRate;
  document.getElementById("rng-min-score").value = db.minScore;
  document.getElementById("sel-focus").value = db.focus;
  document.getElementById("ticker-log").innerHTML = "";
  logEvent("NUEVA PARTIDA Áureo Bank V6.0 INICIADA — BALANCE CUADRADO.", "pos");
  generateAppsList();
  renderAll();
}


function emptyPL(){return {incLoans:0,incFees:0,expDep:0,expOpex:0,expProv:0,fxPnl:0,net:0}}
function tierFloor(t){return ({Clásica:580,Oro:640,Platinum:700,Black:750})[t]||0}
function simulateCards(){
  for(let month=0;month<3;month++)for(const c of db.cards){
    if(c.status!=="Activa")continue;
    const purchase=Math.max(0,Math.min(c.limit-c.bal,Math.round(c.income*0.22),db.cashHnl));
    db.cashHnl-=purchase;c.bal+=purchase;
    const pay=Math.min(c.bal,Math.round(c.income*0.18));
    db.cashHnl+=pay;c.bal-=pay;
    const interest=Math.max(0,Math.min(c.limit-c.bal,Math.round(c.bal*c.rate/1200)));
    c.bal+=interest;postPL(interest,"loans","Interés tarjeta "+c.client);
  }
}
function renderV5(){
  const catalog=document.getElementById("card-catalog");if(catalog)catalog.innerHTML="<table><tr><th>Producto</th><th>Segmento</th><th>Ingreso mín.</th><th>Score mín.</th><th>Límite simulado</th><th>Tasa base</th><th>Membresía referencial</th><th>Beneficio referencial</th></tr>"+CARD_CATALOG.map(p=>"<tr><td>"+p.label+"</td><td>"+p.seg+"</td><td>"+fmtL(p.minInc)+"</td><td>"+p.minScore+"</td><td>"+fmtL(p.minAmt)+" – "+fmtL(p.maxAmt)+"</td><td>"+p.apr.toFixed(2)+"%</td><td>"+fmtL(p.fee)+"</td><td>"+p.reward+"</td></tr>").join("")+"</table>";
  const el=document.getElementById("v5-panel");if(!el)return;
  const last=db.periods.at(-1), y=db.periods.filter(p=>p.yr===db.yr).reduce((n,p)=>n+p.net,0)+db.pl.net;
  const esc=x=>String(x).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]);
  el.innerHTML="<h3>Operaciones y cierres — parámetros simulados</h3><p>Remesas pendientes: "+db.remittanceQuota+" | Suscripciones disponibles: "+db.capitalQuota+" | Resultado anual: "+fmtL(y)+"</p><p>Último trimestre cerrado: "+(last?"T"+last.q+"-"+last.yr+" · "+fmtL(last.net):"Sin cierres")+"</p><h4>Tarjetas revolventes</h4><table><thead><tr><th>Cliente</th><th>Categoría</th><th>Score</th><th>Límite</th><th>Utilizado</th><th>Disponible</th></tr></thead><tbody>"+db.cards.map(c=>"<tr><td>"+esc(c.client)+"</td><td>"+esc(c.label)+"</td><td>"+c.score+"</td><td>"+fmtL(c.limit)+"</td><td>"+fmtL(c.bal)+"</td><td>"+fmtL(c.limit-c.bal)+"</td></tr>").join("")+"</tbody></table><h4>Contratos interbancarios</h4>"+db.contracts.map(c=>"<p>"+esc(c.bank)+" · "+fmtL(c.amount)+" · "+Math.max(0,c.daysLeft)+" días</p>").join("")+"<h4>Historial de cierres</h4>"+db.periods.slice(-8).reverse().map(p=>"<p>T"+p.q+"-"+p.yr+": "+fmtL(p.net)+"</p>").join("");
}


let transactionActive=false;

function wrapOperation(fn,name){return function(...args){
 if(transactionActive)return fn(...args);if(db.locked)return;
 if(getAuditImbalance().diff!==0){logEvent("Operación bloqueada: partida con descuadre previo.","neg");return;}
 const prev=JSON.parse(JSON.stringify(db)),before=balanceAccounts();transactionActive=true;
 try{fn(...args);normalizeMoney();const diff=getAuditImbalance().diff;if(!Number.isFinite(diff)||diff!==0)throw Error("Diferencia "+fmtL(diff));const after=balanceAccounts();const lines=Object.keys(after).map(account=>({account,delta:(toCents(after[account])-toCents(before[account]))/100})).filter(l=>l.delta!==0).map(l=>({account:l.account,debit:Math.max(0,l.delta),credit:Math.max(0,-l.delta)}));if(lines.reduce((s,l)=>s+toCents(l.debit)-toCents(l.credit),0)!==0)throw Error("Asiento no cuadra en centavos");if(lines.length)db.ledger.push({id:db.ledger.length+1,period:"T"+prev.q+"-"+prev.yr,concept:name,lines});}
 catch(e){db=prev;logEvent("Operación revertida por auditoría: "+e.message,"neg");}
 finally{transactionActive=false;renderAll();}
}}
approveApp=wrapOperation(approveApp,"Aprobación");rejectApp=wrapOperation(rejectApp,"Rechazo");approvePrimeClients=wrapOperation(approvePrimeClients,"Comité prime");seizeOrRecover=wrapOperation(seizeOrRecover,"Recuperación");sellEventual=wrapOperation(sellEventual,"Venta activo");attractDeposits=wrapOperation(attractDeposits,"Captación");processRemittances=wrapOperation(processRemittances,"Remesas");tradeFX=wrapOperation(tradeFX,"Divisas");lendInterbank=wrapOperation(lendInterbank,"Interbancario");mergeWeakCompetitor=wrapOperation(mergeWeakCompetitor,"Compra parcial cartera");issueNewShares=wrapOperation(issueNewShares,"Capital");requestRediscount=wrapOperation(requestRediscount,"Redescuento");repayRediscount=wrapOperation(repayRediscount,"Pago redescuento");openBranch=wrapOperation(openBranch,"Apertura agencia");closeBranch=wrapOperation(closeBranch,"Cierre agencia");nextQuarter=wrapOperation(nextQuarter,"Cierre trimestre");
function renderAccountLedger(){const e=document.getElementById("account-ledger");if(!e)return;e.innerHTML="<h4>Movimientos por cuenta (resumen por operación)</h4><table><thead><tr><th>Asiento / período</th><th>Cuenta</th><th>Debe</th><th>Haber</th></tr></thead><tbody>"+(db.ledger||[]).slice(-12).reverse().flatMap(a=>a.lines.map(l=>"<tr><td>"+a.id+" · "+a.period+" · "+a.concept+"</td><td>"+l.account+"</td><td>"+fmtL(l.debit)+"</td><td>"+fmtL(l.credit)+"</td></tr>")).join("")+"</tbody></table>"}


let autoClock=null;
function currentCalendar(){
 const base=new Date(Date.UTC(db.yr,(db.q-1)*3,1));
 const parsed=new Date(db.calendarDate||"");
 if(!Number.isFinite(parsed.getTime())||parsed.getUTCFullYear()!==db.yr||Math.floor(parsed.getUTCMonth()/3)+1!==db.q)return base;
 return parsed;
}
function renderCalendar(){
 const d=currentCalendar();db.calendarDate=d.toISOString().slice(0,10);
 const e=document.getElementById("calendar-date");if(e)e.textContent=db.calendarDate+" · T"+db.q;
 if(db.locked&&autoClock){clearInterval(autoClock);autoClock=null;}
 const b=document.getElementById("btn-clock");if(b)b.textContent=autoClock?"Pausar":"Reanudar";
}
function advanceCalendarDays(days){
 if(db.locked||!Number.isInteger(days)||days<1||days>366)return;
 batchMode=true;try{for(let i=0;i<days&&!db.locked;i++){
   const d=currentCalendar();const oldMonth=d.getUTCMonth();d.setUTCDate(d.getUTCDate()+1);
   const dailyKey=d.toISOString().slice(0,10);dailyTreasuryCycle(dailyKey);if(db.lastTreasuryDay!==dailyKey)break;
   if(d.getUTCMonth()!==oldMonth){const key=d.toISOString().slice(0,7);monthlyBankCycle(key);if(db.lastMonthly!==key)break;}
   const y=d.getUTCFullYear(),q=Math.floor(d.getUTCMonth()/3)+1;
   if(q!==db.q||y!==db.yr){const prev=db.q+"-"+db.yr;nextQuarter();if(prev===db.q+"-"+db.yr)break;}
   db.calendarDate=d.toISOString().slice(0,10);
 }}finally{batchMode=false;}
 renderAll();
}
function closeCalendarQuarter(){const d=currentCalendar(),next=new Date(Date.UTC(db.yr,db.q*3,1));advanceCalendarDays(Math.round((next-d)/86400000));}
function toggleAutoTime(){if(autoClock){clearInterval(autoClock);autoClock=null;}else if(!db.locked){autoClock=setInterval(()=>advanceCalendarDays(1),1000);}renderCalendar();}
function chooseDivision(seg){
 if(!db.locked){document.getElementById("sel-focus").value=seg;changeFocus();}
 const tab=document.querySelector(".tab-btn[onclick*='t-credito']");if(tab)openTab("t-credito",tab);
}
function selectModule(id){const tab=document.querySelector(".tab-btn[onclick*='"+id+"']");if(tab)openTab(id,tab);}
function setTheme(theme){theme=theme==="dark"?"dark":"light";document.body.classList.remove("dark-mode","executive-mode");if(theme==="dark")document.body.classList.add("dark-mode");document.getElementById("btn-theme").textContent=theme==="dark"?"Modo claro":"Modo oscuro";try{localStorage.setItem("bch98_theme",theme)}catch(e){}if(document.getElementById("t-graficos").classList.contains("active"))drawGraphs();}
function renderTrialBalance(){
 const el=document.getElementById("trial-balance");if(!el)return;
 const accounts=balanceAccounts();const rows=Object.entries(accounts).map(([name,saldo])=>{
 let deb=0,cred=0;for(const a of db.ledger||[])for(const l of a.lines||[])if(l.account===name){deb+=l.debit;cred+=l.credit;}
 return {name,saldo,deb,cred,opening:saldo-deb+cred};
 });
 const total=moneySum(rows.map(r=>r.saldo));
 el.innerHTML="<p>Saldo inicial reconstruido desde los movimientos registrados en v5.0; los períodos anteriores a esa versión no se reconstruyen individualmente.</p><table><thead><tr><th>Cuenta</th><th>Saldo inicial neto</th><th>Mov. Debe</th><th>Mov. Haber</th><th>Saldo deudor</th><th>Saldo acreedor</th></tr></thead><tbody>"+rows.map(r=>"<tr><td>"+r.name+"</td><td>"+fmtL(r.opening)+"</td><td>"+fmtL(r.deb)+"</td><td>"+fmtL(r.cred)+"</td><td>"+fmtL(Math.max(0,r.saldo))+"</td><td>"+fmtL(Math.max(0,-r.saldo))+"</td></tr>").join("")+"</tbody></table><p><strong>Diferencia de saldos: "+fmtL(total)+"</strong></p>";
}
const monthlyBankCycle=wrapOperation(function(key){if(db.lastMonthly===key)return;creditMonthly();cardsMonthly();treasuryMonthly();rivalsMonthly();hrMonthly();db.lastMonthly=key;for(const p of db.profiles)p.creditAgeMonths++;},"Ciclo mensual crédito y tarjetas");
markCreditArrears=wrapOperation(markCreditArrears,"Mora");refinanceCredit=wrapOperation(refinanceCredit,"Refinanciamiento");settleCredit=wrapOperation(settleCredit,"Cancelación crédito");cardSpend=wrapOperation(cardSpend,"Consumo tarjeta");cardPay=wrapOperation(cardPay,"Pago tarjeta");cardBlock=wrapOperation(cardBlock,"Bloqueo tarjeta");
const dailyTreasuryCycle=wrapOperation(treasuryDaily,"Revaluación diaria y vencimientos");
newInterbank=wrapOperation(newInterbank,"Contrato interbancario");settleInterbank=wrapOperation(settleInterbank,"Liquidación interbancaria");bondTrade=wrapOperation(bondTrade,"Bonos");registerCollateral=wrapOperation(registerCollateral,"Registro garantía");makePortfolioOffer=wrapOperation(makePortfolioOffer,"Compra parcial cartera");seizeOrRecover=wrapOperation(recoverCollateral,"Recuperación vinculada");lendInterbank=(amount)=>newInterbank("LEND",amount,90);mergeWeakCompetitor=()=>{const i=db.rivals.findIndex(r=>r.stress>=55&&!db.deals.some(d=>d.name===r.name&&d.period===db.yr+"-"+db.q));if(i>=0)makePortfolioOffer(i);};
openManagedBranch=wrapOperation(openManagedBranch,"Apertura agencia");closeManagedBranch=wrapOperation(closeManagedBranch,"Cierre agencia");hireManagedStaff=wrapOperation(hireManagedStaff,"Contratación");inspectBank=wrapOperation(inspectBank,"Inspección regulatoria");openBranch=()=>openManagedBranch(HR_CITIES[db.hrBranches.length%10]);closeBranch=()=>closeManagedBranch();
placeAuctionBid=wrapOperation(placeAuctionBid,"Puja simulada");acquireBank=wrapOperation(acquireBank,"Adquisición integral simulada");runEconomicScenario=wrapOperation(runEconomicScenario,"Escenario económico");
const saved = loadGame();
if (saved) {
  db = Object.assign(initialState(), saved);initAdvanced();migrateCents();
  db.refreshesLeft=0;
  if(db.interbankLoans>0&&!db.contracts.length)db.contracts.push({amount:db.interbankLoans,rate:0.09,qLeft:2,bank:"Contrato migrado"});
  document.getElementById("rng-act-rate").value = db.actRate;
  document.getElementById("rng-sav-rate").value = db.savRate;
  document.getElementById("rng-cd-rate").value = db.cdRate;
  document.getElementById("rng-min-score").value = db.minScore;
  document.getElementById("sel-focus").value = db.focus;
  logEvent(`Partida restaurada (T${db.q}-${db.yr}).`, "pos");
} else {
  db = initialState();
  logEvent("Áureo Bank V6.0 INICIADA — MOTOR CONTABLE AUDITADO.", "pos");
}

if (!saved) {
  generateAppsList();
}
try{setTheme(localStorage.getItem("bch98_theme")||"light")}catch(e){}
renderAll();
