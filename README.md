# Áureo Bank — Digital Banking Simulator V6.4
Simulador educativo de administración bancaria de Honduras. [Jugar](https://isvant45.github.io/capitalism-finance-simulator/).
## Cómo jugar
1. Gestión de clientes → Nuevo cliente. Usa datos ficticios.
2. Expediente 360° → datos y sueldo, buró, productos.
3. Nueva evaluación → Comité → aprobación → firma → desembolso.
4. Tarjetas → emitir, configurar, consumir y pagar.
5. Áureo Digital → modo administrador para depósitos externos simulados; modo cliente para transferencias y pagos.
6. Configuración → exportar JSON, espacios de guardado, respaldo, suite de pruebas y auditoría.
## Datos
Una única estructura de estado. Guardado automático en aureo_bank_v6_save. Se migran partidas nativas anteriores bch98_pro_v50_save / bch98_pro_v40_save si pasan controles; las originales no se eliminan. No se convierte automáticamente un esquema externo de Gemini. Si una partida está dañada, se suspende el guardado automático para proteger el original. Exporta JSON periódicamente. La aplicación funciona localmente en el navegador, no sincroniza entre dispositivos.
## Arquitectura
HTML/CSS/JS sin backend: core, accounting, customers, customer360, credit, amortization, creditCommittee, cards, treasury, market, competitors, regulation, hr, storage, router, UI, CRM, digitalBanking, digitalUI y tests. No hay claves ni APIs privadas.
## Pruebas
Configuración → Ejecutar pruebas. Los resultados del motor y DOM se muestran por separado; se puede exportar el informe JSON. El escenario base cubre 2026–2036 y no equivale a todos los escenarios económicos posibles. El libro diario exportado contiene asientos resumidos desde que se implementó el registro por operación.
## Límites
No es un core bancario real. Depósitos agregados anteriores no se asignan artificialmente a perfiles; USD de tarjetas se convierte a HNL al consumir. Puntos y cashback son informativos, no redimibles. Membresías informativas. No implementa todos los contratos especializados (factoring, leasing, garantías líquidas, grupos económicos), autenticación ni regulación certificada. Los productos y reglas son simulados. [Fuentes](SOURCES.md).
