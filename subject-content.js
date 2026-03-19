window.subjectConfigs = {
  histoire: {
    key: "histoire",
    label: "Histoire",
    eyebrow: "Revision Terminale",
    heroTitle: "Reviser l'histoire avec des reperes clairs et une vraie methode de copie",
    heroCopy:
      "Retrouve dates, acteurs, notions, phrases de redaction, exemples precis et questions type bac pour apprendre a construire une copie solide.",
    toolboxTitle: "Boite a reperes historiques",
    toolboxCopy:
      "Une synthese pour memoriser rapidement les dates, notions, acteurs et methodes a reutiliser dans toutes les copies.",
    toolbox: {
      markers: [
        { label: "1917", expression: "Revolution russe", note: "Repere de depart pour l'URSS bolchevique puis stalinienne." },
        { label: "1933", expression: "Hitler devient chancelier", note: "Point de depart de l'installation du regime nazi." },
        { label: "1939-1945", expression: "Seconde Guerre mondiale", note: "Periode cle de guerre d'aneantissement." },
        { label: "1947", expression: "Debut symbolique de la guerre froide", note: "Doctrines Truman et Jdanov." },
        { label: "1955", expression: "Conference de Bandung", note: "Repere important de la decolonisation et du tiers-monde." },
        { label: "1958", expression: "Naissance de la Ve Republique", note: "Nouvelle Constitution en France." },
        { label: "1962", expression: "Crise de Cuba et election du president au suffrage universel direct", note: "Repere majeur pour guerre froide et Ve Republique." },
        { label: "1989", expression: "Chute du mur de Berlin", note: "Symbole de l'effondrement du bloc de l'Est." },
        { label: "1991", expression: "Disparition de l'URSS", note: "Fin de la guerre froide." }
      ],
      notions: [
        { label: "Totalitarisme", expression: "Regime qui cherche a controler totalement la societe.", note: "Toujours definir avant de l'utiliser." },
        { label: "Guerre d'aneantissement", expression: "Guerre qui vise a detruire l'ennemi et frappe aussi les civils.", note: "Mot cle sur 1939-1945." },
        { label: "Guerre froide", expression: "Affrontement global entre les Etats-Unis et l'URSS sans guerre directe generalisee.", note: "Definition a connaitre par coeur." },
        { label: "Bipolarisation", expression: "Organisation du monde autour de deux poles de puissance.", note: "A utiliser pour la guerre froide." },
        { label: "Decolonisation", expression: "Processus par lequel une colonie accede a l'independance.", note: "Toujours montrer qu'il existe des formes variees." },
        { label: "Cohabitation", expression: "President et Premier ministre n'appartiennent pas a la meme majorite.", note: "Notion cle pour la Ve Republique." }
      ],
      methods: [
        { label: "Introduire", expression: "Definir les mots du sujet et poser le cadre chronologique.", note: "Indispensable dans toute composition." },
        { label: "Argumenter", expression: "Idee directrice, explication, exemple date et contextualise.", note: "Structure la plus efficace." },
        { label: "Comparer", expression: "Montrer points communs et differences de facon organisee.", note: "Tres utile pour les totalitarismes." },
        { label: "Conclure", expression: "Repondre clairement a la question posee.", note: "La conclusion ne doit pas etre un simple resume." }
      ],
      actors: [
        { label: "Staline", expression: "Dirige l'URSS et impose un systeme totalitaire.", note: "A relier a la collectivisation, a la terreur et au culte du chef." },
        { label: "Hitler", expression: "Chef du parti nazi puis dictateur du IIIe Reich.", note: "A relier au nazisme, au racisme et a la guerre." },
        { label: "De Gaulle", expression: "Figure centrale de la France libre puis de la Ve Republique.", note: "Important sur la France depuis 1945." },
        { label: "Gorbatchev", expression: "Dirigeant sovietique des reformes de la perestroika et de la glasnost.", note: "Repere utile pour la fin de la guerre froide." }
      ],
      reference: [
        { functionName: "Composition", domain: "Cadre chronologique et notions", derivative: "Idee directrice par partie", primitive: "Exemples dates et expliques", trap: "Raconter les faits sans les relier au sujet." },
        { functionName: "Analyse de document", domain: "Nature, auteur, contexte", derivative: "Ce que dit le document", primitive: "Ce que le cours permet d'expliquer", trap: "Paraphraser le document sans prendre de recul." },
        { functionName: "Paragraphe argumente", domain: "Idee + explication", derivative: "Lien logique", primitive: "Exemple precis", trap: "Empiler des dates sans veritable demonstration." }
      ]
    },
    mockExams: [
      {
        tag: "Composition",
        title: "Comment la guerre froide structure-t-elle le monde de 1947 a 1991 ?",
        scenario: "Il faut montrer la bipolarisation du monde, les crises, la detente et la fin du conflit.",
        goal: "Construire un raisonnement chronologique en montrant l'opposition entre les deux blocs et ses evolutions.",
        steps: [
          "Definir la guerre froide et poser les bornes chronologiques.",
          "Montrer comment la bipolarisation organise le monde.",
          "Illustrer avec des crises majeures comme Berlin ou Cuba.",
          "Expliquer la detente puis l'effondrement du bloc sovietique."
        ],
        expected: "Le correcteur attend une reponse structuree, precise et illustree.",
        writing: "La guerre froide structure durablement le monde en opposant deux blocs ideologiques et geopolitiques, meme si cet affrontement connait des phases variees."
      },
      {
        tag: "Composition",
        title: "En quoi la Seconde Guerre mondiale est-elle une guerre d'aneantissement ?",
        scenario: "Il faut montrer que la guerre vise les armees, les Etats et les populations civiles.",
        goal: "Expliquer l'extreme violence du conflit en mobilisant des exemples precis.",
        steps: [
          "Definir la notion de guerre d'aneantissement.",
          "Montrer la violence sur les fronts.",
          "Expliquer la violence contre les civils et le genocide.",
          "Conclure sur la dimension totale du conflit."
        ],
        expected: "La copie doit articuler idee generale et exemples precis.",
        writing: "La Seconde Guerre mondiale est une guerre d'aneantissement car elle vise a detruire l'adversaire par des violences de masse touchant combattants et civils."
      }
    ],
    chapters: [
      {
        id: "hist-totalitarismes",
        title: "Totalitarismes et Seconde Guerre mondiale",
        summary: "Il faut definir le totalitarisme, comparer nazisme et stalinisme et montrer en quoi la guerre est une guerre d'aneantissement.",
        mustKnow: [
          "Definir un regime totalitaire.",
          "Comparer stalinisme et nazisme.",
          "Montrer la violence de masse contre les civils.",
          "Connaitre les grandes etapes du genocide."
        ],
        memoryLines: [
          "Un regime totalitaire cherche a encadrer totalement la societe.",
          "La Seconde Guerre mondiale est une guerre d'aneantissement.",
          "Le genocide des Juifs et des Tsiganes est organise par l'Etat nazi."
        ],
        vocabulary: [
          { word: "Totalitarisme", definition: "Regime qui utilise propagande, parti unique, terreur et culte du chef pour controler la societe.", use: "Oui, terme obligatoire du chapitre." },
          { word: "Guerre d'aneantissement", definition: "Guerre qui vise a detruire totalement l'ennemi et touche massivement les civils.", use: "Oui, a utiliser dans la conclusion." }
        ],
        properties: [
          { kind: "Point cle", title: "Parti unique", text: "Le parti unique monopolise le pouvoir et interdit toute opposition." },
          { kind: "Point cle", title: "Violence de masse", text: "La guerre touche a tres grande echelle les combattants comme les populations civiles." }
        ],
        formulas: [
          { label: "Reperes", expression: "1933 ; 1939 ; 1941 ; 1945", note: "Hitler au pouvoir, debut de la guerre, attaque contre l'URSS, fin de la guerre." },
          { label: "Idee directrice", expression: "Nazisme et stalinisme sont deux regimes totalitaires mais leurs ideologies ne sont pas identiques.", note: "Bonne phrase d'introduction ou de transition." }
        ],
        methods: [
          { title: "Comparer deux regimes", text: "Comparer chef, parti, propagande, terreur, economie et ideologie." },
          { title: "Montrer une guerre d'aneantissement", text: "Utiliser des exemples precis: front de l'Est, genocide, bombardements, massacres de civils." }
        ],
        example: {
          title: "Exemple explique",
          text: "La guerre d'aneantissement se voit a la fois sur les fronts et dans les violences faites aux civils.",
          steps: [
            "Sur le front de l'Est, les combats sont particulierement violents.",
            "Le genocide des Juifs et des Tsiganes montre l'extreme violence ideologique du conflit.",
            "Les bombardements de villes touchent massivement les populations civiles."
          ]
        },
        examQuestions: [
          {
            title: "Question type bac",
            statement: "Montrez que le nazisme est un regime totalitaire.",
            answer: [
              "Definir le totalitarisme.",
              "Montrer le role du chef et du parti unique.",
              "Expliquer la propagande et la terreur.",
              "Conclure sur la volonte de control total."
            ]
          },
          {
            title: "Question type bac",
            statement: "Expliquez pourquoi la Seconde Guerre mondiale est une guerre d'aneantissement.",
            answer: [
              "Definir la notion.",
              "Montrer la violence sur les fronts.",
              "Expliquer la violence contre les civils.",
              "Conclure sur la logique de destruction totale."
            ]
          }
        ],
        drills: [
          { title: "Reflexe", text: "Ne jamais citer seulement une date: toujours dire ce qu'elle montre." },
          { title: "Reflexe", text: "Quand tu vois totalitarisme, pense propagande, parti unique, terreur, chef." }
        ],
        writingPhrases: [
          { title: "Comparaison", context: "A reutiliser", text: "Ces deux regimes ont en commun de vouloir encadrer totalement la societe, mais ils se distinguent par leur ideologie et certains de leurs objectifs." }
        ]
      },
      {
        id: "hist-guerre-froide",
        title: "Guerre froide et nouvelles conflictualites",
        summary: "Il faut comprendre la bipolarisation du monde, les crises, la detente et l'effondrement du bloc de l'Est.",
        mustKnow: [
          "Definir guerre froide et bipolarisation.",
          "Connaitre quelques crises majeures.",
          "Expliquer la detente puis la fin de la guerre froide."
        ],
        memoryLines: [
          "La guerre froide oppose deux superpuissances et deux modeles ideologiques.",
          "La chute du mur de Berlin symbolise l'effondrement du bloc de l'Est."
        ],
        vocabulary: [
          { word: "Bipolarisation", definition: "Organisation du monde autour de deux poles de puissance concurrents.", use: "Oui, utile pour toute copie sur la guerre froide." },
          { word: "Detente", definition: "Phase d'apaisement relatif des relations entre les deux Grands.", use: "Oui, pour nuancer l'evolution du conflit." }
        ],
        properties: [
          { kind: "Point cle", title: "Crises sans guerre directe", text: "Les deux blocs s'affrontent par crises interposees sans guerre generale entre eux." }
        ],
        formulas: [
          { label: "Reperes", expression: "1947 ; 1962 ; 1989 ; 1991", note: "Debut de la guerre froide, crise de Cuba, chute du mur, disparition de l'URSS." }
        ],
        methods: [
          { title: "Periodiser", text: "Decouper la guerre froide en phases permet de structurer clairement la copie." }
        ],
        example: {
          title: "Exemple explique",
          text: "La crise de Cuba montre jusqu'ou peut aller la tension entre les deux superpuissances.",
          steps: [
            "L'URSS installe des missiles a Cuba.",
            "Les Etats-Unis reagissent par un blocus naval.",
            "Le compromis final evite la guerre nucleaire mais montre la gravite de la crise."
          ]
        },
        examQuestions: [
          {
            title: "Question type bac",
            statement: "Expliquez pourquoi la crise de Cuba est un moment majeur de la guerre froide.",
            answer: [
              "Presenter le contexte de bipolarisation.",
              "Montrer le risque d'affrontement direct.",
              "Conclure sur la peur nucleaire et l'entree dans la detente."
            ]
          }
        ],
        drills: [
          { title: "Reflexe", text: "Dans une copie sur la guerre froide, pense crises, detente, rearmement et fin du conflit." }
        ],
        writingPhrases: [
          { title: "Definition", context: "A reutiliser", text: "La guerre froide designe un affrontement global, ideologique et geostrategique entre les Etats-Unis et l'URSS, sans guerre directe generalisee entre eux." }
        ]
      },
      {
        id: "hist-decolonisation",
        title: "Decolonisation et affirmation du tiers-monde",
        summary: "Il faut montrer la diversite des chemins de la decolonisation et l'affirmation des nouveaux Etats independants.",
        mustKnow: [
          "Definir decolonisation et tiers-monde.",
          "Comparer un cas negocie et un cas conflictuel.",
          "Connaitre Bandung et le mouvement des non-alignes."
        ],
        memoryLines: [
          "La decolonisation s'accelere apres 1945 dans un contexte de contestation des empires coloniaux.",
          "Le tiers-monde cherche a exister entre les deux blocs."
        ],
        vocabulary: [
          { word: "Decolonisation", definition: "Processus par lequel une colonie accede a l'independance.", use: "Oui, terme de base du chapitre." },
          { word: "Tiers-monde", definition: "Expression designant les pays nouvellement independants cherchant a exister entre les deux blocs.", use: "Oui, utile dans les conclusions et comparaisons." }
        ],
        properties: [
          { kind: "Point cle", title: "Bandung 1955", text: "La conference de Bandung affirme politiquement les pays nouvellement independants." }
        ],
        formulas: [
          { label: "Reperes", expression: "1947 : Inde ; 1955 : Bandung ; 1954-1962 : guerre d'Algerie", note: "Dates classiques de composition." }
        ],
        methods: [
          { title: "Comparer deux decolonisations", text: "Toujours presenter le contexte, les acteurs, les modalites et les consequences." }
        ],
        example: {
          title: "Exemple explique",
          text: "L'Inde et l'Algerie illustrent deux chemins differents de la decolonisation.",
          steps: [
            "L'Inde accede a l'independance par un processus principalement negocie.",
            "L'Algerie connait une guerre dure contre la puissance coloniale francaise.",
            "Cette comparaison montre la diversite des rythmes et des formes de la decolonisation."
          ]
        },
        examQuestions: [
          {
            title: "Question type bac",
            statement: "Montrez la diversite des chemins de la decolonisation.",
            answer: [
              "Definir la decolonisation.",
              "Comparer un exemple negocie et un exemple conflictuel.",
              "Conclure sur la diversite des acteurs et des rythmes."
            ]
          }
        ],
        drills: [
          { title: "Reflexe", text: "Toujours donner au moins deux exemples quand tu parles de la decolonisation." }
        ],
        writingPhrases: [
          { title: "Comparaison", context: "A reutiliser", text: "Si toutes les decolonisations conduisent a l'independance, elles ne suivent pas toutes le meme chemin: certaines sont negociees, d'autres passent par la guerre." }
        ]
      },
      {
        id: "hist-ve-republique",
        title: "La France depuis 1945 et la Ve Republique",
        summary: "Il faut comprendre les transformations politiques de la France et l'installation durable de la Ve Republique.",
        mustKnow: [
          "Connaitre le contexte de 1958.",
          "Savoir expliquer la place centrale du president.",
          "Comprendre les notions d'alternance et de cohabitation."
        ],
        memoryLines: [
          "La Constitution de 1958 renforce le pouvoir executif.",
          "L'election du president au suffrage universel direct renforce encore sa legitimite."
        ],
        vocabulary: [
          { word: "Cohabitation", definition: "Situation dans laquelle le president et le Premier ministre n'appartiennent pas a la meme majorite politique.", use: "Oui, notion indispensable sur la Ve Republique." },
          { word: "Alternance", definition: "Passage du pouvoir d'une majorite politique a une autre.", use: "Oui, utile dans l'etude de la vie politique." }
        ],
        properties: [
          { kind: "Point cle", title: "Centralite du president", text: "Le president devient l'acteur majeur de la vie politique sous la Ve Republique." }
        ],
        formulas: [
          { label: "Reperes", expression: "1958 ; 1962 ; 1981 ; 2000", note: "Constitution, suffrage universel direct, alternance, quinquennat." }
        ],
        methods: [
          { title: "Expliquer une institution", text: "Toujours relier le texte constitutionnel et la pratique politique." }
        ],
        example: {
          title: "Exemple explique",
          text: "L'election du president au suffrage universel direct modifie la pratique de la Ve Republique.",
          steps: [
            "Le president tire sa legitimite directement des electeurs.",
            "Sa place politique est renforcee face au Parlement et au gouvernement.",
            "La personnalisation de la vie politique s'accentue."
          ]
        },
        examQuestions: [
          {
            title: "Question type bac",
            statement: "Montrez que la Ve Republique donne une place centrale au president.",
            answer: [
              "Presenter le contexte de 1958.",
              "Expliquer les pouvoirs du president.",
              "Montrer l'effet du suffrage universel direct.",
              "Nuancer avec la cohabitation."
            ]
          }
        ],
        drills: [
          { title: "Reflexe", text: "Quand tu vois Ve Republique, pense Constitution, president, suffrage universel direct et cohabitation." }
        ],
        writingPhrases: [
          { title: "Conclusion", context: "A reutiliser", text: "La Ve Republique stabilise les institutions et renforce le pouvoir executif, en particulier celui du president de la Republique." }
        ]
      }
    ],
    quizQuestions: [
      { chapter: "Histoire", prompt: "Que signifie totalitarisme ?", choices: ["Un regime qui cherche a controler totalement la societe.", "Un regime democratique parlementaire.", "Une simple alliance militaire."], correctIndex: 0, explanation: "C'est la definition de base du totalitarisme." },
      { chapter: "Histoire", prompt: "Quelle date symbolise le debut de la guerre froide ?", choices: ["1947", "1919", "1989"], correctIndex: 0, explanation: "1947 correspond aux doctrines Truman et Jdanov." },
      { chapter: "Histoire", prompt: "Que signifie bipolarisation ?", choices: ["Organisation du monde autour de deux poles de puissance.", "Disparition des Etats.", "Simple partage colonial."], correctIndex: 0, explanation: "Le monde est structure autour de deux superpuissances." },
      { chapter: "Histoire", prompt: "Que signifie decolonisation ?", choices: ["Processus par lequel une colonie accede a l'independance.", "Processus de colonisation acceleree.", "Simple reforme electorale."], correctIndex: 0, explanation: "C'est la definition exacte." },
      { chapter: "Histoire", prompt: "Que signifie cohabitation ?", choices: ["Le president et le Premier ministre n'appartiennent pas a la meme majorite.", "Le Parlement disparait.", "Le president gouverne seul sans gouvernement."], correctIndex: 0, explanation: "C'est la definition de la cohabitation." },
      { chapter: "Histoire", prompt: "Pourquoi la Seconde Guerre mondiale est-elle une guerre d'aneantissement ?", choices: ["Parce qu'elle vise l'ennemi militaire mais aussi les civils.", "Parce qu'elle ne concerne qu'un seul front.", "Parce qu'elle est courte."], correctIndex: 0, explanation: "La violence du conflit touche les combattants comme les populations civiles." }
    ],
    courseMemoryQuizQuestions: [
      { chapter: "Histoire", prompt: "Quelle phrase faut-il retenir sur la guerre froide ?", choices: ["La guerre froide designe un affrontement global, ideologique et geostrategique entre les Etats-Unis et l'URSS, sans guerre directe generalisee entre eux.", "La guerre froide est une paix durable entre les deux superpuissances.", "La guerre froide est un simple conflit colonial."], correctIndex: 0, explanation: "C'est la formulation de cours la plus utile." },
      { chapter: "Histoire", prompt: "Quelle phrase faut-il retenir sur la Ve Republique ?", choices: ["La Constitution de 1958 renforce le pouvoir executif.", "La Constitution de 1958 supprime le president.", "La Constitution de 1958 instaure un parti unique."], correctIndex: 0, explanation: "Phrase de base a connaitre par coeur." }
    ],
    writingMemoryQuizQuestions: [
      { chapter: "Histoire", prompt: "Quelle phrase de redaction convient pour introduire une comparaison ?", choices: ["Ces deux situations presentent des points communs mais aussi des differences qu'il faut analyser.", "Les deux situations sont identiques.", "Il n'est pas utile de comparer."], correctIndex: 0, explanation: "Bonne phrase d'introduction de comparaison." },
      { chapter: "Histoire", prompt: "Quelle phrase de conclusion est correcte pour une composition ?", choices: ["Ainsi, cette evolution montre que le sujet s'inscrit dans une transformation historique plus large qu'il faut replacer dans son contexte.", "Ainsi, j'ai termine ma copie.", "Ainsi, tout etait evident."], correctIndex: 0, explanation: "Une conclusion doit repondre au sujet et prendre du recul." }
    ],
    vocabMemoryQuizQuestions: [
      { chapter: "Histoire", prompt: "Que signifie guerre d'aneantissement ?", choices: ["Guerre qui vise a detruire l'ennemi et frappe aussi massivement les civils.", "Guerre sans combats.", "Guerre limitee a un duel diplomatique."], correctIndex: 0, explanation: "Definition essentielle sur 1939-1945." },
      { chapter: "Histoire", prompt: "Que signifie tiers-monde ?", choices: ["Ensemble des pays nouvellement independants cherchant a exister entre les deux blocs.", "Ensemble des pays europeens de l'Ouest.", "Nom de l'URSS apres 1991."], correctIndex: 0, explanation: "Definition utile sur la decolonisation." }
    ],
    toolboxQuizQuestions: [
      { chapter: "Boite a reperes", prompt: "Quelle date correspond a la naissance de la Ve Republique ?", choices: ["1958", "1947", "1981"], correctIndex: 0, explanation: "La Constitution de 1958 fonde la Ve Republique." },
      { chapter: "Boite a reperes", prompt: "Quelle date correspond a la chute du mur de Berlin ?", choices: ["1989", "1962", "1939"], correctIndex: 0, explanation: "1989 symbolise l'effondrement du bloc de l'Est." },
      { chapter: "Boite a reperes", prompt: "Quel acteur est associe aux reformes de la perestroika ?", choices: ["Gorbatchev", "De Gaulle", "Hitler"], correctIndex: 0, explanation: "Gorbatchev est l'homme des reformes de la fin de l'URSS." }
    ]
  },
  geographie: {
    key: "geographie",
    label: "Geographie",
    eyebrow: "Revision Terminale",
    heroTitle: "Reviser la geographie avec des notions cles, des exemples localises et des methodes de demonstration",
    heroCopy:
      "Retrouve les dynamiques territoriales, les acteurs, les espaces majeurs, les phrases de redaction et les questions type bac pour mieux organiser tes reponses.",
    toolboxTitle: "Boite a reperes geographiques",
    toolboxCopy:
      "Une synthese des notions, acteurs, espaces et methodes a reutiliser rapidement dans les copies.",
    toolbox: {
      markers: [
        { label: "Mondialisation", expression: "Mise en relation croissante des territoires par des flux.", note: "Definition de base a connaitre." },
        { label: "Metropolisation", expression: "Concentration des hommes et des fonctions dans les grandes villes.", note: "Notion centrale du programme." },
        { label: "Littoralisation", expression: "Concentration des activites et des populations sur les littoraux.", note: "Souvent liee a la mondialisation." },
        { label: "Northern Range", expression: "Grande facade maritime europeenne", note: "Exemple majeur a localiser." },
        { label: "Canal de Suez", expression: "Point de passage majeur", note: "Exemple strategique dans la mondialisation." }
      ],
      notions: [
        { label: "Interface", expression: "Espace de contact entre plusieurs ensembles geographiques.", note: "Utile pour les frontieres, ports et littoraux." },
        { label: "Facade maritime", expression: "Littoral qui concentre ports, activites et flux.", note: "Definition indispensable." },
        { label: "Hub", expression: "Plateforme de correspondance majeure dans les transports.", note: "Important dans les reseaux mondiaux." },
        { label: "Aire urbaine", expression: "Ensemble forme par un pole urbain et sa couronne.", note: "Repere important pour la France." },
        { label: "Puissance", expression: "Capacite d'un territoire a agir et a rayonner a differentes echelles.", note: "Tres utile en geopolitique et geoeconomie." }
      ],
      methods: [
        { label: "Analyser", expression: "Identifier l'echelle, les acteurs et les dynamiques.", note: "Premier reflexe en geographie." },
        { label: "Localiser", expression: "Toujours situer les exemples dans l'espace.", note: "Un exemple geographique doit etre localise." },
        { label: "Structurer", expression: "Du processus vers les effets et les contrastes.", note: "Rend la copie plus claire." },
        { label: "Croquis mental", expression: "Penser poles, flux, interfaces, marges.", note: "Utile meme sans exercice de croquis." }
      ],
      actors: [
        { label: "Firmes transnationales", expression: "Acteurs majeurs de la mondialisation.", note: "Importantes pour la production et les flux." },
        { label: "Etats", expression: "Amenagent, regulent et cherchent la puissance.", note: "Toujours penser aux politiques publiques." },
        { label: "Metropoles", expression: "Concentrent commandement, innovation et connexions.", note: "Espaces et acteurs a la fois." },
        { label: "Ports et aeroports", expression: "Interfaces majeures des flux mondiaux.", note: "Exemples concrets a citer." }
      ],
      reference: [
        { functionName: "Composition", domain: "Echelles, acteurs, dynamiques", derivative: "Idee directrice", primitive: "Exemple territorial precis", trap: "Rester trop abstrait sans localiser." },
        { functionName: "Croquis", domain: "Poles, flux, interfaces", derivative: "Organisation spatiale", primitive: "Legende ordonnee", trap: "Empiler les informations sans hierarchie." },
        { functionName: "Etude de cas", domain: "Territoire precis", derivative: "Ce qu'il illustre", primitive: "Lien avec la notion generale", trap: "Donner un exemple sans montrer ce qu'il prouve." }
      ]
    },
    mockExams: [
      {
        tag: "Composition",
        title: "Pourquoi les mers et oceans sont-ils au coeur de la mondialisation ?",
        scenario: "Il faut montrer qu'ils concentrent des flux, des interfaces et des enjeux de puissance.",
        goal: "Construire une reponse qui articule economie, geostrategie et environnement.",
        steps: [
          "Definir la mondialisation.",
          "Montrer le role des routes maritimes, des ports et des facades.",
          "Expliquer les rivalites de puissance et les tensions.",
          "Conclure sur les enjeux environnementaux."
        ],
        expected: "Le correcteur attend une copie localisee et organisee.",
        writing: "Les mers et oceans sont au coeur de la mondialisation car ils concentrent flux, interfaces, ressources et rivalites de puissance."
      },
      {
        tag: "Composition",
        title: "Comment la metropolisation transforme-t-elle les territoires ?",
        scenario: "Il faut montrer la concentration des fonctions dans les grandes villes et ses effets sur les autres territoires.",
        goal: "Expliquer le processus de metropolisation et ses effets territoriaux.",
        steps: [
          "Definir la metropolisation.",
          "Montrer le renforcement des grandes metropoles.",
          "Expliquer les effets sur les peripheries et les marges.",
          "Nuancer avec les politiques d'amenagement."
        ],
        expected: "La copie doit articuler processus, exemples et contrastes.",
        writing: "La metropolisation renforce le poids des grandes villes et recompose les territoires en accentuant certains contrastes."
      }
    ],
    chapters: [
      {
        id: "geo-oceans",
        title: "Mers et oceans au coeur de la mondialisation",
        summary: "Il faut montrer le role des routes maritimes, des ports, des facades et des points de passage dans les flux mondiaux.",
        mustKnow: [
          "Definir facade maritime, interface et littoralisation.",
          "Connaitre quelques passages strategiques.",
          "Montrer que les espaces maritimes sont aussi des espaces de tension."
        ],
        memoryLines: [
          "Les mers et oceans concentrent l'essentiel du commerce mondial.",
          "Les espaces maritimes sont des lieux de puissance et de rivalites."
        ],
        vocabulary: [
          { word: "Facade maritime", definition: "Littoral qui concentre ports, industries, activites et flux.", use: "Oui, mot cle du chapitre." },
          { word: "Interface", definition: "Espace de contact entre plusieurs ensembles geographiques.", use: "Oui, a utiliser pour les ports et les littoraux." }
        ],
        properties: [
          { kind: "Point cle", title: "Points de passage", text: "Detroits et canaux structurent fortement les flux mondiaux." }
        ],
        formulas: [
          { label: "Exemples", expression: "Canal de Suez ; detroit de Malacca ; Northern Range", note: "Exemples tres utiles dans les copies." }
        ],
        methods: [
          { title: "Analyser un espace maritime", text: "Partir des flux puis montrer acteurs, points strategiques, rivalites et enjeux environnementaux." }
        ],
        example: {
          title: "Exemple explique",
          text: "Le canal de Suez est un point de passage strategique de la mondialisation.",
          steps: [
            "Il relie la Mediterranee a la mer Rouge.",
            "Il permet un gain de temps majeur entre Europe et Asie.",
            "Son blocage a des effets mondiaux immediats."
          ]
        },
        examQuestions: [
          {
            title: "Question type bac",
            statement: "Montrez que les mers et oceans sont au coeur de la mondialisation.",
            answer: [
              "Definir la mondialisation.",
              "Montrer la concentration des flux sur les espaces maritimes.",
              "Expliquer les rivalites et les enjeux."
            ]
          }
        ],
        drills: [
          { title: "Reflexe", text: "Toujours localiser au moins un detroit, un canal, un grand port et une facade maritime." }
        ],
        writingPhrases: [
          { title: "Conclusion", context: "A reutiliser", text: "Les mers et oceans sont donc des espaces majeurs de la mondialisation car ils concentrent les flux, les ressources et les rivalites de puissance." }
        ]
      },
      {
        id: "geo-metropoles",
        title: "Metropolisation et dynamiques territoriales",
        summary: "Il faut montrer comment les grandes villes concentrent hommes, richesses et fonctions de commandement.",
        mustKnow: [
          "Definir metropolisation et aire urbaine.",
          "Montrer les contrastes entre centres, peripheries et espaces moins integres.",
          "Connaitre quelques metropoles mondiales et francaises."
        ],
        memoryLines: [
          "La metropolisation renforce le poids des grandes villes.",
          "Elle recompose les territoires et accentue certains contrastes."
        ],
        vocabulary: [
          { word: "Metropolisation", definition: "Concentration des populations et des fonctions dans les grandes villes.", use: "Oui, terme central du chapitre." },
          { word: "Aire urbaine", definition: "Ensemble forme par un pole urbain et sa couronne.", use: "Oui, utile dans les sujets sur la France." }
        ],
        properties: [
          { kind: "Point cle", title: "Inegalites", text: "La metropolisation renforce certains territoires mais en marginalise d'autres." }
        ],
        formulas: [
          { label: "Exemples", expression: "Paris ; Londres ; New York ; Shanghai", note: "Exemples de metropoles a mobiliser selon le sujet." }
        ],
        methods: [
          { title: "Presenter une metropole", text: "Identifier ses fonctions, son rayonnement, ses reseaux et ses contrastes internes." }
        ],
        example: {
          title: "Exemple explique",
          text: "Paris concentre fonctions politiques, economiques et culturelles a plusieurs echelles.",
          steps: [
            "Presence des centres de decision nationaux et internationaux.",
            "Connexions majeures de transport et de communication.",
            "Forts contrastes socio-spatiaux entre espaces valorises et espaces plus fragiles."
          ]
        },
        examQuestions: [
          {
            title: "Question type bac",
            statement: "Montrez que la metropolisation transforme les territoires.",
            answer: [
              "Definir la metropolisation.",
              "Montrer la concentration dans les grandes villes.",
              "Expliquer les effets sur les autres territoires."
            ]
          }
        ],
        drills: [
          { title: "Reflexe", text: "Ne parle jamais d'une metropole sans preciser son echelle de rayonnement." }
        ],
        writingPhrases: [
          { title: "Phrase utile", context: "A reutiliser", text: "La metropolisation concentre les hommes et les fonctions de commandement dans les grandes villes, ce qui recompose les territoires." }
        ]
      },
      {
        id: "geo-ue",
        title: "L'Union europeenne dans la mondialisation",
        summary: "Il faut montrer que l'UE est un espace integre, puissant mais contraste.",
        mustKnow: [
          "Definir integration regionale.",
          "Connaitre les centres de decision europeens.",
          "Montrer les contrastes entre territoires."
        ],
        memoryLines: [
          "L'Union europeenne est un espace d'integration regionale avancee.",
          "Les territoires europeens restent marques par de fortes inegalites."
        ],
        vocabulary: [
          { word: "Integration regionale", definition: "Processus de rapprochement economique, politique et juridique entre plusieurs Etats.", use: "Oui, notion de base sur l'UE." },
          { word: "Centre et peripheries", definition: "Organisation spatiale opposant des espaces plus dynamiques a des espaces plus fragiles.", use: "Oui, utile dans l'analyse territoriale." }
        ],
        properties: [
          { kind: "Point cle", title: "Puissance et contrastes", text: "L'UE est puissante a l'echelle mondiale mais reste marquee par des inegalites internes." }
        ],
        formulas: [
          { label: "Exemples", expression: "Bruxelles ; Strasbourg ; Francfort", note: "Exemples institutionnels et economiques frequents." }
        ],
        methods: [
          { title: "Traiter un sujet sur l'UE", text: "Toujours articuler integration, puissance et contrastes territoriaux." }
        ],
        example: {
          title: "Exemple explique",
          text: "Bruxelles concentre plusieurs institutions europeennes et symbolise la centralite politique de l'UE.",
          steps: [
            "La Commission europeenne y siege.",
            "La ville attire des acteurs economiques et politiques.",
            "Elle incarne un centre decisionnel europeen."
          ]
        },
        examQuestions: [
          {
            title: "Question type bac",
            statement: "Montrez que l'Union europeenne est un territoire a la fois integre et contraste.",
            answer: [
              "Definir l'integration regionale.",
              "Montrer les mecanismes d'integration.",
              "Expliquer les contrastes entre territoires."
            ]
          }
        ],
        drills: [
          { title: "Reflexe", text: "Toujours articuler centres de decision, reseaux, puissance et contrastes." }
        ],
        writingPhrases: [
          { title: "Conclusion", context: "A reutiliser", text: "L'Union europeenne est donc un espace fortement integre, mais cette integration n'efface pas les contrastes entre territoires." }
        ]
      },
      {
        id: "geo-france",
        title: "Les territoires productifs et les transports en France",
        summary: "Il faut comprendre comment les territoires productifs et les reseaux de transport connectent la France a la mondialisation.",
        mustKnow: [
          "Definir espace productif et accessibilite.",
          "Savoir montrer la mise en concurrence des territoires.",
          "Connaitre le role des grands axes et des hubs."
        ],
        memoryLines: [
          "Les espaces productifs sont differencies selon leurs activites et leur insertion dans la mondialisation.",
          "Les reseaux de transport renforcent l'accessibilite mais creent aussi des contrastes."
        ],
        vocabulary: [
          { word: "Espace productif", definition: "Territoire mis en valeur pour une activite economique.", use: "Oui, terme central du chapitre." },
          { word: "Accessibilite", definition: "Facilite avec laquelle un lieu peut etre atteint par les reseaux de transport.", use: "Oui, mot cle dans les sujets sur les transports." }
        ],
        properties: [
          { kind: "Point cle", title: "Integration mondiale", text: "Certains espaces productifs sont fortement relies aux reseaux nationaux et mondiaux." }
        ],
        formulas: [
          { label: "Exemples", expression: "Paris-CDG ; Le Havre ; Toulouse ; Lyon", note: "Exemples utiles sur les transports et les activites." }
        ],
        methods: [
          { title: "Etudier un territoire productif", text: "Identifier activites, acteurs, reseaux, atouts et fragilites." }
        ],
        example: {
          title: "Exemple explique",
          text: "Toulouse est un espace productif de haute technologie fortement integre a la mondialisation.",
          steps: [
            "La ville s'appuie sur l'aeronautique et la recherche.",
            "Elle attire des cadres et des fonctions de commandement.",
            "Elle est connectee a des reseaux nationaux et mondiaux."
          ]
        },
        examQuestions: [
          {
            title: "Question type bac",
            statement: "Montrez le role des transports dans l'organisation des territoires francais.",
            answer: [
              "Definir l'accessibilite.",
              "Montrer comment les reseaux structurent les grands poles.",
              "Expliquer les effets d'integration et de contraste."
            ]
          }
        ],
        drills: [
          { title: "Reflexe", text: "Pense toujours activites, reseaux, acteurs et integration a la mondialisation." }
        ],
        writingPhrases: [
          { title: "Phrase utile", context: "A reutiliser", text: "Les reseaux de transport structurent les territoires en renforcant certains poles et en accentuant certains contrastes." }
        ]
      }
    ],
    quizQuestions: [
      { chapter: "Geographie", prompt: "Que signifie metropolisation ?", choices: ["Concentration des populations et des fonctions dans les grandes villes.", "Disparition de toutes les villes.", "Retour exclusif vers les campagnes."], correctIndex: 0, explanation: "C'est la definition centrale du chapitre." },
      { chapter: "Geographie", prompt: "Qu'est-ce qu'une facade maritime ?", choices: ["Un littoral qui concentre ports, activites et flux.", "Une simple plage.", "Un espace interieur de montagne."], correctIndex: 0, explanation: "La facade maritime est une interface majeure." },
      { chapter: "Geographie", prompt: "Que signifie interface ?", choices: ["Espace de contact entre plusieurs ensembles geographiques.", "Simple espace desertique.", "Lieu sans echanges."], correctIndex: 0, explanation: "Definition a connaitre pour de nombreux sujets." },
      { chapter: "Geographie", prompt: "Pourquoi les mers et oceans sont-ils strategiques ?", choices: ["Ils concentrent des flux, des ressources et des rivalites de puissance.", "Ils n'ont plus aucun role economique.", "Ils sont seulement des espaces touristiques."], correctIndex: 0, explanation: "La reponse doit articuler economie, geopolitique et environnement." },
      { chapter: "Geographie", prompt: "Que signifie integration regionale ?", choices: ["Rapprochement economique, politique et juridique entre plusieurs Etats.", "Isolement total entre Etats voisins.", "Suppression de toutes les frontieres mondiales."], correctIndex: 0, explanation: "Notion de base pour l'Union europeenne." },
      { chapter: "Geographie", prompt: "Que signifie espace productif ?", choices: ["Territoire mis en valeur pour une activite economique.", "Territoire sans activite.", "Simple reseau de transport."], correctIndex: 0, explanation: "Definition essentielle dans les sujets sur la France." }
    ],
    courseMemoryQuizQuestions: [
      { chapter: "Geographie", prompt: "Quelle phrase faut-il retenir sur la mondialisation ?", choices: ["La mondialisation met en relation les territoires par des flux multiples et inegalement repartis.", "La mondialisation supprime tous les territoires.", "La mondialisation ne concerne pas les transports."], correctIndex: 0, explanation: "Bonne phrase d'introduction." },
      { chapter: "Geographie", prompt: "Quelle phrase faut-il retenir sur la metropolisation ?", choices: ["La metropolisation renforce le poids des grandes villes dans l'organisation des territoires.", "La metropolisation fait disparaitre toutes les inegalites.", "La metropolisation est un simple changement de nom des villes."], correctIndex: 0, explanation: "Formulation de cours a connaitre." }
    ],
    writingMemoryQuizQuestions: [
      { chapter: "Geographie", prompt: "Quelle phrase de redaction est correcte pour mobiliser un exemple ?", choices: ["L'exemple de ... montre concretement que ...", "Je cite ... sans l'expliquer.", "Je n'ai pas besoin d'exemple."], correctIndex: 0, explanation: "En geographie, l'exemple doit illustrer une idee precise." },
      { chapter: "Geographie", prompt: "Quelle phrase de conclusion est correcte ?", choices: ["Ainsi, ce territoire illustre une dynamique generale mais aussi des contrastes qu'il faut souligner.", "Ainsi, tout est pareil partout.", "Ainsi, je termine sans repondre au sujet."], correctIndex: 0, explanation: "Une bonne conclusion repond au sujet et nuance." }
    ],
    vocabMemoryQuizQuestions: [
      { chapter: "Geographie", prompt: "Que signifie hub ?", choices: ["Plateforme de correspondance majeure dans un reseau de transport.", "Petit espace rural isole.", "Quartier residentiel de banlieue."], correctIndex: 0, explanation: "Mot de vocabulaire important pour les reseaux mondiaux." },
      { chapter: "Geographie", prompt: "Que signifie littoralisation ?", choices: ["Concentration des activites et des populations sur les littoraux.", "Recul de toute activite sur les littoraux.", "Croissance des seules zones de montagne."], correctIndex: 0, explanation: "C'est une notion classique de geographie." }
    ],
    toolboxQuizQuestions: [
      { chapter: "Boite a reperes", prompt: "Quel mot designe la concentration des activites sur les littoraux ?", choices: ["Littoralisation", "Desindustrialisation", "Bipolarisation"], correctIndex: 0, explanation: "La littoralisation accompagne souvent la mondialisation." },
      { chapter: "Boite a reperes", prompt: "Quel espace europeen est une grande facade maritime ?", choices: ["Northern Range", "Sahara", "Amazonie"], correctIndex: 0, explanation: "La Northern Range est la grande facade maritime europeenne." },
      { chapter: "Boite a reperes", prompt: "Quel point de passage relie Mediterranee et mer Rouge ?", choices: ["Canal de Suez", "Canal de Panama", "Detroit de Bering"], correctIndex: 0, explanation: "Le canal de Suez est un exemple majeur a connaitre." }
    ]
  },
  ses: {
    key: "ses",
    label: "SES",
    eyebrow: "Revision Terminale",
    heroTitle: "Reviser les SES avec les mecanismes, les definitions et la redaction attendue au bac",
    heroCopy:
      "Retrouve les notions, auteurs, raisonnements, phrases de redaction, exemples et questions type bac pour expliquer et argumenter proprement.",
    toolboxTitle: "Boite a outils SES",
    toolboxCopy:
      "Une synthese rapide des notions, auteurs, mecanismes et methodes a reutiliser dans les copies.",
    toolbox: {
      markers: [
        { label: "PIB", expression: "Mesure la richesse creee sur un territoire en une periode.", note: "Toujours penser a ses limites." },
        { label: "Croissance", expression: "Augmentation durable de la production de biens et services.", note: "Definition de base." },
        { label: "Chomage", expression: "Situation d'une personne sans emploi, disponible et en recherche active.", note: "Definition stricte." },
        { label: "Socialisation", expression: "Processus d'apprentissage des normes et des valeurs.", note: "Definition fondamentale." }
      ],
      notions: [
        { label: "Productivite", expression: "Rapport entre la production et les facteurs utilises.", note: "Utile en economie." },
        { label: "Mondialisation", expression: "Intensification des echanges et mise en reseau des economies.", note: "Notion centrale du programme." },
        { label: "Justice sociale", expression: "Recherche d'une reduction des inegalites jugee legitime.", note: "A distinguer de l'egalite stricte." },
        { label: "Mobilite sociale", expression: "Changement de position sociale par rapport a celle des parents.", note: "Concept central en sociologie." },
        { label: "Defaillance de marche", expression: "Situation ou le marche ne conduit pas a une allocation efficace.", note: "Utile pour l'action publique." }
      ],
      methods: [
        { label: "Definir", expression: "Toujours partir d'une definition rigoureuse.", note: "Premier reflexe en SES." },
        { label: "Raisonner", expression: "Montrer une chaine de causes et de consequences.", note: "Indispensable dans la redaction." },
        { label: "Mobiliser un document", expression: "Lire la source, decrire la tendance, puis l'expliquer avec le cours.", note: "Le document ne se paraphrase pas." },
        { label: "Nuancer", expression: "Montrer les limites, conditions ou effets differencies d'un mecanisme.", note: "Tres valorise au bac." }
      ],
      actors: [
        { label: "Schumpeter", expression: "Associe innovation, destruction creatrice et croissance.", note: "Auteur classique du programme." },
        { label: "Bourdieu", expression: "Analyse les capitaux et la reproduction sociale.", note: "Utile pour les inegalites et la socialisation." },
        { label: "Durkheim", expression: "Travaille sur l'integration sociale et la cohesion.", note: "Repere utile en sociologie." },
        { label: "Action publique", expression: "Intervention de l'Etat ou des institutions publiques.", note: "A relier aux objectifs et instruments." }
      ],
      reference: [
        { functionName: "Question de SES", domain: "Definition + mecanisme", derivative: "Lien causal", primitive: "Nuance ou limite", trap: "Reciter sans expliquer." },
        { functionName: "Analyse de document", domain: "Source + tendance", derivative: "Interpretation", primitive: "Lien avec le cours", trap: "Paraphraser les chiffres." },
        { functionName: "Mobilisation d'un auteur", domain: "Idee de l'auteur", derivative: "Application au sujet", primitive: "Exemple concret", trap: "Citer un auteur sans expliquer son apport." }
      ]
    },
    mockExams: [
      {
        tag: "RAEP",
        title: "Quels sont les determinants de la croissance economique ?",
        scenario: "Il faut montrer les roles du travail, du capital, de l'innovation et des institutions.",
        goal: "Construire un raisonnement economique clair et nuance.",
        steps: [
          "Definir la croissance economique.",
          "Montrer le role du capital et du travail.",
          "Expliquer le progres technique et l'innovation.",
          "Nuancer avec les limites de la croissance."
        ],
        expected: "Le correcteur attend des mecanismes et pas seulement des constats.",
        writing: "La croissance economique resulte de plusieurs facteurs, notamment l'accumulation du capital, le travail, l'innovation et un cadre institutionnel favorable."
      },
      {
        tag: "RAEP",
        title: "Comment l'action publique cherche-t-elle a favoriser la justice sociale ?",
        scenario: "Il faut montrer les instruments de l'action publique tout en rappelant leurs limites.",
        goal: "Construire un raisonnement sociologique et economique nuance.",
        steps: [
          "Definir la justice sociale.",
          "Presenter la redistribution et les services collectifs.",
          "Expliquer leurs effets sur les inegalites.",
          "Nuancer avec leurs limites."
        ],
        expected: "Une copie de SES doit exposer des mecanismes et des nuances.",
        writing: "L'action publique cherche a favoriser la justice sociale en corrigeant certaines inegalites, notamment par la redistribution et les services collectifs."
      }
    ],
    chapters: [
      {
        id: "ses-croissance",
        title: "Croissance economique, fluctuations et limites",
        summary: "Il faut expliquer les sources de la croissance, le role de l'innovation et les limites de cet indicateur.",
        mustKnow: [
          "Definir PIB, croissance economique et productivite.",
          "Expliquer le role du capital, du travail et de l'innovation.",
          "Montrer les limites du PIB et de la croissance."
        ],
        memoryLines: [
          "La croissance economique correspond a l'augmentation durable de la production de biens et services.",
          "L'innovation est un moteur essentiel de la croissance.",
          "Le PIB est utile mais il ne mesure pas tout."
        ],
        vocabulary: [
          { word: "Productivite", definition: "Rapport entre la production et les facteurs utilises.", use: "Oui, mot indispensable sur la croissance." },
          { word: "Destruction creatrice", definition: "Processus par lequel l'innovation fait disparaitre certaines activites et en cree de nouvelles.", use: "Oui, si tu mobilises Schumpeter." }
        ],
        properties: [
          { kind: "Mecanisme", title: "Innovation", text: "L'innovation permet des gains de productivite et peut soutenir la croissance." }
        ],
        formulas: [
          { label: "Auteurs", expression: "Schumpeter ; Solow", note: "Auteurs utiles selon le sujet." }
        ],
        methods: [
          { title: "Expliquer un mecanisme", text: "Toujours raisonner en chaine: cause, effet, consequence." }
        ],
        example: {
          title: "Exemple explique",
          text: "Une innovation de procede peut augmenter la productivite d'une entreprise.",
          steps: [
            "Elle produit plus vite ou a moindre cout.",
            "Elle gagne en competitivite.",
            "Ses profits et ses investissements peuvent augmenter."
          ]
        },
        examQuestions: [
          {
            title: "Question type bac",
            statement: "Expliquez comment l'innovation favorise la croissance economique.",
            answer: [
              "Definir l'innovation.",
              "Montrer le lien avec les gains de productivite.",
              "Expliquer les effets sur l'investissement et la competitivite."
            ]
          }
        ],
        drills: [
          { title: "Reflexe", text: "En SES, ne jamais dire seulement qu'un facteur agit: expliquer comment il agit." }
        ],
        writingPhrases: [
          { title: "Phrase utile", context: "A reutiliser", text: "L'innovation stimule la croissance car elle permet des gains de productivite et renforce la competitivite des entreprises." }
        ]
      },
      {
        id: "ses-mondialisation",
        title: "Mondialisation du commerce et de la production",
        summary: "Il faut expliquer les gains de l'echange international et les transformations de la production a l'echelle mondiale.",
        mustKnow: [
          "Definir mondialisation, specialisation et chaine de valeur.",
          "Comprendre le role des firmes transnationales.",
          "Savoir nuancer les effets de l'ouverture commerciale."
        ],
        memoryLines: [
          "La mondialisation intensifie les echanges de biens, services, capitaux et informations.",
          "Les firmes transnationales organisent la production a l'echelle mondiale."
        ],
        vocabulary: [
          { word: "Specialisation", definition: "Fait pour un pays de concentrer sa production sur certaines activites.", use: "Oui, utile dans toute question sur le commerce international." },
          { word: "Chaine de valeur", definition: "Ensemble des etapes de production d'un bien ou service.", use: "Oui, notion importante sur la production mondialisee." }
        ],
        properties: [
          { kind: "Mecanisme", title: "Ouverture commerciale", text: "L'ouverture peut accroitre l'efficacite, mais ses effets sont differencies selon les secteurs et les acteurs." }
        ],
        formulas: [
          { label: "Notions", expression: "Firmes transnationales ; division internationale du travail", note: "Expressions importantes a maitriser." }
        ],
        methods: [
          { title: "Nuancer", text: "Toujours montrer qu'il existe des gagnants et des perdants dans la mondialisation." }
        ],
        example: {
          title: "Exemple explique",
          text: "Une firme transnationale peut localiser chaque etape de la production dans des pays differents.",
          steps: [
            "La recherche peut etre dans un pays developpe.",
            "L'assemblage dans un pays a cout plus faible.",
            "La vente sur plusieurs marches."
          ]
        },
        examQuestions: [
          {
            title: "Question type bac",
            statement: "Montrez que la mondialisation transforme l'organisation de la production.",
            answer: [
              "Definir la mondialisation de la production.",
              "Montrer le role des firmes transnationales.",
              "Expliquer la fragmentation des chaines de valeur.",
              "Nuancer avec les effets differencies."
            ]
          }
        ],
        drills: [
          { title: "Reflexe", text: "Pense toujours acteurs, gains, limites et effets differencies." }
        ],
        writingPhrases: [
          { title: "Phrase utile", context: "A reutiliser", text: "La mondialisation transforme la production en la fragmentant entre plusieurs territoires selon les avantages recherches par les firmes." }
        ]
      },
      {
        id: "ses-emploi",
        title: "Emploi, chomage et politiques de l'emploi",
        summary: "Il faut expliquer les causes du chomage et montrer la diversite des politiques publiques.",
        mustKnow: [
          "Connaitre la definition du chomage.",
          "Distinguer differentes explications du chomage.",
          "Savoir presenter les grandes politiques de l'emploi."
        ],
        memoryLines: [
          "Le chomage correspond a une situation definie statistiquement.",
          "Il existe plusieurs explications du chomage, qui ne sont pas exclusives les unes des autres."
        ],
        vocabulary: [
          { word: "Chomage structurel", definition: "Chomage durable lie a des transformations profondes de l'economie.", use: "Oui, pour distinguer les types de chomage." },
          { word: "Chomage conjoncturel", definition: "Chomage lie au ralentissement de l'activite economique.", use: "Oui, notion classique de SES." }
        ],
        properties: [
          { kind: "Mecanisme", title: "Politiques de l'emploi", text: "Elles peuvent agir sur la demande, le cout du travail, la formation ou l'accompagnement." }
        ],
        formulas: [
          { label: "Notions", expression: "Population active ; flexibilite ; qualification", note: "Notions frequentes dans les sujets." }
        ],
        methods: [
          { title: "Repondre a un sujet de SES", text: "Toujours articuler definition, mecanisme economique et limites." }
        ],
        example: {
          title: "Exemple explique",
          text: "En periode de ralentissement economique, les entreprises peuvent embaucher moins.",
          steps: [
            "La demande baisse.",
            "La production ralentit.",
            "Le chomage conjoncturel peut augmenter."
          ]
        },
        examQuestions: [
          {
            title: "Question type bac",
            statement: "Expliquez pourquoi il existe plusieurs formes de chomage.",
            answer: [
              "Definir le chomage.",
              "Distinguer chomage conjoncturel et structurel.",
              "Montrer que plusieurs facteurs peuvent se combiner."
            ]
          }
        ],
        drills: [
          { title: "Reflexe", text: "Quand tu parles de chomage, precise toujours le type de mecanisme que tu decris." }
        ],
        writingPhrases: [
          { title: "Phrase utile", context: "A reutiliser", text: "Le chomage peut s'expliquer par des facteurs conjoncturels lies a l'activite economique, mais aussi par des facteurs structurels plus durables." }
        ]
      },
      {
        id: "ses-justice",
        title: "Justice sociale, socialisation et mobilite",
        summary: "Il faut relier inegalites, justice sociale, socialisation et mobilite sociale.",
        mustKnow: [
          "Definir justice sociale, egalite, equite.",
          "Savoir expliquer la socialisation et ses agents.",
          "Connaitre la notion de mobilite sociale."
        ],
        memoryLines: [
          "La justice sociale vise a reduire des inegalites jugees excessives ou illegitimes.",
          "La socialisation est le processus par lequel l'individu integre des normes et des valeurs.",
          "La mobilite sociale designe le changement de position sociale."
        ],
        vocabulary: [
          { word: "Equite", definition: "Principe consistant a tenir compte des situations pour corriger certaines inegalites.", use: "Oui, utile pour distinguer equite et egalite." },
          { word: "Socialisation", definition: "Processus d'apprentissage des normes et des valeurs.", use: "Oui, definition a connaitre." }
        ],
        properties: [
          { kind: "Mecanisme", title: "Action publique", text: "L'action publique peut chercher a corriger les inegalites par la redistribution ou les services collectifs." }
        ],
        formulas: [
          { label: "Auteurs", expression: "Bourdieu ; Durkheim", note: "Auteurs utiles sur la socialisation et les inegalites." }
        ],
        methods: [
          { title: "Nuancer une notion", text: "Toujours distinguer principes, instruments et limites." }
        ],
        example: {
          title: "Exemple explique",
          text: "L'ecole participe a la socialisation en transmettant des savoirs, des normes et des comportements.",
          steps: [
            "Elle transmet des regles communes.",
            "Elle forme a certains comportements sociaux.",
            "Elle peut aussi reproduire certaines inegalites."
          ]
        },
        examQuestions: [
          {
            title: "Question type bac",
            statement: "Montrez que l'action publique cherche a favoriser la justice sociale.",
            answer: [
              "Definir la justice sociale.",
              "Presenter quelques instruments de l'action publique.",
              "Expliquer leurs effets et leurs limites."
            ]
          }
        ],
        drills: [
          { title: "Reflexe", text: "Distingue toujours les principes de justice sociale et les moyens utilises pour les atteindre." }
        ],
        writingPhrases: [
          { title: "Phrase utile", context: "A reutiliser", text: "La justice sociale renvoie a la recherche d'une reduction des inegalites jugees excessives, notamment par la redistribution et les services collectifs." }
        ]
      }
    ],
    quizQuestions: [
      { chapter: "SES", prompt: "Que mesure le PIB ?", choices: ["La richesse creee sur un territoire pendant une periode.", "Le bonheur total d'une population.", "Le nombre exact de pauvres."], correctIndex: 0, explanation: "Le PIB mesure la production de richesse, mais il a des limites." },
      { chapter: "SES", prompt: "Que signifie croissance economique ?", choices: ["Augmentation durable de la production de biens et services.", "Baisse generale des prix.", "Hausse automatique du chomage."], correctIndex: 0, explanation: "C'est la definition a connaitre." },
      { chapter: "SES", prompt: "Que signifie productivite ?", choices: ["Rapport entre la production et les facteurs utilises.", "Simple niveau de salaire.", "Nombre total d'entreprises."], correctIndex: 0, explanation: "Definition utile dans les chapitres de croissance." },
      { chapter: "SES", prompt: "Qu'est-ce qu'une firme transnationale ?", choices: ["Une entreprise qui organise ses activites dans plusieurs pays.", "Une administration locale.", "Une association politique."], correctIndex: 0, explanation: "Acteur cle de la mondialisation." },
      { chapter: "SES", prompt: "Que signifie mobilite sociale ?", choices: ["Changement de position sociale d'un individu par rapport a celle de ses parents.", "Simple changement de ville.", "Evolution d'un prix sur un marche."], correctIndex: 0, explanation: "Definition essentielle de sociologie." },
      { chapter: "SES", prompt: "Que signifie justice sociale ?", choices: ["Recherche d'une reduction des inegalites jugee legitime.", "Suppression de toutes les differences.", "Absence totale d'impots."], correctIndex: 0, explanation: "Notion centrale a connaitre." }
    ],
    courseMemoryQuizQuestions: [
      { chapter: "SES", prompt: "Quelle phrase faut-il retenir sur la socialisation ?", choices: ["La socialisation est le processus par lequel l'individu integre des normes et des valeurs.", "La socialisation supprime toutes les normes.", "La socialisation est un indicateur economique."], correctIndex: 0, explanation: "Definition fondamentale a connaitre." },
      { chapter: "SES", prompt: "Quelle phrase faut-il retenir sur la croissance ?", choices: ["La croissance economique correspond a l'augmentation durable de la production de biens et services.", "La croissance economique est un simple sentiment.", "La croissance economique est toujours ecologique."], correctIndex: 0, explanation: "Definition de base du chapitre." }
    ],
    writingMemoryQuizQuestions: [
      { chapter: "SES", prompt: "Quelle phrase de redaction est correcte en SES ?", choices: ["Ce mecanisme s'explique par le fait que ... ce qui entraine ensuite ...", "C'est comme ca et c'est tout.", "Je cite la notion sans l'expliquer."], correctIndex: 0, explanation: "En SES, il faut expliciter les liens de cause a effet." },
      { chapter: "SES", prompt: "Quelle phrase de nuance est correcte ?", choices: ["Cependant, les effets de ce mecanisme peuvent varier selon les situations et les acteurs concernes.", "Il n'existe jamais aucune limite.", "Il n'y a rien a nuancer."], correctIndex: 0, explanation: "Une bonne copie de SES nuance les mecanismes." }
    ],
    vocabMemoryQuizQuestions: [
      { chapter: "SES", prompt: "Que signifie destruction creatrice ?", choices: ["Processus par lequel l'innovation fait disparaitre certaines activites et en cree de nouvelles.", "Destruction materielle d'un pays pendant une guerre.", "Simple baisse de la consommation."], correctIndex: 0, explanation: "Notion associee a Schumpeter." },
      { chapter: "SES", prompt: "Que signifie chomage structurel ?", choices: ["Chomage durable lie a des transformations profondes de l'economie.", "Chomage d'une seule journee.", "Chomage purement volontaire."], correctIndex: 0, explanation: "Definition a distinguer du chomage conjoncturel." }
    ],
    toolboxQuizQuestions: [
      { chapter: "Boite a outils", prompt: "Quel auteur est associe a la destruction creatrice ?", choices: ["Schumpeter", "Durkheim", "Bourdieu"], correctIndex: 0, explanation: "Schumpeter relie innovation et destruction creatrice." },
      { chapter: "Boite a outils", prompt: "Quelle methode est correcte en SES ?", choices: ["Definir la notion puis expliquer le mecanisme et le nuancer.", "Donner seulement un exemple sans definition.", "Paraphraser le sujet sans raisonnement."], correctIndex: 0, explanation: "Structure tres efficace pour une copie de SES." },
      { chapter: "Boite a outils", prompt: "Quel auteur est souvent mobilise pour la reproduction sociale ?", choices: ["Bourdieu", "Schumpeter", "Keynes"], correctIndex: 0, explanation: "Bourdieu est central sur les capitaux et la reproduction sociale." }
    ]
  }
};

