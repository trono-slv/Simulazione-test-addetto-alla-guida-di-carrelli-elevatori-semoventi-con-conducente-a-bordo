// PANIERE DOMANDE
// ============================================
const QUESTION_BANK = [
{
id: 1,
question: "Quale articolo del D.Lgs. 81/2008 disciplina l'obbligo di formazione per gli addetti alla conduzione di attrezzature di lavoro?",
options: [
"Art. 18",
"Art. 37",
"Art. 71",
"Art. 73"
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
"Art. 36 D.Lgs. 81/2008",
"Art. 73 comma 5 D.Lgs. 81/2008",
"Art. 18 D.Lgs. 81/2008",
"Allegato IV"
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
" 8 ore",
" 10 ore",
" 12 ore",
" 16 ore"
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
" Carrello elevatore",
" Gru a torre",
" Piattaforma elevabile",
" Transpallet manuale"
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
" L’operatore",
" Il datore di lavoro",
" Il RLS",
" Il preposto"
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
" Il colore del mezzo",
" Il triangolo di stabilità",
" Il tipo di carburante",
" Il numero di fari"
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
" Curva affrontata ad alta velocità",
" Uso del lampeggiante",
" Carico leggero",
" Motore acceso al minimo"
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
" Utilizzata sempre",
" Usata solo su richiesta",
" Rimossa",
" Facoltativa"
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
" Iniziare immediatamente il lavoro",
" Effettuare controlli visivi e funzionali",
" Controllare solo il carburante",
" Verificare solo le forche"
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
" Il più alto possibile",
" A circa 10–15 cm dal suolo",
" Oscillante",
" Inclinato in avanti"
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
" Utilizzarlo secondo formazione e istruzioni ricevute",
" Modificarlo se necessario",
" Delegarne l’uso a colleghi non formati",
" Ignorare le procedure aziendali"
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
" Il contrappeso",
" Il volante",
" Il clacson",
" Il sedile"
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
" Maggiore stabilità",
" Nessun effetto",
" Ribaltamento in avanti",
" Riduzione dei consumi"
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
" Sul libretto personale del lavoratore",
" Sulla targhetta identificativa del mezzo",
" Sul casco dell’operatore",
" Sul DVR"
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
" Sempre",
" Solo con apposita piattaforma conforme",
" Mai in nessun caso",
" Solo per brevi periodi"
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
" Procedere in retromarcia",
" Accelerare",
" Guidare con forche alte",
" Spegnere il lampeggiante"
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
" Lavoratore",
" RLS",
" Datore di lavoro",
" Cliente"
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
" È consentito",
" È vietato perché fonte di distrazione",
" È obbligatorio",
" È facoltativo"
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
" Sollevate",
" Abbassate completamente a terra",
" In posizione intermedia",
" Inclinate in avanti"
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
" Continuare il lavoro",
" Tentare riparazioni improvvisate",
" Segnalare immediatamente al responsabile",
" Ignorare il problema"
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
" Con il carico rivolto verso valle",
" Con il carico rivolto verso monte",
" In folle",
" Trasversalmente"
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
" Accelerare",
" Suonare il clacson e rallentare",
" Procedere senza segnalazioni",
" Spegnere il lampeggiante"
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
" Altezza e peso del carico",
" Colore del carrello",
" Tipo di sedile",
" Marca del mezzo"
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
" Solo in caso di guasto",
" Secondo le indicazioni del fabbricante",
" A discrezione dell’operatore",
" Una volta all’anno senza criteri"
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
" Sì, se per breve durata",
" Solo con autorizzazione verbale",
" No, salvo utilizzo di piattaforma conforme",
" Sempre"
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
" Solo per gli usi previsti dal fabbricante",
" Per qualsiasi attività di sollevamento",
" Come mezzo di traino universale",
" Senza limiti operativi"
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
" DVR",
" Manuale d’uso e manutenzione",
" Attestato del lavoratore",
" Registro presenze"
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
" Maggiore stabilità",
" Riduzione del rischio",
" Spostamento del baricentro e aumento del rischio ribaltamento",
" Nessuna conseguenza"
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
" Esperto informalmente",
" Autorizzato e formato",
" Solo maggiorenne",
" In possesso di patente B"
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
" Saltare fuori",
" Restare seduto con cintura allacciata",
" Alzarsi in piedi",
" Abbandonare il volante"
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
" Controlli preliminari",
" Attività facoltative",
" Compiti del cliente",
" Operazioni vietate"
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
" Nessuna conseguenza",
" Sanzioni e responsabilità penali",
" Solo richiamo verbale",
" Aumento produttività"
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
" In ambienti ventilati",
" In qualsiasi luogo",
" In ufficio",
" In prossimità di fiamme libere"
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
" Consentito temporaneamente",
" Vietato",
" Raccomandato",
" Facoltativo"
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
" Illuminare il magazzino",
" Segnalare la presenza del mezzo",
" Migliorare la velocità",
" Ridurre il consumo"
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
" Con pezzi non originali qualsiasi",
" Con ricambi idonei secondo indicazioni del fabbricante",
" Dall’operatore senza competenze",
" Senza spegnere il mezzo"
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
" Sempre",
" Solo se previsto dal fabbricante",
" Mai",
" A discrezione del lavoratore"
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
" Solo la velocità massima",
" Procedure operative e rischi specifici",
" Solo il peso del mezzo",
" Il numero di telaio"
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
" Regole definite dall’azienda",
" Nessuna regola",
" Solo indicazioni verbali",
" Preferenze personali"
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
" No",
" Solo verbalmente",
" Sì, con registrazione dei controlli",
" Solo in caso di incidente"
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
" Continuare la ricarica",
" Intervenire solo dopo il turno",
" Allontanarsi in sicurezza e attivare le procedure di emergenza",
" Spegnere con acqua"
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
" Solo con acqua",
" Con estintore idoneo (polvere ABC o CO2)",
" Con sabbia umida",
" Senza spegnere il mezzo"
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
" Solo teoria online",
" Solo prova pratica",
" Modulo teorico e pratico con verifica finale",
" Solo lettura del manuale"
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
" 1 anno",
" 3 anni",
" 5 anni",
" Illimitata"
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
" Ogni 5 anni",
" Ogni anno",
" Solo in caso di incidente",
" Mai"
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
" Solo l’operatore",
" Il datore di lavoro o il preposto",
" Il manutentore",
" Il collega più anziano"
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
" Cedibile",
" Aziendale",
" Personale e nominativo",
" Facoltativo"
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
" Solo provarlo",
" Ricevere informazione e addestramento specifico",
" Guidarlo lentamente",
" Chiedere ai colleghi"
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
"Usando mezzi endotermici senza ventilazione",
"Preferendo carrelli elettrici o garantendo adeguato ricambio d’aria",
"Accelerando al massimo",
"Tenendo porte chiuse"
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
" Solo in caso di guasto",
" Prima dell’inizio del turno",
" Una volta al mese",
" Solo dal manutentore"
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
" Consultando la targhetta di portata applicata dal costruttore",
" Stimando il peso del carico visivamente",
" Consultando il libretto di circolazione",
" In base al colore del carrello"
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
") Proseguire la marcia",
") Arrestare immediatamente il mezzo in sicurezza e segnalare l’anomalia",
") Accelerare per stabilizzare il mezzo",
") Limitarsi a rallentare"
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
") Saltare direttamente nella cabina",
") Utilizzare il gradino antiscivolo e il maniglione di presa",
") Salire esclusivamente dal lato sinistro",
") Accedere da dietro il mezzo"
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
") Sempre",
") Quando il carico limita o impedisce la visibilità anteriore",
") Solo in salita",
") Solo durante le ore notturne"
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
") La velocità massima consentita",
") La portata nominale del carrello",
") Il numero di matricola",
") L’anno di fabbricazione"
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
") Sollevato alla massima altezza",
") Basso e inclinato all’indietro",
") Inclinato in avanti",
") Posizionato lateralmente"
],
correct: 1,
category: "stabilità_operativa",
ref: "-",
suggestion: "Il carico deve essere mantenuto basso (circa 15-20 cm da terr ) e inclinato verso il montante per garantire stabilità."
},

{
id: 57,
question: "Qual è l’effetto di un carico decentrato lateralmente?",
options: [
") Aumenta la stabilità",
") Riduce la stabilità trasversale aumentando il rischio di ribaltamento",
") Non produce effetti",
") Aumenta la velocità del mezzo"
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
") Verificare che il peso rientri nella portata indicata",
") Sollevare immediatamente",
") Chiedere al collega più vicino",
") Attivare il clacson"
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
") Inclinare in avanti e depositare rapidamente",
") Avvicinarsi con montante verticale, depositare gradualmente e ritirare le forche",
") Inclinare indietro prima del deposito",
") Procedere in retromarcia"
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
") Procedere comunque",
") Utilizzare un segnalatore a terra",
") Accelerare per liberare il corridoio",
") Procedere a zig-zag"
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
") Conforme ai requisiti di sicurezza e idonea all’uso previsto",
") Economica",
") Di colore visibile",
") Di recente acquisto"
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
") Autocertificazione del lavoratore",
") Attestato di abilitazione rilasciato da ente formatore",
") Contratto di lavoro",
") Documento di identità"
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
") Sostituire il datore di lavoro",
") Vigilare sull’osservanza delle procedure di sicurezza",
") Effettuare la manutenzione tecnica",
") Rilasciare attestati"
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
") Nessuna precauzione",
") Adeguata ventilazione",
") Porte chiuse",
") Velocità elevata"
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
") Solo rischi generici",
") Rischi connessi all’uso delle attrezzature di lavoro",
") Solo rischi incendio",
") Solo rischi elettrici"
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
") Solo online",
") In presenza con prova operativa",
") Facoltativamente",
") Solo dopo un incidente"
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
") Nessuna conseguenza",
") Sanzioni penali e amministrative per il datore di lavoro",
") Solo richiamo scritto",
") Sospensione automatica dell’azienda"
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
") Effettuare controllo visivo e funzionale del mezzo",
") Iniziare subito il lavoro",
") Delegare il controllo",
") Verificare solo il carburante"
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
") Con movimenti bruschi",
") Con manovre progressive e controllate",
") Alla massima velocità",
") Con inclinazione in avanti"
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
") Non segnalata",
") Segnalata e ventilata",
") Utilizzata come deposito",
") Accessibile a chiunque"
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
") Decorare l’ambiente",
") Indicare rischi e percorsi sicuri",
") Identificare i turni",
") Segnalare ferie"
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
") Rifiutare ogni incarico",
") Utilizzare correttamente le attrezzature",
") Modificare il mezzo se necessario",
") Sostituire il manutentore"
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
") Solo nell’azienda di rilascio",
") Su tutto il territorio nazionale",
") Solo nella regione di rilascio",
") Solo nel settore privato"
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
") Proseguire senza modifiche",
") Valutare il rischio e adeguare la velocità",
") Accelerare",
") Disattivare i dispositivi luminosi"
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
") Operatore",
") Datore di lavoro",
") Cliente",
") RLS"
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
") Sì, se firma presa visione del DVR",
") Solo dopo verifica abilitazione e integrazione informazione/addestramento sulle condizioni aziendali",
") Sì, in area a basso rischio per un periodo di prova",
") Sì, previa verifica con test scritto interno"
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
") Solo prova pratica generica",
") Solo modulo tecnico",
") Moduli giuridico-tecnico-pratico con verifica finale e tracciabilità documentale",
") Addestramento interno con attestato firmato dal preposto"
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
") Mancanza indicazione limite velocità",
") Mancanza assegnazione nominativa mezzo",
") Assenza bollino RLS",
") Mancato mantenimento requisiti di sicurezza e tracciabilità controlli"
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
") Compensare con maggiore attenzione",
") Segnalare solo se presenti pedoni",
") Segnalare immediatamente e attenersi alle istruzioni ricevute",
") Riparare autonomamente"
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
") Annotare e rinviare",
") Intervenire immediatamente e, se necessario, interrompere l’attività",
") Sostituire l’operatore",
") Limitarsi a richiamo verbale generico"
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
"  Solo normativa generale",
" ) Solo portata mezzo",
" ) Solo manuale costruttore",
" ) Rischi specifici del luogo e procedure aziendali"
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
"  Standard identica per tutti",
" ) Limitata a emergenze",
" ) Adeguata ai rischi della mansione secondo Accordi vigenti",
" ) Solo con quiz finale"
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
" ) Solo dall’attenzione del mulettista",
" ) Solo dai DPI pedoni",
" ) Solo da procedura scritta",
" ) Da misure organizzative, tecniche e vigilanza del datore/dirigenti"
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
" ) Nessuna azione",
" ) Aggiornamento informazione/addestramento mirato",
" ) Rifare intero corso",
" ) Solo firma presenza"
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
" ) Nessun rischio",
" ) Solo rilievo formale minore",
" ) Impossibilità dimostrare conformità requisiti minimi",
" ) Problemi solo fiscali"
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
" ) Emissione CO",
" ) Sviluppo idrogeno e rischio innesco",
" ) Congelamento elettrolita",
" ) Solo arco interno"
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
" ) Interasse",
" ) Altezza da suolo",
" ) Larghezza forche",
" ) Distanza orizzontale centro di carico"
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
" ) Sterzo più morbido",
" ) Portata maggiore",
" ) Aumentano velocità ed energia cinetica",
" ) Frenata sempre perfetta"
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
" ) Riduzione portata automatica",
" ) Divieto clacson",
" ) Freni meno efficienti",
" ) Emissioni e rischio innesco"
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
" ) Migliora stabilità",
" ) Non incide",
" ) Peggiora stabilità per aumento baricentro",
" ) Migliora frenata"
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
" ) Inforcare parzialmente",
" ) Procedere lentamente",
" ) Sollevare più in alto",
" ) Ripristinare sicurezza unità di carico prima movimentazione"
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
" ) Tipo pneumatico solo",
" ) Freno stazionamento",
" ) Velocità, massa, aderenza, stato impianto frenante",
" ) Tipo batteria"
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
" ) Ruote libere",
" ) Carico alto",
" ) Sterzare su pendenza",
" ) Velocità ridotta e rispetto istruzioni costruttore"
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
" ) Ammissibile temporaneamente",
" ) Accettabile per urgenza",
" ) Vietato: occorre verifica tecnica autorizzata",
" ) Preferibile sostituire mezzo"
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
" ) Carico centrato e curva ampia",
" ) Carico alto ma lento",
" ) Carico instabile e curva stretta veloce",
" ) Carico centrato e lento"
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
" ) Solo il livello carburante",
" ) Solo la pulizia della cabina",
" ) Controllo visivo e funzionale di freni, sterzo, dispositivi di sicurezza e stato generale",
" ) Nessuna verifica se il mezzo ha lavorato il giorno prima"
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
" ) Solo sull’operatore",
" ) Solo sul manutentore esterno",
" ) Sul datore di lavoro che deve garantirla",
" ) Sul RLS"
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
" ) Procedere rapidamente",
" ) Avvisare verbalmente e passare comunque",
" ) Evitare il transito e interdire l’area sottostante",
" ) Alzare ulteriormente il carico"
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
" ) Decorare l’area",
" ) Separare percorsi pedonali e carrabili",
" ) Indicare solo limiti di velocità",
" ) Indicare turni di lavoro"
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
" ) La velocità massima consentita",
" ) L’area entro cui deve rimanere il baricentro per evitare ribaltamento",
" ) L’angolo massimo di sterzata",
" ) L’altezza massima di sollevamento"
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
" ) Alte per migliorare visibilità",
" ) Inclinate in avanti",
" ) Basse (15-20 cm) e leggermente inclinate all’indietro",
" ) Appoggiate completamente a terra"
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
" ) Solo maggiore consumo carburante",
" ) Rischio di ribaltamento e cedimento strutturale",
" ) Nessun effetto immediato",
" ) Migliore stabilità"
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
" ) Aumentare velocità per superare ostacoli",
" ) Procedere lentamente mantenendo carico basso",
" ) Sollevare il carico per evitare urti",
" ) Guidare in retromarcia costante"
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
" ) Solo su pendenze elevate",
" ) Solo a fine turno",
" ) Ogni volta che si lascia il mezzo incustodito",
" ) Solo in area esterna"
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
" ) Registro infortuni",
" ) DVR aziendale",
" ) Libro unico del lavoro",
" ) Manuale del costruttore"
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
" ) Operare vicino a fonti di calore",
" ) Verificare assenza fiamme e perdite",
" ) Accendere il motore per test immediato",
" ) Usare utensili improvvisati"
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
" ) Solo sanzione disciplinare interna",
" ) Aumento rischio schiacciamento in caso di ribaltamento",
" ) Migliore libertà di movimento",
" ) Nessun rischio"
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
" ) Si cambia operatore",
" ) Dopo evento anomalo o incidente significativo",
" ) Ogni settimana",
" ) Solo a fine anno"
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
" ) Su simulatore esclusivamente",
" ) Su mezzo reale della categoria prevista",
" ) Solo con video dimostrativi",
" ) Solo tramite affiancamento informale"
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
" ) Riprendere subito il lavoro",
" ) Segnalare e verificare stabilità struttura prima di proseguire",
" ) Spostare manualmente lo scaffale",
" ) Ignorare se non vi sono danni visibili"
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
" ) Cambia colore carrello",
" ) Introduce nuove attrezzature o modifiche organizzative rilevanti",
" ) Cambia turno operatore",
" ) Viene assunto un lavoratore stagionale"
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
" ) Solo richiamo verbale",
" ) Responsabilità penale per il datore di lavoro in caso di infortunio",
" ) Nessuna conseguenza",
" ) Solo sanzione amministrativa al lavoratore"
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
" ) Dispositivi medici",
" ) Attrezzature di lavoro",
" ) DPI",
" ) Impianti fissi"
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
" ) Solo in presenza del preposto",
" ) Sempre, rispettando procedure e istruzioni",
" ) Solo in caso di emergenza",
" ) Solo durante audit"
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
" ) Consentita se breve",
" ) Vietata perché distrae e aumenta rischio infortunio",
" ) Consentita con auricolare",
" ) Consentita a bassa velocità"
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
" ) Ignorata",
" ) Segnalata e corretta prima della movimentazione",
" ) Compensata aumentando velocità",
" ) Risolta con fari personali non autorizzati"
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
" ) Facoltativa",
" ) Parte del sistema di gestione sicurezza aziendale",
" ) Solo sindacale",
" ) Prevista solo per neoassunti"
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
" ) Velocità costante elevata",
" ) Manovre lente e controllo continuo degli ingombri",
" ) Forche alte",
" ) Sterzate brusche"
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
" ) Terminare il turno",
" ) Mettere fuori servizio il mezzo e segnalarlo",
" ) Ridurre solo velocità",
" ) Compensare con freno"
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
" ) Titolo I",
" ) Titolo VIII D.Lgs. 81/2008",
" ) Titolo X",
" ) Titolo III solo"
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
" ) È stanco ma vuole terminare lavoro",
" ) Ritiene sussista pericolo grave e immediato",
" ) Il collega lo chiede",
" ) Il turno è quasi finito"
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
" ) Solo infrazione amministrativa generica",
" ) Violazione degli obblighi del lavoratore",
" ) Nessuna violazione se non accade incidente",
" ) Responsabilità esclusiva del RSPP"
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
" ) Miglioramento automatico prestazioni",
" ) Alterazione caratteristiche sicurezza e necessità verifica tecnica",
" ) Nessuna variazione",
" ) Riduzione vibrazioni"
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
" ) Sempre con pallet",
" ) Solo con attrezzature certificate e procedure specifiche",
" ) Mai in nessun caso",
" ) Solo in emergenza"
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
" ) Solo formazione iniziale",
" ) Miglioramento continuo delle condizioni di sicurezza",
" ) Solo rispetto minimo legge",
" ) Solo controlli ispettivi"
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
        optionDiv.addEventListener('click', () => selectAnswer(option.originalIndex, randomize ));
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
                    optDiv.textContent += ' ❌ (Tua rispost )';
                } else {
                    optDiv.textContent += ' ✅ (Tua risposta - Corretta!)';
                }
            }
            
            // Mostra risposta corretta se sbagliata
            if (!answer.isCorrect && idx === answer.correctIndex) {
                optDiv.classList.add('correct-answer');
                optDiv.textContent += ' ✅ (Risposta Corrett )';
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
