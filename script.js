// PANIERE DOMANDE
// ============================================
const QUESTION_BANK = [
    {
        id: 1,
        question: "Secondo il D.Lgs. 81/2008, chi può condurre un carrello elevatore?",
        options: [
            "A) Qualsiasi lavoratore presente in magazzino",
            "B) Solo operatori formati e autorizzati specificamente",
            "C) Chiunque abbia la patente di guida B",
            "D) Solo dipendenti con anzianità superiore a 2 anni"
        ],
        correct: 1,
        category: "normativa",
        ref: "Art. 73 D.Lgs 81/2008",
        suggestion: "L'Art. 73 del D.Lgs 81/2008 stabilisce l'obbligo di formazione specifica per gli addetti alla conduzione di attrezzature di lavoro. L'Accordo Stato-Regioni del 22/02/2012 definisce i requisiti minimi: 12 ore totali di formazione (8 ore teoria + 4 ore pratica), con verifica finale e attestato di abilitazione."
    },
    {
        id: 2,
        question: "Prima di iniziare il turno di lavoro con il carrello, l'operatore deve:",
        options: [
            "A) Verificare solo il livello del carburante",
            "B) Effettuare un controllo visivo completo (freni, sterzo, forche, luci)",
            "C) Controllare esclusivamente la pressione delle gomme",
            "D) Non è necessario alcun controllo preliminare"
        ],
        correct: 1,
        category: "sicurezza",
        ref: "Art. 71 D.Lgs 81/2008",
        suggestion: "Il controllo giornaliero del carrello è un obbligo previsto dal D.Lgs 81/2008. Prima dell'uso, l'operatore deve verificare: efficienza dei freni, sterzo, clacson, luci di segnalazione, stato delle forche, livello fluidi e assenza di perdite. Eventuali anomalie vanno segnalate immediatamente e il mezzo non deve essere utilizzato fino alla riparazione."
    },
    {
        id: 3,
        question: "La capacità di carico nominale del carrello è indicata:",
        options: [
            "A) Nella targa identificativa del costruttore",
            "B) Nel libretto di istruzioni, ma non sul mezzo",
            "C) Solo nel contratto di acquisto",
            "D) Non è obbligatorio indicarla"
        ],
        correct: 0,
        category: "tecnica",
        ref: "D.Lgs 17/2010 - Direttiva Macchine",
        suggestion: "La targa identificativa (o diagramma di carico) deve essere permanentemente fissata sul carrello in posizione ben visibile. Indica la portata massima in relazione alla distanza del baricentro del carico e all'altezza di sollevamento. Superare i limiti indicati può causare ribaltamento del mezzo e gravi infortuni."
    },
    {
        id: 4,
        question: "Durante la marcia con carico, le forche devono essere:",
        options: [
            "A) Sempre sollevate alla massima altezza per migliore visibilità",
            "B) Mantenute basse (15-20 cm da terra) e inclinate leggermente indietro",
            "C) Parallele al terreno a qualsiasi altezza",
            "D) Sollevate solo quando si attraversano aree di lavoro"
        ],
        correct: 1,
        category: "tecnica",
        ref: "Norme UNI ISO 3691",
        suggestion: "Le forche vanno mantenute basse (15-20 cm dal suolo) per abbassare il baricentro e aumentare la stabilità del mezzo. L'inclinazione leggermente indietro evita lo scivolamento del carico durante il trasporto. La velocità deve essere ridotta in presenza di curve, passaggi stretti o pavimentazioni irregolari."
    },
    {
        id: 5,
        question: "L'abilitazione alla conduzione di carrelli elevatori ha validità:",
        options: [
            "A) Illimitata, senza necessità di aggiornamento",
            "B) 5 anni, con obbligo di aggiornamento quinquennale (4 ore)",
            "C) 3 anni, con corso completo da ripetere",
            "D) 10 anni, solo per carrelli diesel"
        ],
        correct: 1,
        category: "normativa",
        ref: "Accordo Stato-Regioni 22/02/2012",
        suggestion: "L'Accordo Stato-Regioni del 22/02/2012 prevede l'aggiornamento obbligatorio ogni 5 anni con un corso di almeno 4 ore. L'aggiornamento copre: novità normative, evoluzioni tecniche delle attrezzature, analisi di infortuni, buone pratiche di sicurezza. La mancata partecipazione comporta la decadenza dell'abilitazione."
    },
      {
    id: 1,
    question: "Secondo D.Lgs 81/2008 Titolo III Capo I, le attrezzature di lavoro devono essere:",
    options: [
      "A) Solo nuove",
      "B) Idonee alla salute/sicurezza e adeguate al lavoro",
      "C) Sempre noleggiate",
      "D) Senza marcatura CE"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Art. 70 D.Lgs 81/2008",
    suggestion: "Attenzione: l’Art. 70 disciplina soprattutto la conformità alle direttive di prodotto (es. marcatura CE) o, per attrezzature ante-direttive, ai requisiti dell’Allegato V. Il concetto di attrezzatura “idonea e adeguata al lavoro” è richiamato in modo esplicito anche dagli obblighi del datore di lavoro (Art. 71), che deve scegliere e mettere a disposizione attrezzature adatte e sicure."
  },
  {
    id: 2,
    question: "L'art.71 D.Lgs 81/2008 stabilisce che il datore di lavoro deve:",
    options: [
      "A) Solo acquistare attrezzature",
      "B) Assicurare idoneità e adeguatezza attrezzature",
      "C) Delegare tutto al RSPP",
      "D) Non fare verifiche"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Art. 71 D.Lgs 81/2008",
    suggestion: "L’Art. 71 impone al datore di lavoro di mettere a disposizione attrezzature conformi e adeguate, installate/impiegate secondo istruzioni, mantenute in efficienza e gestite con misure tecniche-organizzative (anche richiamate dall’Allegato VI). La responsabilità resta in capo al datore di lavoro anche se attività operative vengono affidate a soggetti incaricati."
  },
  {
    id: 3,
    question: "Per carrelli ante-Direttiva Macchine (pre-1996), si applicano i requisiti dell':",
    options: [
      "A) Solo libretto uso",
      "B) Allegato V D.Lgs 81/2008",
      "C) DPR 547/1955",
      "D) Nessuna norma"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Art. 70 c.2 + Allegato V D.Lgs 81/2008",
    suggestion: "Per attrezzature costruite/messa a disposizione prima delle norme di recepimento delle direttive di prodotto, il riferimento è l’Art. 70 comma 2: devono rispettare i requisiti generali di sicurezza dell’Allegato V. In pratica, vanno verificati e (se necessario) adeguati ripari, comandi, segnalazioni, stabilità e dispositivi di sicurezza."
  },
  {
    id: 4,
    question: "L'art.73 c.5 D.Lgs 81/2008 richiede per carrelli elevatori:",
    options: [
      "A) Solo formazione generica",
      "B) Abilitazione specifica (Accordo 22/02/2012)",
      "C) Nessuna abilitazione",
      "D) Solo addestramento pratico"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Art. 73 c.5 D.Lgs 81/2008",
    suggestion: "L’Art. 73 comma 5 prevede che alcune attrezzature (tra cui i carrelli elevatori) richiedano una specifica abilitazione definita tramite Accordo in Conferenza Stato‑Regioni. Nota: dal 24/05/2025 è in vigore l’Accordo Stato‑Regioni 17/04/2025 (Rep. 59/CSR), che aggiorna e unifica anche questi percorsi."
  },
  {
    id: 5,
    question: "I noleggiatori devono attestare conformità ai requisiti di:",
    options: [
      "A) Solo CE",
      "B) Allegato V D.Lgs 81/2008 al momento consegna",
      "C) Solo portata",
      "D) Nessun obbligo"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Art. 72 D.Lgs 81/2008",
    suggestion: "Chi vende/noleggia/concede in uso macchine “fuori” dal perimetro dell’Art. 70 comma 1 deve attestare, sotto responsabilità, la conformità all’Allegato V al momento della consegna. Se il noleggio/concessione è senza operatore, deve anche attestare buono stato e acquisire la dichiarazione del datore di lavoro sugli incaricati formati/abilitati."
  },
  {
    id: 6,
    question: "Le macchine CE devono essere utilizzate:",
    options: [
      "A) Senza verifiche",
      "B) Nei limiti del libretto uso e Allegato VI",
      "C) Sempre con modifiche",
      "D) Solo da esperti"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Art. 71 + Allegato VI D.Lgs 81/2008",
    suggestion: "Anche con marcatura CE, l’attrezzatura va usata secondo le istruzioni del fabbricante e con regole operative che riducano i rischi (Allegato VI: spazi, viabilità, uso corretto, divieti di impieghi impropri, ecc.). La CE non sostituisce manutenzione, controlli e formazione degli operatori."
  },
  {
    id: 7,
    question: "La verifica periodica carrelli è disciplinata dall':",
    options: [
      "A) Solo manuale uso",
      "B) Allegato VII D.Lgs 81/2008",
      "C) Nessuna verifica",
      "D) Circolare Ministeriale"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Allegato VII D.Lgs 81/2008 + DM 11/04/2011",
    suggestion: "Le verifiche periodiche riguardano le attrezzature elencate nell’Allegato VII e sono attuate secondo le modalità del DM 11/04/2011. Non tutti i carrelli elevatori “standard” rientrano sempre nell’Allegato VII: dipende dalla tipologia (es. alcune attrezzature di sollevamento specifiche sì)."
  },
  {
    id: 8,
    question: "Il venditore di carrelli deve fornire attestazione:",
    options: [
      "A) Solo fattura",
      "B) Conformità Allegato V D.Lgs 81/2008",
      "C) Solo CE",
      "D) Nessun documento"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Art. 72 D.Lgs 81/2008",
    suggestion: "L’obbligo di attestazione dell’Allegato V (Art. 72) si applica quando l’attrezzatura è stata costruita/messa in servizio al di fuori della disciplina dell’Art. 70 comma 1. Se invece è una macchina soggetta a direttive di prodotto, i documenti tipici sono dichiarazione di conformità, manuale, marcatura CE e istruzioni d’uso."
  },
  {
    id: 9,
    question: "L'Accordo Stato-Regioni 22/02/2012 disciplina:",
    options: [
      "A) Solo formazione teorica",
      "B) Abilitazione specifica carrelli elevatori",
      "C) Solo addestramento pratico",
      "D) Manutenzione"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Accordo 22/02/2012 (storico) / Accordo 17/04/2025 (vigente)",
    suggestion: "Lo storico Accordo del 22/02/2012 definiva contenuti e modalità dell’abilitazione per attrezzature ex Art. 73 c.5 (tra cui i carrelli). Dal 24/05/2025 è pubblicato in GU ed è in vigore l’Accordo 17/04/2025 (Rep. 59/CSR), che unifica e aggiorna i percorsi formativi, includendo anche le abilitazioni per attrezzature."
  },
  {
    id: 10,
    question: "Carrelli commissionatori >10m richiedono:",
    options: [
      "A) Formazione generica",
      "B) Abilitazione specifica art.73 c.5",
      "C) Nessuna formazione",
      "D) Solo patente muletti"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Art. 73 c.5 D.Lgs 81/2008",
    suggestion: "Se l’attrezzatura rientra tra quelle individuate dagli Accordi ex Art. 73 c.5, serve abilitazione specifica oltre a informazione/formazione/addestramento sul contesto reale di lavoro. L’altezza/impianto di utilizzo incide anche su procedure, valutazione rischi, e regole di viabilità interna."
  },
  {
    id: 11,
    question: "Il Datore di Lavoro verifica per macchine CE:",
    options: [
      "A) Solo marcatura",
      "B) Assenza vizi palesi + uso conforme",
      "C) Solo dichiarazione",
      "D) Nessuna verifica"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Art. 71 D.Lgs 81/2008",
    suggestion: "La verifica non si limita alla marcatura CE: il datore di lavoro deve valutare idoneità rispetto al lavoro, garantire installazione/uso secondo istruzioni, manutenzione e controlli nel tempo. È buona prassi verificare anche aspetti evidenti (integrità, dispositivi, segnalazioni, manuale presente e comprensibile) prima della messa in servizio."
  },
  {
    id: 12,
    question: "Le attrezzature sono definite nell'art.:",
    options: [
      "A) Art.69 D.Lgs 81/2008",
      "B) Art.70",
      "C) Art.71",
      "D) Art.73"
    ],
    correct: 0,
    category: "giuridico",
    ref: "Art. 69 D.Lgs 81/2008",
    suggestion: "L’Art. 69 fornisce le definizioni base del Titolo III, inclusa quella di “attrezzatura di lavoro” (macchina/apparecchio/utensile/impianto destinato a essere usato durante il lavoro). Questo inquadra anche i carrelli elevatori come attrezzature di lavoro."
  },
  {
    id: 13,
    question: "L'obbligo di formazione è previsto dall'art.:",
    options: [
      "A) Art.71",
      "B) Art.73 D.Lgs 81/2008",
      "C) Art.37",
      "D) Art.19"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Art. 73 D.Lgs 81/2008",
    suggestion: "L’Art. 73 disciplina informazione, istruzione, formazione e addestramento per l’uso delle attrezzature di lavoro. Si integra con gli obblighi generali di informazione/formazione (Artt. 36–37) e con quanto richiesto per attrezzature che necessitano abilitazione specifica (comma 5)."
  },
  {
    id: 14,
    question: "Aggiornamento abilitazione carrelli ogni:",
    options: [
      "A) 1 anno",
      "B) 5 anni (Accordo Stato-Regioni)",
      "C) 10 anni",
      "D) Mai"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Accordi Stato‑Regioni ex Art. 73 c.5",
    suggestion: "Gli Accordi in Conferenza Stato‑Regioni che regolano l’abilitazione ex Art. 73 c.5 prevedono anche una periodicità di aggiornamento (storicamente quinquennale). Verifica sempre il percorso applicabile secondo l’Accordo vigente (17/04/2025) e le eventuali disposizioni transitorie previste dal testo."
  },
  {
    id: 15,
    question: "Responsabile manutenzione attrezzature:",
    options: [
      "A) Solo RSPP",
      "B) Datore di lavoro art.71",
      "C) Solo manutentore",
      "D) Lavoratore"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Art. 71 D.Lgs 81/2008",
    suggestion: "La manutenzione e il mantenimento dei requisiti di sicurezza sono un obbligo del datore di lavoro. Può incaricare personale interno/esterno e organizzare registri e controlli, ma la responsabilità di assicurare che l’attrezzatura resti sicura nel tempo resta in capo a lui."
  },
  {
    id: 16,
    question: "Denuncia INAIL obbligatoria quando carrello usato come:",
    options: [
      "A) Sempre",
      "B) Gru/cestello porta persone",
      "C) Solo per noleggio",
      "D) Mai"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Buone prassi / Verifiche Allegato VII",
    suggestion: "Quando un carrello viene impiegato (o trasformato con accessori) per funzioni assimilabili a sollevamento persone o specifiche tipologie di sollevamento rientranti in Allegato VII, entrano in gioco obblighi di richiesta/verifiche periodiche secondo Art. 71 e DM 11/04/2011. In questi casi è essenziale verificare che l’uso sia previsto/ammesso dal fabbricante e gestire correttamente gli adempimenti verso INAIL (es. prima verifica periodica) quando applicabili."
  },
  {
    id: 17,
    question: "Requisiti essenziali sicurezza (RES) recepiti con:",
    options: [
      "A) DPR 547/1955",
      "B) DPR 459/1996 (Direttiva Macchine)",
      "C) D.Lgs 81/2008",
      "D) Solo CE"
    ],
    correct: 1,
    category: "giuridico",
    ref: "DPR 459/1996 (recepimento Direttiva Macchine)",
    suggestion: "I RES (requisiti essenziali di sicurezza e di salute) derivano dalla normativa di prodotto “macchine” recepita storicamente anche con DPR 459/1996. Il D.Lgs 81/2008 disciplina invece soprattutto l’uso in sicurezza, la scelta, la manutenzione, la formazione e gli obblighi organizzativi del datore di lavoro."
  },
  {
    id: 18,
    question: "Circolare Ministero Lavoro n.9/2013 disciplina:",
    options: [
      "A) Solo formazione",
      "B) Verifiche periodiche Allegato VII",
      "C) Solo manutenzione",
      "D) Abilitazioni"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Circolare MLPS n. 9/2013",
    suggestion: "Le circolari forniscono indicazioni interpretative/operative; il quadro base resta l’obbligo di verifiche sulle attrezzature dell’Allegato VII previsto dall’Art. 71 e la disciplina attuativa del DM 11/04/2011. In pratica: cosa è soggetto a verifica, chi può effettuarla e come gestire richieste e scadenze."
  },
  {
    id: 19,
    question: "Carrelli elevatori sono 'attrezzature di lavoro':",
    options: [
      "A) Sì, Titolo III D.Lgs 81/2008",
      "B) No, sono veicoli",
      "C) Solo se CE",
      "D) Solo >3 ton"
    ],
    correct: 0,
    category: "giuridico",
    ref: "Titolo III + Art. 69 D.Lgs 81/2008",
    suggestion: "Sì: un carrello elevatore rientra nella definizione di attrezzatura di lavoro (Art. 69) ed è quindi soggetto alle regole del Titolo III (scelta idonea, uso conforme, manutenzione, formazione/addestramento, eventuali verifiche quando applicabili)."
  },
  {
    id: 20,
    question: "Obblighi concedenti in uso (art.72):",
    options: [
      "A) Nessun obbligo",
      "B) Attestare conformità Allegato V",
      "C) Solo noleggio",
      "D) Solo vendita"
    ],
    correct: 1,
    category: "giuridico",
    ref: "Art. 72 D.Lgs 81/2008",
    suggestion: "L’Art. 72 impone a chi vende/noleggia/concede in uso (nei casi previsti dalla norma) di attestare la conformità ai requisiti di sicurezza dell’Allegato V al momento della consegna. Inoltre, nel noleggio senza operatore, deve attestare buono stato e acquisire la dichiarazione del datore di lavoro sugli utilizzatori formati/abilitati (se richiesto ex Art. 73 c.5)."
  },
    {
    id: 21,
    question: "Secondo l’Allegato V (Parte II, punto 2.5), i carrelli elevatori devono limitare i rischi di:",
    options: ["A) Solo ribaltamento", "B) Contatto con ruote/cingoli e ribaltamento", "C) Solo ostacoli", "D) Vibrazioni"],
    correct: 1,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, Parte II, punto 2.5"
  },
  {
    id: 22,
    question: "Per proteggere il conducente dal rischio di ribaltamento, è necessaria:",
    options: ["A) Solo cinture", "B) Una struttura che garantisca uno spazio di sicurezza tra suolo e carrello", "C) Paraurti", "D) Tettuccio opzionale"],
    correct: 1,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, Parte II, punto 2.5"
  },
  {
    id: 23,
    question: "I carrelli elevatori devono essere dotati di un dispositivo per:",
    options: ["A) Solo acceleratore", "B) Evitare la messa in moto non autorizzata", "C) Solo clacson", "D) Luci"],
    correct: 1,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, Parte II, punto 2.6"
  },
  {
    id: 24,
    question: "Nei piani inclinati, il dispositivo di arresto in caso di rottura è richiesto quando:",
    options: ["A) Sempre", "B) È necessario in funzione di lunghezza, pendenza o velocità", "C) Solo se > 45°", "D) Mai"],
    correct: 1,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, Parte II, punto 2.11"
  },
  {
    id: 25,
    question: "Qual è il coefficiente di sicurezza minimo richiesto per le funi metalliche?",
    options: ["A) 4", "B) 6", "C) 8", "D) 10"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.11"
  },
  {
    id: 26,
    question: "Qual è il coefficiente di sicurezza richiesto per le catene di sollevamento?",
    options: ["A) 4", "B) 5", "C) 6", "D) 8"],
    correct: 1,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.11"
  },
  {
    id: 27,
    question: "I tamponi di arresto alle estremità di corsa in altezza devono avere dimensione pari a:",
    options: ["A) 1/2 del diametro delle ruote", "B) 6/10 del diametro delle ruote", "C) Al diametro delle ruote", "D) Opzionale"],
    correct: 1,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.2.2"
  },
  {
    id: 28,
    question: "I posti di manovra (comandi) devono essere:",
    options: ["A) Raggiungibili senza pericolo", "B) Solo illuminati", "C) Opzionali", "D) Con scala"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.13"
  },
  {
    id: 29,
    question: "In caso di interruzione dell’energia, i mezzi di sollevamento devono prevedere:",
    options: ["A) Arresto automatico", "B) Riavvio automatico", "C) Solo allarme", "D) Nessun dispositivo"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.6"
  },
  {
    id: 30,
    question: "Negli apparecchi a vite senza fine, deve essere impedita:",
    options: ["A) La rotazione eccessiva", "B) Solo la fase di avvolgimento", "C) Il movimento laterale", "D) Nessuna limitazione"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.12"
  },
  {
    id: 31,
    question: "Per i carrelli elevatori con alzata superiore a 1,80 m è richiesto:",
    options: ["A) Tettuccio di protezione (anche semovibile)", "B) Solo cinture", "C) Paraurti", "D) Nessuna protezione"],
    correct: 0,
    category: "tecnico",
    ref: "Normativa tecnica (da specificare: norma/parte/punto)"
  },
  {
    id: 32,
    question: "Le parti in movimento alla portata dell’operatore devono essere:",
    options: ["A) Protette contro il rischio di cesoiamento", "B) Lasciate libere", "C) Solo segnalate", "D) Opzionali"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V (punto da specificare)"
  },
  {
    id: 33,
    question: "I dispositivi di frenatura devono essere proporzionati a:",
    options: ["A) Solo velocità", "B) Portata nominale", "C) Solo peso", "D) Nessuna proporzione"],
    correct: 1,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.5"
  },
  {
    id: 34,
    question: "I segnali relativi alle manovre devono essere:",
    options: ["A) Opzionali", "B) Chiaramente leggibili e corredati da avvisi", "C) Solo verbali", "D) Non necessari"],
    correct: 1,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.15"
  },
  {
    id: 35,
    question: "La stabilità dell’attrezzatura durante l’impiego deve essere:",
    options: ["A) Garantita in tutte le condizioni prevedibili", "B) Garantita solo su piano", "C) Opzionale", "D) Garantita solo a pieno carico"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato VI"
  },
  {
    id: 36,
    question: "Il sollevamento di persone è consentito solo mediante:",
    options: ["A) Qualsiasi carrello", "B) Attrezzature/accessori specificamente previsti per tale uso", "C) Sempre vietato", "D) Solo muletti"],
    correct: 1,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato VI"
  },
  {
    id: 37,
    question: "Per un carrello impilatore telescopico, la rotazione massima consentita è:",
    options: ["A) 5° sull’asse longitudinale", "B) 10°", "C) 15°", "D) Nessun limite"],
    correct: 0,
    category: "tecnico",
    ref: "Definizione tecnica (da specificare: documento/norma)"
  },
  {
    id: 38,
    question: "L’abitacolo (o postazione di guida) del carrello deve garantire al conducente una protezione:",
    options: ["A) Adeguata", "B) Opzionale", "C) Solo cinture", "D) Solo tettuccio"],
    correct: 0,
    category: "tecnico",
    ref: "Normativa (da specificare: fonte/parte/punto)"
  },
  {
    id: 39,
    question: "Per attrezzature smontabili o mobili, la stabilità deve essere garantita:",
    options: ["A) Durante tutto l’impiego", "B) Solo durante il montaggio", "C) Solo durante il carico", "D) Opzionale"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato VI"
  },
  {
    id: 40,
    question: "La scelta dell’attrezzatura deve essere effettuata in base a:",
    options: ["A) Solo portata", "B) Natura/forma/volume dei carichi e condizioni di impiego", "C) Solo prezzo", "D) Solo marca"],
    correct: 1,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato VI"
  },
{
    id: 41,
    question: "Gli organi di comando devono impedire:",
    options: ["A) Messa in moto accidentale", "B) Solo uso non autorizzato", "C) Entrambi A+B", "D) Nessuno"],
    correct: 2,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.14"
  },
  {
    id: 42,
    question: "Nei carrelli con conducente a bordo, il rischio di ribaltamento deve essere limitato mediante:",
    options: ["A) Solo con cabina", "B) Cabina o protezioni equivalenti", "C) Nessuna protezione", "D) Solo velocità ridotta"],
    correct: 1,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V (punto da specificare/da confermare)"
  },
  {
    id: 43,
    question: "Qual è il coefficiente di sicurezza previsto per le funi metalliche?",
    options: ["A) ≥4", "B) ≥6", "C) ≥8", "D) ≥10"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.11 (da confermare)"
  },
  {
    id: 44,
    question: "Per i piani inclinati, i dispositivi di sicurezza sono richiesti:",
    options: ["A) Sempre", "B) Quando necessario", "C) Mai", "D) Solo >30°"],
    correct: 1,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, Parte II, punto 2.11"
  },
  {
    id: 45,
    question: "In caso di interruzione di corrente, i mezzi di sollevamento devono prevedere:",
    options: ["A) Arresto automatico", "B) Continuano", "C) Riavvio", "D) Solo allarme"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.6 (da confermare)"
  },
  {
    id: 46,
    question: "I posti di comando devono essere:",
    options: ["A) Senza pericolo", "B) Con difficoltà", "C) Solo con scala", "D) Opzionali"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.13 (da confermare)"
  },
  {
    id: 47,
    question: "La dimensione minima dei tamponi di arresto alle estremità di corsa in altezza è pari a:",
    options: ["A) 6/10 diametro ruote", "B) 1/2", "C) 1/4", "D) Opzionale"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.2.2 (da confermare)"
  },
  {
    id: 48,
    question: "Negli apparecchi a vite senza fine, deve essere limitata:",
    options: ["A) Rotazione eccessiva", "B) Velocità", "C) Solo carico", "D) Nessun limite"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.12 (da confermare)"
  },
  {
    id: 49,
    question: "I freni devono essere proporzionati a:",
    options: ["A) Portata", "B) Velocità", "C) Peso proprio", "D) Lunghezza"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.5 (da confermare)"
  },
  {
    id: 50,
    question: "La segnaletica relativa alle manovre deve essere:",
    options: ["A) Leggibile/avvisi", "B) Solo pittogrammi", "C) Verbale", "D) Opzionale"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V, punto 3.1.15 (da confermare)"
  },
  {
    id: 51,
    question: "Le protezioni contro il rischio di cesoiamento devono riguardare:",
    options: ["A) Parti movimento", "B) Solo pulegge", "C) Solo catene", "D) Nessuna"],
    correct: 0,
    category: "tecnico",
    ref: "Normativa (da specificare: Allegato V o altra fonte)"
  },
  {
    id: 52,
    question: "Il tettuccio di protezione è richiesto per carrelli con alzata superiore a:",
    options: ["A) 1,80m", "B) 2m", "C) 1,5m", "D) Opzionale"],
    correct: 0,
    category: "tecnico",
    ref: "Normativa (da specificare: norma tecnica/documento)"
  },
  {
    id: 53,
    question: "La stabilità dell’attrezzatura deve essere garantita in:",
    options: ["A) Tutte prevedibili", "B) Solo normali", "C) Solo caricate", "D) Solo piano"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato VI"
  },
  {
    id: 54,
    question: "Il sollevamento di persone è consentito solo mediante:",
    options: ["A) Solo attrezzature specifiche", "B) Tutti carrelli", "C) Vietato sempre", "D) Solo muletti"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato VI"
  },
  {
    id: 55,
    question: "La scelta delle attrezzature deve tenere conto di:",
    options: ["A) Natura carichi/condizioni", "B) Solo portata", "C) Solo altezza", "D) Solo marca"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato VI"
  },
  {
    id: 56,
    question: "Per un carrello impilatore telescopico, la rotazione massima consentita è:",
    options: ["A) ≤5°", "B) ≤10°", "C) ≤15°", "D) Libera"],
    correct: 0,
    category: "tecnico",
    ref: "Definizione (da specificare: fonte/norma/documento)"
  },
  {
    id: 57,
    question: "L’abitacolo del carrello deve garantire una protezione del conducente:",
    options: ["A) Protezione adeguata", "B) Opzionale", "C) Solo cinture", "D) Solo tettuccio"],
    correct: 0,
    category: "tecnico",
    ref: "Normativa (da specificare: fonte/norma/documento)"
  },
  {
    id: 58,
    question: "Per prevenire la messa in moto accidentale, è richiesto che:",
    options: ["A) Organi protetti", "B) Solo chiave", "C) Solo password", "D) Nessuna protezione"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V (punto da specificare)"
  },
  {
    id: 59,
    question: "Nei carrelli a sbalzo, l’equilibrio del carico è garantito da:",
    options: ["A) Massa carrello", "B) Contropeso esterno", "C) Solo forche", "D) Peso carico"],
    correct: 0,
    category: "tecnico",
    ref: "Definizione (da specificare: fonte/norma/documento)"
  },
  {
    id: 60,
    question: "Con quale provvedimento è stata recepita in Italia la Direttiva Macchine (versione storica)?",
    options: ["A) DPR 459/1996", "B) DPR 547/1955", "C) D.Lgs 17/2010", "D) Solo CE"],
    correct: 0,
    category: "tecnico",
    ref: "DPR 459/1996"
  },
  {
    id: 61,
    question: "Prima dell’uso dell’attrezzatura, è necessario verificare:",
    options: ["A) Solo carburante", "B) Assenza di vizi palesi (D.Lgs. 81/2008)", "C) Solo luci", "D) Colore"],
    correct: 1,
    category: "pratico",
    ref: "D.Lgs. 81/2008, art. 71 (da confermare comma)"
  },
  {
    id: 62,
    question: "Durante la movimentazione, per ridurre il rischio di collisioni bisogna considerare anche:",
    options: ["A) Solo tra carrelli", "B) Il movimento simultaneo (mezzi/persone/mezzi)", "C) Solo pedoni", "D) Nessun rischio"],
    correct: 1,
    category: "pratico",
    ref: "D.Lgs. 81/2008, Allegato V (da confermare punto esatto)"
  },
  {
    id: 63,
    question: "Il trasporto di persone sui piani inclinati con il carrello elevatore è:",
    options: ["A) Sempre vietato", "B) Sempre consentito", "C) Solo <30°", "D) A velocità bassa"],
    correct: 0,
    category: "pratico",
    ref: "D.Lgs. 81/2008, Allegato V, Parte II, punto 2.11 (da confermare attinenza)"
  },
  {
    id: 64,
    question: "La responsabilità della manutenzione periodica delle attrezzature ricade su:",
    options: ["A) Datore di lavoro (art. 71)", "B) Solo RSPP", "C) Solo manutentore", "D) Lavoratore"],
    correct: 0,
    category: "pratico",
    ref: "D.Lgs. 81/2008, art. 71"
  },
  {
    id: 65,
    question: "Per i carrelli elevatori antecedenti al 1996 è opportuno effettuare verifiche aggiuntive perché:",
    options: ["A) Mancano requisiti moderni", "B) Sono troppo veloci", "C) Consumano troppo", "D) Hanno colore diverso"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi (da specificare: ente/documento)"
  },
  {
    id: 66,
    question: "Un addetto formato/abilitato deve conoscere:",
    options: ["A) Solo guida", "B) I rischi specifici dell’attrezzatura (art. 73)", "C) Solo manutenzione", "D) Programmazione"],
    correct: 1,
    category: "pratico",
    ref: "D.Lgs. 81/2008, art. 73"
  },
  {
    id: 67,
    question: "La valutazione dei rischi per l’uso dei carrelli dovrebbe includere:",
    options: ["A) Solo ribaltamento", "B) Tutte le fasi di impiego", "C) Solo carico", "D) Solo pedoni"],
    correct: 1,
    category: "pratico",
    ref: "Buone prassi (da specificare: ente/documento)"
  },
  {
    id: 68,
    question: "Se un carrello viene utilizzato come gru o come cestello porta persone, in pratica:",
    options: ["A) Diventa assimilabile a gru: possibile denuncia/obblighi INAIL", "B) Nessun problema", "C) Solo se >3t", "D) Sempre vietato"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi (da specificare: fonte esatta)"
  },
  {
    id: 69,
    question: "Il controllo visivo giornaliero dovrebbe includere:",
    options: ["A) Solo gomme", "B) Anomalie generali di funzionamento", "C) Solo portata", "D) Solo forche"],
    correct: 1,
    category: "pratico",
    ref: "Buone prassi (da specificare: ente/documento)"
  },
  {
    id: 70,
    question: "In prossimità di zone pedonali, il carrello elevatore deve:",
    options: ["A) Ridurre velocità", "B) Sempre precedere pedoni", "C) Nessuna regola", "D) Suonare sempre"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi (da specificare: fonte)"
  },
  {
    id: 71,
    question: "In presenza di un carico instabile, il comportamento corretto è:",
    options: ["A) Sollevare comunque", "B) Non trasportare e segnalare", "C) Aumentare velocità", "D) Ridurre portata"],
    correct: 1,
    category: "pratico",
    ref: "Buone prassi (da specificare: fonte)"
  },
  {
    id: 72,
    question: "In sosta, il carrello va lasciato in sicurezza con:",
    options: ["A) Forche a terra, freno inserito, chiave rimossa", "B) Forche alzate", "C) Su pendenza", "D) Motore acceso"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi (da specificare: fonte)"
  },
  {
    id: 73,
    question: "Per superare ostacoli bassi o passaggi critici, è buona regola:",
    options: ["A) Abbassare le forche", "B) Alzare il carico", "C) Accelerare", "D) Suonare"],
    correct: 0,
    category: "pratico",
    ref: "Pratiche sicure (da specificare: fonte)"
  },
  {
    id: 74,
    question: "La pendenza massima consigliata (indicazione pratica) è circa:",
    options: ["A) 10-15% a vuoto, 5-8% a carico", "B) 30%", "C) Sempre piano", "D) 45%"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi (da specificare: fonte)"
  },
  {
    id: 75,
    question: "La distanza di sicurezza consigliata dai pedoni è:",
    options: ["A) Min 2-3 metri", "B) 50cm", "C) Nessuna distanza", "D) 10m"],
    correct: 0,
    category: "pratico",
    ref: "Norme sicurezza (da specificare: fonte)"
  },
  {
    id: 76,
    question: "Durante le manovre in retromarcia, una regola prudenziale è:",
    options: ["A) Sempre con segnalatore acustico", "B) Solo se invisibile", "C) Mai", "D) Velocità massima"],
    correct: 0,
    category: "pratico",
    ref: "Pratiche (da specificare: fonte)"
  },
  {
    id: 77,
    question: "Se il carico è fuori centro rispetto alle forche, il comportamento corretto è:",
    options: ["A) Instabile: non trasportare", "B) Compensa sterzo", "C) Aumenta velocità", "D) Sempre ok"],
    correct: 0,
    category: "pratico",
    ref: "Sicurezza (da specificare: fonte)"
  },
  {
    id: 78,
    question: "Su pavimento irregolare o sconnesso, occorre:",
    options: ["A) Ridurre velocità drasticamente", "B) Accelerare", "C) Alzare carico", "D) Ignorare"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi (da specificare: fonte)"
  },
  {
    id: 79,
    question: "Durante la guida del carrello, l’abbigliamento personale deve evitare:",
    options: ["A) Cappotto/indumenti larghi (rischio impiglio)", "B) Sempre cappotto", "C) Nessuna regola", "D) Solo casco"],
    correct: 0,
    category: "pratico",
    ref: "Norme (da specificare: fonte)"
  },
  {
    id: 80,
    question: "La segnaletica orizzontale per le aree dedicate ai muletti/carrelli è:",
    options: ["A) Obbligatoria", "B) Opzionale", "C) Solo verticale", "D) Non necessaria"],
    correct: 0,
    category: "pratico",
    ref: "Pratiche (da specificare: fonte)"
  },
{
    id: 81,
    question: "Le frecce/indicatori di manovra devono essere visibili fino a:",
    options: ["A) 20m", "B) 5m", "C) 50m", "D) Non specificato"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi (da specificare: fonte)"
  },
  {
    id: 82,
    question: "L’uso della radiotrasmittente durante la guida del carrello:",
    options: ["A) È consentito guidando con una mano", "B) È vietata la guida mentre si usa la radio", "C) È sempre ok", "D) Solo emergenze"],
    correct: 1,
    category: "pratico",
    ref: "Sicurezza (da specificare: fonte)"
  },
  {
    id: 83,
    question: "La sosta del carrello su un piano inclinato è:",
    options: ["A) Sempre vietata", "B) Consentita con blocca-ruote", "C) Sempre ok", "D) Motore acceso"],
    correct: 0,
    category: "pratico",
    ref: "Pratiche (da specificare: fonte)"
  },
  {
    id: 84,
    question: "Il controllo dei freni prima dell’uso del carrello è:",
    options: ["A) Obbligatorio", "B) Opzionale", "C) Solo manutentore", "D) Mai"],
    correct: 0,
    category: "pratico",
    ref: "Controlli (da specificare: checklist/fonte)"
  },
  {
    id: 85,
    question: "Se le forche risultano danneggiate, l’azione corretta è:",
    options: ["A) Segnalare immediatamente", "B) Usare comunque", "C) Saldare", "D) Ignorare"],
    correct: 0,
    category: "pratico",
    ref: "Sicurezza (da specificare: fonte)"
  },
  {
    id: 86,
    question: "Nelle corsie strette, la velocità raccomandata è:",
    options: ["A) <5 km/h", "B) 20 km/h", "C) Nessun limite", "D) 10 km/h"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi (da specificare: fonte)"
  },
  {
    id: 87,
    question: "In attraversamento di porte/varchi, è buona regola:",
    options: ["A) Suonare e ridurre la velocità", "B) Procedere a velocità normale", "C) Sempre in retromarcia", "D) Ignorare"],
    correct: 0,
    category: "pratico",
    ref: "Pratiche (da specificare: fonte)"
  },
  {
    id: 88,
    question: "Se il carico oscilla durante la marcia, bisogna:",
    options: ["A) Fermarsi immediatamente", "B) Accelerare", "C) Sterzare bruscamente", "D) Continuare"],
    correct: 0,
    category: "pratico",
    ref: "Sicurezza (da specificare: fonte)"
  },
  {
    id: 89,
    question: "Nelle zone promiscue con pedoni, la priorità è:",
    options: ["A) Precedono sempre i pedoni", "B) I muletti precedono", "C) Uguale diritto", "D) Nessuna priorità"],
    correct: 0,
    category: "pratico",
    ref: "Norme (da specificare: fonte)"
  },
  {
    id: 90,
    question: "In discesa su pendenza (con carico), la regola operativa indicata è:",
    options: ["A) Sempre in retromarcia", "B) Avanti se visibile", "C) Mai pendenza", "D) Sempre avanti"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi (da specificare: fonte)"
  },
  {
    id: 91,
    question: "L’uso del cellulare durante la guida del carrello è:",
    options: ["A) Sempre vietato", "B) Solo vivavoce", "C) Sempre ok", "D) Solo emergenze"],
    correct: 0,
    category: "pratico",
    ref: "Sicurezza (da specificare: fonte/procedura)"
  },
  {
    id: 92,
    question: "In caso di gomme sgonfie, bisogna:",
    options: ["A) Segnalare immediatamente", "B) Continuare piano", "C) Gonfiare da soli", "D) Ignorare"],
    correct: 0,
    category: "pratico",
    ref: "Controlli (da specificare: checklist/fonte)"
  },
  {
    id: 93,
    question: "Su rampe di carico/scarico, è buona regola procedere con:",
    options: ["A) Velocità ridotta e forche basse", "B) Velocità normale", "C) Sempre in retromarcia", "D) Mai usare"],
    correct: 0,
    category: "pratico",
    ref: "Pratiche (da specificare: fonte)"
  },
  {
    id: 94,
    question: "Se i vetri dell’abitacolo sono sporchi (scarsa visibilità), bisogna:",
    options: ["A) Pulire prima dell’uso", "B) Continuare", "C) Solo interno", "D) Ignorare"],
    correct: 0,
    category: "pratico",
    ref: "Sicurezza (da specificare: fonte)"
  },
  {
    id: 95,
    question: "Se il carico è troppo alto e limita la visibilità, secondo questa regola operativa bisogna:",
    options: ["A) Usare specchi retrovisori", "B) Mai trasportare", "C) Sterzare piano", "D) Accelerare"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi (da specificare: fonte)"
  },
  {
    id: 96,
    question: "Se il carrello è fuori servizio, va messo in sicurezza con:",
    options: ["A) Segnaletica e chiave rimossa", "B) Lasciare acceso", "C) Parcheggiare ovunque", "D) Solo freno"],
    correct: 0,
    category: "pratico",
    ref: "Pratiche (da specificare: fonte/procedura)"
  },
  {
    id: 97,
    question: "Con battistrada gomme usurato, l’azione corretta è:",
    options: ["A) Segnalare al manutentore", "B) Continuare", "C) Cambiare da soli", "D) Nessun problema"],
    correct: 0,
    category: "pratico",
    ref: "Controlli (da specificare: checklist/fonte)"
  },
  {
    id: 98,
    question: "In presenza di attraversamento pedoni, il comportamento indicato è:",
    options: ["A) Fermarsi e suonare", "B) Continuare piano", "C) Accelerare", "D) Ignorare"],
    correct: 0,
    category: "pratico",
    ref: "Sicurezza (da specificare: fonte)"
  },
  {
    id: 99,
    question: "Se si sosta con carico, il carrello deve essere lasciato con:",
    options: ["A) Sempre forche a terra", "B) Forche alzate", "C) Su pendenza", "D) Motore acceso"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi (da specificare: fonte)"
  },
  {
    id: 100,
    question: "A fine turno, il carrello deve essere:",
    options: ["A) Parcheggiato in area designata e con controlli finali", "B) Lasciato ovunque", "C) Motore acceso", "D) Forche alzate"],
    correct: 0,
    category: "pratico",
    ref: "Procedure (da specificare: procedura aziendale/fonte)"
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
