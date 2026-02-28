// PANIERE DOMANDE
// ============================================
const QUESTION_BANK = [
{
id: 1,
question: "Quale articolo del D.Lgs. 81/2008 disciplina l'obbligo di formazione per gli addetti alla conduzione di attrezzature di lavoro?",
options: [
"A) Art. 18",
"B) Art. 37",
"C) Art. 71",
"D) Art. 73"
],
correct: 3,
category: "normativa",
ref: "Art. 73 D.Lgs. 81/2008",
suggestion: "L’Art. 73 impone formazione, informazione e addestramento specifico per gli operatori che utilizzano attrezzature che richiedono competenze particolari."
},

{
id: 2,
question: "Quale disposizione prevede l'abilitazione specifica per la conduzione dei carrelli elevatori?",
options: [
"A) Art. 36 D.Lgs. 81/2008",
"B) Art. 73 comma 5 D.Lgs. 81/2008",
"C) Art. 18 D.Lgs. 81/2008",
"D) Allegato IV"
],
correct: 1,
category: "normativa",
ref: "Art. 73 c.5 D.Lgs. 81/2008; Accordo Stato-Regioni 22/02/2012",
suggestion: "L’abilitazione è disciplinata dall’Art. 73 c.5 e regolamentata nei contenuti e durata dall’Accordo Stato-Regioni del 22/02/2012."
},

{
id: 3,
question: "Qual è la durata minima del corso di abilitazione per carrelli industriali semoventi?",
options: [
"A) 8 ore",
"B) 10 ore",
"C) 12 ore",
"D) 16 ore"
],
correct: 2,
category: "normativa",
ref: "Accordo Stato-Regioni 22/02/2012",
suggestion: "La durata minima prevista è 12 ore comprensive di modulo teorico e pratico con verifica finale."
},

{
id: 4,
question: "Quale attrezzatura NON richiede abilitazione specifica ai sensi dell’Art. 73 comma 5?",
options: [
"A) Carrello elevatore",
"B) Gru a torre",
"C) Piattaforma elevabile",
"D) Transpallet manuale"
],
correct: 3,
category: "normativa",
ref: "Art. 73 D.Lgs. 81/2008",
suggestion: "Il transpallet manuale non rientra tra le attrezzature per cui è richiesta abilitazione obbligatoria."
},

{
id: 5,
question: "Chi deve garantire che il carrello elevatore sia mantenuto in condizioni di sicurezza?",
options: [
"A) L’operatore",
"B) Il datore di lavoro",
"C) Il RLS",
"D) Il preposto"
],
correct: 1,
category: "responsabilità",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Il datore di lavoro deve assicurare manutenzione, controlli periodici e conformità delle attrezzature."
},

{
id: 6,
question: "Quale principio tecnico determina la stabilità di un carrello elevatore?",
options: [
"A) Il colore del mezzo",
"B) Il triangolo di stabilità",
"C) Il tipo di carburante",
"D) Il numero di fari"
],
correct: 1,
category: "stabilità",
ref: "-",
suggestion: "La stabilità dipende dal triangolo formato dai punti di appoggio e dalla posizione del baricentro."
},

{
id: 7,
question: "Qual è una causa frequente di ribaltamento laterale?",
options: [
"A) Curva affrontata ad alta velocità",
"B) Uso del lampeggiante",
"C) Carico leggero",
"D) Motore acceso al minimo"
],
correct: 0,
category: "stabilità",
ref: "-",
suggestion: "L’eccessiva velocità in curva può spostare il baricentro fuori dal triangolo di stabilità."
},

{
id: 8,
question: "La cintura di sicurezza, se presente sul carrello, deve essere:",
options: [
"A) Utilizzata sempre",
"B) Usata solo su richiesta",
"C) Rimossa",
"D) Facoltativa"
],
correct: 0,
category: "sicurezza_operativa",
ref: "Art. 77 D.Lgs. 81/2008",
suggestion: "I dispositivi di ritenuta devono essere utilizzati secondo le indicazioni del fabbricante e del DVR."
},

{
id: 9,
question: "Prima dell’utilizzo del carrello l’operatore deve:",
options: [
"A) Iniziare immediatamente il lavoro",
"B) Effettuare controlli visivi e funzionali",
"C) Controllare solo il carburante",
"D) Verificare solo le forche"
],
correct: 1,
category: "manutenzione",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "È obbligatorio verificare efficienza dei freni, sterzo, dispositivi di segnalazione e integrità delle forche."
},

{
id: 10,
question: "Durante il trasporto il carico deve essere mantenuto:",
options: [
"A) Il più alto possibile",
"B) A circa 10–15 cm dal suolo",
"C) Oscillante",
"D) Inclinato in avanti"
],
correct: 1,
category: "tecnica_operativa",
ref: "-",
suggestion: "Il carico deve essere mantenuto basso e leggermente inclinato all’indietro per garantire stabilità."
},
{
id: 11,
question: "Quale obbligo ha il lavoratore nell'utilizzo del carrello elevatore?",
options: [
"A) Utilizzarlo secondo formazione e istruzioni ricevute",
"B) Modificarlo se necessario",
"C) Delegarne l’uso a colleghi non formati",
"D) Ignorare le procedure aziendali"
],
correct: 0,
category: "responsabilità",
ref: "Art. 20 D.Lgs. 81/2008",
suggestion: "Il lavoratore deve utilizzare correttamente le attrezzature conformemente a formazione e istruzioni ricevute."
},

{
id: 12,
question: "Quale elemento contribuisce alla stabilità longitudinale del carrello?",
options: [
"A) Il contrappeso",
"B) Il volante",
"C) Il clacson",
"D) Il sedile"
],
correct: 0,
category: "stabilità",
ref: "-",
suggestion: "Il contrappeso bilancia il carico sollevato mantenendo il baricentro entro il triangolo di stabilità."
},

{
id: 13,
question: "Il sovraccarico del carrello può provocare:",
options: [
"A) Maggiore stabilità",
"B) Nessun effetto",
"C) Ribaltamento in avanti",
"D) Riduzione dei consumi"
],
correct: 2,
category: "stabilità",
ref: "-",
suggestion: "Superare la portata nominale può spostare il baricentro oltre il limite anteriore causando ribaltamento."
},

{
id: 14,
question: "La portata nominale del carrello è indicata:",
options: [
"A) Sul libretto personale del lavoratore",
"B) Sulla targhetta identificativa del mezzo",
"C) Sul casco dell’operatore",
"D) Sul DVR"
],
correct: 1,
category: "tecnica_operativa",
ref: "Art. 70 D.Lgs. 81/2008",
suggestion: "La targhetta riporta portata, altezza di sollevamento e condizioni operative consentite."
},

{
id: 15,
question: "È consentito sollevare persone con le forche?",
options: [
"A) Sempre",
"B) Solo con apposita piattaforma conforme",
"C) Mai in nessun caso",
"D) Solo per brevi periodi"
],
correct: 1,
category: "sicurezza_operativa",
ref: "Allegato VI D.Lgs. 81/2008",
suggestion: "Il sollevamento di persone è consentito solo con attrezzature idonee e conformi alle disposizioni normative."
},

{
id: 16,
question: "Durante la marcia con carico ingombrante che limita la visibilità l’operatore deve:",
options: [
"A) Procedere in retromarcia",
"B) Accelerare",
"C) Guidare con forche alte",
"D) Spegnere il lampeggiante"
],
correct: 0,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Se la visuale anteriore è ostruita è necessario procedere in retromarcia o con segnalatore a terra."
},

{
id: 17,
question: "Le verifiche periodiche delle attrezzature sono a carico di:",
options: [
"A) Lavoratore",
"B) RLS",
"C) Datore di lavoro",
"D) Cliente"
],
correct: 2,
category: "responsabilità",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Il datore di lavoro deve assicurare controlli iniziali e periodici secondo le indicazioni del fabbricante."
},

{
id: 18,
question: "L’utilizzo del telefono cellulare durante la guida del carrello:",
options: [
"A) È consentito",
"B) È vietato perché fonte di distrazione",
"C) È obbligatorio",
"D) È facoltativo"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "La distrazione durante la guida aumenta significativamente il rischio di incidente."
},

{
id: 19,
question: "Le forche devono essere posizionate durante la sosta:",
options: [
"A) Sollevate",
"B) Abbassate completamente a terra",
"C) In posizione intermedia",
"D) Inclinate in avanti"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Le forche devono essere completamente abbassate per evitare rischio di urti o inciampi."
},

{
id: 20,
question: "In caso di guasto l’operatore deve:",
options: [
"A) Continuare il lavoro",
"B) Tentare riparazioni improvvisate",
"C) Segnalare immediatamente al responsabile",
"D) Ignorare il problema"
],
correct: 2,
category: "sicurezza_operativa",
ref: "Art. 20 D.Lgs. 81/2008",
suggestion: "Il lavoratore deve segnalare immediatamente eventuali difetti o condizioni di pericolo."
},
{
id: 21,
question: "Durante la percorrenza di una rampa con carico, il carrello deve essere condotto:",
options: [
"A) Con il carico rivolto verso valle",
"B) Con il carico rivolto verso monte",
"C) In folle",
"D) Trasversalmente"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "In salita il carico deve essere sempre rivolto verso monte per mantenere il baricentro entro l’area di stabilità."
},

{
id: 22,
question: "Quale comportamento è corretto in prossimità di incroci o zone cieche?",
options: [
"A) Accelerare",
"B) Suonare il clacson e rallentare",
"C) Procedere senza segnalazioni",
"D) Spegnere il lampeggiante"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Rallentare e segnalare la propria presenza riduce il rischio di collisioni con pedoni o altri mezzi."
},

{
id: 23,
question: "Il baricentro del sistema carrello-carico varia in funzione di:",
options: [
"A) Altezza e peso del carico",
"B) Colore del carrello",
"C) Tipo di sedile",
"D) Marca del mezzo"
],
correct: 0,
category: "stabilità",
ref: "-",
suggestion: "L’innalzamento del carico e l’aumento del peso spostano il baricentro influenzando la stabilità."
},

{
id: 24,
question: "La manutenzione ordinaria deve essere eseguita:",
options: [
"A) Solo in caso di guasto",
"B) Secondo le indicazioni del fabbricante",
"C) A discrezione dell’operatore",
"D) Una volta all’anno senza criteri"
],
correct: 1,
category: "manutenzione",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Le operazioni di manutenzione devono seguire il manuale d’uso e manutenzione del costruttore."
},

{
id: 25,
question: "È consentito trasportare persone sulle forche?",
options: [
"A) Sì, se per breve durata",
"B) Solo con autorizzazione verbale",
"C) No, salvo utilizzo di piattaforma conforme",
"D) Sempre"
],
correct: 2,
category: "sicurezza_operativa",
ref: "Allegato VI D.Lgs. 81/2008",
suggestion: "Il sollevamento di persone è ammesso solo con attrezzature specifiche e conformi alla normativa."
},

{
id: 26,
question: "Il carrello elevatore deve essere utilizzato:",
options: [
"A) Solo per gli usi previsti dal fabbricante",
"B) Per qualsiasi attività di sollevamento",
"C) Come mezzo di traino universale",
"D) Senza limiti operativi"
],
correct: 0,
category: "normativa",
ref: "Art. 70 D.Lgs. 81/2008",
suggestion: "Le attrezzature devono essere utilizzate conformemente alle istruzioni del costruttore."
},

{
id: 27,
question: "Quale documento contiene le istruzioni operative del carrello?",
options: [
"A) DVR",
"B) Manuale d’uso e manutenzione",
"C) Attestato del lavoratore",
"D) Registro presenze"
],
correct: 1,
category: "tecnica_operativa",
ref: "Art. 70 D.Lgs. 81/2008",
suggestion: "Il manuale del fabbricante contiene limiti di utilizzo, manutenzione e condizioni operative."
},

{
id: 28,
question: "La guida con forche sollevate comporta:",
options: [
"A) Maggiore stabilità",
"B) Riduzione del rischio",
"C) Spostamento del baricentro e aumento del rischio ribaltamento",
"D) Nessuna conseguenza"
],
correct: 2,
category: "stabilità",
ref: "-",
suggestion: "Forche sollevate alzano il baricentro riducendo la stabilità complessiva del mezzo."
},

{
id: 29,
question: "Il datore di lavoro deve assicurare che l’operatore sia:",
options: [
"A) Esperto informalmente",
"B) Autorizzato e formato",
"C) Solo maggiorenne",
"D) In possesso di patente B"
],
correct: 1,
category: "responsabilità",
ref: "Art. 73 D.Lgs. 81/2008",
suggestion: "È obbligatoria formazione specifica e autorizzazione formale all’uso dell’attrezzatura."
},

{
id: 30,
question: "In caso di ribaltamento laterale l’operatore deve:",
options: [
"A) Saltare fuori",
"B) Restare seduto con cintura allacciata",
"C) Alzarsi in piedi",
"D) Abbandonare il volante"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Restare seduti con cintura allacciata riduce il rischio di schiacciamento."
},

{
id: 31,
question: "La verifica dell’efficienza dei freni rientra tra:",
options: [
"A) Controlli preliminari",
"B) Attività facoltative",
"C) Compiti del cliente",
"D) Operazioni vietate"
],
correct: 0,
category: "manutenzione",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Prima dell’utilizzo devono essere verificati i principali dispositivi di sicurezza."
},

{
id: 32,
question: "L’uso improprio del carrello può comportare:",
options: [
"A) Nessuna conseguenza",
"B) Sanzioni e responsabilità penali",
"C) Solo richiamo verbale",
"D) Aumento produttività"
],
correct: 1,
category: "responsabilità",
ref: "D.Lgs. 81/2008 Titolo I",
suggestion: "Il mancato rispetto delle norme può generare responsabilità civili e penali."
},

{
id: 33,
question: "Le batterie dei carrelli elettrici devono essere ricaricate:",
options: [
"A) In ambienti ventilati",
"B) In qualsiasi luogo",
"C) In ufficio",
"D) In prossimità di fiamme libere"
],
correct: 0,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Durante la ricarica possono svilupparsi gas; è necessario operare in ambienti ventilati."
},

{
id: 34,
question: "Il sovraccarico rispetto alla portata nominale è:",
options: [
"A) Consentito temporaneamente",
"B) Vietato",
"C) Raccomandato",
"D) Facoltativo"
],
correct: 1,
category: "stabilità",
ref: "-",
suggestion: "Il superamento della portata nominale compromette la stabilità e la sicurezza."
},

{
id: 35,
question: "Il lampeggiante serve a:",
options: [
"A) Illuminare il magazzino",
"B) Segnalare la presenza del mezzo",
"C) Migliorare la velocità",
"D) Ridurre il consumo"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "I dispositivi luminosi aumentano la visibilità del mezzo nelle aree operative."
},

{
id: 36,
question: "La sostituzione di componenti deve essere effettuata:",
options: [
"A) Con pezzi non originali qualsiasi",
"B) Con ricambi idonei secondo indicazioni del fabbricante",
"C) Dall’operatore senza competenze",
"D) Senza spegnere il mezzo"
],
correct: 1,
category: "manutenzione",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "La manutenzione deve rispettare le specifiche tecniche del costruttore."
},

{
id: 37,
question: "Il carrello elevatore può essere utilizzato come gru generica?",
options: [
"A) Sempre",
"B) Solo se previsto dal fabbricante",
"C) Mai",
"D) A discrezione del lavoratore"
],
correct: 1,
category: "tecnica_operativa",
ref: "Art. 70 D.Lgs. 81/2008",
suggestion: "L’attrezzatura deve essere impiegata solo per gli usi previsti dal costruttore."
},

{
id: 38,
question: "L’operatore deve conoscere:",
options: [
"A) Solo la velocità massima",
"B) Procedure operative e rischi specifici",
"C) Solo il peso del mezzo",
"D) Il numero di telaio"
],
correct: 1,
category: "normativa",
ref: "Art. 73 D.Lgs. 81/2008",
suggestion: "La formazione deve includere rischi specifici e corrette procedure operative."
},

{
id: 39,
question: "La circolazione in magazzino deve rispettare:",
options: [
"A) Regole definite dall’azienda",
"B) Nessuna regola",
"C) Solo indicazioni verbali",
"D) Preferenze personali"
],
correct: 0,
category: "sicurezza_operativa",
ref: "Art. 18 D.Lgs. 81/2008",
suggestion: "Il datore di lavoro deve organizzare la viabilità interna in sicurezza."
},

{
id: 40,
question: "La revisione periodica dell’attrezzatura deve essere documentata:",
options: [
"A) No",
"B) Solo verbalmente",
"C) Sì, con registrazione dei controlli",
"D) Solo in caso di incidente"
],
correct: 2,
category: "manutenzione",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Le verifiche devono essere registrate e conservate a disposizione degli organi di controllo."
},
{
id: 41,
question: "In caso di incendio in area di ricarica batterie, l’operatore deve:",
options: [
"A) Continuare la ricarica",
"B) Intervenire solo dopo il turno",
"C) Allontanarsi in sicurezza e attivare le procedure di emergenza",
"D) Spegnere con acqua"
],
correct: 2,
category: "emergenza_antincendio",
ref: "D.M. 2 settembre 2021",
suggestion: "Le procedure antincendio aziendali devono essere attivate immediatamente in caso di principio di incendio."
},

{
id: 42,
question: "L’uso dell’estintore su carrello endotermico deve avvenire:",
options: [
"A) Solo con acqua",
"B) Con estintore idoneo (polvere ABC o CO2)",
"C) Con sabbia umida",
"D) Senza spegnere il mezzo"
],
correct: 1,
category: "emergenza_antincendio",
ref: "D.M. 2 settembre 2021",
suggestion: "La tipologia di estintore deve essere adeguata alla classe di incendio."
},

{
id: 43,
question: "La formazione per carrellisti deve prevedere:",
options: [
"A) Solo teoria online",
"B) Solo prova pratica",
"C) Modulo teorico e pratico con verifica finale",
"D) Solo lettura del manuale"
],
correct: 2,
category: "normativa",
ref: "Accordo Stato-Regioni 22/02/2012",
suggestion: "L’Accordo Stato-Regioni prevede formazione teorica e pratica con verifica dell’apprendimento."
},

{
id: 44,
question: "La durata dell’abilitazione per carrelli elevatori è:",
options: [
"A) 1 anno",
"B) 3 anni",
"C) 5 anni",
"D) Illimitata"
],
correct: 2,
category: "normativa",
ref: "Accordo Stato-Regioni 22/02/2012",
suggestion: "L’abilitazione ha validità quinquennale con obbligo di aggiornamento."
},

{
id: 45,
question: "L’aggiornamento per carrellisti deve essere effettuato:",
options: [
"A) Ogni 5 anni",
"B) Ogni anno",
"C) Solo in caso di incidente",
"D) Mai"
],
correct: 0,
category: "normativa",
ref: "Accordo Stato-Regioni 22/02/2012",
suggestion: "È previsto aggiornamento quinquennale minimo di 4 ore."
},

{
id: 46,
question: "Chi deve verificare l’idoneità dell’operatore alla guida del carrello?",
options: [
"A) Solo l’operatore",
"B) Il datore di lavoro o il preposto",
"C) Il manutentore",
"D) Il collega più anziano"
],
correct: 1,
category: "responsabilità",
ref: "Art. 18 D.Lgs. 81/2008",
suggestion: "Il datore di lavoro deve vigilare sull’idoneità e sulla formazione dei lavoratori."
},

{
id: 47,
question: "Il patentino per carrelli elevatori è:",
options: [
"A) Cedibile",
"B) Aziendale",
"C) Personale e nominativo",
"D) Facoltativo"
],
correct: 2,
category: "normativa",
ref: "Accordo Stato-Regioni 22/02/2012",
suggestion: "L’abilitazione è personale e non trasferibile."
},

{
id: 48,
question: "Prima di utilizzare un carrello diverso da quello abituale, l’operatore deve:",
options: [
"A) Solo provarlo",
"B) Ricevere informazione e addestramento specifico",
"C) Guidarlo lentamente",
"D) Chiedere ai colleghi"
],
correct: 1,
category: "formazione",
ref: "Art. 73 D.Lgs. 81/2008",
suggestion: "L’addestramento deve essere adeguato anche in caso di cambio attrezzatura."
},

{
id: 49,
question: "L’esposizione a gas di scarico in ambienti chiusi si riduce:",
options: [
"A) Usando mezzi endotermici senza ventilazione",
"B) Preferendo carrelli elettrici o garantendo adeguato ricambio d’aria",
"C) Accelerando al massimo",
"D) Tenendo porte chiuse"
],
correct: 1,
category: "salute_lavoro",
ref: "Titolo IX D.Lgs. 81/2008",
suggestion: "L’esposizione ad agenti chimici deve essere ridotta tramite misure tecniche e organizzative."
},

{
id: 50,
question: "Il controllo giornaliero dell’attrezzatura è previsto:",
options: [
"A) Solo in caso di guasto",
"B) Prima dell’inizio del turno",
"C) Una volta al mese",
"D) Solo dal manutentore"
],
correct: 1,
category: "manutenzione",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Le attrezzature devono essere mantenute in efficienza e controllate prima dell’uso."
},
{
id: 51,
question: "Come si verifica la portata massima di un carrello elevatore?",
options: [
"A) Consultando la targhetta di portata applicata dal costruttore",
"B) Stimando il peso del carico visivamente",
"C) Consultando il libretto di circolazione",
"D) In base al colore del carrello"
],
correct: 0,
category: "stabilità_operativa",
ref: "Art. 70 D.Lgs. 81/2008",
suggestion: "La portata nominale è indicata sulla targhetta del costruttore e deve essere sempre rispettata in relazione al baricentro del carico."
},

{
id: 52,
question: "Se durante la marcia si avverte una vibrazione anomala, l’operatore deve:",
options: [
"A) Proseguire la marcia",
"B) Arrestare immediatamente il mezzo in sicurezza e segnalare l’anomalia",
"C) Accelerare per stabilizzare il mezzo",
"D) Limitarsi a rallentare"
],
correct: 1,
category: "manutenzione_controlli",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Qualsiasi anomalia deve essere segnalata immediatamente e il mezzo non deve essere utilizzato fino a verifica tecnica."
},

{
id: 53,
question: "Qual è la procedura corretta per salire sul carrello elevatore?",
options: [
"A) Saltare direttamente nella cabina",
"B) Utilizzare il gradino antiscivolo e il maniglione di presa",
"C) Salire esclusivamente dal lato sinistro",
"D) Accedere da dietro il mezzo"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "È necessario utilizzare i punti di accesso previsti dal costruttore per prevenire cadute."
},

{
id: 54,
question: "Quando deve essere utilizzata la retromarcia durante la movimentazione?",
options: [
"A) Sempre",
"B) Quando il carico limita o impedisce la visibilità anteriore",
"C) Solo in salita",
"D) Solo durante le ore notturne"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "La retromarcia è obbligatoria quando la visibilità anteriore è compromessa dal carico."
},

{
id: 55,
question: "Cosa indica la lettera “Q” sulla targhetta di portata?",
options: [
"A) La velocità massima consentita",
"B) La portata nominale del carrello",
"C) Il numero di matricola",
"D) L’anno di fabbricazione"
],
correct: 1,
category: "stabilità_operativa",
ref: "Art. 70 D.Lgs. 81/2008",
suggestion: "La lettera Q identifica la capacità nominale di sollevamento espressa in chilogrammi."
},

{
id: 56,
question: "Durante la percorrenza su pendenza, il carico deve essere mantenuto:",
options: [
"A) Sollevato alla massima altezza",
"B) Basso e inclinato all’indietro",
"C) Inclinato in avanti",
"D) Posizionato lateralmente"
],
correct: 1,
category: "stabilità_operativa",
ref: "-",
suggestion: "Il carico deve essere mantenuto basso (circa 15-20 cm da terra) e inclinato verso il montante per garantire stabilità."
},

{
id: 57,
question: "Qual è l’effetto di un carico decentrato lateralmente?",
options: [
"A) Aumenta la stabilità",
"B) Riduce la stabilità trasversale aumentando il rischio di ribaltamento",
"C) Non produce effetti",
"D) Aumenta la velocità del mezzo"
],
correct: 1,
category: "stabilità_operativa",
ref: "-",
suggestion: "Il carico decentrato sposta il baricentro fuori dal triangolo di stabilità."
},

{
id: 58,
question: "Prima di sollevare un carico è necessario:",
options: [
"A) Verificare che il peso rientri nella portata indicata",
"B) Sollevare immediatamente",
"C) Chiedere al collega più vicino",
"D) Attivare il clacson"
],
correct: 0,
category: "stabilità_operativa",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "È obbligatorio verificare la compatibilità tra peso del carico e portata nominale."
},

{
id: 59,
question: "Qual è la procedura corretta per depositare un carico su uno scaffale alto?",
options: [
"A) Inclinare in avanti e depositare rapidamente",
"B) Avvicinarsi con montante verticale, depositare gradualmente e ritirare le forche",
"C) Inclinare indietro prima del deposito",
"D) Procedere in retromarcia"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Il deposito deve essere graduale con montante verticale e ritiro controllato delle forche."
},

{
id: 60,
question: "Quando la visibilità anteriore è completamente ostruita dal carico, è necessario:",
options: [
"A) Procedere comunque",
"B) Utilizzare un segnalatore a terra",
"C) Accelerare per liberare il corridoio",
"D) Procedere a zig-zag"
],
correct: 1,
category: "sicurezza_operativa",
ref: "Art. 18 D.Lgs. 81/2008",
suggestion: "Il datore di lavoro deve organizzare la viabilità interna garantendo sicurezza in caso di visibilità limitata."
},
{
id: 61,
question: "Il datore di lavoro deve assicurare che l’attrezzatura sia:",
options: [
"A) Conforme ai requisiti di sicurezza e idonea all’uso previsto",
"B) Economica",
"C) Di colore visibile",
"D) Di recente acquisto"
],
correct: 0,
category: "normativa_generale",
ref: "Art. 70 D.Lgs. 81/2008",
suggestion: "Le attrezzature devono essere conformi ai requisiti di sicurezza e adeguate alle condizioni operative."
},

{
id: 62,
question: "Quale documento deve attestare l’avvenuta formazione del carrellista?",
options: [
"A) Autocertificazione del lavoratore",
"B) Attestato di abilitazione rilasciato da ente formatore",
"C) Contratto di lavoro",
"D) Documento di identità"
],
correct: 1,
category: "formazione_abilitazione",
ref: "Accordo Stato-Regioni 22/02/2012",
suggestion: "L’abilitazione è documentata da attestato nominativo rilasciato al termine del percorso formativo."
},

{
id: 63,
question: "Il preposto ha il compito di:",
options: [
"A) Sostituire il datore di lavoro",
"B) Vigilare sull’osservanza delle procedure di sicurezza",
"C) Effettuare la manutenzione tecnica",
"D) Rilasciare attestati"
],
correct: 1,
category: "ruoli_responsabilita",
ref: "Art. 19 D.Lgs. 81/2008",
suggestion: "Il preposto sovrintende e vigila sulla corretta esecuzione delle attività lavorative."
},

{
id: 64,
question: "L’uso di carrelli in ambienti chiusi con motore endotermico richiede:",
options: [
"A) Nessuna precauzione",
"B) Adeguata ventilazione",
"C) Porte chiuse",
"D) Velocità elevata"
],
correct: 1,
category: "salute_esposizione",
ref: "Titolo IX D.Lgs. 81/2008",
suggestion: "L’esposizione ad agenti chimici deve essere prevenuta mediante adeguata aerazione."
},

{
id: 65,
question: "Il Documento di Valutazione dei Rischi deve includere:",
options: [
"A) Solo rischi generici",
"B) Rischi connessi all’uso delle attrezzature di lavoro",
"C) Solo rischi incendio",
"D) Solo rischi elettrici"
],
correct: 1,
category: "normativa_generale",
ref: "Art. 28 D.Lgs. 81/2008",
suggestion: "La valutazione dei rischi deve comprendere tutte le attrezzature utilizzate."
},

{
id: 66,
question: "L’addestramento pratico deve essere effettuato:",
options: [
"A) Solo online",
"B) In presenza con prova operativa",
"C) Facoltativamente",
"D) Solo dopo un incidente"
],
correct: 1,
category: "formazione_abilitazione",
ref: "Art. 73 D.Lgs. 81/2008",
suggestion: "L’addestramento deve prevedere prova pratica documentata."
},

{
id: 67,
question: "La mancata formazione del carrellista può comportare:",
options: [
"A) Nessuna conseguenza",
"B) Sanzioni penali e amministrative per il datore di lavoro",
"C) Solo richiamo scritto",
"D) Sospensione automatica dell’azienda"
],
correct: 1,
category: "ruoli_responsabilita",
ref: "Art. 55 D.Lgs. 81/2008",
suggestion: "La violazione degli obblighi formativi comporta sanzioni per il datore di lavoro."
},

{
id: 68,
question: "Prima dell’inizio del turno, l’operatore deve:",
options: [
"A) Effettuare controllo visivo e funzionale del mezzo",
"B) Iniziare subito il lavoro",
"C) Delegare il controllo",
"D) Verificare solo il carburante"
],
correct: 0,
category: "manutenzione_controlli",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "I controlli preliminari garantiscono l’efficienza e la sicurezza dell’attrezzatura."
},

{
id: 69,
question: "Il carico deve essere sollevato:",
options: [
"A) Con movimenti bruschi",
"B) Con manovre progressive e controllate",
"C) Alla massima velocità",
"D) Con inclinazione in avanti"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Le manovre devono essere fluide per evitare instabilità."
},

{
id: 70,
question: "L’area di ricarica batterie deve essere:",
options: [
"A) Non segnalata",
"B) Segnalata e ventilata",
"C) Utilizzata come deposito",
"D) Accessibile a chiunque"
],
correct: 1,
category: "emergenza_antincendio",
ref: "D.M. 2 settembre 2021",
suggestion: "Le aree a rischio incendio devono essere adeguatamente organizzate e segnalate."
},

{
id: 71,
question: "La segnaletica di sicurezza in magazzino serve a:",
options: [
"A) Decorare l’ambiente",
"B) Indicare rischi e percorsi sicuri",
"C) Identificare i turni",
"D) Segnalare ferie"
],
correct: 1,
category: "sicurezza_operativa",
ref: "Titolo V D.Lgs. 81/2008",
suggestion: "La segnaletica informa sui rischi e sulle prescrizioni di sicurezza."
},

{
id: 72,
question: "Il lavoratore ha l’obbligo di:",
options: [
"A) Rifiutare ogni incarico",
"B) Utilizzare correttamente le attrezzature",
"C) Modificare il mezzo se necessario",
"D) Sostituire il manutentore"
],
correct: 1,
category: "ruoli_responsabilita",
ref: "Art. 20 D.Lgs. 81/2008",
suggestion: "Il lavoratore deve attenersi alle istruzioni ricevute e utilizzare correttamente i mezzi."
},

{
id: 73,
question: "L’abilitazione alla guida del carrello è valida:",
options: [
"A) Solo nell’azienda di rilascio",
"B) Su tutto il territorio nazionale",
"C) Solo nella regione di rilascio",
"D) Solo nel settore privato"
],
correct: 1,
category: "formazione_abilitazione",
ref: "Accordo Stato-Regioni 22/02/2012",
suggestion: "L’abilitazione è riconosciuta su tutto il territorio nazionale."
},

{
id: 74,
question: "In caso di condizioni meteorologiche avverse in area esterna, l’operatore deve:",
options: [
"A) Proseguire senza modifiche",
"B) Valutare il rischio e adeguare la velocità",
"C) Accelerare",
"D) Disattivare i dispositivi luminosi"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Le condizioni ambientali influiscono sulla stabilità e sulla sicurezza della guida."
},

{
id: 75,
question: "La responsabilità della manutenzione straordinaria è in capo a:",
options: [
"A) Operatore",
"B) Datore di lavoro",
"C) Cliente",
"D) RLS"
],
correct: 1,
category: "ruoli_responsabilita",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Il datore di lavoro deve garantire manutenzione ordinaria e straordinaria dell’attrezzatura."
},
{
id: 76,
question: "Un lavoratore esperto che ha guidato carrelli elevatori in un’altra azienda può essere autorizzato immediatamente alla guida?",
options: [
"A) Sì, se firma presa visione del DVR",
"B) Solo dopo verifica abilitazione e integrazione informazione/addestramento sulle condizioni aziendali",
"C) Sì, in area a basso rischio per un periodo di prova",
"D) Sì, previa verifica con test scritto interno"
],
correct: 1,
category: "formazione_abilitazione",
ref: "Art. 73 D.Lgs. 81/2008",
suggestion: "L’esperienza non sostituisce verifica abilitazione e adeguamento alle condizioni specifiche di impiego."
},

{
id: 77,
question: "Quale struttura formativa è coerente con l’Accordo Stato-Regioni per carrelli elevatori?",
options: [
"A) Solo prova pratica generica",
"B) Solo modulo tecnico",
"C) Moduli giuridico-tecnico-pratico con verifica finale e tracciabilità documentale",
"D) Addestramento interno con attestato firmato dal preposto"
],
correct: 2,
category: "formazione_abilitazione",
ref: "Accordo Stato-Regioni 22/02/2012",
suggestion: "L’Accordo definisce durata, contenuti, verifica finale e soggetti formatori abilitati."
},

{
id: 78,
question: "Assenza di manutenzione documentata su carrello elevatore comporta quale non conformità principale?",
options: [
"A) Mancanza indicazione limite velocità",
"B) Mancanza assegnazione nominativa mezzo",
"C) Assenza bollino RLS",
"D) Mancato mantenimento requisiti di sicurezza e tracciabilità controlli"
],
correct: 3,
category: "manutenzione_controlli",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Il datore di lavoro deve garantire manutenzione e controlli documentati."
},

{
id: 79,
question: "Il lavoratore che rileva un’anomalia su dispositivo di segnalazione acustica deve:",
options: [
"A) Compensare con maggiore attenzione",
"B) Segnalare solo se presenti pedoni",
"C) Segnalare immediatamente e attenersi alle istruzioni ricevute",
"D) Riparare autonomamente"
],
correct: 2,
category: "ruoli_responsabilita",
ref: "Art. 20 D.Lgs. 81/2008",
suggestion: "È obbligatoria la segnalazione immediata delle deficienze."
},

{
id: 80,
question: "Il preposto che osserva una manovra non sicura deve:",
options: [
"A) Annotare e rinviare",
"B) Intervenire immediatamente e, se necessario, interrompere l’attività",
"C) Sostituire l’operatore",
"D) Limitarsi a richiamo verbale generico"
],
correct: 1,
category: "ruoli_responsabilita",
ref: "Art. 19 D.Lgs. 81/2008",
suggestion: "Il preposto vigila e interviene su comportamenti non conformi."
},

{
id: 81,
question: "L’informazione al lavoratore abilitato deve comunque includere:",
options: [
"A) Solo normativa generale",
"B) Solo portata mezzo",
"C) Solo manuale costruttore",
"D) Rischi specifici del luogo e procedure aziendali"
],
correct: 3,
category: "formazione_abilitazione",
ref: "Art. 36 D.Lgs. 81/2008",
suggestion: "L’informazione deve essere mirata ai rischi specifici."
},

{
id: 82,
question: "La formazione deve essere:",
options: [
"A) Standard identica per tutti",
"B) Limitata a emergenze",
"C) Adeguata ai rischi della mansione secondo Accordi vigenti",
"D) Solo con quiz finale"
],
correct: 2,
category: "formazione_abilitazione",
ref: "Art. 37 D.Lgs. 81/2008",
suggestion: "La formazione deve essere sufficiente e adeguata ai rischi specifici."
},

{
id: 83,
question: "In traffico promiscuo la sicurezza dipende:",
options: [
"A) Solo dall’attenzione del mulettista",
"B) Solo dai DPI pedoni",
"C) Solo da procedura scritta",
"D) Da misure organizzative, tecniche e vigilanza del datore/dirigenti"
],
correct: 3,
category: "ruoli_responsabilita",
ref: "Art. 18 D.Lgs. 81/2008",
suggestion: "La prevenzione è responsabilità organizzativa."
},

{
id: 84,
question: "Cambio reparto con stesse attrezzature ma nuove condizioni operative richiede:",
options: [
"A) Nessuna azione",
"B) Aggiornamento informazione/addestramento mirato",
"C) Rifare intero corso",
"D) Solo firma presenza"
],
correct: 1,
category: "formazione_abilitazione",
ref: "Art. 73 D.Lgs. 81/2008",
suggestion: "Le condizioni di impiego incidono sull’adeguatezza della formazione."
},

{
id: 85,
question: "Attestati privi di tracciabilità espongono l’azienda a:",
options: [
"A) Nessun rischio",
"B) Solo rilievo formale minore",
"C) Impossibilità dimostrare conformità requisiti minimi",
"D) Problemi solo fiscali"
],
correct: 2,
category: "formazione_abilitazione",
ref: "Accordo Stato-Regioni 22/02/2012",
suggestion: "Programma, presenze e verifica devono essere documentati."
},

{
id: 86,
question: "Durante ricarica batteria muletto elettrico il rischio principale è:",
options: [
"A) Emissione CO",
"B) Sviluppo idrogeno e rischio innesco",
"C) Congelamento elettrolita",
"D) Solo arco interno"
],
correct: 1,
category: "emergenza_antincendio",
ref: "Titolo IX D.Lgs. 81/2008",
suggestion: "La ventilazione è essenziale per prevenire rischio esplosione."
},

{
id: 87,
question: "Portata 1.800 kg a 500 mm indica:",
options: [
"A) Interasse",
"B) Altezza da suolo",
"C) Larghezza forche",
"D) Distanza orizzontale centro di carico"
],
correct: 3,
category: "sicurezza_operativa",
ref: "Manuale costruttore",
suggestion: "Aumentando il centro di carico si riduce la portata effettiva."
},

{
id: 88,
question: "Con pedana uomo a bordo aumenta il rischio perché:",
options: [
"A) Sterzo più morbido",
"B) Portata maggiore",
"C) Aumentano velocità ed energia cinetica",
"D) Frenata sempre perfetta"
],
correct: 2,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Maggiore velocità implica maggior spazio arresto."
},

{
id: 89,
question: "Uso muletto endotermico indoor richiede cautela per:",
options: [
"A) Riduzione portata automatica",
"B) Divieto clacson",
"C) Freni meno efficienti",
"D) Emissioni e rischio innesco"
],
correct: 3,
category: "salute_esposizione",
ref: "Titolo IX D.Lgs. 81/2008",
suggestion: "Valutare ventilazione ed esposizione a gas di scarico."
},

{
id: 90,
question: "Trasporto carico alto rispetto necessario:",
options: [
"A) Migliora stabilità",
"B) Non incide",
"C) Peggiora stabilità per aumento baricentro",
"D) Migliora frenata"
],
correct: 2,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Baricentro alto aumenta rischio ribaltamento."
},

{
id: 91,
question: "Pallet danneggiato e carico sporgente richiede:",
options: [
"A) Inforcare parzialmente",
"B) Procedere lentamente",
"C) Sollevare più in alto",
"D) Ripristinare sicurezza unità di carico prima movimentazione"
],
correct: 3,
category: "sicurezza_operativa",
ref: "Art. 20 D.Lgs. 81/2008",
suggestion: "Non movimentare carichi instabili."
},

{
id: 92,
question: "Spazio di arresto dipende principalmente da:",
options: [
"A) Tipo pneumatico solo",
"B) Freno stazionamento",
"C) Velocità, massa, aderenza, stato impianto frenante",
"D) Tipo batteria"
],
correct: 2,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Energia cinetica e attrito determinano distanza arresto."
},

{
id: 93,
question: "In rampa con carico è corretto:",
options: [
"A) Ruote libere",
"B) Carico alto",
"C) Sterzare su pendenza",
"D) Velocità ridotta e rispetto istruzioni costruttore"
],
correct: 3,
category: "sicurezza_operativa",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Le manovre devono essere progressive e controllate."
},

{
id: 94,
question: "Manomettere sensore presenza operatore è:",
options: [
"A) Ammissibile temporaneamente",
"B) Accettabile per urgenza",
"C) Vietato: occorre verifica tecnica autorizzata",
"D) Preferibile sostituire mezzo"
],
correct: 2,
category: "manutenzione_controlli",
ref: "Art. 20 D.Lgs. 81/2008",
suggestion: "Non alterare dispositivi di sicurezza."
},

{
id: 95,
question: "Combinazione più rischiosa in curva:",
options: [
"A) Carico centrato e curva ampia",
"B) Carico alto ma lento",
"C) Carico instabile e curva stretta veloce",
"D) Carico centrato e lento"
],
correct: 2,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Instabilità + velocità aumentano rischio rovesciamento."
},
{
id: 96,
question: "Prima di iniziare il turno, quale verifica è obbligatoria sul carrello elevatore?",
options: [
"A) Solo il livello carburante",
"B) Solo la pulizia della cabina",
"C) Controllo visivo e funzionale di freni, sterzo, dispositivi di sicurezza e stato generale",
"D) Nessuna verifica se il mezzo ha lavorato il giorno prima"
],
correct: 2,
category: "manutenzione_controlli",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "L’attrezzatura deve essere mantenuta in efficienza e verificata prima dell’uso."
},

{
id: 97,
question: "La responsabilità della manutenzione periodica programmata ricade su:",
options: [
"A) Solo sull’operatore",
"B) Solo sul manutentore esterno",
"C) Sul datore di lavoro che deve garantirla",
"D) Sul RLS"
],
correct: 2,
category: "ruoli_responsabilita",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Il datore di lavoro deve assicurare manutenzione e controlli periodici."
},

{
id: 98,
question: "Durante la movimentazione di carichi sospesi sopra persone è corretto:",
options: [
"A) Procedere rapidamente",
"B) Avvisare verbalmente e passare comunque",
"C) Evitare il transito e interdire l’area sottostante",
"D) Alzare ulteriormente il carico"
],
correct: 2,
category: "sicurezza_operativa",
ref: "Allegato VI D.Lgs. 81/2008",
suggestion: "È vietato transitare con carichi sopra persone."
},

{
id: 99,
question: "La segnaletica orizzontale nei magazzini serve principalmente a:",
options: [
"A) Decorare l’area",
"B) Separare percorsi pedonali e carrabili",
"C) Indicare solo limiti di velocità",
"D) Indicare turni di lavoro"
],
correct: 1,
category: "sicurezza_operativa",
ref: "Titolo V D.Lgs. 81/2008",
suggestion: "La segnaletica contribuisce alla prevenzione delle interferenze."
},

{
id: 100,
question: "Il triangolo di stabilità del carrello elevatore definisce:",
options: [
"A) La velocità massima consentita",
"B) L’area entro cui deve rimanere il baricentro per evitare ribaltamento",
"C) L’angolo massimo di sterzata",
"D) L’altezza massima di sollevamento"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Se il baricentro esce dal triangolo di stabilità il mezzo può ribaltarsi."
},

{
id: 101,
question: "Durante la marcia senza carico le forche devono essere:",
options: [
"A) Alte per migliorare visibilità",
"B) Inclinate in avanti",
"C) Basse (15-20 cm) e leggermente inclinate all’indietro",
"D) Appoggiate completamente a terra"
],
correct: 2,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Forche basse riducono rischio urti e perdita stabilità."
},

{
id: 102,
question: "Il superamento della portata nominale comporta:",
options: [
"A) Solo maggiore consumo carburante",
"B) Rischio di ribaltamento e cedimento strutturale",
"C) Nessun effetto immediato",
"D) Migliore stabilità"
],
correct: 1,
category: "sicurezza_operativa",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "È vietato usare l’attrezzatura oltre i limiti previsti dal costruttore."
},

{
id: 103,
question: "In presenza di pavimentazione sconnessa è corretto:",
options: [
"A) Aumentare velocità per superare ostacoli",
"B) Procedere lentamente mantenendo carico basso",
"C) Sollevare il carico per evitare urti",
"D) Guidare in retromarcia costante"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Velocità moderata riduce vibrazioni e instabilità."
},

{
id: 104,
question: "Il freno di stazionamento deve essere inserito:",
options: [
"A) Solo su pendenze elevate",
"B) Solo a fine turno",
"C) Ogni volta che si lascia il mezzo incustodito",
"D) Solo in area esterna"
],
correct: 2,
category: "sicurezza_operativa",
ref: "Allegato VI D.Lgs. 81/2008",
suggestion: "Il mezzo deve essere messo in sicurezza quando non presidiato."
},

{
id: 105,
question: "La valutazione del rischio interferenziale tra muletti e pedoni è contenuta nel:",
options: [
"A) Registro infortuni",
"B) DVR aziendale",
"C) Libro unico del lavoro",
"D) Manuale del costruttore"
],
correct: 1,
category: "ruoli_responsabilita",
ref: "Art. 17 D.Lgs. 81/2008",
suggestion: "Il DVR individua e valuta tutti i rischi presenti in azienda."
},

{
id: 106,
question: "Durante la sostituzione di bombola GPL è necessario:",
options: [
"A) Operare vicino a fonti di calore",
"B) Verificare assenza fiamme e perdite",
"C) Accendere il motore per test immediato",
"D) Usare utensili improvvisati"
],
correct: 1,
category: "emergenza_antincendio",
ref: "Titolo IX D.Lgs. 81/2008",
suggestion: "Il GPL comporta rischio incendio ed esplosione."
},

{
id: 107,
question: "Il mancato uso della cintura di sicurezza espone a:",
options: [
"A) Solo sanzione disciplinare interna",
"B) Aumento rischio schiacciamento in caso di ribaltamento",
"C) Migliore libertà di movimento",
"D) Nessun rischio"
],
correct: 1,
category: "DPI",
ref: "Art. 20 D.Lgs. 81/2008",
suggestion: "Il lavoratore deve utilizzare correttamente i DPI e dispositivi di sicurezza."
},

{
id: 108,
question: "La revisione straordinaria del mezzo è richiesta quando:",
options: [
"A) Si cambia operatore",
"B) Dopo evento anomalo o incidente significativo",
"C) Ogni settimana",
"D) Solo a fine anno"
],
correct: 1,
category: "manutenzione_controlli",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Eventi anomali richiedono verifica dell’idoneità all’uso."
},

{
id: 109,
question: "La formazione pratica deve essere effettuata:",
options: [
"A) Su simulatore esclusivamente",
"B) Su mezzo reale della categoria prevista",
"C) Solo con video dimostrativi",
"D) Solo tramite affiancamento informale"
],
correct: 1,
category: "formazione_abilitazione",
ref: "Accordo Stato-Regioni 22/02/2012",
suggestion: "È prevista prova pratica su attrezzatura reale."
},

{
id: 110,
question: "In caso di urto accidentale contro scaffalatura è necessario:",
options: [
"A) Riprendere subito il lavoro",
"B) Segnalare e verificare stabilità struttura prima di proseguire",
"C) Spostare manualmente lo scaffale",
"D) Ignorare se non vi sono danni visibili"
],
correct: 1,
category: "sicurezza_operativa",
ref: "Art. 20 D.Lgs. 81/2008",
suggestion: "Ogni anomalia strutturale deve essere segnalata."
},

{
id: 111,
question: "Il datore di lavoro deve aggiornare la valutazione dei rischi quando:",
options: [
"A) Cambia colore carrello",
"B) Introduce nuove attrezzature o modifiche organizzative rilevanti",
"C) Cambia turno operatore",
"D) Viene assunto un lavoratore stagionale"
],
correct: 1,
category: "ruoli_responsabilita",
ref: "Art. 29 D.Lgs. 81/2008",
suggestion: "Il DVR va aggiornato in caso di modifiche significative."
},

{
id: 112,
question: "La mancata formazione specifica può comportare:",
options: [
"A) Solo richiamo verbale",
"B) Responsabilità penale per il datore di lavoro in caso di infortunio",
"C) Nessuna conseguenza",
"D) Solo sanzione amministrativa al lavoratore"
],
correct: 1,
category: "ruoli_responsabilita",
ref: "Art. 73 D.Lgs. 81/2008",
suggestion: "La formazione è obbligo giuridico del datore di lavoro."
},

{
id: 113,
question: "Il carrello elevatore rientra tra:",
options: [
"A) Dispositivi medici",
"B) Attrezzature di lavoro",
"C) DPI",
"D) Impianti fissi"
],
correct: 1,
category: "normativa_generale",
ref: "Art. 69 D.Lgs. 81/2008",
suggestion: "È definito attrezzatura di lavoro dal Testo Unico."
},

{
id: 114,
question: "L’operatore deve collaborare alla sicurezza:",
options: [
"A) Solo in presenza del preposto",
"B) Sempre, rispettando procedure e istruzioni",
"C) Solo in caso di emergenza",
"D) Solo durante audit"
],
correct: 1,
category: "ruoli_responsabilita",
ref: "Art. 20 D.Lgs. 81/2008",
suggestion: "Il lavoratore ha obblighi di cooperazione alla sicurezza."
},

{
id: 115,
question: "La guida con telefono cellulare in uso è:",
options: [
"A) Consentita se breve",
"B) Vietata perché distrae e aumenta rischio infortunio",
"C) Consentita con auricolare",
"D) Consentita a bassa velocità"
],
correct: 1,
category: "sicurezza_operativa",
ref: "Art. 20 D.Lgs. 81/2008",
suggestion: "Comportamenti imprudenti violano obblighi di sicurezza."
},

{
id: 116,
question: "L’illuminazione insufficiente dell’area di lavoro deve essere:",
options: [
"A) Ignorata",
"B) Segnalata e corretta prima della movimentazione",
"C) Compensata aumentando velocità",
"D) Risolta con fari personali non autorizzati"
],
correct: 1,
category: "sicurezza_operativa",
ref: "Allegato IV D.Lgs. 81/2008",
suggestion: "Gli ambienti di lavoro devono avere illuminazione adeguata."
},

{
id: 117,
question: "La verifica periodica delle competenze dell’operatore è:",
options: [
"A) Facoltativa",
"B) Parte del sistema di gestione sicurezza aziendale",
"C) Solo sindacale",
"D) Prevista solo per neoassunti"
],
correct: 1,
category: "formazione_abilitazione",
ref: "Art. 18 D.Lgs. 81/2008",
suggestion: "Il datore deve garantire adeguatezza nel tempo."
},

{
id: 118,
question: "La movimentazione in spazi ristretti richiede:",
options: [
"A) Velocità costante elevata",
"B) Manovre lente e controllo continuo degli ingombri",
"C) Forche alte",
"D) Sterzate brusche"
],
correct: 1,
category: "sicurezza_operativa",
ref: "-",
suggestion: "Ridurre velocità e controllare ingombri laterali."
},

{
id: 119,
question: "In caso di malfunzionamento dello sterzo è necessario:",
options: [
"A) Terminare il turno",
"B) Mettere fuori servizio il mezzo e segnalarlo",
"C) Ridurre solo velocità",
"D) Compensare con freno"
],
correct: 1,
category: "manutenzione_controlli",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Attrezzature non sicure non devono essere utilizzate."
},

{
id: 120,
question: "Il rischio vibrazioni corpo intero è valutato ai sensi del:",
options: [
"A) Titolo I",
"B) Titolo VIII D.Lgs. 81/2008",
"C) Titolo X",
"D) Titolo III solo"
],
correct: 1,
category: "salute_esposizione",
ref: "Titolo VIII D.Lgs. 81/2008",
suggestion: "Il rischio vibrazioni rientra tra gli agenti fisici."
},

{
id: 121,
question: "L’operatore deve interrompere l’attività quando:",
options: [
"A) È stanco ma vuole terminare lavoro",
"B) Ritiene sussista pericolo grave e immediato",
"C) Il collega lo chiede",
"D) Il turno è quasi finito"
],
correct: 1,
category: "ruoli_responsabilita",
ref: "Art. 44 D.Lgs. 81/2008",
suggestion: "Il lavoratore può allontanarsi in caso di pericolo grave e immediato."
},

{
id: 122,
question: "Il mancato rispetto delle procedure aziendali di sicurezza costituisce:",
options: [
"A) Solo infrazione amministrativa generica",
"B) Violazione degli obblighi del lavoratore",
"C) Nessuna violazione se non accade incidente",
"D) Responsabilità esclusiva del RSPP"
],
correct: 1,
category: "ruoli_responsabilita",
ref: "Art. 20 D.Lgs. 81/2008",
suggestion: "Le procedure sono parte integrante delle misure di prevenzione."
},

{
id: 123,
question: "L’uso di accessori non previsti dal costruttore comporta:",
options: [
"A) Miglioramento automatico prestazioni",
"B) Alterazione caratteristiche sicurezza e necessità verifica tecnica",
"C) Nessuna variazione",
"D) Riduzione vibrazioni"
],
correct: 1,
category: "manutenzione_controlli",
ref: "Art. 71 D.Lgs. 81/2008",
suggestion: "Ogni modifica può incidere sulla sicurezza e portata."
},

{
id: 124,
question: "Il carrello elevatore può essere utilizzato per sollevare persone:",
options: [
"A) Sempre con pallet",
"B) Solo con attrezzature certificate e procedure specifiche",
"C) Mai in nessun caso",
"D) Solo in emergenza"
],
correct: 1,
category: "sicurezza_operativa",
ref: "Allegato VI D.Lgs. 81/2008",
suggestion: "Il sollevamento persone richiede dispositivi idonei e autorizzazione."
},

{
id: 125,
question: "Il sistema di prevenzione aziendale deve garantire:",
options: [
"A) Solo formazione iniziale",
"B) Miglioramento continuo delle condizioni di sicurezza",
"C) Solo rispetto minimo legge",
"D) Solo controlli ispettivi"
],
correct: 1,
category: "normativa_generale",
ref: "Art. 15 D.Lgs. 81/2008",
suggestion: "La prevenzione si basa su programmazione e miglioramento continuo."
}
];
// ============================================
// VARIABILI GLOBALI
// ============================================
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval;
let timeRemaining = 25 * 60; // 25 minuti in secondi
let startTime;

// ============================================
// ELEMENTI DOM
// ============================================
const welcomeScreen = document.getElementById('welcomeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const disclaimerModal = document.getElementById('disclaimerModal');
const cancelBtn = document.getElementById('cancelBtn');
const acceptBtn = document.getElementById('acceptBtn');

// ============================================
// EVENT LISTENERS
// ============================================
startBtn.addEventListener('click', showDisclaimer);
cancelBtn.addEventListener('click', hideDisclaimer);
acceptBtn.addEventListener('click', startQuiz);
document.getElementById('repeatBtn').addEventListener('click', repeatTest);
document.getElementById('newTestBtn').addEventListener('click', generateNewTest);
document.getElementById('homeBtn').addEventListener('click', goHome);

// ============================================
// FUNZIONI PRINCIPALI
// ============================================

function showDisclaimer() {
    disclaimerModal.classList.add('active');
}

function hideDisclaimer() {
    disclaimerModal.classList.remove('active');
}

function startQuiz() {
    hideDisclaimer();
    
    // Genera 20 domande casuali
    currentQuestions = getRandomQuestions(20);
    currentQuestionIndex = 0;
    userAnswers = [];
    timeRemaining = 25 * 60;
    startTime = Date.now();
    
    // Mostra schermata quiz
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    // Avvia timer
    startTimer();
    
    // Mostra prima domanda
    showQuestion();
}

function getRandomQuestions(count) {
    const shuffled = [...QUESTION_BANK].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, QUESTION_BANK.length));
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Aggiorna progress
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `Domanda ${currentQuestionIndex + 1} di ${currentQuestions.length}`;
    
    // Categoria
    document.getElementById('categoryBadge').textContent = question.category;
    
    // Testo domanda
    document.getElementById('question').textContent = question.question;
    
    // Randomizza opzioni
    const shuffledOptions = question.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
    const randomized = shuffleArray(shuffledOptions);
    
    // Mostra opzioni
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    randomized.forEach((option) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option.text;
        optionDiv.addEventListener('click', () => selectAnswer(option.originalIndex, randomized));
        optionsContainer.appendChild(optionDiv);
    });
}

function selectAnswer(selectedIndex, randomizedOptions) {
    const question = currentQuestions[currentQuestionIndex];
    
    // Salva risposta
    userAnswers.push({
        questionId: question.id,
        question: question.question,
        selectedIndex: selectedIndex,
        correctIndex: question.correct,
        isCorrect: selectedIndex === question.correct,
        allOptions: question.options,
        category: question.category,
        ref: question.ref,
        suggestion: question.suggestion
    });
    
    // Prossima domanda o risultati
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        setTimeout(showQuestion, 300);
    } else {
        finishQuiz();
    }
}

function startTimer() {
    const timerEl = document.getElementById('timer');
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        
        timerEl.textContent = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Warning sotto 5 minuti
        if (timeRemaining === 5 * 60) {
            timerEl.classList.add('warning');
            alert('⏰ Attenzione! Rimangono meno di 5 minuti!');
        }
        
        // Tempo scaduto
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
        }
    }, 1000);
}

function finishQuiz() {
    clearInterval(timerInterval);
    
    // Calcola risultati
    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    const wrongCount = userAnswers.length - correctCount;
    const percentage = Math.round((correctCount / userAnswers.length) * 100);
    
    // Tempo impiegato
    const timeUsed = 25 * 60 - timeRemaining;
    const minutesUsed = Math.floor(timeUsed / 60);
    const secondsUsed = timeUsed % 60;
    
    // Mostra risultati
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    // Badge e titolo
    let badge, title, message, messageClass;
    
    if (percentage >= 90) {
        badge = '🏆';
        title = 'ECCELLENTE';
        message = '🎉 Complimenti! Hai dimostrato un\'ottima conoscenza delle normative e delle procedure di sicurezza. Sei pronto per operare in modo responsabile e consapevole.';
        messageClass = 'excellent';
    } else if (percentage >= 70) {
        badge = '👍';
        title = 'SUFFICIENTE';
        message = '✅ Buon risultato! Hai raggiunto la soglia di superamento. Ti consigliamo di rivedere gli argomenti in cui hai commesso errori per consolidare le tue competenze.';
        messageClass = 'sufficient';
    } else {
        badge = '📚';
        title = 'INSUFFICIENTE';
        message = '⚠️ Il punteggio non è sufficiente. È necessario approfondire la formazione sulle normative di sicurezza e le procedure operative. Ripeti il test dopo aver ripassato gli argomenti critici.';
        messageClass = 'insufficient';
    }
    
    document.getElementById('scoreBadge').textContent = badge;
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('scorePercent').textContent = `${percentage}%`;
    document.getElementById('correctCount').textContent = `${correctCount}/${userAnswers.length} ✅`;
    document.getElementById('wrongCount').textContent = `${wrongCount}/${userAnswers.length} ❌`;
    document.getElementById('timeUsed').textContent = `${minutesUsed}:${secondsUsed.toString().padStart(2, '0')}`;
    
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.textContent = message;
    resultMessage.className = `result-message ${messageClass}`;
    
    // Riepilogo domande
    showReview();
}

function showReview() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'wrong'}`;
        
        const icon = answer.isCorrect ? '✅' : '❌';
        const questionHeader = document.createElement('div');
        questionHeader.className = 'review-question';
        questionHeader.textContent = `${icon} Domanda ${index + 1}: ${answer.question}`;
        reviewItem.appendChild(questionHeader);
        
        // Mostra tutte le opzioni
        answer.allOptions.forEach((opt, idx) => {
            const optDiv = document.createElement('div');
            optDiv.className = 'review-option';
            optDiv.textContent = opt;
            
            // Evidenzia risposta utente
            if (idx === answer.selectedIndex) {
                optDiv.classList.add('user-answer');
                if (!answer.isCorrect) {
                    optDiv.classList.add('wrong');
                    optDiv.textContent += ' ❌ (Tua risposta)';
                } else {
                    optDiv.textContent += ' ✅ (Tua risposta - Corretta!)';
                }
            }
            
            // Mostra risposta corretta se sbagliata
            if (!answer.isCorrect && idx === answer.correctIndex) {
                optDiv.classList.add('correct-answer');
                optDiv.textContent += ' ✅ (Risposta Corretta)';
            }
            
            reviewItem.appendChild(optDiv);
        });
        
        // Suggerimento
        if (answer.suggestion) {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.className = 'review-suggestion';
            suggestionDiv.innerHTML = `<strong>💡 Approfondimento:</strong> ${answer.suggestion}`;
            reviewItem.appendChild(suggestionDiv);
        }
        
        reviewContainer.appendChild(reviewItem);
    });
}

function repeatTest() {
    // Reset con stesse domande
    currentQuestionIndex = 0;
    userAnswers = [];
    timeRemaining = 25 * 60;
    startTime = Date.now();
    
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    startTimer();
    showQuestion();
}

function generateNewTest() {
    // Nuovo test con domande diverse
    currentQuestions = getRandomQuestions(20);
    currentQuestionIndex = 0;
    userAnswers = [];
    timeRemaining = 25 * 60;
    startTime = Date.now();
    
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    startTimer();
    showQuestion();
}

function goHome() {
    clearInterval(timerInterval);
    
    resultsScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
    
    // Reset completo
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    timeRemaining = 25 * 60;
}

// ============================================
// BLOCCO CLICK FUORI MODAL E TASTO ESC
// ============================================
disclaimerModal.addEventListener('click', (e) => {
    // Impedisce chiusura cliccando fuori
    if (e.target === disclaimerModal.querySelector('.modal-overlay')) {
        e.stopPropagation();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && disclaimerModal.classList.contains('active')) {
        e.preventDefault();
    }
});






// === QUIZ DATA - 100 DOMANDE D.Lgs 81/2008 ===
    const quizBank = [      // GIURIDICO (20)
       {id:1,question:"Secondo D.Lgs 81/2008 Titolo III Capo I, le attrezzature di lavoro devono essere:",options:["A) Solo nuove","B) Idonee alla salute/sicurezza e adeguate al lavoro[1]","C) Sempre noleggiate","D) Senza marcatura CE"],correct:1,category:"giuridico",ref:"Art.70[1]"},
      {id:2,question:"L'art.71 D.Lgs 81/2008 stabilisce che il datore di lavoro deve:",options:["A) Solo acquistare attrezzature","B) Assicurare idoneità e adeguatezza attrezzature[3]","C) Delegare tutto al RSPP","D) Non fare verifiche"],correct:1,category:"giuridico",ref:"Art.71[3]"},
      {id:3,question:"Per carrelli ante-Direttiva Macchine (pre-1996), si applicano i requisiti dell':",options:["A) Solo libretto uso","B) Allegato V D.Lgs 81/2008[2]","C) DPR 547/1955","D) Nessuna norma"],correct:1,category:"giuridico",ref:"Allegato V[2]"},
      {id:4,question:"L'art.73 c.5 D.Lgs 81/2008 richiede per carrelli elevatori:",options:["A) Solo formazione generica","B) Abilitazione specifica (Accordo 22/02/2012)[4]","C) Nessuna abilitazione","D) Solo addestramento pratico"],correct:1,category:"giuridico",ref:"Art.73[4]"},
      {id:5,question:"I noleggiatori devono attestare conformità ai requisiti di:",options:["A) Solo CE","B) Allegato V D.Lgs 81/2008 al momento consegna[1]","C) Solo portata","D) Nessun obbligo"],correct:1,category:"giuridico",ref:"Art.72[1]"},
      {id:6,question:"Le macchine CE devono essere utilizzate:",options:["A) Senza verifiche","B) Nei limiti del libretto uso e Allegato VI[2]","C) Sempre con modifiche","D) Solo da esperti"],correct:1,category:"giuridico",ref:"Allegato VI[2]"},
      {id:7,question:"La verifica periodica carrelli è disciplinata dall':",options:["A) Solo manuale uso","B) Allegato VII D.Lgs 81/2008[2]","C) Nessuna verifica","D) Circolare Ministeriale"],correct:1,category:"giuridico",ref:"Allegato VII[2]"},
      {id:8,question:"Il venditore di carrelli deve fornire attestazione:",options:["A) Solo fattura","B) Conformità Allegato V D.Lgs 81/2008[2]","C) Solo CE","D) Nessun documento"],correct:1,category:"giuridico",ref:"Art.72[2]"},
      {id:9,question:"L'Accordo Stato-Regioni 22/02/2012 disciplina:",options:["A) Solo formazione teorica","B) Abilitazione specifica carrelli elevatori[4]","C) Solo addestramento pratico","D) Manutenzione"],correct:1,category:"giuridico",ref:"Accordo 22/02/2012[4]"},
      {id:10,question:"Carrelli commissionatori >10m richiedono:",options:["A) Formazione generica","B) Abilitazione specifica art.73 c.5[4]","C) Nessuna formazione","D) Solo patente muletti"],correct:1,category:"giuridico",ref:"Art.73[4]"},
      {id:11,question:"Il Datore di Lavoro verifica per macchine CE:",options:["A) Solo marcatura","B) Assenza vizi palesi + uso conforme[2]","C) Solo dichiarazione","D) Nessuna verifica"],correct:1,category:"giuridico",ref:"Art.71[2]"},
      {id:12,question:"Le attrezzature sono definite nell'art.:",options:["A) Art.69 D.Lgs 81/2008","B) Art.70","C) Art.71","D) Art.73"],correct:0,category:"giuridico",ref:"Art.69[1]"},
      {id:13,question:"L'obbligo di formazione è previsto dall'art.:",options:["A) Art.71","B) Art.73 D.Lgs 81/2008","C) Art.37","D) Art.19"],correct:1,category:"giuridico",ref:"Art.73[1]"},
      {id:14,question:"Aggiornamento abilitazione carrelli ogni:",options:["A) 1 anno","B) 5 anni (Accordo Stato-Regioni)[4]","C) 10 anni","D) Mai"],correct:1,category:"giuridico",ref:"Accordo 22/02/2012[4]"},
      {id:15,question:"Responsabile manutenzione attrezzature:",options:["A) Solo RSPP","B) Datore di lavoro art.71[3]","C) Solo manutentore","D) Lavoratore"],correct:1,category:"giuridico",ref:"Art.71[3]"},
      {id:16,question:"Denuncia INAIL obbligatoria quando carrello usato come:",options:["A) Sempre","B) Gru/cestello porta persone[7]","C) Solo per noleggio","D) Mai"],correct:1,category:"giuridico",ref:"Buone prassi[7]"},
      {id:17,question:"Requisiti essenziali sicurezza (RES) recepiti con:",options:["A) DPR 547/1955","B) DPR 459/1996 (Direttiva Macchine)[2]","C) D.Lgs 81/2008","D) Solo CE"],correct:1,category:"giuridico",ref:"DPR 459/1996[2]"},
      {id:18,question:"Circolare Ministero Lavoro n.9/2013 disciplina:",options:["A) Solo formazione","B) Verifiche periodiche Allegato VII[2]","C) Solo manutenzione","D) Abilitazioni"],correct:1,category:"giuridico",ref:"Circolare 9/2013[2]"},
      {id:19,question:"Carrelli elevatori sono 'attrezzature di lavoro':",options:["A) Sì, Titolo III D.Lgs 81/2008[1]","B) No, sono veicoli","C) Solo se CE","D) Solo >3 ton"],correct:0,category:"giuridico",ref:"Titolo III[1]"},
      {id:20,question:"Obblighi concedenti in uso (art.72):",options:["A) Nessun obbligo","B) Attestare conformità Allegato V[1]","C) Solo noleggio","D) Solo vendita"],correct:1,category:"giuridico",ref:"Art.72[1]"},

      // ===== MODULO TECNICO (40 domande) =====
      {id:21,question:"Allegato V parte II punto 2.5: carrelli elevatori devono limitare rischi di:",options:["A) Solo ribaltamento","B) Contatto ruote/cingoli E ribaltamento[5]","C) Solo ostacoli","D) Vibrazioni"],correct:1,category:"tecnico",ref:"Allegato V 2.5[5]"},
      {id:22,question:"Per proteggere conducente da ribaltamento serve:",options:["A) Solo cinture","B) Struttura con spazio tra suolo/carrello[1]","C) Paraurti","D) Tettuccio opzionale"],correct:1,category:"tecnico",ref:"Allegato V 2.5[1]"},
      {id:23,question:"Carrelli devono avere dispositivo per:",options:["A) Solo acceleratore","B) Evitare messa in moto non autorizzata[6]","C) Solo clacson","D) Luci"],correct:1,category:"tecnico",ref:"Allegato V 2.6[6]"},
      {id:24,question:"Piani inclinati: dispositivo arresto rottura quando:",options:["A) Sempre","B) Necessario per lunghezza/pendenza/velocità[1]","C) >45°","D) Mai"],correct:1,category:"tecnico",ref:"Allegato V 2.11[1]"},
      {id:25,question:"Coefficiente sicurezza MINIMO funi metalliche:",options:["A) 4[1]","B) 6","C) 8","D) 10"],correct:0,category:"tecnico",ref:"Allegato V 3.1.11[1]"},
      {id:26,question:"Coefficiente sicurezza catene sollevamento:",options:["A) 4","B) 5[1]","C) 6","D) 8"],correct:1,category:"tecnico",ref:"Allegato V 3.1.11[1]"},
      {id:27,question:"Tamponi arresto estremità corsa altezza:",options:["A) 1/2 diametro ruote","B) 6/10 diametro ruote[1]","C) Diametro ruote","D) Opzionale"],correct:1,category:"tecnico",ref:"Allegato V 3.2.2[1]"},
      {id:28,question:"Posti manovra devono essere:",options:["A) Raggiungibili senza pericolo[6]","B) Solo illuminati","C) Opzionali","D) Con scala"],correct:0,category:"tecnico",ref:"Allegato V 3.1.13[6]"},
      {id:29,question:"Interruzione energia: mezzi sollevamento devono:",options:["A) Arresto automatico[6]","B) Riavvio auto","C) Solo allarme","D) Nessun dispositivo"],correct:0,category:"tecnico",ref:"Allegato V 3.1.6[6]"},
      {id:30,question:"Apparecchi vite senza fine: impedire:",options:["A) Rotazione eccessiva[1]","B) Solo avvolgimento","C) Movimento laterale","D) Nessuna limitazione"],correct:0,category:"tecnico",ref:"Allegato V 3.1.12[1]"},
      {id:31,question:"Carrelli alzata >1,80m richiedono:",options:["A) Tettuccio protezione (anche semovibile)[6]","B) Solo cinture","C) Paraurti","D) Nessuna protezione"],correct:0,category:"tecnico",ref:"Normativa tecnica[6]"},
      {id:32,question:"Parti in movimento alla portata operatore:",options:["A) Devono essere protette da cesoiamento[6]","B) Lasciate libere","C) Solo segnalate","D) Opzionali"],correct:0,category:"tecnico",ref:"Allegato V[6]"},
      {id:33,question:"Dispositivi frenatura proporzionati a:",options:["A) Solo velocità","B) Portata nominale[1]","C) Solo peso","D) Nessuna proporzione"],correct:1,category:"tecnico",ref:"Allegato V 3.1.5[1]"},
      {id:34,question:"Segnali manovre devono essere:",options:["A) Opzionali","B) Chiaramente leggibili con avvisi[6]","C) Solo verbali","D) Non necessari"],correct:1,category:"tecnico",ref:"Allegato V 3.1.15[6]"},
      {id:35,question:"Stabilità attrezzature durante impiego:",options:["A) Garantita in tutte condizioni prevedibili[6]","B) Solo su piano","C) Opzionale","D) Solo carica"],correct:0,category:"tecnico",ref:"Allegato VI[6]"},
      {id:36,question:"Sollevamento persone permesso SOLO con:",options:["A) Qualsiasi carrello","B) Attrezzature/accessori previsti[6]","C) Sempre vietato","D) Solo muletti"],correct:1,category:"tecnico",ref:"Allegato VI[6]"},
      {id:37,question:"Carrello impilatore telescopico: rotazione max:",options:["A) 5° asse longitudinale[6]","B) 10°","C) 15°","D) Nessun limite"],correct:0,category:"tecnico",ref:"Definizione tecnica[6]"},
      {id:38,question:"Abitacolo carrelli: protezione conducente:",options:["A) Adeguata[6]","B) Opzionale","C) Solo cinture","D) Solo tettuccio"],correct:0,category:"tecnico",ref:"Normativa[6]"},
      {id:39,question:"Attrezzature smontabili/mobili stabilità:",options:["A) Durante tutto impiego[6]","B) Solo montaggio","C) Solo carico","D) Opzionale"],correct:0,category:"tecnico",ref:"Allegato VI[6]"},
      {id:40,question:"Scelta attrezzature in base a:",options:["A) Solo portata","B) Natura/forma/volume carichi + condizioni[6]","C) Solo prezzo","D) Solo marca"],correct:1,category:"tecnico",ref:"Allegato VI[6]"},
      {id:41,question:"Organi comando devono impedire:",options:["A) Messa in moto accidentale[6]","B) Solo uso non autorizzato","C) Entrambi A+B","D) Nessuno"],correct:2,category:"tecnico",ref:"Allegato V 3.1.14[6]"},
      {id:42,question:"Per carrelli con conducente a bordo rischio ribaltamento limitato:",options:["A) Solo con cabina","B) Cabina O protezioni equivalenti[9]","C) Nessuna protezione","D) Solo velocità ridotta"],correct:1,category:"tecnico",ref:"Allegato V[9]"},
      {id:43,question:"Funi metalliche coefficiente sicurezza:",options:["A) ≥4[1]","B) ≥6","C) ≥8","D) ≥10"],correct:0,category:"tecnico",ref:"Allegato V[1]"},
      {id:44,question:"Dispositivi sicurezza piani inclinati:",options:["A) Sempre","B) Quando necessario[1]","C) Mai","D) Solo >30°"],correct:1,category:"tecnico",ref:"Allegato V 2.11[1]"},
      {id:45,question:"Mezzi sollevamento interruzione corrente:",options:["A) Arresto automatico[6]","B) Continuano","C) Riavvio","D) Solo allarme"],correct:0,category:"tecnico",ref:"Allegato V[6]"},
      {id:46,question:"Posti comando raggiungibili:",options:["A) Senza pericolo[6]","B) Con difficoltà","C) Solo con scala","D) Opzionali"],correct:0,category:"tecnico",ref:"Allegato V[6]"},
      {id:47,question:"Tamponi corsa altezza min:",options:["A) 6/10 diametro ruote[1]","B) 1/2","C) 1/4","D) Opzionale"],correct:0,category:"tecnico",ref:"Allegato V[1]"},
      {id:48,question:"Vite senza fine: limitare:",options:["A) Rotazione eccessiva[1]","B) Velocità","C) Solo carico","D) Nessun limite"],correct:0,category:"tecnico",ref:"Allegato V[1]"},
      {id:49,question:"Freni proporzionati a:",options:["A) Portata[1]","B) Velocità","C) Peso proprio","D) Lunghezza"],correct:0,category:"tecnico",ref:"Allegato V[1]"},
      {id:50,question:"Segnaletica manovre:",options:["A) Leggibile/avvisi[6]","B) Solo pittogrammi","C) Verbale","D) Opzionale"],correct:0,category:"tecnico",ref:"Allegato V[6]"},
      {id:51,question:"Protezioni cesoiamento:",options:["A) Parti movimento[6]","B) Solo pulegge","C) Solo catene","D) Nessuna"],correct:0,category:"tecnico",ref:"Normativa[6]"},
      {id:52,question:"Tettuccio alzata >:",options:["A) 1,80m[6]","B) 2m","C) 1,5m","D) Opzionale"],correct:0,category:"tecnico",ref:"Normativa[6]"},
      {id:53,question:"Stabilità condizioni:",options:["A) Tutte prevedibili[6]","B) Solo normali","C) Solo caricate","D) Solo piano"],correct:0,category:"tecnico",ref:"Allegato VI[6]"},
      {id:54,question:"Sollevamento persone:",options:["A) Solo attrezzature specifiche[6]","B) Tutti carrelli","C) Vietato sempre","D) Solo muletti"],correct:0,category:"tecnico",ref:"Allegato VI[6]"},
      {id:55,question:"Scelta attrezzature:",options:["A) Natura carichi/condizioni[6]","B) Solo portata","C) Solo altezza","D) Solo marca"],correct:0,category:"tecnico",ref:"Allegato VI[6]"},
      {id:56,question:"Rotazione impilatore telescopico:",options:["A) ≤5°[6]","B) ≤10°","C) ≤15°","D) Libera"],correct:0,category:"tecnico",ref:"Definizione[6]"},
      {id:57,question:"Abitacolo:",options:["A) Protezione adeguata[6]","B) Opzionale","C) Solo cinture","D) Solo tettuccio"],correct:0,category:"tecnico",ref:"Normativa[6]"},
      {id:58,question:"Messa in moto accidentale:",options:["A) Organi protetti[6]","B) Solo chiave","C) Solo password","D) Nessuna protezione"],correct:0,category:"tecnico",ref:"Allegato V[6]"},
      {id:59,question:"Carico sbalzo equilibrato da:",options:["A) Massa carrello[6]","B) Contropeso esterno","C) Solo forche","D) Peso carico"],correct:0,category:"tecnico",ref:"Definizione[6]"},
      {id:60,question:"Direttiva macchine recepita:",options:["A) DPR 459/1996[2]","B) DPR 547/1955","C) D.Lgs 17/2010","D) Solo CE"],correct:0,category:"tecnico",ref:"DPR 459/1996[2]"},

      // ===== MODULO PRATICO-SICUREZZA (40 domande) =====
      {id:61,question:"Prima dell'uso verificare:",options:["A) Solo carburante","B) Assenza vizi palesi D.Lgs 81/08[2]","C) Solo luci","D) Colore"],correct:1,category:"pratico",ref:"Art.71[2]"},
      {id:62,question:"Durante movimento ridurre collisioni:",options:["A) Solo tra carrelli","B) Movimento simultaneo[1]","C) Solo pedoni","D) Nessun rischio"],correct:1,category:"pratico",ref:"Allegato V[1]"},
      {id:63,question:"Trasporto persone piani inclinati:",options:["A) Sempre vietato[1]","B) Sempre consentito","C) Solo <30°","D) Velocità bassa"],correct:0,category:"pratico",ref:"Allegato V 2.11[1]"},
      {id:64,question:"Manutenzione periodica responsabilità:",options:["A) Datore di lavoro art.71[3]","B) Solo RSPP","C) Solo manutentore","D) Lavoratore"],correct:0,category:"pratico",ref:"Art.71[3]"},
      {id:65,question:"Carrelli pre-1996 verificare extra perché:",options:["A) Mancano requisiti moderni[2]","B) Troppo veloci","C) Consumano troppo","D) Colore diverso"],correct:0,category:"pratico",ref:"Buone prassi[2]"},
      {id:66,question:"Addetto formato conosce:",options:["A) Solo guida","B) Rischi specifici attrezzature art.73[1]","C) Solo manutenzione","D) Programmazione"],correct:1,category:"pratico",ref:"Art.73[1]"},
      {id:67,question:"Valutazione rischi carrelli include:",options:["A) Solo ribaltamento","B) Tutte fasi impiego[2]","C) Solo carico","D) Solo pedoni"],correct:1,category:"pratico",ref:"Buone prassi[2]"},
      {id:68,question:"Carrello usato come gru/cestello:",options:["A) Diventa gru, denuncia INAIL[7]","B) Nessun problema","C) Solo se >3t","D) Sempre vietato"],correct:0,category:"pratico",ref:"Buone prassi[7]"},
      {id:69,question:"Controllo visivo giornaliero include:",options:["A) Solo gomme","B) Anomalie generali funzionamento[2]","C) Solo portata","D) Solo forche"],correct:1,category:"pratico",ref:"Buone prassi[2]"},
      {id:70,question:"Zone pedonali: carrelli devono:",options:["A) Ridurre velocità","B) Sempre precedere pedoni","C) Nessuna regola","D) Suonare sempre"],correct:0,category:"pratico",ref:"Buone prassi"},
      {id:71,question:"Carico instabile: comportamento corretto:",options:["A) Sollevare comunque","B) Non trasportare, segnalare[2]","C) Aumentare velocità","D) Ridurre portata"],correct:1,category:"pratico",ref:"Buone prassi[2]"},
      {id:72,question:"Sosta carrello:",options:["A) Forche a terra, freno, chiave via","B) Forche alzate","C) Su pendenza","D) Motore acceso"],correct:0,category:"pratico",ref:"Buone prassi"},
      {id:73,question:"Passaggio ostacoli bassi:",options:["A) Abbassare forche","B) Alzare carico","C) Accelerare","D) Suonare"],correct:0,category:"pratico",ref:"Pratiche sicure"},
      {id:74,question:"Pendenza massima consigliata:",options:["A) 10-15% a vuoto, 5-8% carico","B) 30%","C) Sempre piano","D) 45%"],correct:0,category:"pratico",ref:"Buone prassi"},
      {id:75,question:"Distanza sicurezza da pedoni:",options:["A) Min 2-3 metri","B) 50cm","C) Nessuna distanza","D) 10m"],correct:0,category:"pratico",ref:"Norme sicurezza"},
      {id:76,question:"Manovre in retromarcia:",options:["A) Sempre con segnalatore acustico","B) Solo se invisibile","C) Mai","D) Velocità massima"],correct:0,category:"pratico",ref:"Pratiche"},
      {id:77,question:"Carico fuori centro:",options:["A) Instabile, non trasportare","B) Compensa sterzo","C) Aumenta velocità","D) Sempre ok"],correct:0,category:"pratico",ref:"Sicurezza"},
      {id:78,question:"Pavimento irregolare:",options:["A) Ridurre velocità drasticamente","B) Accelerare","C) Alzare carico","D) Ignorare"],correct:0,category:"pratico",ref:"Buone prassi"},
      {id:79,question:"Vestiario personale durante guida:",options:["A) Cappotto largo vietato","B) Sempre cappotto","C) Nessuna regola","D) Solo casco"],correct:0,category:"pratico",ref:"Norme"},
      {id:80,question:"Segnaletica orizzontale aree muletti:",options:["A) Obbligatoria","B) Opzionale","C) Solo verticale","D) Non necessaria"],correct:0,category:"pratico",ref:"Pratiche"},
      {id:81,question:"Frecce di manovra visibili fino a:",options:["A) 20m","B) 5m","C) 50m","D) Non specificato"],correct:0,category:"pratico",ref:"Buone prassi"},
      {id:82,question:"Radiotrasmittente uso:",options:["A) Solo guida con una mano","B) Vietata guida","C) Sempre ok","D) Solo emergenze"],correct:1,category:"pratico",ref:"Sicurezza"},
      {id:83,question:"Sosta su piano inclinato:",options:["A) Sempre vietata","B) Con blocca ruote","C) Sempre ok","D) Motore acceso"],correct:0,category:"pratico",ref:"Pratiche"},
      {id:84,question:"Controllo freni prima uso:",options:["A) Obbligatorio","B) Opzionale","C) Solo manutentore","D) Mai"],correct:0,category:"pratico",ref:"Controlli"},
      {id:85,question:"Forche danneggiate:",options:["A) Segnalare immediatamente","B) Usare comunque","C) Saldare","D) Ignorare"],correct:0,category:"pratico",ref:"Sicurezza"},
      {id:86,question:"Velocità corsie strette:",options:["A) <5 km/h","B) 20 km/h","C) Nessun limite","D) 10 km/h"],correct:0,category:"pratico",ref:"Buone prassi"},
      {id:87,question:"Attraversamento porte:",options:["A) Suonare + velocità ridotta","B) Velocità normale","C) Sempre retromarcia","D) Ignorare"],correct:0,category:"pratico",ref:"Pratiche"},
      {id:88,question:"Carico oscilla:",options:["A) Fermarsi immediatamente","B) Accelerare","C) Sterzare bruscamente","D) Continuare"],correct:0,category:"pratico",ref:"Sicurezza"},
      {id:89,question:"Zone con pedoni:",options:["A) Precedono sempre muletti","B) Muletti precedono","C) Uguale diritto","D) Nessuna priorità"],correct:0,category:"pratico",ref:"Norme"},
      {id:90,question:"Pendenza scarico:",options:["A) Sempre retromarcia","B) Avanti se visibile","C) Mai pendenza","D) Sempre avanti"],correct:0,category:"pratico",ref:"Buone prassi"},
      {id:91,question:"Cellulare durante guida:",options:["A) Sempre vietato","B) Solo vivavoce","C) Sempre ok","D) Solo emergenze"],correct:0,category:"pratico",ref:"Sicurezza"},
      {id:92,question:"Gomme sgonfie:",options:["A) Segnalare immediatamente","B) Continuare piano","C) Gonfiare da soli","D) Ignorare"],correct:0,category:"pratico",ref:"Controlli"},
      {id:93,question:"Rampe carico/scarico:",options:["A) Velocità ridotta + forche basse","B) Velocità normale","C) Sempre retromarcia","D) Mai usare"],correct:0,category:"pratico",ref:"Pratiche"},
      {id:94,question:"Vetri abitacolo sporchi:",options:["A) Pulire prima uso","B) Continuare","C) Solo interno","D) Ignorare"],correct:0,category:"pratico",ref:"Sicurezza"},
      {id:95,question:"Carico troppo alto visibilità:",options:["A) Usare specchi retrovisori","B) Mai trasportare","C) Sterzare piano","D) Accelerare"],correct:0,category:"pratico",ref:"Buone prassi"},
      {id:96,question:"Fuori servizio carrello:",options:["A) Segnaletica + chiave via","B) Lasciare acceso","C) Parcheggiare ovunque","D) Solo freno"],correct:0,category:"pratico",ref:"Pratiche"},
      {id:97,question:"Battistrada gomme usurato:",options:["A) Segnalare manutentore","B) Continuare","C) Cambiare da soli","D) Nessun problema"],correct:0,category:"pratico",ref:"Controlli"},
      {id:98,question:"Passaggio pedoni:",options:["A) Fermarsi + suonare","B) Continuare piano","C) Accelerare","D) Ignorare"],correct:0,category:"pratico",ref:"Sicurezza"},
      {id:99,question:"Sosta carrello carico:",options:["A) Sempre forche a terra","B) Forche alzate","C) Su pendenza","D) Motore acceso"],correct:0,category:"pratico",ref:"Buone prassi"},
      {id:100,question:"Fine turno: carrello deve essere:",options:["A) Parcheggiato area designata + controlli","B) Lasciato ovunque","C) Motore acceso","D) Forche alzate"],correct:0,category:"pratico",ref:"Procedure"}
    ];