function enrichChapter(subjectKey, chapterId, patch) {
  const subject = window.subjectConfigs[subjectKey];
  if (!subject) {
    return;
  }

  const chapter = subject.chapters.find((item) => item.id === chapterId);
  if (!chapter) {
    return;
  }

  Object.entries(patch).forEach(([key, value]) => {
    if (Array.isArray(chapter[key])) {
      chapter[key].push(...value);
    }
  });
}

function addChapter(subjectKey, chapter) {
  const subject = window.subjectConfigs[subjectKey];
  if (!subject) {
    return;
  }
  subject.chapters.push(chapter);
}

function addQuizData(subjectKey, bucket, items) {
  const subject = window.subjectConfigs[subjectKey];
  if (!subject || !Array.isArray(subject[bucket])) {
    return;
  }
  subject[bucket].push(...items);
}

function addMockExams(subjectKey, exams) {
  const subject = window.subjectConfigs[subjectKey];
  if (!subject) {
    return;
  }
  subject.mockExams.push(...exams);
}

enrichChapter("histoire", "hist-totalitarismes", {
  mustKnow: [
    "Savoir expliquer le culte du chef, la propagande et la terreur.",
    "Connaitre le role de la Shoah dans la guerre d'aneantissement."
  ],
  memoryLines: [
    "Le parti unique et la propagande sont des instruments centraux du totalitarisme."
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Comparez nazisme et stalinisme.",
      answer: [
        "Definir d'abord le totalitarisme.",
        "Montrer les points communs: chef, parti unique, propagande, terreur.",
        "Montrer les differences, notamment ideologiques.",
        "Conclure de maniere nuancee."
      ]
    }
  ],
  writingPhrases: [
    {
      title: "Comparaison nuancee",
      context: "A reutiliser",
      text: "Si nazisme et stalinisme relevent tous deux du totalitarisme, ils ne reposent pas sur les memes finalites ideologiques."
    }
  ]
});

