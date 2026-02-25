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
    id: 14,
    question: "Aggiornamento abilitazione carrelli deve avvenire ogni:",
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
    id: 32,
    question: "Le parti in movimento alla portata dell’operatore devono essere:",
    options: ["A) Protette contro il rischio di cesoiamento", "B) Lasciate libere", "C) Solo segnalate", "D) Opzionali"],
    correct: 0,
    category: "tecnico",
    ref: "D.Lgs. 81/2008, Allegato V (punto da specificare)"
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
    id: 38,
    question: "L’abitacolo (o postazione di guida) del carrello deve garantire al conducente una protezione:",
    options: ["A) Adeguata", "B) Opzionale", "C) Solo cinture", "D) Solo tettuccio"],
    correct: 0,
    category: "tecnico",
    ref: "Normativa (da specificare: fonte/parte/punto)"
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
    id: 51,
    question: "Le protezioni contro il rischio di cesoiamento devono riguardare:",
    options: ["A) Parti movimento", "B) Solo pulegge", "C) Solo catene", "D) Nessuna"],
    correct: 0,
    category: "tecnico",
    ref: "Normativa (da specificare: Allegato V o altra fonte)"
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
    id: 61,
    question: "Prima dell’uso dell’attrezzatura, è necessario verificare:",
    options: ["A) Solo carburante", "B) Assenza di vizi palesi (D.Lgs. 81/2008)", "C) Solo luci", "D) Colore"],
    correct: 1,
    category: "pratico",
    ref: "D.Lgs. 81/2008, art. 71 (da confermare comma)"
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
    ref: "Buone prassi"
  },
  {
    id: 68,
    question: "Se un carrello viene utilizzato come gru o come cestello porta persone, in pratica:",
    options: ["A) Diventa assimilabile a gru: possibile denuncia/obblighi INAIL", "B) Nessun problema", "C) Solo se >3t", "D) Sempre vietato"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi "
  },
  {
    id: 69,
    question: "Il controllo visivo giornaliero dovrebbe includere:",
    options: ["A) Solo gomme", "B) Anomalie generali di funzionamento", "C) Solo portata", "D) Solo forche"],
    correct: 1,
    category: "pratico",
    ref: "Buone prassi"
  },
  {
    id: 70,
    question: "In prossimità di zone pedonali, il carrello elevatore deve:",
    options: ["A) Ridurre velocità", "B) Sempre precedere pedoni", "C) Nessuna regola", "D) Suonare sempre"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi"
  },
  {
    id: 71,
    question: "In presenza di un carico instabile, il comportamento corretto è:",
    options: ["A) Sollevare comunque", "B) Non trasportare e segnalare", "C) Aumentare velocità", "D) Ridurre portata"],
    correct: 1,
    category: "pratico",
    ref: "Buone prassi "
  },
  {
    id: 72,
    question: "In sosta, il carrello va lasciato in sicurezza con:",
    options: ["A) Forche a terra, freno inserito, chiave rimossa", "B) Forche alzate", "C) Su pendenza", "D) Motore acceso"],
    correct: 0,
    category: "pratico",
    ref: "Buone prassi"
  },
  {
    id: 73,
    question: "Per superare ostacoli bassi o passaggi critici, è buona regola:",
    options: ["A) Abbassare le forche", "B) Alzare il carico", "C) Accelerare", "D) Suonare"],
    correct: 0,
    category: "pratico",
    ref: "Pratiche sicure"
  },
  {
    id: 1,
    question: "Qual è la funzione principale di un carrello elevatore?",
    options: ["A) Trasportare persone tra i piani", "B) Sollevare, trasportare e deporre carichi su pallet", "C) Spostare solo carichi leggeri a mano", "D) Pulire i pavimenti dei magazzini"],
    correct: 1,
    category: "tecnica_base",
    ref: "Manuale Brixia / Orion SRL",
    suggestion: "Il carrello elevatore è una macchina progettata per sollevare, trasportare, deporre e immagazzinare carichi su pallet. È lo strumento più diffuso per la movimentazione interna nei magazzini."
  },
  {
    id: 2,
    question: "Quale dispositivo deve essere presente sul carrello per proteggere dalle cadute di materiale dall’alto?",
    options: ["A) Solo la cintura di sicurezza", "B) Tetto o griglia di protezione", "C) Solo i fari di lavoro", "D) Solo il sedile antivibrazione"],
    correct: 1,
    category: "tecnica_base",
    ref: "Circolare Ministero Industria 7808/2001",
    suggestion: "Il tetto o griglia di protezione è una misura primaria obbligatoria. La dimensione delle maglie deve essere adeguata al tipo di materiale trasportato (maglie strette per bulloni o piccoli pezzi)."
  },
  {
    id: 3,
    question: "In caso di rovesciamento accidentale, quale parte del corpo è prioritaria da proteggere?",
    options: ["A) Le gambe", "B) La testa", "C) Le braccia", "D) La schiena"],
    correct: 1,
    category: "tecnica_base",
    ref: "Circolare 7808/2001",
    suggestion: "In caso di ribaltamento la testa è la parte più esposta a lesioni gravi. Per questo sono obbligatori il tetto di protezione, le cinture di sicurezza e il casco."
  },
  {
    id: 4,
    question: "Per il transpallet manuale è obbligatoria la formazione specifica?",
    options: ["A) Sì, identica a quella del carrello elevatore", "B) No, ma è necessario informare l’operatore sui rischi", "C) Solo se si superano i 500 kg", "D) Solo se il pavimento è bagnato"],
    correct: 1,
    category: "tecnica_base",
    ref: "Regolamento CE 684/2008",
    suggestion: "Il transpallet manuale non richiede la formazione specifica obbligatoria per i carrelli elevatori perché non ha congegni elettrici, ma è obbligatorio informare l’operatore sui rischi (sterzate brusche, velocità a passo d’uomo, pavimentazione, ecc.)."
  },
  {
    id: 5,
    question: "Quale DPI è obbligatorio indossare sempre alla guida del carrello elevatore?",
    options: ["A) Solo gli occhiali da sole", "B) Casco, scarpe antinfortunistiche, guanti e gilet ad alta visibilità", "C) Solo il grembiule", "D) Solo la maschera antipolvere"],
    correct: 1,
    category: "tecnica_base",
    ref: "DPI e Circolare 7808/2001",
    suggestion: "L’operatore deve indossare sempre casco, scarpe di sicurezza, guanti e abbigliamento ad alta visibilità per tutelarsi da schiacciamenti, cadute di oggetti e scarsa visibilità."
  },
  {
    id: 6,
    question: "È consentito trasportare persone sulle forche del carrello?",
    options: ["A) Sì, solo se sono colleghi fidati", "B) No, salvo casi eccezionali con apposita cesta omologata", "C) Sì, purché si vada a passo d’uomo", "D) Solo durante le pause"],
    correct: 1,
    category: "tecnica_base",
    ref: "Norme di sicurezza carrelli",
    suggestion: "Il carrello elevatore non nasce per il trasporto persone. Solo in casi eccezionali è ammesso l’uso di ceste omologate con fermi anti-sfilata, chiusura interna e punto di ancoraggio per cintura anticaduta."
  },
  {
    id: 7,
    question: "Quale è la posizione corretta delle forche durante la marcia normale?",
    options: ["A) Sollevate al massimo per vedere meglio", "B) Abbassate a 15-20 cm da terra e inclinate leggermente all’indietro", "C) Completamente abbassate a terra", "D) Sollevate a 1 metro per evitare ostacoli"],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Orion SRL e Sapienza",
    suggestion: "Durante la marcia le forche devono essere tenute basse (15-20 cm) e inclinate all’indietro per mantenere il baricentro del carico il più vicino possibile al carrello e aumentare la stabilità."
  },
  {
    id: 8,
    question: "Chi è responsabile della corretta manutenzione giornaliera del carrello?",
    options: ["A) Solo il manutentore esterno", "B) L’operatore che lo utilizza", "C) Solo il datore di lavoro", "D) Solo il responsabile del magazzino"],
    correct: 1,
    category: "tecnica_base",
    ref: "Manuale Brixia e Dispensa corso",
    suggestion: "L’operatore è responsabile dei controlli visivi e funzionali giornalieri (livelli, freni, catene, ruote, dispositivi di sicurezza) prima di iniziare il turno."
  },
  {
    id: 9,
    question: "Quale azione è vietata durante la ricarica delle batterie di un carrello elettrico?",
    options: ["A) Indossare i guanti", "B) Fumare o usare fiamme libere nelle vicinanze", "C) Aprire il cofano", "D) Collegare il caricabatterie"],
    correct: 1,
    category: "sicurezza",
    ref: "Circolare 7808/2001",
    suggestion: "Durante la ricarica delle batterie è vietato fumare o usare fiamme libere perché i gas prodotti possono essere esplosivi."
  },
  {
    id: 10,
    question: "Il carrello elevatore può essere utilizzato solo se:",
    options: ["A) È in qualsiasi condizione purché funzioni", "B) È in buono stato, pulito e con tutti i dispositivi di sicurezza funzionanti", "C) Ha solo il motore acceso", "D) È stato usato il giorno prima"],
    correct: 1,
    category: "tecnica_base",
    ref: "Manuale Brixia",
    suggestion: "Il carrello deve essere in buono stato di conservazione e tutti i dispositivi di sicurezza devono essere funzionanti prima di ogni utilizzo."
  },
  {
    id: 11,
    question: "Quale è il segnale acustico da usare quando si effettua una retromarcia?",
    options: ["A) Nessun segnale", "B) Il clacson o il segnalatore acustico di retromarcia", "C) Solo le luci lampeggianti", "D) Solo la voce"],
    correct: 1,
    category: "tecnica_base",
    ref: "Norme di sicurezza carrelli",
    suggestion: "Il segnalatore acustico di retromarcia deve essere sempre attivato quando si marcia all’indietro per avvisare pedoni e altri mezzi."
  },
  {
    id: 12,
    question: "Quando si deve indossare la cintura di sicurezza?",
    options: ["A) Solo in salita", "B) Sempre, durante tutta la guida", "C) Solo quando si trasportano carichi pesanti", "D) Solo in curva"],
    correct: 1,
    category: "sicurezza",
    ref: "Circolare 7808/2001",
    suggestion: "La cintura di sicurezza (o sistema di ritenuta) deve essere indossata sempre durante la guida per evitare di essere schiacciati in caso di ribaltamento."
  },
  {
    id: 13,
    question: "Quale è la velocità massima consentita nei corridoi stretti?",
    options: ["A) Quella indicata dal costruttore e comunque “a passo d’uomo”", "B) 30 km/h", "C) Quella che si preferisce", "D) Solo in retromarcia"],
    correct: 0,
    category: "tecnica_base",
    ref: "Manuale Orion SRL",
    suggestion: "Nei corridoi stretti la velocità deve essere ridotta a “passo d’uomo” e comunque non superiore a quella indicata dal costruttore."
  },
  {
    id: 14,
    question: "È consentito frenare bruscamente con il carico sollevato?",
    options: ["A) Sì, per fermarsi prima", "B) No, aumenta il rischio di ribaltamento", "C) Solo se il carico è sotto i 200 kg", "D) Solo in retromarcia"],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Sapienza",
    suggestion: "La frenata brusca con carico alto sposta il baricentro in avanti e può causare il ribaltamento del carrello."
  },
  {
    id: 15,
    question: "Dove va posizionato il carico sulle forche per garantire stabilità?",
    options: ["A) Il più possibile in avanti", "B) Il più vicino possibile al montante e centrato", "C) Solo sulla punta delle forche", "D) Solo sulla forca di destra"],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Orion SRL",
    suggestion: "Il carico deve essere posizionato il più vicino possibile al montante e ben centrato sulle forche per mantenere il baricentro nella zona di stabilità."
  },
  {
    id: 16,
    question: "Quale è l’altezza massima consigliata delle forche durante la marcia?",
    options: ["A) 2 metri", "B) 15-20 cm da terra", "C) Altezza del sedile", "D) 50 cm"],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Sapienza",
    suggestion: "Durante la marcia le forche devono essere tenute a 15-20 cm da terra per mantenere basso il baricentro e aumentare la stabilità trasversale."
  },
  {
    id: 17,
    question: "Chi deve verificare che il carrello sia idoneo prima di ogni turno?",
    options: ["A) Solo il capo reparto", "B) L’operatore stesso (controlli visivi e funzionali)", "C) Solo il manutentore", "D) Nessuno"],
    correct: 1,
    category: "tecnica_base",
    ref: "Manuale Brixia",
    suggestion: "L’operatore deve effettuare i controlli preliminari ogni giorno prima di iniziare il servizio."
  },
  {
    id: 18,
    question: "È obbligatorio segnalare la presenza del carrello nei passaggi?",
    options: ["A) No", "B) Sì, con segnalatore acustico e/o cartelli", "C) Solo di notte", "D) Solo se ci sono pedoni"],
    correct: 1,
    category: "tecnica_base",
    ref: "Dispensa corso carrellisti",
    suggestion: "Il passaggio dei carrelli deve essere segnalato con il segnalatore acustico e con cartelli in loco."
  },
  {
    id: 19,
    question: "Quale azione è vietata con il carrello in movimento?",
    options: ["A) Regolare lo specchietto", "B) Trasportare persone sulla piattaforma o sulle forche", "C) Accendere la radio", "D) Bere acqua"],
    correct: 1,
    category: "sicurezza",
    ref: "Norme di sicurezza",
    suggestion: "È assolutamente vietato trasportare persone sulle forche o sulla piattaforma del carrello."
  },
  {
    id: 20,
    question: "Cosa fare prima di scendere dal carrello?",
    options: ["A) Lasciare il motore acceso", "B) Inserire il freno a mano, abbassare le forche e spegnere il motore", "C) Lasciare le forche sollevate", "D) Solo spegnere i fari"],
    correct: 1,
    category: "tecnica_base",
    ref: "Manuale Brixia",
    suggestion: "Prima di scendere bisogna sempre inserire il freno a mano, abbassare completamente le forche a terra e togliere la chiave."
  },
  {
    id: 21,
    question: "Quale DPI è obbligatorio quando si ricaricano batterie al piombo?",
    options: ["A) Solo il casco", "B) Guanti isolanti e occhiali di protezione", "C) Solo le scarpe antinfortunistiche", "D) Solo il gilet"],
    correct: 1,
    category: "sicurezza",
    ref: "Circolare 7808/2001",
    suggestion: "Durante la ricarica delle batterie al piombo è obbligatorio indossare guanti isolanti e occhiali di protezione per evitare schizzi di acido."
  },
  {
    id: 22,
    question: "Il carrello può essere lasciato in pendenza senza freno a mano?",
    options: ["A) Sì, se è scarico", "B) No, mai", "C) Solo per pochi minuti", "D) Solo se è elettrico"],
    correct: 1,
    category: "tecnica_base",
    ref: "Manuale Orion SRL",
    suggestion: "Il carrello non deve mai essere lasciato in pendenza senza freno a mano inserito."
  },
  {
    id: 23,
    question: "Quale è il comportamento corretto in curva?",
    options: ["A) Accelerare", "B) Ridurre la velocità e mantenere le forche basse", "C) Sterzare bruscamente", "D) Suonare il clacson continuamente"],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Sapienza",
    suggestion: "In curva bisogna ridurre la velocità e tenere le forche basse per contrastare la forza centrifuga e prevenire il ribaltamento trasversale."
  },
  {
    id: 24,
    question: "È consentito usare il carrello per spingere altri veicoli?",
    options: ["A) Sì, se sono più leggeri", "B) No", "C) Solo in emergenza", "D) Solo se il capo lo autorizza"],
    correct: 1,
    category: "tecnica_base",
    ref: "Norme di sicurezza",
    suggestion: "Il carrello elevatore non deve mai essere usato per spingere o trainare altri veicoli."
  },
  {
    id: 25,
    question: "Cosa deve fare l’operatore alla fine del turno?",
    options: ["A) Lasciare il carrello ovunque", "B) Parcheggiarlo in zona sicura, con forche abbassate, freno inserito e chiave tolta", "C) Lasciare il motore acceso", "D) Solo abbassare le forche"],
    correct: 1,
    category: "tecnica_base",
    ref: "Manuale Brixia",
    suggestion: "Alla fine del turno il carrello deve essere parcheggiato in zona sicura, forche abbassate a terra, freno a mano inserito e chiave tolta."
  },
  {
    id: 26,
    question: "Dove si trova il baricentro di un carico uniforme su pallet?",
    options: ["A) Sulla punta delle forche", "B) Al centro geometrico del carico", "C) Sul montante", "D) Sulle ruote anteriori"],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Orion SRL",
    suggestion: "Nel carico uniforme il baricentro si trova al centro geometrico del pallet."
  },
  {
    id: 27,
    question: "Cosa aumenta il rischio di ribaltamento longitudinale?",
    options: ["A) Carico vicino al montante", "B) Carico troppo in avanti rispetto al punto di ribaltamento", "C) Forche basse", "D) Inclinazione all’indietro"],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Sapienza",
    suggestion: "Il carico troppo in avanti rispetto al punto di ribaltamento aumenta il momento ribaltante e può causare il rovesciamento longitudinale."
  },
  {
    id: 28,
    question: "In discesa con carico, quale marcia è più sicura?",
    options: ["A) Marcia avanti", "B) Marcia indietro", "C) Neutro", "D) Qualsiasi"],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Orion SRL",
    suggestion: "In discesa con carico è più sicuro procedere in retromarcia perché il carico rimane nella zona di stabilità del carrello."
  },
  {
    id: 29,
    question: "Cosa provoca la forza centrifuga in curva?",
    options: ["A) Aumenta la stabilità", "B) Può causare ribaltamento trasversale se si curva troppo velocemente", "C) Riduce il consumo di carburante", "D) Migliora la visibilità"],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Sapienza",
    suggestion: "La forza centrifuga in curva può far uscire il baricentro dalla base di appoggio e causare il ribaltamento trasversale."
  },
  {
    id: 30,
    question: "Quale è la corretta inclinazione dei montanti durante il prelievo da catasta?",
    options: ["A) Inclinati in avanti al massimo", "B) Verticali o leggermente inclinati all’indietro", "C) Completamente inclinati indietro", "D) Nessuna inclinazione"],
    correct: 1,
    category: "tecnica_base",
    ref: "Manuale Orion SRL",
    suggestion: "Durante il prelievo da catasta i montanti devono essere verticali o leggermente inclinati all’indietro per evitare di spingere la catasta."
  },
  {
    id: 31,
    question: "Quando si deposita un carico in catasta, come si deve procedere?",
    options: [
      "A) Lasciarlo cadere da 50 cm",
      "B) Appoggiarlo gradualmente senza urti laterali",
      "C) Spingerlo con forza",
      "D) Solo inclinare le forche"
    ],
    correct: 1,
    category: "tecnica_base",
    ref: "Dispensa corso carrellisti - Orion SRL",
    suggestion: "Il carico deve essere depositato gradualmente e senza urti laterali per evitare che la catasta diventi instabile o crolli."
  },
  {
    id: 32,
    question: "Cosa succede se si frena bruscamente con il carico alto?",
    options: [
      "A) Il carrello si ferma meglio",
      "B) Il carico può scivolare in avanti e causare ribaltamento",
      "C) Non succede nulla",
      "D) Migliora la stabilità"
    ],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Orion SRL - Effetto frenata",
    suggestion: "La frenata brusca con carico sollevato sposta violentemente il baricentro in avanti, aumentando enormemente il rischio di ribaltamento longitudinale."
  },
  {
    id: 33,
    question: "Quale controllo deve essere fatto ogni giorno sulle catene del montante?",
    options: [
      "A) Solo la lubrificazione",
      "B) Verifica di usura, tensioni e assenza di rotture",
      "C) Solo la pulizia",
      "D) Nessun controllo"
    ],
    correct: 1,
    category: "manutenzione",
    ref: "Manuale Brixia e Orion SRL",
    suggestion: "Le catene del montante devono essere controllate quotidianamente per verificare usura, tensioni e assenza di maglie rotte o deformate."
  },
  {
    id: 34,
    question: "Quando si usa il traslatore laterale, la velocità deve essere:",
    options: [
      "A) Massima",
      "B) Ridotta",
      "C) Uguale alla marcia normale",
      "D) Zero"
    ],
    correct: 1,
    category: "tecnica_base",
    ref: "Dispensa corso carrellisti",
    suggestion: "Con attrezzature supplementari come il traslatore laterale la velocità deve essere sempre ridotta per mantenere il controllo del carico."
  },
  {
    id: 35,
    question: "Quale è il rischio principale quando si circola in retromarcia?",
    options: [
      "A) Perdita di visibilità anteriore",
      "B) Nessuno",
      "C) Consumo maggiore",
      "D) Solo rumore"
    ],
    correct: 0,
    category: "sicurezza",
    ref: "Manuale Sapienza",
    suggestion: "In retromarcia la visibilità anteriore è fortemente ridotta: è obbligatorio usare il segnalatore acustico e procedere lentamente."
  },
  {
    id: 36,
    question: "Come si verifica la portata massima del carrello?",
    options: [
      "A) Dalla targhetta del costruttore",
      "B) Dal peso del carico a occhio",
      "C) Dal libretto di circolazione",
      "D) Dal colore del carrello"
    ],
    correct: 0,
    category: "stabilità",
    ref: "Manuale Orion SRL - Targhetta di portata",
    suggestion: "La portata massima è indicata sulla targhetta del costruttore applicata sul carrello: deve essere sempre rispettata in base alla distanza del baricentro."
  },
  {
    id: 37,
    question: "Cosa fare se durante la marcia si avverte vibrazione anomala?",
    options: [
      "A) Continuare",
      "B) Fermarsi immediatamente, abbassare il carico e segnalare",
      "C) Accelerare",
      "D) Solo rallentare"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Manuale Brixia",
    suggestion: "Qualsiasi vibrazione anomala è un segnale di possibile guasto: bisogna fermarsi subito, abbassare il carico e avvisare il responsabile."
  },
  {
    id: 38,
    question: "Quale è la corretta procedura per salire sul carrello?",
    options: [
      "A) Saltare dentro",
      "B) Usare il gradino antisdrucciolo e tenersi al maniglione",
      "C) Entrare dal lato sinistro",
      "D) Solo da dietro"
    ],
    correct: 1,
    category: "tecnica_base",
    ref: "Manuale Orion SRL",
    suggestion: "Bisogna sempre usare il gradino antisdrucciolo e tenersi saldamente al maniglione per evitare cadute durante la salita."
  },
  {
    id: 39,
    question: "Quando si deve usare la retromarcia?",
    options: [
      "A) Sempre",
      "B) Quando il carico ostacola la visibilità in avanti",
      "C) Solo in salita",
      "D) Solo di notte"
    ],
    correct: 1,
    category: "tecnica_base",
    ref: "Dispensa corso carrellisti",
    suggestion: "La retromarcia deve essere usata quando il carico impedisce la visibilità anteriore, sempre con il segnalatore acustico attivo."
  },
  {
    id: 40,
    question: "Cosa indica la lettera “Q” sulla targhetta di portata?",
    options: [
      "A) La velocità massima",
      "B) La portata nominale del carrello",
      "C) Il numero di serie",
      "D) La data di fabbricazione"
    ],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Orion SRL",
    suggestion: "La lettera “Q” indica la portata nominale (capacità di sollevamento) del carrello in kg."
  },
  {
    id: 41,
    question: "In caso di pendenza, come si deve posizionare il carico?",
    options: [
      "A) Sollevato alto",
      "B) Basso e inclinato all’indietro",
      "C) In avanti",
      "D) Laterale"
    ],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Sapienza - Effetto pendenza",
    suggestion: "Su qualsiasi pendenza il carico deve essere tenuto basso (15-20 cm) e inclinato all’indietro per mantenere la stabilità."
  },
  {
    id: 42,
    question: "Quale è l’effetto di un carico decentrato lateralmente?",
    options: [
      "A) Migliora la stabilità",
      "B) Riduce la stabilità trasversale e aumenta il rischio di ribaltamento",
      "C) Non ha effetto",
      "D) Aumenta la velocità"
    ],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Orion SRL",
    suggestion: "Un carico decentrato lateralmente riduce drasticamente la stabilità trasversale e può causare ribaltamento in curva."
  },
  {
    id: 43,
    question: "Cosa fare prima di iniziare a sollevare un carico?",
    options: [
      "A) Verificare che il peso sia entro la portata indicata sulla targhetta",
      "B) Sollevare subito",
      "C) Chiedere al collega",
      "D) Solo suonare il clacson"
    ],
    correct: 0,
    category: "stabilità",
    ref: "Manuale Brixia",
    suggestion: "Prima di sollevare qualsiasi carico bisogna sempre controllare sulla targhetta che il peso sia compatibile con la distanza del baricentro."
  },
  {
    id: 44,
    question: "Quale è la corretta sequenza per depositare un carico su scaffale alto?",
    options: [
      "A) Avvicinarsi, inclinare in avanti, depositare",
      "B) Avvicinarsi con montanti verticali, depositare gradualmente, ritirare le forche",
      "C) Inclinare indietro prima",
      "D) Usare solo la retromarcia"
    ],
    correct: 1,
    category: "tecnica_base",
    ref: "Manuale Orion SRL",
    suggestion: "Per depositare su scaffale alto: avvicinarsi con montanti verticali, depositare gradualmente e ritirare le forche solo quando il carico è stabile."
  },
  {
    id: 45,
    question: "Quando è obbligatorio usare un segnalatore a terra?",
    options: [
      "A) Sempre",
      "B) Quando il carico ostacola completamente la visibilità",
      "C) Solo in curva",
      "D) Solo di sabato"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Dispensa corso carrellisti",
    suggestion: "Quando il carico impedisce totalmente la visibilità anteriore è obbligatorio avere un segnalatore a terra che guidi l’operatore."
  },
  {
    id: 46,
    question: "Quale manutenzione deve essere fatta dall’operatore ogni giorno?",
    options: [
      "A) Solo lavare il carrello",
      "B) Controllo livello olio, acqua batteria, freni, ruote, catene, dispositivi di sicurezza",
      "C) Solo cambiare le gomme",
      "D) Solo pulire il sedile"
    ],
    correct: 1,
    category: "manutenzione",
    ref: "Manuale Brixia",
    suggestion: "L’operatore deve controllare ogni giorno: livelli olio/acqua batteria, efficienza freni, stato ruote, catene e tutti i dispositivi di sicurezza."
  },
  {
    id: 47,
    question: "Cosa succede se si circola con le forche sollevate oltre i 30 cm?",
    options: [
      "A) Migliora la visibilità",
      "B) Si riduce la stabilità e aumenta il rischio di ribaltamento",
      "C) Non succede nulla",
      "D) Si risparmia carburante"
    ],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Sapienza",
    suggestion: "Circolare con forche alte sposta in alto il baricentro e riduce notevolmente la stabilità trasversale e longitudinale."
  },
  {
    id: 48,
    question: "Quale è il rischio maggiore quando si usa un posizionatore forche?",
    options: [
      "A) Aumento della portata",
      "B) Possibile spostamento laterale del carico se non usato correttamente",
      "C) Riduzione del rumore",
      "D) Miglioramento della velocità"
    ],
    correct: 1,
    category: "tecnica_base",
    ref: "Dispensa corso carrellisti",
    suggestion: "Con il posizionatore forche il carico può spostarsi lateralmente se l’operatore non lo controlla correttamente: velocità ridotta e movimenti lenti."
  },
  {
    id: 49,
    question: "Come si deve parcheggiare il carrello alla fine del turno in pendenza?",
    options: [
      "A) Con le ruote dritte e freno a mano inserito",
      "B) Con le ruote sterzate verso il bordo e freno inserito",
      "C) Senza freno",
      "D) Con le forche sollevate"
    ],
    correct: 1,
    category: "tecnica_base",
    ref: "Manuale Orion SRL",
    suggestion: "In pendenza le ruote devono essere sterzate verso il bordo o il marciapiede e il freno a mano deve essere sempre inserito."
  },
  {
    id: 50,
    question: "L’operatore deve segnalare immediatamente al responsabile se:",
    options: [
      "A) Il carrello ha un difetto di sicurezza o un’anomalia",
      "B) Ha finito la benzina",
      "C) Ha fame",
      "D) Il collega è in ritardo"
    ],
    correct: 0,
    category: "sicurezza",
    ref: "Manuale Brixia",
    suggestion: "Qualsiasi difetto di sicurezza o anomalia deve essere segnalato immediatamente al responsabile prima di continuare a usare il mezzo."
  },
  {
    id: 51,
    question: "Se durante la marcia il carico inizia a scivolare in avanti, cosa deve fare subito l’operatore?",
    options: [
      "A) Accelerare per “tenere” il carico",
      "B) Fermarsi dolcemente, abbassare completamente le forche e riposizionare il carico",
      "C) Inclinare i montanti ancora di più all’indietro",
      "D) Continuare la marcia normalmente"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Manuale Sapienza",
    suggestion: "Se il carico scivola bisogna fermarsi immediatamente, abbassare le forche a terra e riposizionarlo correttamente prima di ripartire."
  },
  {
    id: 52,
    question: "Per evitare di rimanere schiacciati tra il carrello e un pilastro o scaffale:",
    options: [
      "A) Procedere rasente al muro",
      "B) Mantenere sempre una distanza di sicurezza minima e controllare con gli specchietti",
      "C) Guidare solo in retromarcia",
      "D) Ignorare gli ostacoli bassi"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Circolare 7808/2001",
    suggestion: "Mantenere sempre una distanza di sicurezza laterale e controllare costantemente con gli specchietti per evitare schiacciamenti."
  },
  {
    id: 53,
    question: "Un pedone attraversa improvvisamente il corridoio davanti al carrello:",
    options: [
      "A) Suonare il clacson e proseguire",
      "B) Fermarsi immediatamente e aspettare che il pedone abbia attraversato completamente",
      "C) Sterzare bruscamente a destra",
      "D) Accelerare per superarlo prima"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Manuale Brixia",
    suggestion: "La priorità assoluta è la sicurezza delle persone: fermarsi subito e attendere che il pedone abbia finito di attraversare."
  },
  {
    id: 54,
    question: "In caso di rischio imminente di ribaltamento laterale in curva, l’azione che salva la vita è:",
    options: [
      "A) Saltare fuori dal carrello",
      "B) Rimanere seduto con cintura allacciata, braccia e gambe dentro la cabina",
      "C) Aprire la porta e sporgersi",
      "D) Alzare le forche al massimo"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Circolare 7808/2001",
    suggestion: "In caso di ribaltamento bisogna rimanere seduti con cintura allacciata e tenere braccia e gambe all’interno della cabina protetta."
  },
  {
    id: 55,
    question: "Se il carrello inizia a inclinarsi lateralmente mentre si curva con carico:",
    options: [
      "A) Accelerare per stabilizzarlo",
      "B) Rallentare subito, raddrizzare il volante e abbassare le forche a 15-20 cm",
      "C) Continuare la curva normalmente",
      "D) Inclinare i montanti in avanti"
    ],
    correct: 1,
    category: "stabilità",
    ref: "Manuale Orion SRL",
    suggestion: "In caso di inizio di ribaltamento laterale: rallentare, raddrizzare il volante e abbassare immediatamente le forche."
  },
  {
    id: 56,
    question: "Per prevenire la caduta di materiale dall’alto durante il sollevamento:",
    options: [
      "A) Sollevare il più velocemente possibile",
      "B) Verificare sempre il tetto/griglia di protezione e non superare la portata",
      "C) Non indossare il casco",
      "D) Sollevare solo di notte"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Circolare 7808/2001",
    suggestion: "Tetto/griglia di protezione funzionante + carico entro portata + casco sono le tre misure fondamentali contro le cadute di materiale."
  },
  {
    id: 57,
    question: "Le forche non rispondono più ai comandi durante un sollevamento:",
    options: [
      "A) Continuare a premere la leva",
      "B) Fermare il carrello, abbassare manualmente se possibile e segnalare immediatamente il guasto",
      "C) Colpire le forche con un attrezzo",
      "D) Usare solo la retromarcia"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Manuale Brixia",
    suggestion: "In caso di mancato funzionamento delle forche bisogna fermarsi subito, abbassare il carico manualmente se possibile e segnalare il guasto."
  },
  {
    id: 58,
    question: "In un incrocio tra corridoi con altro carrello:",
    options: [
      "A) Procedere senza guardare",
      "B) Rallentare, usare il clacson, rispettare i segnali di precedenza",
      "C) Accelerare per passare per primo",
      "D) Chiudere gli occhi e sperare"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Dispensa corso carrellisti",
    suggestion: "Negli incroci tra corridoi è obbligatorio rallentare, usare il clacson e rispettare le regole di precedenza."
  },
  {
    id: 59,
    question: "Si avverte odore di bruciato o si vede fumo dal carrello:",
    options: [
      "A) Continuare il lavoro",
      "B) Fermarsi subito in zona sicura, spegnere il motore, allontanarsi e avvisare",
      "C) Aprire subito il cofano",
      "D) Versare acqua sul motore"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Manuale Brixia",
    suggestion: "Odore di bruciato o fumo = possibile incendio: fermarsi immediatamente in zona sicura, spegnere il motore e allontanarsi."
  },
  {
    id: 60,
    question: "La catasta da cui si deve prelevare sembra instabile:",
    options: [
      "A) Tirare il carico con forza",
      "B) Avvicinarsi lentamente, verificare la stabilità prima di inserire le forche",
      "C) Sollevare da 2 metri di distanza",
      "D) Usare solo una forca"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Manuale Orion SRL",
    suggestion: "Se la catasta appare instabile bisogna fermarsi e verificare attentamente prima di inserire le forche: meglio chiedere aiuto che rischiare un crollo."
  },
  {
    id: 61,
    question: "Un collega è a terra vicino al carrello dopo un incidente:",
    options: [
      "A) Continuare il proprio lavoro",
      "B) Fermare il carrello in sicurezza, prestare i primi soccorsi se si è formati e chiamare aiuto",
      "C) Muovere il ferito con le forche",
      "D) Ignorare la situazione"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Manuale Brixia e Dispensa corso",
    suggestion: "In caso di infortunio fermare immediatamente il mezzo in sicurezza, prestare i primi soccorsi solo se si è formati e chiamare subito aiuto."
  },
  {
    id: 62,
    question: "Visibilità ridotta per polvere o penombra nel magazzino:",
    options: [
      "A) Aumentare la velocità",
      "B) Accendere tutti i fari di lavoro, ridurre la velocità e usare il segnalatore acustico",
      "C) Non accendere le luci",
      "D) Guidare solo di giorno"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Manuale Orion SRL",
    suggestion: "In condizioni di scarsa visibilità è obbligatorio accendere i fari di lavoro, ridurre drasticamente la velocità e usare continuamente il segnalatore acustico."
  },
  {
    id: 63,
    question: "È assolutamente vietato fumare:",
    options: [
      "A) Solo vicino ai carrelli diesel",
      "B) Nell’area di ricarica batterie o di rifornimento GPL/carburante",
      "C) Solo dentro la cabina",
      "D) Non è mai vietato"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Circolare 7808/2001 e Regolamento CE 684/2008",
    suggestion: "È vietato fumare o usare fiamme libere nelle zone di ricarica batterie e rifornimento carburante/GPL per il rischio di esplosione."
  },
  {
    id: 64,
    question: "Si sente forte odore di gas durante il rifornimento GPL:",
    options: [
      "A) Accendere una fiamma per controllare",
      "B) Chiudere subito la valvola, ventilare la zona e non usare interruttori elettrici",
      "C) Continuare il rifornimento",
      "D) Chiamare dopo il turno"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Manuale Brixia",
    suggestion: "In caso di perdita di gas chiudere immediatamente la valvola, ventilare e non azionare nessun interruttore elettrico per evitare scintille."
  },
  {
    id: 65,
    question: "L’estintore sul carrello deve essere:",
    options: [
      "A) Solo nel vano motore",
      "B) Fissato in posizione facilmente raggiungibile dall’operatore",
      "C) Sotto il sedile",
      "D) Non è obbligatorio"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Norme di sicurezza carrelli",
    suggestion: "L’estintore deve essere fissato in posizione facilmente accessibile dall’operatore seduto alla guida."
  },
  {
    id: 66,
    question: "Durante la ricarica delle batterie al piombo è obbligatorio:",
    options: [
      "A) Chiudere tutte le porte della zona",
      "B) Garantire ventilazione adeguata e vietare fiamme libere",
      "C) Caricare con il motore del carrello acceso",
      "D) Usare acqua per raffreddare le batterie"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Circolare 7808/2001",
    suggestion: "Durante la ricarica è obbligatoria una buona ventilazione della zona e il divieto assoluto di fiamme libere a causa dei gas esplosivi prodotti."
  },
  {
    id: 67,
    question: "Principio di incendio su carrello endotermico o GPL:",
    options: [
      "A) Spegnere con acqua",
      "B) Usare estintore polvere ABC o CO₂ e allontanarsi",
      "C) Spegnere con le mani",
      "D) Continuare a lavorare"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Manuale Brixia",
    suggestion: "Per incendi su carrelli con motore endotermico o GPL usare estintore polvere ABC o CO₂ e allontanarsi immediatamente."
  },
  {
    id: 68,
    question: "Il caricabatterie deve essere collegato:",
    options: [
      "A) A una presa qualsiasi",
      "B) Solo a prese con interruttore differenziale e in zona ben ventilata",
      "C) Senza protezione",
      "D) Lasciato incustodito"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Dispensa corso carrellisti",
    suggestion: "Il caricabatterie deve essere collegato solo a prese protette da interruttore differenziale e in zona ben ventilata."
  },
  {
    id: 69,
    question: "Per evitare incendi da surriscaldamento dei freni in discesa:",
    options: [
      "A) Frenare continuamente",
      "B) Usare il freno motore e frenate brevi e intervallate",
      "C) Non usare mai i freni",
      "D) Solo in salita"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Manuale Orion SRL",
    suggestion: "In discesa utilizzare il freno motore e fare frenate brevi e intervallate per evitare il surriscaldamento dei freni."
  },
  {
    id: 70,
    question: "Dopo aver spento un incendio sul carrello:",
    options: [
      "A) Riprendere subito il lavoro",
      "B) Non utilizzare più il mezzo fino a verifica e autorizzazione del manutentore",
      "C) Solo pulire la zona",
      "D) Ignorare l’accaduto"
    ],
    correct: 1,
    category: "sicurezza",
    ref: "Manuale Brixia",
    suggestion: "Dopo un incendio il carrello non deve più essere utilizzato fino a verifica completa e autorizzazione del manutentore."
  },
  {
    id: 71,
    question: "Per ridurre al minimo le vibrazioni trasmesse al corpo intero:",
    options: [
      "A) Guidare sempre con forche alte",
      "B) Tenere forche basse (15-20 cm), velocità moderata, sedile antivibrazione ben regolato e evitare buche",
      "C) Stare in piedi sul carrello",
      "D) Non fare mai pause"
    ],
    correct: 1,
    category: "salute",
    ref: "Manuale Sapienza - Vibrazioni",
    suggestion: "Tenere le forche basse, velocità moderata, sedile regolato e evitare pavimentazioni irregolari riduce le vibrazioni al corpo intero."
  },
  {
    id: 72,
    question: "Per prevenire mal di schiena e dolori cervicali da guida prolungata:",
    options: [
      "A) Non regolare mai il sedile",
      "B) Regolare altezza sedile, distanza pedali e supporto lombare prima di ogni turno",
      "C) Guidare sempre curvo in avanti",
      "D) Cambiare posizione ogni ora senza fermare il carrello"
    ],
    correct: 1,
    category: "salute",
    ref: "Manuale Orion SRL",
    suggestion: "Regolare correttamente il sedile (altezza, distanza pedali e supporto lombare) prima di ogni turno previene mal di schiena e problemi cervicali."
  },
  {
    id: 73,
    question: "L’esposizione a gas di scarico (monossido di carbonio e NOx) si riduce notevolmente:",
    options: [
      "A) Usando carrelli endotermici in ambienti chiusi senza ricambio aria",
      "B) Preferendo carrelli elettrici in ambienti chiusi o garantendo forte ventilazione con endotermici",
      "C) Accelerando sempre al massimo",
      "D) Non usando il filtro antigas"
    ],
    correct: 1,
    category: "salute",
    ref: "Manuale Brixia",
    suggestion: "Nei locali chiusi è fortemente consigliato l’uso di carrelli elettrici o, in alternativa, garantire un’elevata ventilazione con carrelli endotermici."
  },
  {
    id: 74,
    question: "Per evitare problemi alle mani e ai polsi (vibrazioni mano-braccio dai comandi):",
    options: [
      "A) Stringere il volante e le leve con forza",
      "B) Usare guanti antivibrazione e mantenere una presa rilassata",
      "C) Guidare senza guanti",
      "D) Usare solo una mano"
    ],
    correct: 1,
    category: "salute",
    ref: "Manuale Sapienza",
    suggestion: "Usare guanti antivibrazione e mantenere una presa rilassata riduce il rischio di disturbi vascolari e neurologici alle mani e ai polsi."
  },
  {
    id: 75,
    question: "Per prevenire affaticamento visivo, mal di testa e calo di attenzione durante turni lunghi:",
    options: [
      "A) Non pulire mai il parabrezza",
      "B) Fare pause regolari ogni 2 ore, mantenere puliti specchietti e parabrezza e assicurare buona illuminazione",
      "C) Guidare con gli occhi socchiusi",
      "D) Aumentare la velocità per finire prima"
    ],
    correct: 1,
    category: "salute",
    ref: "Manuale Orion SRL",
    suggestion: "Fare pause regolari ogni 2 ore, tenere puliti parabrezza e specchietti e assicurare buona illuminazione riduce l’affaticamento visivo e il calo di attenzione."
  },
  {
    id: 76,
    question: "Secondo le norme vigenti, chi deve provvedere affinché l’operatore riceva formazione e addestramento specifico prima di guidare un muletto?",
    options: [
      "A) Solo l’operatore stesso",
      "B) Il datore di lavoro",
      "C) Solo il collega più anziano",
      "D) L’ufficio acquisti"
    ],
    correct: 1,
    category: "normativa",
    ref: "D.Lgs. 81/2008",
    suggestion: "Il datore di lavoro ha l’obbligo di garantire che ogni operatore riceva formazione e addestramento specifico prima di utilizzare il carrello elevatore."
  },
  {
    id: 77,
    question: "La patente di guida B (automobile) è sufficiente per guidare un carrello elevatore in azienda?",
    options: [
      "A) Sì, sempre",
      "B) No, serve l’abilitazione specifica per carrelli elevatori",
      "C) Solo se il muletto è elettrico",
      "D) Solo per muletto di piccola portata"
    ],
    correct: 1,
    category: "normativa",
    ref: "Accordo Stato-Regioni 22/02/2012",
    suggestion: "La patente B non è sufficiente: è obbligatoria l’abilitazione specifica (patentino) per carrelli elevatori."
  },
  {
    id: 78,
    question: "Quanto tempo è valida l’abilitazione (patentino) per la guida dei carrelli elevatori?",
    options: [
      "A) 1 anno",
      "B) 5 anni",
      "C) 10 anni",
      "D) Per sempre"
    ],
    correct: 1,
    category: "normativa",
    ref: "Accordo Stato-Regioni 22/02/2012",
    suggestion: "L’abilitazione ha validità di 5 anni. Dopo 5 anni è obbligatorio frequentare un corso di aggiornamento."
  },
  {
    id: 79,
    question: "Dopo quanto tempo dall’abilitazione l’operatore deve frequentare un corso di aggiornamento?",
    options: [
      "A) Dopo 2 anni",
      "B) Ogni 5 anni",
      "C) Solo se cambia azienda",
      "D) Mai"
    ],
    correct: 1,
    category: "normativa",
    ref: "Accordo Stato-Regioni 22/02/2012",
    suggestion: "L’aggiornamento è obbligatorio ogni 5 anni per mantenere valida l’abilitazione."
  },
  {
    id: 80,
    question: "Chi è responsabile della verifica che l’operatore abbia l’abilitazione valida prima di assegnargli il muletto?",
    options: [
      "A) Solo l’operatore",
      "B) Il datore di lavoro o il preposto",
      "C) Solo il manutentore",
      "D) L’ispettore del lavoro"
    ],
    correct: 1,
    category: "normativa",
    ref: "D.Lgs. 81/2008",
    suggestion: "Il datore di lavoro e il preposto devono verificare che l’operatore sia in possesso di abilitazione valida prima di affidargli il mezzo."
  },
  {
    id: 81,
    question: "L’operatore può guidare un muletto senza aver mai ricevuto formazione specifica?",
    options: [
      "A) Sì, se ha esperienza",
      "B) No, è obbligatoria la formazione e l’addestramento",
      "C) Solo se il muletto è manuale",
      "D) Solo per brevi spostamenti"
    ],
    correct: 1,
    category: "normativa",
    ref: "D.Lgs. 81/2008 Art. 73",
    suggestion: "È vietato far utilizzare il carrello elevatore a personale non formato e non abilitato."
  },
  {
    id: 82,
    question: "In caso di infortunio grave con il muletto, chi può essere chiamato a rispondere penalmente se non ha fornito formazione?",
    options: [
      "A) Solo l’operatore",
      "B) Il datore di lavoro",
      "C) Solo il collega",
      "D) Nessuno"
    ],
    correct: 1,
    category: "normativa",
    ref: "D.Lgs. 81/2008",
    suggestion: "Il datore di lavoro può essere chiamato a rispondere penalmente se non ha provveduto alla formazione obbligatoria dell’operatore."
  },
  {
    id: 83,
    question: "L’operatore deve consegnare il patentino al datore di lavoro?",
    options: [
      "A) No, lo tiene solo lui",
      "B) Sì, deve essere verificato e conservato in azienda",
      "C) Solo se lo chiede il collega",
      "D) Solo alla fine del turno"
    ],
    correct: 1,
    category: "normativa",
    ref: "Accordo Stato-Regioni 22/02/2012",
    suggestion: "L’abilitazione deve essere verificata e conservata in copia in azienda dal datore di lavoro."
  },
  {
    id: 84,
    question: "La formazione per carrellisti può essere fatta solo online senza parte pratica?",
    options: [
      "A) Sì, è sufficiente",
      "B) No, deve comprendere sia teoria che pratica su mezzo reale",
      "C) Solo per i muletto elettrici",
      "D) Solo se si è già esperti"
    ],
    correct: 1,
    category: "normativa",
    ref: "Accordo Stato-Regioni 22/02/2012",
    suggestion: "La formazione deve essere di 12 ore totali (8 teoria + 4 pratica su mezzo reale) con verifica finale."
  },
  {
    id: 85,
    question: "Chi deve firmare il verbale di formazione e addestramento dell’operatore?",
    options: [
      "A) Solo l’operatore",
      "B) L’operatore e il docente/formatori",
      "C) Solo il datore di lavoro",
      "D) Solo il sindacato"
    ],
    correct: 1,
    category: "normativa",
    ref: "Accordo Stato-Regioni 22/02/2012",
    suggestion: "Il verbale deve essere firmato sia dall’operatore che dal docente/formatore."
  },
  {
    id: 86,
    question: "L’operatore può rifiutarsi di guidare un muletto se non ha ricevuto la formazione?",
    options: [
      "A) No, deve obbedire",
      "B) Sì, è un suo diritto e dovere",
      "C) Solo se è stanco",
      "D) Solo se il muletto è vecchio"
    ],
    correct: 1,
    category: "normativa",
    ref: "D.Lgs. 81/2008",
    suggestion: "L’operatore ha il diritto e il dovere di rifiutarsi di guidare il muletto se non ha ricevuto la formazione specifica."
  },
  {
    id: 87,
    question: "Il patentino per muletto è nominativo e personale: può essere prestato a un collega?",
    options: [
      "A) Sì, per una giornata",
      "B) No, è strettamente personale",
      "C) Solo se il collega ha la stessa taglia",
      "D) Solo in emergenza"
    ],
    correct: 1,
    category: "normativa",
    ref: "Accordo Stato-Regioni 22/02/2012",
    suggestion: "L’abilitazione è strettamente personale e nominativa: non può essere prestata o utilizzata da altri."
  },
  {
    id: 88,
    question: "Il datore di lavoro deve tenere aggiornati i registri delle abilitazioni dei carrellisti?",
    options: [
      "A) No",
      "B) Sì, è un obbligo",
      "C) Solo per i muletto nuovi",
      "D) Solo su richiesta dell’ispettore"
    ],
    correct: 1,
    category: "normativa",
    ref: "D.Lgs. 81/2008",
    suggestion: "Il datore di lavoro deve conservare e aggiornare i registri delle abilitazioni di tutti i carrellisti."
  },
  {
    id: 89,
    question: "Se l’operatore cambia mansione e non usa più il muletto, l’abilitazione scade?",
    options: [
      "A) Sì, immediatamente",
      "B) No, rimane valida 5 anni",
      "C) Scade dopo 1 anno",
      "D) Solo se cambia azienda"
    ],
    correct: 1,
    category: "normativa",
    ref: "Accordo Stato-Regioni 22/02/2012",
    suggestion: "L’abilitazione rimane valida 5 anni anche se l’operatore non usa più il muletto."
  },
  {
    id: 90,
    question: "Prima di iniziare a lavorare con un muletto nuovo o diverso da quello abituale, cosa deve ricevere l’operatore?",
    options: [
      "A) Solo le chiavi",
      "B) Informazione e addestramento specifico sul nuovo mezzo",
      "C) Solo il manuale in inglese",
      "D) Niente"
    ],
    correct: 1,
    category: "normativa",
    ref: "Accordo Stato-Regioni 22/02/2012",
    suggestion: "Prima di usare un carrello diverso è obbligatorio ricevere informazione e addestramento specifico sul nuovo mezzo."
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