enrichChapter("histoire", "hist-guerre-froide", {
  mustKnow: [
    "Savoir periodiser la guerre froide en grandes phases.",
    "Connaitre les crises de Berlin et de Cuba."
  ],
  memoryLines: [
    "La guerre froide est un affrontement durable mais evolutif."
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que la guerre froide connait des phases variees.",
      answer: [
        "Commencer par la forte tension des debuts.",
        "Expliquer ensuite la detente.",
        "Montrer enfin le retour des tensions puis la fin du conflit."
      ]
    }
  ]
});

enrichChapter("histoire", "hist-ve-republique", {
  mustKnow: [
    "Connaitre le role du Parlement et du gouvernement.",
    "Savoir expliquer le quinquennat."
  ],
  memoryLines: [
    "Le suffrage universel direct renforce la legitimite politique du president."
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Expliquez pourquoi la Ve Republique est un regime stable.",
      answer: [
        "Presenter la Constitution de 1958.",
        "Montrer le renforcement de l'executif.",
        "Expliquer la duree et la stabilite des institutions.",
        "Nuancer avec les periodes de cohabitation."
      ]
    }
  ]
});

addChapter("histoire", {
  id: "hist-memoires",
  title: "Memoires de la guerre et histoire",
  summary: "Il faut distinguer histoire et memoire et comprendre les debats memoriels autour de la Seconde Guerre mondiale et de la guerre d'Algerie.",
  mustKnow: [
    "Definir memoire et histoire.",
    "Comprendre qu'il existe plusieurs memoires d'un meme evenement.",
    "Connaitre les enjeux de reconnaissance et de transmission."
  ],
  memoryLines: [
    "L'histoire cherche a comprendre scientifiquement le passe, alors que la memoire est un rapport vecu au passe.",
    "Les memoires peuvent etre plurielles et parfois conflictuelles."
  ],
  vocabulary: [
    { word: "Memoire", definition: "Rapport vecu, selectif et souvent affectif au passe.", use: "Oui, mot central du chapitre." },
    { word: "Histoire", definition: "Demarche scientifique de connaissance du passe.", use: "Oui, a distinguer de la memoire." }
  ],
  properties: [
    { kind: "Point cle", title: "Pluralite des memoires", text: "Un meme evenement peut donner lieu a des memoires concurrentes ou opposees." }
  ],
  formulas: [
    { label: "Repere", expression: "1970-1990 : affirmation de nouvelles memoires", note: "Repere general utile pour les politiques de memoire." }
  ],
  methods: [
    { title: "Distinguer histoire et memoire", text: "Toujours montrer la difference entre demarche scientifique et rapport subjectif au passe." }
  ],
  example: {
    title: "Exemple explique",
    text: "La memoire de la Seconde Guerre mondiale en France a evolue dans le temps.",
    steps: [
      "Une memoire resistancialiste domine d'abord.",
      "D'autres memoires s'affirment ensuite, notamment autour de la deportation des Juifs.",
      "Le travail des historiens nuance et explique ces evolutions."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Expliquez la difference entre histoire et memoire.",
      answer: [
        "Definir les deux notions.",
        "Montrer que la memoire est subjective et plurielle.",
        "Expliquer que l'histoire cherche une connaissance critique du passe."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Ne jamais confondre memoire vecue et travail historien." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Si la memoire releve d'un rapport vecu et parfois conflictuel au passe, l'histoire cherche a en proposer une analyse critique et documentee." }
  ]
});

addMockExams("histoire", [
  {
    tag: "Composition",
    title: "Comment la decolonisation transforme-t-elle les relations internationales ?",
    scenario: "Il faut montrer l'independance des colonies, l'affirmation du tiers-monde et les nouvelles tensions.",
    goal: "Expliquer les consequences internationales de la decolonisation.",
    steps: [
      "Definir la decolonisation.",
      "Montrer l'affirmation de nouveaux Etats.",
      "Expliquer la place du tiers-monde dans les relations internationales."
    ],
    expected: "On attend une copie structuree et appuyee sur plusieurs exemples.",
    writing: "La decolonisation transforme les relations internationales en faisant emerger de nouveaux Etats et de nouveaux equilibres."
  }
]);

addQuizData("histoire", "quizQuestions", [
  { chapter: "Histoire", prompt: "Que signifie memoire en histoire ?", choices: ["Rapport vecu et souvent subjectif au passe.", "Demarche scientifique critique.", "Simple liste de dates."], correctIndex: 0, explanation: "La memoire releve d'un rapport vecu au passe." }
]);

enrichChapter("geographie", "geo-oceans", {
  mustKnow: [
    "Savoir montrer le role des grands ports et facades.",
    "Connaitre quelques ressources maritimes strategiques."
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Expliquez le role strategique d'un detroit ou d'un canal.",
      answer: [
        "Localiser l'espace choisi.",
        "Montrer son role dans les flux mondiaux.",
        "Expliquer les enjeux de puissance et de securite."
      ]
    }
  ]
});

enrichChapter("geographie", "geo-france", {
  mustKnow: [
    "Savoir distinguer metropoles, villes moyennes et espaces plus enclaves.",
    "Comprendre le role des politiques d'amenagement."
  ],
  writingPhrases: [
    {
      title: "Phrase utile",
      context: "A reutiliser",
      text: "L'integration des territoires francais aux reseaux de transport renforce certains poles mais laisse subsister des contrastes d'accessibilite."
    }
  ]
});

addChapter("geographie", {
  id: "geo-energie",
  title: "Environnement, ressources et tensions",
  summary: "Il faut montrer comment les ressources et les enjeux environnementaux transforment les territoires et les rapports de puissance.",
  mustKnow: [
    "Definir ressource, transition et durabilite.",
    "Montrer que l'acces aux ressources est un enjeu de puissance.",
    "Comprendre les tensions liees a l'environnement."
  ],
  memoryLines: [
    "Les ressources sont inegalement reparties dans l'espace.",
    "Les enjeux environnementaux transforment les strategies des acteurs."
  ],
  vocabulary: [
    { word: "Ressource", definition: "Element naturel ou amenage valorise par une societe.", use: "Oui, terme central du chapitre." },
    { word: "Transition", definition: "Processus de transformation progressive d'un modele de production ou de consommation.", use: "Oui, utile dans les sujets actuels." }
  ],
  properties: [
    { kind: "Point cle", title: "Inegal repartition", text: "L'inegalite d'acces aux ressources nourrit des dependances et des tensions." }
  ],
  formulas: [
    { label: "Exemples", expression: "Hydrocarbures ; terres rares ; eau", note: "Exemples a mobiliser selon le sujet." }
  ],
  methods: [
    { title: "Traiter un sujet environnemental", text: "Toujours articuler acteurs, ressources, tensions et solutions envisagees." }
  ],
  example: {
    title: "Exemple explique",
    text: "L'eau est une ressource vitale qui peut devenir un enjeu geostrategique.",
    steps: [
      "Elle est inegalement disponible selon les regions.",
      "Les besoins augmentent avec les populations et les activites.",
      "Des tensions peuvent apparaitre entre usages et entre territoires."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que les ressources peuvent etre source de tensions.",
      answer: [
        "Definir la notion de ressource.",
        "Montrer l'inegale repartition.",
        "Expliquer les rivalites d'usage et de controle."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Toujours relier une ressource a des acteurs, des usages et des tensions." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Les ressources constituent des enjeux majeurs car leur acces conditionne le developpement, la puissance et parfois les tensions entre acteurs." }
  ]
});

addQuizData("geographie", "quizQuestions", [
  { chapter: "Geographie", prompt: "Que signifie ressource en geographie ?", choices: ["Element valorise par une societe pour ses besoins.", "Simple decoration du paysage.", "Uniquement un produit industriel."], correctIndex: 0, explanation: "Une ressource n'existe qu'en fonction des besoins et des usages sociaux." }
]);

addMockExams("geographie", [
  {
    tag: "Composition",
    title: "Pourquoi les ressources sont-elles au coeur des rapports de puissance ?",
    scenario: "Il faut montrer leur role economique, strategique et environnemental.",
    goal: "Construire une copie qui articule acces, controle et tensions.",
    steps: [
      "Definir la notion de ressource.",
      "Montrer l'inegale repartition des ressources.",
      "Expliquer les rivalites d'appropriation et de controle."
    ],
    expected: "Le correcteur attend des exemples precis et localises.",
    writing: "Les ressources sont au coeur des rapports de puissance car leur acces et leur controle conditionnent le developpement et l'influence des acteurs."
  }
]);

enrichChapter("ses", "ses-croissance", {
  mustKnow: [
    "Savoir expliquer les limites ecologiques de la croissance.",
    "Connaitre la difference entre croissance et developpement."
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez les limites du PIB comme indicateur de richesse.",
      answer: [
        "Definir le PIB.",
        "Montrer ce qu'il mesure effectivement.",
        "Expliquer ce qu'il ne prend pas ou mal en compte."
      ]
    }
  ]
});

enrichChapter("ses-justice".includes("ses-justice") ? "ses" : "ses", "ses-justice", {
  mustKnow: [
    "Savoir distinguer egalite et equite.",
    "Comprendre que la socialisation depend de plusieurs agents."
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Expliquez comment la socialisation peut differer selon les individus.",
      answer: [
        "Definir la socialisation.",
        "Montrer le role de plusieurs agents.",
        "Expliquer que les trajectoires sociales differencient les apprentissages."
      ]
    }
  ]
});

addChapter("ses", {
  id: "ses-action-publique",
  title: "Action publique et regulation",
  summary: "Il faut comprendre pourquoi et comment l'action publique intervient face aux defaillances de marche et aux inegalites.",
  mustKnow: [
    "Definir action publique et defaillance de marche.",
    "Savoir expliquer les objectifs de regulation.",
    "Comprendre les limites de l'action publique."
  ],
  memoryLines: [
    "L'action publique cherche a corriger certaines defaillances du marche.",
    "L'intervention publique peut prendre des formes multiples: reglementation, taxation, redistribution, services collectifs."
  ],
  vocabulary: [
    { word: "Defaillance de marche", definition: "Situation ou le marche ne permet pas une allocation efficace ou juste.", use: "Oui, terme central du chapitre." },
    { word: "Externalite", definition: "Effet positif ou negatif d'une action economique sur des agents non impliques directement.", use: "Oui, notion classique pour expliquer l'intervention publique." }
  ],
  properties: [
    { kind: "Mecanisme", title: "Regulation", text: "L'action publique peut fixer des regles, taxer, subventionner ou fournir directement certains services." }
  ],
  formulas: [
    { label: "Notions", expression: "Taxe ; subvention ; reglementation ; bien collectif", note: "Vocabulaire frequent des sujets." }
  ],
  methods: [
    { title: "Expliquer l'intervention publique", text: "Partir du probleme, montrer le mecanisme de correction, puis nuancer avec les limites." }
  ],
  example: {
    title: "Exemple explique",
    text: "Une taxe environnementale peut chercher a corriger une externalite negative.",
    steps: [
      "Une activite cree un cout pour la collectivite.",
      "La taxe vise a integrer ce cout dans le calcul des agents.",
      "Le comportement peut alors changer."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez pourquoi l'action publique intervient face aux defaillances du marche.",
      answer: [
        "Definir une defaillance de marche.",
        "Montrer quelques exemples comme les externalites ou les biens collectifs.",
        "Expliquer les instruments d'action publique."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu evoques l'action publique, pense toujours objectifs, instruments et limites." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "L'action publique intervient lorsque le marche ne permet pas a lui seul de corriger certaines inefficacites ou inegalites." }
  ]
});

addQuizData("ses", "quizQuestions", [
  { chapter: "SES", prompt: "Que signifie defaillance de marche ?", choices: ["Situation ou le marche ne conduit pas a une allocation efficace ou juste.", "Simple baisse de la consommation pendant un mois.", "Absence d'entreprises sur un territoire."], correctIndex: 0, explanation: "Definition centrale pour comprendre l'action publique." }
]);

addMockExams("ses", [
  {
    tag: "RAEP",
    title: "Pourquoi l'action publique intervient-elle dans l'economie ?",
    scenario: "Il faut montrer que l'Etat intervient pour corriger certaines inefficacites et certaines inegalites.",
    goal: "Construire une demonstration claire sur les objectifs et les instruments de l'action publique.",
    steps: [
      "Definir l'action publique.",
      "Montrer des cas de defaillance de marche.",
      "Expliquer les principaux instruments de regulation."
    ],
    expected: "La copie doit articuler definition, mecanisme et nuance.",
    writing: "L'action publique intervient dans l'economie pour corriger certaines inefficacites du marche et poursuivre des objectifs collectifs."
  }
]);

addChapter("histoire", {
  id: "hist-puissances",
  title: "Nouvelles puissances et recompositions du monde",
  summary: "Il faut montrer comment le monde se recompose apres la guerre froide avec de nouvelles puissances et de nouvelles tensions.",
  mustKnow: [
    "Comprendre la notion de puissance.",
    "Savoir montrer la multipolarisation du monde.",
    "Connaitre quelques tensions depuis 1991."
  ],
  memoryLines: [
    "La fin de la guerre froide ne signifie pas la fin des conflits.",
    "Le monde contemporain est marque par de nouvelles puissances et par des tensions multiples."
  ],
  vocabulary: [
    { word: "Puissance", definition: "Capacite d'un acteur a influencer les autres acteurs et l'organisation du monde.", use: "Oui, notion centrale du chapitre." },
    { word: "Multipolarisation", definition: "Organisation du monde autour de plusieurs poles de puissance.", use: "Oui, utile pour analyser le monde contemporain." }
  ],
  properties: [
    { kind: "Point cle", title: "Recomposition", text: "La fin de la bipolarisation laisse place a un monde plus complexe et plus fragmenté." }
  ],
  formulas: [
    { label: "Reperes", expression: "1991 ; 2001 ; emergences de nouvelles puissances", note: "Repere general sur les recompositions du monde." }
  ],
  methods: [
    { title: "Traiter un sujet sur le monde contemporain", text: "Toujours articuler acteurs, tensions, puissances et evolutions." }
  ],
  example: {
    title: "Exemple explique",
    text: "Les Etats-Unis restent une grande puissance apres 1991, mais d'autres acteurs gagnent en importance.",
    steps: [
      "Les Etats-Unis conservent un poids militaire et economique majeur.",
      "D'autres puissances montent, notamment la Chine.",
      "Le monde devient plus complexe et moins lisible qu'en periode bipolaire."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que le monde se recompose apres 1991.",
      answer: [
        "Presenter la fin de la guerre froide.",
        "Montrer l'emergence de nouvelles puissances.",
        "Expliquer la diversification des tensions et des conflits."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Pense toujours acteurs, echelles et recompositions quand tu traites le monde contemporain." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Apres 1991, le monde ne devient pas un espace pacifie mais un espace en recomposition, marque par de nouvelles puissances et de nouvelles tensions." }
  ]
});

addQuizData("histoire", "quizQuestions", [
  { chapter: "Histoire", prompt: "Que signifie multipolarisation ?", choices: ["Organisation du monde autour de plusieurs poles de puissance.", "Retour a la bipolarisation stricte.", "Disparition de toute puissance."], correctIndex: 0, explanation: "La multipolarisation aide a decrire le monde apres la guerre froide." }
]);

addChapter("geographie", {
  id: "geo-mobilites",
  title: "Mobilites, flux et reseaux",
  summary: "Il faut comprendre comment les mobilites humaines et les reseaux organisent les territoires a differentes echelles.",
  mustKnow: [
    "Definir mobilite et flux.",
    "Comprendre le role des reseaux de transport et de communication.",
    "Montrer que les mobilites produisent aussi des contrastes."
  ],
  memoryLines: [
    "Les mobilites mettent en relation les territoires et les societes.",
    "Les flux ne sont pas egalement repartis dans l'espace."
  ],
  vocabulary: [
    { word: "Mobilite", definition: "Deplacement de personnes, de marchandises, de capitaux ou d'informations.", use: "Oui, terme de base du chapitre." },
    { word: "Flux", definition: "Circulation de personnes, de biens, de capitaux ou d'informations entre des espaces.", use: "Oui, notion essentielle a connaitre." }
  ],
  properties: [
    { kind: "Point cle", title: "Selectivite des reseaux", text: "Les reseaux renforcent certains poles tout en laissant d'autres espaces plus a l'ecart." }
  ],
  formulas: [
    { label: "Exemples", expression: "Aeroports internationaux ; hubs ; lignes a grande vitesse", note: "Exemples tres utiles pour les sujets sur les flux." }
  ],
  methods: [
    { title: "Analyser un reseau", text: "Identifier les poles, les noeuds, les flux et les contrastes d'accessibilite." }
  ],
  example: {
    title: "Exemple explique",
    text: "Un hub aeroportuaire connecte un territoire a des echelles multiples.",
    steps: [
      "Il concentre de nombreuses correspondances.",
      "Il relie le territoire a des reseaux nationaux et mondiaux.",
      "Il renforce l'attractivite de l'espace ou il se situe."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que les reseaux de transport organisent les territoires.",
      answer: [
        "Definir les notions de reseau et de flux.",
        "Montrer le role des grands noeuds de transport.",
        "Expliquer les effets d'integration et de contraste."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu vois reseau, pense toujours poles, flux et accessibilite." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Les reseaux organisent les territoires en concentrant les flux sur certains poles mieux connectes que d'autres." }
  ]
});

addQuizData("geographie", "quizQuestions", [
  { chapter: "Geographie", prompt: "Que signifie flux en geographie ?", choices: ["Circulation de personnes, biens, capitaux ou informations entre des espaces.", "Simple relief montagneux.", "Frontiere politique fixe."], correctIndex: 0, explanation: "Le mot flux revient dans presque tous les chapitres de geographie." }
]);

addChapter("ses", {
  id: "ses-engagement",
  title: "Engagement politique et opinion publique",
  summary: "Il faut comprendre les formes d'engagement politique et les facteurs qui expliquent la participation ou l'abstention.",
  mustKnow: [
    "Definir engagement politique et opinion publique.",
    "Connaitre les formes conventionnelles et non conventionnelles de participation.",
    "Comprendre le role de la socialisation politique."
  ],
  memoryLines: [
    "L'engagement politique peut prendre des formes variees.",
    "La participation politique depend de la socialisation, des ressources et du contexte."
  ],
  vocabulary: [
    { word: "Engagement politique", definition: "Ensemble des actions par lesquelles un individu participe a la vie politique.", use: "Oui, notion centrale du chapitre." },
    { word: "Opinion publique", definition: "Ensemble des jugements et positions exprimes dans une societe sur des questions politiques.", use: "Oui, utile dans les sujets sur les sondages ou la participation." }
  ],
  properties: [
    { kind: "Mecanisme", title: "Socialisation politique", text: "La famille, l'ecole, les pairs et les medias participent a la formation des attitudes politiques." }
  ],
  formulas: [
    { label: "Notions", expression: "Vote ; militantisme ; petition ; manifestation", note: "Exemples de formes d'engagement a connaitre." }
  ],
  methods: [
    { title: "Expliquer une participation politique", text: "Toujours montrer les facteurs sociaux, politiques et contextuels." }
  ],
  example: {
    title: "Exemple explique",
    text: "Un individu peut participer politiquement sans etre membre d'un parti.",
    steps: [
      "Il peut signer une petition.",
      "Il peut participer a une manifestation.",
      "Il peut aussi s'exprimer lors d'une election."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que l'engagement politique prend des formes variees.",
      answer: [
        "Definir l'engagement politique.",
        "Distinguer formes conventionnelles et non conventionnelles.",
        "Expliquer les facteurs qui orientent ces choix."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Pense toujours aux formes visibles mais aussi aux formes plus discretes d'engagement." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "L'engagement politique ne se reduit pas au vote: il peut aussi prendre des formes militantes, protestataires ou associatives." }
  ]
});

addQuizData("ses", "quizQuestions", [
  { chapter: "SES", prompt: "Que signifie engagement politique ?", choices: ["Ensemble des actions par lesquelles un individu participe a la vie politique.", "Simple appartenance a un groupe d'amis.", "Refus total de toute expression publique."], correctIndex: 0, explanation: "Le vote n'est qu'une forme parmi d'autres d'engagement politique." }
]);

addChapter("histoire", {
  id: "hist-gouverner-france",
  title: "Gouverner la France depuis 1946",
  summary: "Il faut comprendre comment l'Etat, les institutions et les acteurs politiques gouvernent la France dans un contexte de transformations economiques et sociales.",
  mustKnow: [
    "Distinguer IVe et Ve Republique.",
    "Comprendre le role de l'Etat dans l'economie et la societe.",
    "Connaitre les transformations de l'action publique."
  ],
  memoryLines: [
    "L'Etat joue un role majeur dans la reconstruction et la modernisation de la France apres 1945.",
    "Les formes de gouvernement evoluent avec les transformations economiques, sociales et europeennes."
  ],
  vocabulary: [
    { word: "Action publique", definition: "Ensemble des decisions et interventions des pouvoirs publics.", use: "Oui, utile pour analyser les mutations de l'Etat." },
    { word: "Modernisation", definition: "Transformation des structures economiques, sociales et administratives.", use: "Oui, mot important pour la France d'apres-guerre." }
  ],
  properties: [
    { kind: "Point cle", title: "Role de l'Etat", text: "L'Etat impulse la reconstruction, l'amenagement et de nombreuses politiques publiques apres 1945." }
  ],
  formulas: [
    { label: "Reperes", expression: "1946 ; 1958 ; annees 1980", note: "IVe Republique, Ve Republique, tournants economiques et politiques." }
  ],
  methods: [
    { title: "Traiter un sujet sur l'Etat", text: "Toujours articuler institutions, contexte economique et politiques menees." }
  ],
  example: {
    title: "Exemple explique",
    text: "L'Etat pilote la reconstruction et la modernisation de la France apres 1945.",
    steps: [
      "Il intervient dans l'economie par la planification et les nationalisations.",
      "Il accompagne la modernisation des infrastructures.",
      "Son role evolue ensuite avec la construction europeenne et la mondialisation."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que les formes de gouvernement de la France evoluent depuis 1946.",
      answer: [
        "Presenter la IVe puis la Ve Republique.",
        "Montrer l'evolution du role de l'Etat.",
        "Expliquer les transformations de l'action publique."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu vois gouverner, pense institutions, acteurs, politiques et contexte." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Gouverner la France suppose de prendre en compte a la fois les institutions, le role de l'Etat et les mutations economiques et sociales du pays." }
  ]
});

addChapter("histoire", {
  id: "hist-europe",
  title: "Construction europeenne et place de la France",
  summary: "Il faut comprendre les grandes etapes de la construction europeenne et la place qu'y occupe la France.",
  mustKnow: [
    "Connaitre les grandes etapes de la construction europeenne.",
    "Comprendre les objectifs de l'integration europeenne.",
    "Montrer le role de la France dans ce processus."
  ],
  memoryLines: [
    "La construction europeenne vise d'abord la paix puis l'integration economique et politique.",
    "La France joue un role central dans la construction europeenne."
  ],
  vocabulary: [
    { word: "Integration europeenne", definition: "Processus de rapprochement economique, politique et juridique entre les Etats europeens.", use: "Oui, notion de base du chapitre." },
    { word: "Souverainete", definition: "Capacite d'un Etat a exercer son autorite sur son territoire et sa population.", use: "Oui, utile pour les debats europeens." }
  ],
  properties: [
    { kind: "Point cle", title: "Paix et integration", text: "La construction europeenne se construit d'abord pour stabiliser durablement le continent." }
  ],
  formulas: [
    { label: "Reperes", expression: "1951 ; 1957 ; 1992", note: "CECA, traites de Rome, traite de Maastricht." }
  ],
  methods: [
    { title: "Expliquer une construction politique", text: "Toujours partir des objectifs, des etapes et des limites." }
  ],
  example: {
    title: "Exemple explique",
    text: "Le traite de Maastricht marque une nouvelle etape de la construction europeenne.",
    steps: [
      "Il renforce l'integration politique et economique.",
      "Il prepare l'union economique et monetaire.",
      "Il alimente aussi des debats sur la souverainete."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez les grandes etapes de la construction europeenne.",
      answer: [
        "Presenter les origines du projet europeen.",
        "Montrer les grandes etapes institutionnelles.",
        "Conclure sur les objectifs et les limites."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Toujours articuler paix, integration economique, institutions et debats." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "La construction europeenne nait de la volonte de garantir la paix en Europe, avant de devenir un projet d'integration economique et politique plus large." }
  ]
});

addMockExams("histoire", [
  {
    tag: "Composition",
    title: "Comment la France se transforme-t-elle politiquement et socialement depuis 1945 ?",
    scenario: "Il faut montrer l'evolution des institutions, du role de l'Etat et de la societe francaise.",
    goal: "Construire une reponse ample sur les mutations de la France contemporaine.",
    steps: [
      "Presenter la reconstruction et la modernisation.",
      "Montrer les transformations institutionnelles.",
      "Expliquer les mutations sociales et politiques."
    ],
    expected: "Le correcteur attend une copie structuree et nuancee.",
    writing: "Depuis 1945, la France connait de profondes transformations institutionnelles, economiques et sociales qui modifient durablement son mode de gouvernement."
  }
]);

addQuizData("histoire", "quizQuestions", [
  { chapter: "Histoire", prompt: "Quel traite marque une etape majeure de la construction europeenne en 1992 ?", choices: ["Le traite de Maastricht", "Le traite de Versailles", "Le traite de Rome de 1957"], correctIndex: 0, explanation: "Maastricht marque une nouvelle etape dans l'integration europeenne." },
  { chapter: "Histoire", prompt: "Que signifie souverainete ?", choices: ["Capacite d'un Etat a exercer son autorite.", "Suppression de toute frontiere.", "Simple changement de gouvernement."], correctIndex: 0, explanation: "La souverainete est une notion cle pour comprendre les debats europeens." }
]);

addChapter("geographie", {
  id: "geo-villes",
  title: "Villes, urbanisation et fragmentation",
  summary: "Il faut comprendre les dynamiques de l'urbanisation mondiale et les contrastes socio-spatiaux qu'elles produisent.",
  mustKnow: [
    "Definir urbanisation et fragmentation socio-spatiale.",
    "Montrer le role des villes dans la mondialisation.",
    "Comprendre les contrastes internes aux espaces urbains."
  ],
  memoryLines: [
    "Les villes concentrent populations, activites et fonctions de commandement.",
    "L'urbanisation produit aussi des contrastes et des fragmentations."
  ],
  vocabulary: [
    { word: "Urbanisation", definition: "Processus d'augmentation de la population urbaine et d'extension des villes.", use: "Oui, notion centrale du chapitre." },
    { word: "Fragmentation", definition: "Organisation d'un espace en parties socialement ou fonctionnellement differenciees.", use: "Oui, utile pour analyser les contrastes urbains." }
  ],
  properties: [
    { kind: "Point cle", title: "Contrastes urbains", text: "Les villes concentrent richesses et fonctions, mais aussi inegalites et segregations." }
  ],
  formulas: [
    { label: "Exemples", expression: "Centres d'affaires ; peripheries ; quartiers fermes ; bidonvilles", note: "Exemples utiles pour montrer la fragmentation." }
  ],
  methods: [
    { title: "Analyser un espace urbain", text: "Identifier fonctions, acteurs, contrastes et dynamiques d'etalement ou de recomposition." }
  ],
  example: {
    title: "Exemple explique",
    text: "Une grande metropole peut concentrer a la fois richesse, innovation et fortes inegalites.",
    steps: [
      "Elle attire les activites de commandement.",
      "Elle se connecte aux reseaux mondiaux.",
      "Elle presente aussi des espaces marginalises ou fragiles."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que l'urbanisation renforce a la fois integration et fragmentation.",
      answer: [
        "Definir l'urbanisation.",
        "Montrer le role economique et fonctionnel des villes.",
        "Expliquer les contrastes socio-spatiaux."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Dans un sujet sur les villes, pense toujours fonctions, reseaux et inegalites." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Les villes sont des espaces d'integration majeurs dans la mondialisation, mais elles sont aussi marquees par de fortes fragmentations socio-spatiales." }
  ]
});

addChapter("geographie", {
  id: "geo-tourisme",
  title: "Tourisme, patrimoine et valorisation des territoires",
  summary: "Il faut comprendre comment le tourisme transforme les territoires et mobilise differents acteurs.",
  mustKnow: [
    "Definir tourisme et patrimoine.",
    "Montrer les effets economiques et spatiaux du tourisme.",
    "Comprendre les tensions liees a la valorisation des territoires."
  ],
  memoryLines: [
    "Le tourisme valorise des territoires mais peut aussi les fragiliser.",
    "Le patrimoine est un support important d'attractivite territoriale."
  ],
  vocabulary: [
    { word: "Patrimoine", definition: "Ensemble des biens materiels et immateriels herites et valorises par une societe.", use: "Oui, utile dans les sujets de valorisation territoriale." },
    { word: "Attractivite", definition: "Capacite d'un territoire a attirer activites, habitants ou visiteurs.", use: "Oui, mot tres utile en geographie." }
  ],
  properties: [
    { kind: "Point cle", title: "Valorisation", text: "Le tourisme repose sur des politiques de mise en valeur des territoires et de leurs ressources." }
  ],
  formulas: [
    { label: "Exemples", expression: "Littoraux touristiques ; montagnes ; villes patrimoniales", note: "Exemples faciles a mobiliser." }
  ],
  methods: [
    { title: "Analyser un territoire touristique", text: "Toujours montrer ressources, acteurs, amenagements, effets et limites." }
  ],
  example: {
    title: "Exemple explique",
    text: "Une ville patrimoniale peut utiliser son patrimoine pour renforcer son attractivite.",
    steps: [
      "Le patrimoine attire des visiteurs.",
      "Les acteurs publics amenagent l'espace et communiquent dessus.",
      "Cette valorisation peut aussi produire des tensions d'usage."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que le tourisme transforme les territoires.",
      answer: [
        "Definir le tourisme.",
        "Montrer ses effets economiques et spatiaux.",
        "Expliquer les tensions ou les limites que cela peut produire."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Pense toujours ressources, acteurs, amenagements et effets quand tu traites un espace touristique." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Le tourisme transforme les territoires en valorisant certaines ressources, mais cette mise en valeur peut aussi produire des tensions et des desequilibres." }
  ]
});

addMockExams("geographie", [
  {
    tag: "Composition",
    title: "Comment les villes s'inserent-elles dans la mondialisation ?",
    scenario: "Il faut montrer le role des grandes villes et les contrastes qu'elles concentrent.",
    goal: "Construire une copie solide sur les dynamiques urbaines.",
    steps: [
      "Definir urbanisation et metropolisation.",
      "Montrer les fonctions de commandement.",
      "Expliquer les inegalites et les fragmentations."
    ],
    expected: "On attend une copie localisee, avec des exemples précis.",
    writing: "Les villes s'inserent dans la mondialisation en concentrant commandement, flux et innovation, mais elles sont aussi marquees par de fortes inegalites."
  }
]);

addQuizData("geographie", "quizQuestions", [
  { chapter: "Geographie", prompt: "Que signifie urbanisation ?", choices: ["Augmentation de la population urbaine et extension des villes.", "Disparition de toutes les villes.", "Retour generalise des populations vers les campagnes."], correctIndex: 0, explanation: "Definition de base sur les villes." },
  { chapter: "Geographie", prompt: "Que signifie attractivite ?", choices: ["Capacite d'un territoire a attirer activites, habitants ou visiteurs.", "Simple baisse de population.", "Isolement d'un territoire."], correctIndex: 0, explanation: "Notion utile dans de nombreux chapitres." }
]);

addChapter("ses", {
  id: "ses-socialisation",
  title: "Socialisation, identites et groupes sociaux",
  summary: "Il faut comprendre comment se construisent les identites et comment les groupes sociaux influencent les comportements.",
  mustKnow: [
    "Definir socialisation primaire et secondaire.",
    "Connaitre plusieurs agents de socialisation.",
    "Montrer que les socialisations peuvent etre differenciees."
  ],
  memoryLines: [
    "La socialisation est un processus continu.",
    "Les individus n'integrent pas tous les memes normes ni les memes valeurs."
  ],
  vocabulary: [
    { word: "Socialisation primaire", definition: "Socialisation de l'enfance, principalement au sein de la famille et de l'ecole.", use: "Oui, notion centrale du chapitre." },
    { word: "Socialisation secondaire", definition: "Socialisation qui se poursuit apres l'enfance dans d'autres cadres de vie.", use: "Oui, utile pour montrer la continuite de la socialisation." }
  ],
  properties: [
    { kind: "Mecanisme", title: "Differenciation", text: "Les socialisations varient selon le milieu social, le genre, la trajectoire et les experiences." }
  ],
  formulas: [
    { label: "Notions", expression: "Famille ; ecole ; pairs ; medias", note: "Agents de socialisation a connaitre." }
  ],
  methods: [
    { title: "Expliquer une socialisation differenciee", text: "Toujours montrer les agents, les normes transmises et les effets sur les comportements." }
  ],
  example: {
    title: "Exemple explique",
    text: "La famille transmet des normes, mais l'ecole et les groupes de pairs jouent aussi un role important.",
    steps: [
      "La famille transmet les premieres habitudes et valeurs.",
      "L'ecole transmet des regles communes et des savoirs.",
      "Les pairs peuvent renforcer ou modifier certains comportements."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que la socialisation est differenciee selon les individus.",
      answer: [
        "Definir la socialisation.",
        "Presenter plusieurs agents de socialisation.",
        "Expliquer les variations selon les trajectoires et les milieux."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu traites la socialisation, pense agents, normes, valeurs et variations selon les groupes." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "La socialisation est differenciee car les individus n'appartiennent pas aux memes milieux et ne sont pas exposes aux memes agents socialisateurs." }
  ]
});

addChapter("ses", {
  id: "ses-stratification",
  title: "Stratification sociale et inegalites",
  summary: "Il faut comprendre comment se structurent les inegalites et comment elles se reproduisent ou se transforment.",
  mustKnow: [
    "Definir inegalite sociale et stratification sociale.",
    "Connaitre plusieurs formes de capitaux et de ressources.",
    "Montrer que les inegalites peuvent se cumuler."
  ],
  memoryLines: [
    "Les inegalites ne se reduisent pas aux revenus.",
    "Les differentes formes d'inegalites peuvent se renforcer mutuellement."
  ],
  vocabulary: [
    { word: "Stratification sociale", definition: "Organisation de la societe en groupes hierarchises.", use: "Oui, notion centrale sur les inegalites." },
    { word: "Capital culturel", definition: "Ensemble des ressources culturelles valorisees socialement.", use: "Oui, utile pour mobiliser Bourdieu." }
  ],
  properties: [
    { kind: "Mecanisme", title: "Cumul", text: "Les inegalites de revenus, de diplome, de patrimoine ou de sante peuvent se cumuler." }
  ],
  formulas: [
    { label: "Auteurs", expression: "Bourdieu ; capitaux economique, culturel, social", note: "Repere important pour structurer la copie." }
  ],
  methods: [
    { title: "Analyser une inegalite", text: "Toujours definir le type d'inegalite, montrer ses causes et ses effets." }
  ],
  example: {
    title: "Exemple explique",
    text: "Le capital culturel transmis dans la famille peut influencer la reussite scolaire.",
    steps: [
      "Certaines familles transmettent davantage de pratiques culturelles valorisees par l'ecole.",
      "Cela peut favoriser certaines trajectoires scolaires.",
      "Ces differences peuvent ensuite alimenter d'autres inegalites."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que les inegalites peuvent se cumuler.",
      answer: [
        "Definir la notion d'inegalite sociale.",
        "Presenter plusieurs formes d'inegalites.",
        "Expliquer comment elles se renforcent mutuellement."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu traites les inegalites, pense toujours pluralite et cumul." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Les inegalites sociales sont multiples et peuvent se cumuler, ce qui renforce durablement les ecarts entre groupes sociaux." }
  ]
});

addMockExams("ses", [
  {
    tag: "RAEP",
    title: "Comment la socialisation contribue-t-elle a la differenciation sociale ?",
    scenario: "Il faut montrer que les individus ne recoivent pas tous les memes normes et les memes valeurs.",
    goal: "Construire une reponse sociologique claire et illustree.",
    steps: [
      "Definir la socialisation.",
      "Presenter plusieurs agents de socialisation.",
      "Expliquer comment les socialisations varient selon les individus."
    ],
    expected: "Le correcteur attend definitions, mecanismes et exemples.",
    writing: "La socialisation contribue a la differenciation sociale car les individus n'appartiennent pas tous aux memes milieux ni aux memes cadres de socialisation."
  }
]);

addQuizData("ses", "quizQuestions", [
  { chapter: "SES", prompt: "Que signifie socialisation primaire ?", choices: ["Socialisation de l'enfance, surtout dans la famille et a l'ecole.", "Socialisation qui commence a l'age adulte.", "Simple participation a une election."], correctIndex: 0, explanation: "La socialisation primaire renvoie aux premiers apprentissages de l'enfance." },
  { chapter: "SES", prompt: "Que signifie stratification sociale ?", choices: ["Organisation de la societe en groupes hierarchises.", "Disparition de toutes les differences sociales.", "Simple croissance du nombre d'entreprises."], correctIndex: 0, explanation: "C'est une notion centrale pour comprendre les inegalites." }
]);

addChapter("histoire", {
  id: "hist-medias-opinion",
  title: "Medias, opinion publique et democratie",
  summary: "Il faut comprendre comment se forment l'opinion publique et le role des medias dans la vie democratique.",
  mustKnow: [
    "Definir opinion publique et medias de masse.",
    "Comprendre que les medias informent mais influencent aussi les debats publics.",
    "Montrer les evolutions du paysage mediatique."
  ],
  memoryLines: [
    "L'opinion publique se construit par l'information, les debats et les pratiques sociales.",
    "Les medias jouent un role central dans les democraties contemporaines."
  ],
  vocabulary: [
    { word: "Opinion publique", definition: "Ensemble des jugements et positions exprimes dans une societe sur des questions politiques et sociales.", use: "Oui, notion centrale du chapitre." },
    { word: "Media de masse", definition: "Media capable de toucher un grand public, comme la radio, la television ou la presse nationale.", use: "Oui, utile dans les reponses sur la democratie contemporaine." }
  ],
  properties: [
    { kind: "Point cle", title: "Poids des medias", text: "Les medias informent, hierarchisent les sujets et participent a la formation du debat public." }
  ],
  formulas: [
    { label: "Reperes", expression: "Presse ; radio ; television ; internet", note: "Quatre grandes etapes du paysage mediatique contemporain." }
  ],
  methods: [
    { title: "Traiter un sujet sur medias et opinion", text: "Toujours articuler information, influence, pluralisme et limites." }
  ],
  example: {
    title: "Exemple explique",
    text: "L'essor de la television a transforme la vie politique et la diffusion de l'information.",
    steps: [
      "Elle donne une place nouvelle a l'image dans la vie publique.",
      "Elle permet de toucher un public tres large.",
      "Elle modifie aussi les formes de communication politique."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez le role des medias dans la vie democratique.",
      answer: [
        "Definir l'opinion publique et les medias.",
        "Montrer leur role dans l'information.",
        "Expliquer leur influence sur le debat public.",
        "Nuancer avec les enjeux de pluralisme et de manipulation."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu parles des medias, pense information, influence, pluralisme et evolution technique." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Les medias jouent un role essentiel dans les democraties car ils diffusent l'information, structurent les debats et contribuent a la formation de l'opinion publique." }
  ]
});

addChapter("histoire", {
  id: "hist-etats-unis-monde",
  title: "Les Etats-Unis et le monde",
  summary: "Il faut montrer les formes de la puissance americaine, ses evolutions et ses limites dans le monde contemporain.",
  mustKnow: [
    "Definir la notion de superpuissance puis de puissance mondiale.",
    "Connaitre les dimensions de la puissance americaine.",
    "Savoir montrer les limites et contestations de cette puissance."
  ],
  memoryLines: [
    "Les Etats-Unis disposent d'une puissance militaire, economique, politique et culturelle majeure.",
    "Cette puissance connait toutefois des limites et des contestations."
  ],
  vocabulary: [
    { word: "Superpuissance", definition: "Etat disposant d'une puissance globale exceptionnelle a l'echelle mondiale.", use: "Oui, utile pour l'apres-1945." },
    { word: "Soft power", definition: "Capacite d'influence par l'attraction culturelle, ideologique ou symbolique.", use: "Oui, utile pour analyser la puissance americaine." }
  ],
  properties: [
    { kind: "Point cle", title: "Puissance multiforme", text: "La puissance americaine s'appuie a la fois sur l'economie, l'armee, les alliances et la culture." }
  ],
  formulas: [
    { label: "Reperes", expression: "1945 ; 1991 ; 2001", note: "Moments majeurs de l'affirmation et de la recomposition de la puissance americaine." }
  ],
  methods: [
    { title: "Etudier une puissance", text: "Toujours distinguer les instruments de puissance, leurs usages et leurs limites." }
  ],
  example: {
    title: "Exemple explique",
    text: "Hollywood, les grandes entreprises numeriques et le dollar participent a l'influence mondiale des Etats-Unis.",
    steps: [
      "La culture americaine diffuse largement.",
      "Les grandes entreprises americaines structurent des secteurs cles.",
      "Le dollar occupe une place centrale dans la finance mondiale."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que la puissance des Etats-Unis est a la fois majeure et contestee.",
      answer: [
        "Presenter les dimensions de la puissance americaine.",
        "Donner des exemples de son rayonnement.",
        "Expliquer ensuite ses limites et les contestations."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu traites une puissance, pense hard power, soft power et limites." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "La puissance des Etats-Unis est globale, mais elle n'est ni absolue ni incontestee dans le monde contemporain." }
  ]
});

addMockExams("histoire", [
  {
    tag: "Composition",
    title: "Comment les medias participent-ils a la vie democratique ?",
    scenario: "Il faut montrer leur role d'information mais aussi les enjeux de pluralisme et d'influence.",
    goal: "Construire une copie claire sur opinion publique et medias.",
    steps: [
      "Definir medias et opinion publique.",
      "Montrer le role d'information.",
      "Expliquer les limites et les tensions liees au pluralisme."
    ],
    expected: "Le correcteur attend une analyse nuancee et bien contextualisee.",
    writing: "Les medias participent pleinement a la vie democratique en diffusant l'information et en structurant le debat public, meme si leur influence pose aussi des questions de pluralisme."
  }
]);

addQuizData("histoire", "quizQuestions", [
  { chapter: "Histoire", prompt: "Que signifie soft power ?", choices: ["Capacite d'influence par l'attraction culturelle ou symbolique.", "Puissance fondee uniquement sur l'armee.", "Suppression de toute diplomatie."], correctIndex: 0, explanation: "Le soft power est utile pour analyser la puissance americaine." },
  { chapter: "Histoire", prompt: "Que signifie opinion publique ?", choices: ["Ensemble des jugements et positions exprimes dans une societe.", "Simple resultat d'une election.", "Unique avis du gouvernement."], correctIndex: 0, explanation: "C'est la notion de base du chapitre sur medias et democratie." }
]);

addChapter("geographie", {
  id: "geo-frontieres",
  title: "Frontieres, interfaces et conflits d'usage",
  summary: "Il faut comprendre que les frontieres sont a la fois des lignes de separation, des interfaces et parfois des espaces de tension.",
  mustKnow: [
    "Definir frontiere et interface.",
    "Montrer que les frontieres ont des fonctions multiples.",
    "Comprendre qu'elles peuvent etre source de cooperation ou de tensions."
  ],
  memoryLines: [
    "Une frontiere n'est pas seulement une ligne de separation.",
    "Certaines frontieres deviennent des interfaces actives, d'autres restent des espaces de tension."
  ],
  vocabulary: [
    { word: "Frontiere", definition: "Limite politique entre deux territoires ou deux Etats.", use: "Oui, terme central du chapitre." },
    { word: "Interface", definition: "Espace de contact et d'echange entre plusieurs ensembles geographiques.", use: "Oui, a distinguer de la simple separation." }
  ],
  properties: [
    { kind: "Point cle", title: "Fonctions multiples", text: "Une frontiere peut filtrer, relier, proteger, separer ou organiser des flux." }
  ],
  formulas: [
    { label: "Exemples", expression: "Frontieres ouvertes ; murs ; espaces transfrontaliers", note: "Exemples de situations a mobiliser." }
  ],
  methods: [
    { title: "Analyser une frontiere", text: "Toujours montrer acteurs, fonctions, flux et tensions eventuelles." }
  ],
  example: {
    title: "Exemple explique",
    text: "Une frontiere au sein de l'espace Schengen ne fonctionne pas comme une frontiere tres militarisee.",
    steps: [
      "Les controles y sont differents.",
      "Les flux de personnes et de marchandises sont plus ou moins facilites.",
      "La fonction de la frontiere depend donc du contexte politique et geographique."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que les frontieres ont aujourd'hui des fonctions variees.",
      answer: [
        "Definir la frontiere.",
        "Montrer qu'elle peut separer et controler.",
        "Expliquer qu'elle peut aussi organiser des flux et des coopérations."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Ne jamais reduire une frontiere a une simple ligne sur une carte." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "La frontiere est a la fois une limite politique, un instrument de controle et, dans certains cas, une interface d'echange." }
  ]
});

addChapter("geographie", {
  id: "geo-alimentation",
  title: "Alimentation, agriculture et mondialisation",
  summary: "Il faut comprendre les transformations des espaces agricoles et les enjeux alimentaires a l'echelle mondiale.",
  mustKnow: [
    "Definir agriculture productive et securite alimentaire.",
    "Montrer la diversite des modeles agricoles.",
    "Comprendre les tensions entre production, commerce et durabilite."
  ],
  memoryLines: [
    "L'alimentation est un enjeu economique, social, politique et environnemental.",
    "Les espaces agricoles sont inegalement integres a la mondialisation."
  ],
  vocabulary: [
    { word: "Securite alimentaire", definition: "Situation dans laquelle une population a acces a une alimentation suffisante et de qualite.", use: "Oui, notion centrale du chapitre." },
    { word: "Agriculture productiviste", definition: "Mode de production visant des rendements eleves grace a une forte intensification.", use: "Oui, utile pour les comparaisons de modeles agricoles." }
  ],
  properties: [
    { kind: "Point cle", title: "Enjeux multiples", text: "Les questions alimentaires articulent production, echanges, inegalites et environnement." }
  ],
  formulas: [
    { label: "Exemples", expression: "Grandes plaines cerealieres ; agricultures vivrieres ; agro-business", note: "Exemples utiles pour montrer la diversite." }
  ],
  methods: [
    { title: "Traiter un sujet sur l'alimentation", text: "Toujours montrer les acteurs, les echelles, les inegalites et les tensions." }
  ],
  example: {
    title: "Exemple explique",
    text: "Un espace d'agriculture intensive peut etre tres performant mais soulever des enjeux environnementaux.",
    steps: [
      "Les rendements y sont eleves.",
      "La production est souvent bien integree aux marches.",
      "Mais les impacts sur les sols, l'eau ou la biodiversite peuvent etre importants."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que l'alimentation est un enjeu mondial.",
      answer: [
        "Definir la securite alimentaire.",
        "Montrer les contrastes d'acces a l'alimentation.",
        "Expliquer les enjeux de production, de commerce et de durabilite."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Pense toujours production, acces, inegalites et environnement dans les sujets sur l'alimentation." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "L'alimentation constitue un enjeu mondial car elle met en jeu a la fois la production agricole, l'acces aux ressources, les echanges et la durabilite." }
  ]
});

addMockExams("geographie", [
  {
    tag: "Composition",
    title: "Pourquoi les frontieres restent-elles des espaces stratégiques ?",
    scenario: "Il faut montrer qu'elles ne sont pas seulement des lignes de separation mais aussi des interfaces et des lieux de tensions.",
    goal: "Construire une copie claire sur les fonctions des frontieres.",
    steps: [
      "Definir la frontiere.",
      "Montrer ses fonctions de controle et de separation.",
      "Expliquer ses fonctions d'interface et de cooperation.",
      "Nuancer avec les tensions ou conflits."
    ],
    expected: "Le correcteur attend une reponse nuancee et appuyee sur des exemples.",
    writing: "Les frontieres restent des espaces strategiques car elles servent a la fois a separer, a controler et parfois a organiser les echanges."
  }
]);

addQuizData("geographie", "quizQuestions", [
  { chapter: "Geographie", prompt: "Que signifie securite alimentaire ?", choices: ["Situation dans laquelle une population a acces a une alimentation suffisante et de qualite.", "Simple abondance de restaurants.", "Production agricole uniquement locale."], correctIndex: 0, explanation: "La securite alimentaire depasse la seule question de la production." },
  { chapter: "Geographie", prompt: "Que signifie frontiere ?", choices: ["Limite politique entre deux territoires ou deux Etats.", "Simple relief naturel.", "Un reseau de transport."], correctIndex: 0, explanation: "La frontiere a plusieurs fonctions geographiques et politiques." }
]);

addChapter("ses", {
  id: "ses-consommation",
  title: "Consommation, styles de vie et comportements",
  summary: "Il faut comprendre que la consommation depend a la fois des revenus, des normes sociales et des modes de vie.",
  mustKnow: [
    "Definir consommation et budget des menages.",
    "Montrer que la consommation depend de plusieurs facteurs.",
    "Comprendre que la consommation a aussi une dimension sociale."
  ],
  memoryLines: [
    "La consommation ne depend pas uniquement du revenu.",
    "Les pratiques de consommation permettent aussi d'exprimer une appartenance sociale ou un mode de vie."
  ],
  vocabulary: [
    { word: "Consommation", definition: "Utilisation de biens et services pour satisfaire des besoins.", use: "Oui, notion de base du chapitre." },
    { word: "Style de vie", definition: "Ensemble des pratiques et habitudes qui caracterisent un groupe social ou un individu.", use: "Oui, utile pour relier consommation et identite sociale." }
  ],
  properties: [
    { kind: "Mecanisme", title: "Facteurs multiples", text: "Le revenu, l'age, le genre, les normes sociales ou encore les effets d'imitation influencent les comportements de consommation." }
  ],
  formulas: [
    { label: "Notions", expression: "Budget ; arbitrage ; effet d'imitation ; distinction", note: "Mots utiles pour structurer les copies." }
  ],
  methods: [
    { title: "Expliquer un comportement de consommation", text: "Toujours montrer les facteurs economiques puis les dimensions sociales et culturelles." }
  ],
  example: {
    title: "Exemple explique",
    text: "Deux menages ayant des revenus differents n'ont pas les memes contraintes de budget ni les memes arbitrages.",
    steps: [
      "Le revenu fixe une contrainte economique.",
      "Les besoins juges prioritaires peuvent varier.",
      "Les choix de consommation ont aussi une dimension sociale."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que la consommation depend de plusieurs facteurs.",
      answer: [
        "Definir la consommation.",
        "Montrer le role du revenu et du budget.",
        "Expliquer les influences sociales et culturelles."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Dans un sujet sur la consommation, pense contraintes economiques, normes et imitation." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Les comportements de consommation s'expliquent a la fois par des contraintes economiques et par des logiques sociales et culturelles." }
  ]
});

addChapter("ses", {
  id: "ses-innovation",
  title: "Innovation, entreprises et competitivite",
  summary: "Il faut comprendre le role de l'innovation dans la strategie des entreprises et dans la competitivite des economies.",
  mustKnow: [
    "Definir innovation et competitivite.",
    "Comprendre les differents types d'innovation.",
    "Montrer les effets de l'innovation sur les entreprises et l'economie."
  ],
  memoryLines: [
    "L'innovation peut porter sur les produits, les procedes ou l'organisation.",
    "La competitivite peut etre liee aux couts comme a la qualite ou a l'innovation."
  ],
  vocabulary: [
    { word: "Competitivite", definition: "Capacite d'une entreprise ou d'une economie a faire face a la concurrence.", use: "Oui, notion cle du chapitre." },
    { word: "Innovation de procede", definition: "Innovation qui modifie la maniere de produire.", use: "Oui, utile pour relier innovation et productivite." }
  ],
  properties: [
    { kind: "Mecanisme", title: "Competitivite hors-prix", text: "La qualite, l'image, l'innovation ou le service peuvent renforcer la position d'une entreprise sans agir directement sur les prix." }
  ],
  formulas: [
    { label: "Notions", expression: "Recherche et developpement ; brevet ; competitivite-prix ; competitivite hors-prix", note: "Mots utiles pour la redaction." }
  ],
  methods: [
    { title: "Expliquer une strategie d'entreprise", text: "Toujours relier innovation, productivite, marche et concurrence." }
  ],
  example: {
    title: "Exemple explique",
    text: "Une entreprise peut innover pour se differencier de ses concurrentes.",
    steps: [
      "Elle propose un produit nouveau ou ameliore.",
      "Elle renforce son image ou sa qualite percue.",
      "Elle peut gagner des parts de marche."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez comment l'innovation peut renforcer la competitivite d'une entreprise.",
      answer: [
        "Definir innovation et competitivite.",
        "Distinguer plusieurs types d'innovation.",
        "Expliquer les effets sur la productivite, la qualite ou la differenciation."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu parles d'une entreprise, pense toujours couts, qualite, innovation et marche." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "L'innovation peut renforcer la competitivite d'une entreprise en ameliorant sa productivite, sa qualite ou sa capacite de differenciation." }
  ]
});

addMockExams("ses", [
  {
    tag: "RAEP",
    title: "Comment expliquer les comportements de consommation ?",
    scenario: "Il faut montrer qu'ils dependent des revenus mais aussi des normes et des styles de vie.",
    goal: "Construire une reponse claire sur consommation et facteurs sociaux.",
    steps: [
      "Definir la consommation.",
      "Montrer le role des contraintes economiques.",
      "Expliquer les influences sociales et culturelles."
    ],
    expected: "Le correcteur attend definitions, mecanismes et exemples.",
    writing: "Les comportements de consommation s'expliquent par des contraintes economiques mais aussi par des logiques sociales et culturelles."
  }
]);

addQuizData("ses", "quizQuestions", [
  { chapter: "SES", prompt: "Que signifie competitivite ?", choices: ["Capacite d'une entreprise ou d'une economie a faire face a la concurrence.", "Simple hausse de la consommation.", "Absence de concurrence."], correctIndex: 0, explanation: "La competitivite est une notion essentielle pour les entreprises et les economies." },
  { chapter: "SES", prompt: "Que signifie style de vie ?", choices: ["Ensemble des pratiques et habitudes qui caracterisent un individu ou un groupe.", "Simple niveau de revenu.", "Uniquement un choix politique."], correctIndex: 0, explanation: "La notion de style de vie aide a comprendre les comportements de consommation." }
]);

window.subjectConfigs.histoire.toolbox.markers.push(
  { label: "1945", expression: "Fin de la Seconde Guerre mondiale", note: "Repere majeur pour l'ordre mondial d'apres-guerre." },
  { label: "1951", expression: "CECA", note: "Premiere etape importante de la construction europeenne." },
  { label: "1957", expression: "Traites de Rome", note: "Repere majeur de la construction europeenne." },
  { label: "1992", expression: "Traite de Maastricht", note: "Nouvelle etape de l'integration europeenne." }
);

window.subjectConfigs.histoire.toolbox.notions.push(
  { label: "Memoire", expression: "Rapport vecu et souvent subjectif au passe.", note: "A distinguer de l'histoire." },
  { label: "Soft power", expression: "Capacite d'influence par l'attraction culturelle ou symbolique.", note: "Utile pour les Etats-Unis et le monde." },
  { label: "Integration europeenne", expression: "Processus de rapprochement economique, politique et juridique entre Etats europeens.", note: "A connaitre par coeur." }
);

window.subjectConfigs.histoire.toolbox.methods.push(
  { label: "Etude de document", expression: "Presenter la nature, le contexte, l'auteur, puis confronter au cours.", note: "Methode tres frequente au bac." },
  { label: "Periodiser", expression: "Decouper un chapitre en grandes phases chronologiques.", note: "Tres utile en guerre froide et construction europeenne." }
);

window.subjectConfigs.histoire.toolbox.actors.push(
  { label: "Jean Monnet", expression: "Acteur important de la construction europeenne.", note: "Repere classique." },
  { label: "Kennedy", expression: "President americain durant la crise de Cuba.", note: "Acteur utile sur la guerre froide." }
);

window.subjectConfigs.geographie.toolbox.markers.push(
  { label: "Schengen", expression: "Espace de circulation au sein d'une partie de l'Europe", note: "Repere utile pour les frontieres." },
  { label: "Hub", expression: "Noeud majeur des reseaux de transport", note: "Repere de base pour les mobilites." },
  { label: "Agriculture productiviste", expression: "Mode de production intensif a hauts rendements", note: "Repere utile pour les questions alimentaires." }
);

window.subjectConfigs.geographie.toolbox.notions.push(
  { label: "Frontiere", expression: "Limite politique entre deux territoires ou deux Etats.", note: "Ne pas la reduire a une simple ligne." },
  { label: "Securite alimentaire", expression: "Acces d'une population a une alimentation suffisante et de qualite.", note: "Notion centrale en geographie de l'alimentation." },
  { label: "Attractivite", expression: "Capacite d'un territoire a attirer activites, habitants ou visiteurs.", note: "Tres utile dans beaucoup de chapitres." }
);

window.subjectConfigs.geographie.toolbox.methods.push(
  { label: "Localiser", expression: "Toujours nommer, situer et relier l'exemple au sujet.", note: "Reflexe essentiel en geographie." },
  { label: "Comparer des territoires", expression: "Montrer points communs, differences et facteurs explicatifs.", note: "Tres utile pour villes, agricultures ou interfaces." }
);

window.subjectConfigs.geographie.toolbox.actors.push(
  { label: "Collectivites", expression: "Acteurs publics de l'amenagement local et regional.", note: "A ne pas oublier dans les sujets francais." },
  { label: "Touristes", expression: "Acteurs de transformation des territoires touristiques.", note: "Utile dans les sujets de valorisation." }
);

window.subjectConfigs.ses.toolbox.markers.push(
  { label: "Innovation", expression: "Transformation des produits, procedes ou organisations", note: "Notion economique fondamentale." },
  { label: "Redistribution", expression: "Mecanisme de correction des inegalites par l'action publique", note: "Repere essentiel pour la justice sociale." },
  { label: "Opinion publique", expression: "Ensemble des jugements exprimes dans une societe", note: "Repere utile pour l'engagement politique." }
);

window.subjectConfigs.ses.toolbox.notions.push(
  { label: "Competitivite", expression: "Capacite a faire face a la concurrence.", note: "A connaitre en economie." },
  { label: "Externalite", expression: "Effet d'une action economique sur des agents non directement impliques.", note: "Tres utile pour l'action publique." },
  { label: "Socialisation primaire", expression: "Socialisation de l'enfance, surtout dans la famille et a l'ecole.", note: "Definition a connaitre mot pour mot." }
);

window.subjectConfigs.ses.toolbox.methods.push(
  { label: "Raisonner en SES", expression: "Definition, mecanisme, exemple, nuance.", note: "Structure de copie la plus efficace." },
  { label: "Lire un document", expression: "Identifier la source, decrire la tendance, puis l'expliquer.", note: "Ne jamais paraphraser seulement." }
);

window.subjectConfigs.ses.toolbox.actors.push(
  { label: "Keynes", expression: "Economiste souvent mobilise sur la demande et l'intervention publique.", note: "Repere utile selon les sujets." },
  { label: "Menages", expression: "Acteurs centraux de la consommation, de l'epargne et du travail.", note: "A penser dans de nombreux raisonnements." }
);

addChapter("histoire", {
  id: "hist-chine-monde",
  title: "La Chine et le monde depuis 1949",
  summary: "Il faut comprendre l'affirmation progressive de la Chine comme puissance majeure du monde contemporain.",
  mustKnow: [
    "Connaitre les grandes phases de l'histoire de la Chine depuis 1949.",
    "Comprendre les dimensions de sa puissance actuelle.",
    "Montrer les limites et tensions de cette puissance."
  ],
  memoryLines: [
    "La Chine s'affirme progressivement comme une puissance majeure depuis la seconde moitie du XXe siecle.",
    "Sa puissance repose sur l'economie, la demographie, l'Etat et une insertion internationale croissante."
  ],
  vocabulary: [
    { word: "Emergence", definition: "Montee en puissance rapide d'un Etat dans l'economie et les relations internationales.", use: "Oui, terme tres utile sur la Chine." },
    { word: "Puissance", definition: "Capacite d'un acteur a influencer les autres et l'organisation du monde.", use: "Oui, notion centrale." }
  ],
  properties: [
    { kind: "Point cle", title: "Puissance en construction", text: "La Chine combine essor economique, affirmation diplomatique et ambitions strategiques." }
  ],
  formulas: [
    { label: "Reperes", expression: "1949 ; 1978 ; XXIe siecle", note: "Revolution communiste, ouverture economique, affirmation mondiale." }
  ],
  methods: [
    { title: "Traiter une puissance emergente", text: "Toujours montrer les facteurs de puissance, les manifestations de cette puissance et ses limites." }
  ],
  example: {
    title: "Exemple explique",
    text: "L'ouverture economique engagee a la fin des annees 1970 modifie profondement la place de la Chine dans le monde.",
    steps: [
      "La Chine attire investissements et productions.",
      "Elle s'integre fortement au commerce mondial.",
      "Elle devient progressivement une puissance d'envergure mondiale."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que la Chine est devenue une puissance mondiale.",
      answer: [
        "Presenter les grandes etapes de son affirmation.",
        "Montrer les dimensions economiques, politiques et strategiques de sa puissance.",
        "Nuancer avec les limites et tensions."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu traites une puissance, pense economie, Etat, strategie et limites." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "La Chine s'est progressivement imposee comme une puissance majeure, meme si cette affirmation s'accompagne encore de limites et de tensions." }
  ]
});

addChapter("geographie", {
  id: "geo-numerique",
  title: "Numerique, information et territoires",
  summary: "Il faut comprendre comment les reseaux numeriques reconfigurent les territoires et les rapports de puissance.",
  mustKnow: [
    "Definir reseau numerique et connectivite.",
    "Montrer les effets spatiaux de la circulation de l'information.",
    "Comprendre les inegalites d'acces au numerique."
  ],
  memoryLines: [
    "Le numerique transforme l'organisation des territoires et des flux.",
    "L'acces aux reseaux reste inegal selon les espaces et les societes."
  ],
  vocabulary: [
    { word: "Connectivite", definition: "Capacite d'un territoire a etre relie a des reseaux de communication et d'information.", use: "Oui, notion utile pour les sujets sur le numerique." },
    { word: "Fracture numerique", definition: "Inegalite d'acces aux outils et services numeriques.", use: "Oui, terme important pour les contrastes." }
  ],
  properties: [
    { kind: "Point cle", title: "Réseaux et inegalites", text: "Les reseaux numeriques accelerent les echanges mais ne profitent pas uniformement a tous les territoires." }
  ],
  formulas: [
    { label: "Exemples", expression: "Cables sous-marins ; data centers ; metropoles connectees", note: "Exemples concrets a citer." }
  ],
  methods: [
    { title: "Analyser un reseau numerique", text: "Montrer les infrastructures, les acteurs, les flux et les inegalites d'acces." }
  ],
  example: {
    title: "Exemple explique",
    text: "Les cables sous-marins assurent une grande partie des echanges mondiaux de donnees.",
    steps: [
      "Ils relient les grands continents.",
      "Ils rendent possibles des flux massifs d'information.",
      "Ils montrent aussi la concentration des infrastructures dans certains espaces."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que le numerique transforme les territoires.",
      answer: [
        "Definir les reseaux numeriques.",
        "Montrer leurs effets sur les flux et les activites.",
        "Expliquer les inegalites de connectivite."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Dans un sujet sur le numerique, pense infrastructures, flux, acteurs et contrastes." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Le numerique transforme les territoires en accelerant les flux d'information, tout en revelant de fortes inegalites de connectivite." }
  ]
});

addChapter("ses", {
  id: "ses-financement",
  title: "Monnaie, financement et systeme financier",
  summary: "Il faut comprendre les fonctions de la monnaie, les modes de financement et le role du systeme financier dans l'economie.",
  mustKnow: [
    "Definir monnaie et systeme financier.",
    "Connaitre les fonctions de la monnaie.",
    "Comprendre le financement direct et indirect."
  ],
  memoryLines: [
    "La monnaie remplit plusieurs fonctions dans l'economie.",
    "Les agents economiques peuvent se financer de facon directe ou indirecte."
  ],
  vocabulary: [
    { word: "Monnaie", definition: "Instrument de paiement generalement accepte qui sert aussi d'unite de compte et de reserve de valeur.", use: "Oui, definition fondamentale." },
    { word: "Financement indirect", definition: "Financement qui passe par un intermediaire financier, comme une banque.", use: "Oui, notion centrale du chapitre." }
  ],
  properties: [
    { kind: "Mecanisme", title: "Fonctions de la monnaie", text: "La monnaie sert a payer, a mesurer les valeurs et a conserver du pouvoir d'achat dans le temps." }
  ],
  formulas: [
    { label: "Notions", expression: "Banques ; epargne ; credit ; marche financier", note: "Vocabulaire de base a maitriser." }
  ],
  methods: [
    { title: "Expliquer un financement", text: "Toujours montrer qui se finance, par quel canal et avec quels effets." }
  ],
  example: {
    title: "Exemple explique",
    text: "Une entreprise peut financer un investissement par un emprunt bancaire.",
    steps: [
      "Elle a besoin de capitaux pour investir.",
      "La banque accorde un credit.",
      "Il s'agit alors d'un financement indirect."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez les differents modes de financement de l'economie.",
      answer: [
        "Definir le financement.",
        "Distinguer financement direct et indirect.",
        "Donner des exemples et expliquer leurs roles."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Pense toujours fonctions de la monnaie, types de financement et acteurs financiers." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Le financement de l'economie peut passer directement par les marches ou indirectement par les banques et autres intermediaires financiers." }
  ]
});

addMockExams("ses", [
  {
    tag: "RAEP",
    title: "Comment la monnaie facilite-t-elle les echanges et le financement ?",
    scenario: "Il faut montrer ses fonctions economiques et son role dans les circuits de financement.",
    goal: "Construire une reponse claire sur monnaie et financement.",
    steps: [
      "Definir la monnaie.",
      "Presenter ses fonctions principales.",
      "Expliquer ensuite les formes de financement."
    ],
    expected: "Le correcteur attend definitions precises et mecanismes clairs.",
    writing: "La monnaie facilite les echanges car elle remplit plusieurs fonctions, tandis que le systeme financier organise la circulation des capitaux entre agents."
  }
]);

addQuizData("ses", "quizQuestions", [
  { chapter: "SES", prompt: "Que signifie financement indirect ?", choices: ["Financement passant par un intermediaire financier comme une banque.", "Financement realise sans aucun acteur.", "Financement reserve a l'Etat uniquement."], correctIndex: 0, explanation: "Le financement indirect passe par des institutions financieres." },
  { chapter: "SES", prompt: "Quelle est une fonction de la monnaie ?", choices: ["Servir d'intermediaire des echanges.", "Supprimer toute inegalite sociale.", "Remplacer les entreprises."], correctIndex: 0, explanation: "La monnaie sert notamment d'intermediaire des echanges." }
]);

addChapter("histoire", {
  id: "hist-proche-orient",
  title: "Le Proche et le Moyen-Orient, un foyer de conflits",
  summary: "Il faut comprendre pourquoi cette region est un espace majeur de tensions geopolitiques et strategiques.",
  mustKnow: [
    "Situer les principaux acteurs de la region.",
    "Comprendre le role des frontieres, des religions et des ressources.",
    "Montrer la diversite des conflits et des interventions exterieures."
  ],
  memoryLines: [
    "Le Proche et le Moyen-Orient constituent un espace de tensions durables.",
    "Les conflits y combinent enjeux territoriaux, religieux, politiques et strategiques."
  ],
  vocabulary: [
    { word: "Geopolitique", definition: "Etude des rivalites de pouvoir sur des territoires.", use: "Oui, mot central du chapitre." },
    { word: "Intervention exterieure", definition: "Action d'une puissance ou d'un acteur etranger dans un conflit regional.", use: "Oui, utile pour les analyses du Proche-Orient." }
  ],
  properties: [
    { kind: "Point cle", title: "Region strategique", text: "La region concentre des ressources, des routes et des enjeux de puissance majeurs." }
  ],
  formulas: [
    { label: "Reperes", expression: "Creation d'Israel ; guerres ; enjeux petroliers ; interventions internationales", note: "Reperes generaux a replacer dans les copies." }
  ],
  methods: [
    { title: "Analyser un foyer de conflits", text: "Toujours articuler acteurs, causes, echelles et consequences." }
  ],
  example: {
    title: "Exemple explique",
    text: "Les conflits du Proche-Orient melangent souvent des enjeux locaux, regionaux et internationaux.",
    steps: [
      "Des acteurs etatiques et non etatiques s'y affrontent.",
      "Les ressources et les territoires jouent un role important.",
      "Les grandes puissances peuvent aussi intervenir."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que le Proche et le Moyen-Orient sont un foyer majeur de conflits.",
      answer: [
        "Definir la notion de foyer de conflits.",
        "Presenter plusieurs causes des tensions.",
        "Montrer la diversite des acteurs et des echelles."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu traites un espace conflictuel, pense toujours causes, acteurs, echelles et enjeux strategiques." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Le Proche et le Moyen-Orient constituent un foyer majeur de conflits car s'y croisent rivalites territoriales, enjeux de puissance, ressources strategiques et interventions exterieures." }
  ]
});

addChapter("histoire", {
  id: "hist-france-societe",
  title: "La societe francaise en mutation depuis 1945",
  summary: "Il faut comprendre les grandes evolutions sociales, culturelles et economiques de la France contemporaine.",
  mustKnow: [
    "Connaitre les grandes transformations de la population et des modes de vie.",
    "Comprendre l'impact de la croissance puis des crises.",
    "Montrer les evolutions culturelles et sociales."
  ],
  memoryLines: [
    "La societe francaise connait de profondes transformations apres 1945.",
    "Les modes de vie evoluent avec la croissance, l'urbanisation et les mutations culturelles."
  ],
  vocabulary: [
    { word: "Baby-boom", definition: "Hausse importante des naissances dans l'apres-guerre.", use: "Oui, repere classique de la societe francaise d'apres-guerre." },
    { word: "Societe de consommation", definition: "Societe dans laquelle la consommation de masse tient une place importante.", use: "Oui, utile dans les sujets sur les Trente Glorieuses." }
  ],
  properties: [
    { kind: "Point cle", title: "Mutation des modes de vie", text: "La croissance et l'urbanisation transforment durablement les comportements et les attentes sociales." }
  ],
  formulas: [
    { label: "Reperes", expression: "Trente Glorieuses ; crise des annees 1970 ; transformations culturelles", note: "Repere d'ensemble sur l'evolution de la societe." }
  ],
  methods: [
    { title: "Traiter une mutation sociale", text: "Toujours montrer les causes, les manifestations et les effets sur la societe." }
  ],
  example: {
    title: "Exemple explique",
    text: "La croissance de l'apres-guerre favorise l'essor d'une societe de consommation.",
    steps: [
      "Le niveau de vie augmente.",
      "L'equipement des menages progresse.",
      "Les pratiques culturelles et de loisirs se transforment."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que la societe francaise se transforme depuis 1945.",
      answer: [
        "Presenter le contexte de l'apres-guerre.",
        "Montrer les transformations demographiques et sociales.",
        "Expliquer les mutations culturelles et economiques."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu traites la societe francaise, pense croissance, urbanisation, consommation, culture et crises." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "Depuis 1945, la societe francaise se transforme en profondeur sous l'effet de la croissance, de l'urbanisation, des crises et des mutations culturelles." }
  ]
});

addMockExams("histoire", [
  {
    tag: "Composition",
    title: "Pourquoi le Proche et le Moyen-Orient restent-ils un espace de tensions ?",
    scenario: "Il faut montrer la multiplicite des causes et des acteurs des conflits regionaux.",
    goal: "Construire une reponse geohistorique ample et nuancee.",
    steps: [
      "Definir l'espace et ses enjeux.",
      "Montrer la diversite des causes des conflits.",
      "Expliquer le role des acteurs regionaux et internationaux."
    ],
    expected: "Le correcteur attend une copie structuree et multiscalaire.",
    writing: "Le Proche et le Moyen-Orient restent un espace de tensions durables car s'y combinent enjeux territoriaux, ressources strategiques, rivalites politiques et interventions internationales."
  }
]);

addQuizData("histoire", "quizQuestions", [
  { chapter: "Histoire", prompt: "Que signifie geopolitique ?", choices: ["Etude des rivalites de pouvoir sur des territoires.", "Simple etude des paysages ruraux.", "Methode de calcul economique."], correctIndex: 0, explanation: "La geopolitique aide a comprendre les foyers de conflits." },
  { chapter: "Histoire", prompt: "Que signifie societe de consommation ?", choices: ["Societe dans laquelle la consommation de masse occupe une place importante.", "Societe sans industrie.", "Societe organisee uniquement autour de l'agriculture."], correctIndex: 0, explanation: "Expression tres utile pour la France des Trente Glorieuses." }
]);

addChapter("geographie", {
  id: "geo-developpement",
  title: "Developpement, inegalites et mondialisation",
  summary: "Il faut comprendre que le developpement reste inegal et qu'il se combine avec la mondialisation et les politiques d'amenagement.",
  mustKnow: [
    "Definir developpement et inegalites territoriales.",
    "Montrer les contrastes entre territoires integres et marginalises.",
    "Comprendre le role des acteurs du developpement."
  ],
  memoryLines: [
    "Le developpement est inegalement reparti dans le monde.",
    "La mondialisation peut renforcer certaines inegalites territoriales tout en creant des opportunites."
  ],
  vocabulary: [
    { word: "Developpement", definition: "Processus d'amelioration durable des conditions de vie, de production et d'organisation d'une societe.", use: "Oui, notion fondamentale." },
    { word: "Inegalite territoriale", definition: "Difference de niveau d'equipement, de richesse ou d'acces aux services entre espaces.", use: "Oui, utile dans beaucoup de sujets." }
  ],
  properties: [
    { kind: "Point cle", title: "Developpement inegal", text: "Les territoires ne disposent pas tous des memes ressources, des memes infrastructures ni des memes niveaux d'integration." }
  ],
  formulas: [
    { label: "Exemples", expression: "Metropoles mondiales ; marges ; territoires enclaves", note: "Exemples a comparer selon le sujet." }
  ],
  methods: [
    { title: "Comparer des niveaux de developpement", text: "Toujours articuler acteurs, ressources, acces aux services et integration aux reseaux." }
  ],
  example: {
    title: "Exemple explique",
    text: "Un territoire bien connecte et bien equipe n'offre pas les memes opportunites qu'un territoire enclavé.",
    steps: [
      "Les infrastructures facilitent les echanges et les activites.",
      "L'acces aux services joue sur la qualite de vie.",
      "Les contrastes territoriaux peuvent se renforcer."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que la mondialisation s'accompagne d'inegalites territoriales.",
      answer: [
        "Definir mondialisation et developpement.",
        "Montrer la concentration des flux et des richesses dans certains espaces.",
        "Expliquer les situations de marginalisation ou d'enclavement."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Pense toujours centres, marges, acces aux services et integration aux reseaux." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "La mondialisation ne supprime pas les inegalites territoriales: elle tend souvent a renforcer les contrastes entre espaces tres integres et espaces plus marginalises." }
  ]
});

addChapter("geographie", {
  id: "geo-amenagement",
  title: "Amenagement des territoires et action publique",
  summary: "Il faut comprendre comment les acteurs publics et prives amenagent les territoires pour renforcer attractivite, cohesion et durabilite.",
  mustKnow: [
    "Definir amenagement du territoire.",
    "Connaitre les principaux acteurs de l'amenagement.",
    "Comprendre les objectifs et les limites des politiques territoriales."
  ],
  memoryLines: [
    "L'amenagement du territoire vise a organiser l'espace selon des objectifs economiques, sociaux et environnementaux.",
    "Les politiques d'amenagement cherchent a renforcer l'attractivite tout en limitant certains desequilibres."
  ],
  vocabulary: [
    { word: "Amenagement du territoire", definition: "Ensemble des actions visant a organiser et valoriser un espace.", use: "Oui, notion centrale pour les sujets sur la France." },
    { word: "Cohesion territoriale", definition: "Recherche d'un meilleur equilibre entre les territoires.", use: "Oui, utile pour expliquer les objectifs publics." }
  ],
  properties: [
    { kind: "Point cle", title: "Multiplicite des acteurs", text: "L'Etat, les collectivites, les entreprises et les habitants peuvent intervenir dans les amenagements." }
  ],
  formulas: [
    { label: "Exemples", expression: "Transports ; quartiers en reconversion ; zones touristiques ; poles de competitivite", note: "Exemples faciles a mobiliser." }
  ],
  methods: [
    { title: "Etudier un amenagement", text: "Toujours montrer acteurs, objectifs, moyens, effets et limites." }
  ],
  example: {
    title: "Exemple explique",
    text: "Un projet de transport peut chercher a relier des espaces et a renforcer l'attractivite d'un territoire.",
    steps: [
      "Il mobilise plusieurs acteurs publics et prives.",
      "Il vise a ameliorer l'accessibilite.",
      "Il peut aussi susciter des debats sur ses couts ou ses effets."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez le role de l'amenagement dans l'organisation des territoires.",
      answer: [
        "Definir l'amenagement du territoire.",
        "Presenter quelques acteurs et objectifs.",
        "Expliquer les effets et les limites de ces politiques."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu vois amenagement, pense acteurs, objectifs, infrastructures et limites." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "L'amenagement du territoire cherche a organiser l'espace pour renforcer l'attractivite, la cohesion et parfois la durabilite des territoires." }
  ]
});

addMockExams("geographie", [
  {
    tag: "Composition",
    title: "Comment les politiques d'amenagement transforment-elles les territoires ?",
    scenario: "Il faut montrer le role des acteurs publics et les effets des projets d'amenagement.",
    goal: "Construire une copie claire sur l'action publique territoriale.",
    steps: [
      "Definir l'amenagement du territoire.",
      "Presenter acteurs et objectifs.",
      "Montrer les effets et les limites."
    ],
    expected: "Le correcteur attend une copie appuyee sur des exemples precis.",
    writing: "Les politiques d'amenagement transforment les territoires en cherchant a renforcer l'accessibilite, l'attractivite et la cohesion, meme si leurs effets restent inegaux."
  }
]);

addQuizData("geographie", "quizQuestions", [
  { chapter: "Geographie", prompt: "Que signifie amenagement du territoire ?", choices: ["Ensemble des actions visant a organiser et valoriser un espace.", "Simple dessin d'une carte.", "Suppression de toute infrastructure."], correctIndex: 0, explanation: "L'amenagement du territoire mobilise plusieurs acteurs et objectifs." },
  { chapter: "Geographie", prompt: "Que signifie cohesion territoriale ?", choices: ["Recherche d'un meilleur equilibre entre les territoires.", "Fermeture de toutes les frontieres.", "Disparition des villes."], correctIndex: 0, explanation: "La cohesion territoriale est une notion cle de l'action publique." }
]);

addChapter("ses", {
  id: "ses-travail",
  title: "Travail, organisation du travail et qualification",
  summary: "Il faut comprendre comment le travail evolue, comment il est organise et comment les qualifications se transforment.",
  mustKnow: [
    "Definir travail et qualification.",
    "Comprendre les transformations de l'organisation du travail.",
    "Montrer les effets des evolutions technologiques et economiques."
  ],
  memoryLines: [
    "Le travail ne se reduit pas a l'emploi.",
    "Les formes d'organisation du travail evoluent avec les techniques, les entreprises et les qualifications."
  ],
  vocabulary: [
    { word: "Qualification", definition: "Ensemble des competences reconnues et utiles pour exercer une activite professionnelle.", use: "Oui, notion centrale du chapitre." },
    { word: "Organisation du travail", definition: "Maniere dont les taches et les responsabilites sont reparties et coordonnees dans une activite productive.", use: "Oui, utile dans les sujets sur l'entreprise et l'emploi." }
  ],
  properties: [
    { kind: "Mecanisme", title: "Transformation du travail", text: "Les evolutions techniques et organisationnelles modifient les competences demandees et les conditions de travail." }
  ],
  formulas: [
    { label: "Notions", expression: "Taylorisme ; autonomie ; qualification ; numerisation", note: "Mots frequents dans les sujets sur le travail." }
  ],
  methods: [
    { title: "Expliquer une transformation du travail", text: "Toujours montrer les causes, les effets sur les taches et les effets sur les travailleurs." }
  ],
  example: {
    title: "Exemple explique",
    text: "L'introduction d'outils numeriques peut transformer les taches realisees dans une entreprise.",
    steps: [
      "Certaines taches sont automatisees.",
      "D'autres competences deviennent plus importantes.",
      "Les qualifications demandees peuvent evoluer."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que l'organisation du travail evolue.",
      answer: [
        "Definir l'organisation du travail.",
        "Presenter plusieurs formes d'organisation.",
        "Expliquer l'effet des transformations techniques et economiques."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu traites le travail, pense taches, qualification, techniques et conditions de travail." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "L'organisation du travail evolue sous l'effet des innovations, de la concurrence et des nouvelles competences attendues." }
  ]
});

addChapter("ses", {
  id: "ses-integration",
  title: "Liens sociaux, integration et cohesion",
  summary: "Il faut comprendre ce qui renforce ou fragilise les liens sociaux dans les societes contemporaines.",
  mustKnow: [
    "Definir integration sociale et lien social.",
    "Connaitre plusieurs formes de lien social.",
    "Comprendre les facteurs de fragilisation ou de renforcement de la cohesion."
  ],
  memoryLines: [
    "Le lien social repose sur des appartenances, des relations et des normes partagees.",
    "L'integration sociale peut etre fragilisee par l'isolement, la precarite ou certaines ruptures."
  ],
  vocabulary: [
    { word: "Lien social", definition: "Ensemble des relations et appartenances qui relient les individus entre eux et a la societe.", use: "Oui, notion fondamentale." },
    { word: "Integration sociale", definition: "Processus par lequel un individu trouve sa place dans la societe et partage ses normes et valeurs.", use: "Oui, notion centrale du chapitre." }
  ],
  properties: [
    { kind: "Mecanisme", title: "Pluralite des liens", text: "Les individus sont relies par des liens familiaux, professionnels, amicaux, associatifs ou civiques." }
  ],
  formulas: [
    { label: "Auteurs", expression: "Durkheim ; integration ; cohesion sociale", note: "Repere utile pour structurer les copies." }
  ],
  methods: [
    { title: "Expliquer une fragilisation du lien social", text: "Toujours montrer quels liens sont atteints et par quels mecanismes." }
  ],
  example: {
    title: "Exemple explique",
    text: "Le chomage de longue duree peut fragiliser l'integration sociale.",
    steps: [
      "Il peut reduire les ressources economiques.",
      "Il peut affaiblir les liens professionnels.",
      "Il peut conduire a un isolement plus important."
    ]
  },
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrez que les liens sociaux peuvent etre fragilises.",
      answer: [
        "Definir le lien social.",
        "Presenter plusieurs formes de lien.",
        "Expliquer quelques facteurs de fragilisation."
      ]
    }
  ],
  drills: [
    { title: "Reflexe", text: "Quand tu traites le lien social, pense toujours formes du lien et facteurs de fragilisation." }
  ],
  writingPhrases: [
    { title: "Phrase utile", context: "A reutiliser", text: "L'integration sociale depend de plusieurs formes de liens, qui peuvent etre renforces ou fragilises selon les situations individuelles et collectives." }
  ]
});

addMockExams("ses", [
  {
    tag: "RAEP",
    title: "Comment les transformations du travail modifient-elles l'emploi et les qualifications ?",
    scenario: "Il faut montrer les effets des techniques, de l'organisation et de la concurrence sur le travail.",
    goal: "Construire une reponse solide sur l'evolution du travail.",
    steps: [
      "Definir travail et qualification.",
      "Presenter des transformations de l'organisation du travail.",
      "Expliquer leurs effets sur l'emploi et les competences."
    ],
    expected: "Le correcteur attend un raisonnement clair appuye sur les notions du cours.",
    writing: "Les transformations du travail modifient les taches, les qualifications attendues et parfois les conditions d'emploi des individus."
  }
]);

addQuizData("ses", "quizQuestions", [
  { chapter: "SES", prompt: "Que signifie qualification ?", choices: ["Ensemble des competences reconnues et utiles pour exercer une activite professionnelle.", "Simple salaire mensuel.", "Absence de formation."], correctIndex: 0, explanation: "La qualification est une notion importante pour comprendre le travail." },
  { chapter: "SES", prompt: "Que signifie integration sociale ?", choices: ["Processus par lequel un individu trouve sa place dans la societe et partage ses normes.", "Simple participation a une election.", "Accumulation de capital financier."], correctIndex: 0, explanation: "Notion classique de sociologie." }
]);
