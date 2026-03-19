const chapters = [
  {
    id: "suites",
    title: "Suites numeriques",
    summary:
      "Chapitre incontournable du bac. Il faut savoir calculer un terme, etudier le sens de variation, montrer qu'une suite est bornee, utiliser une recurrence et determiner une limite.",
    mustKnow: [
      "Distinguer une suite explicite d'une suite definie par recurrence.",
      "Savoir calculer $u_n$, $u_{n+1}$, puis comparer $u_{n+1}$ et $u_n$.",
      "Connaitre parfaitement les suites arithmetiques et geometriques.",
      "Savoir utiliser un raisonnement par recurrence avec une redaction correcte.",
      "Maitriser les criteres de convergence des suites monotones."
    ],
    memoryLines: [
      "Une suite $(u_n)$ est croissante si, pour tout entier naturel $n$, on a $u_{n+1} \\geqslant u_n$.",
      "Si une suite est croissante et majoree, alors elle converge.",
      "Si une suite est decroissante et minoree, alors elle converge.",
      "Pour une suite geometrique de raison $q$, on a $u_n = u_0 q^n$.",
      "Si $|q|<1$, alors $q^n \\to 0$ lorsque $n \\to +\\infty$."
    ],
    vocabulary: [
      {
        word: "Croissante",
        definition:
          "Une suite est croissante lorsque, pour tout entier naturel $n$, on a $u_{n+1}\\geqslant u_n$.",
        use: "A utiliser absolument quand la question demande le sens de variation."
      },
      {
        word: "Majoree",
        definition:
          "Une suite est majoree s'il existe un reel $M$ tel que, pour tout entier naturel $n$, on ait $u_n\\leqslant M$.",
        use: "A utiliser quand tu veux conclure a une convergence avec le critere monotone + borne."
      }
    ],
    properties: [
      {
        kind: "Propriete",
        title: "Criteres de convergence",
        text:
          "Toute suite monotone et bornee est convergente."
      },
      {
        kind: "Propriete",
        title: "Suites geometriques",
        text:
          "Si $(u_n)$ est geometrique de raison $q$, alors $u_{n+1}=qu_n$ et $u_n=u_0q^n$."
      },
      {
        kind: "Methode",
        title: "Etudier le sens de variation",
        text:
          "On etudie en general le signe de $u_{n+1}-u_n$, ou parfois celui de $\\dfrac{u_{n+1}}{u_n}$ si tous les termes sont strictement positifs."
      }
    ],
    formulas: [
      {
        label: "Suite arithmetique",
        expression: "$$u_n=u_0+nr$$",
        note: "La raison $r$ est constante."
      },
      {
        label: "Somme arithmetique",
        expression: "$$u_0+u_1+\\cdots+u_n=\\frac{(n+1)(u_0+u_n)}{2}$$",
        note: "Formule a connaitre pour les exercices de cumul."
      },
      {
        label: "Suite geometrique",
        expression: "$$u_n=u_0q^n$$",
        note: "Tres classique au bac."
      },
      {
        label: "Somme geometrique",
        expression: "$$1+q+q^2+\\cdots+q^n=\\frac{1-q^{n+1}}{1-q} \\quad (q\\neq 1)$$",
        note: "Souvent utile dans les exercices de modelisation."
      }
    ],
    methods: [
      {
        title: "Montrer qu'une suite est croissante",
        text:
          "On calcule $u_{n+1}-u_n$. Si cette difference est positive pour tout $n$, alors la suite est croissante."
      },
      {
        title: "Montrer qu'une suite est minoree ou majoree",
        text:
          "On utilise souvent une recurrence. Il faut faire apparaitre l'initialisation, l'heredite et la conclusion."
      },
      {
        title: "Determiner une limite",
        text:
          "On reconnait une suite usuelle, ou on utilise qu'une suite monotone et bornee converge."
      }
    ],
    example: {
      title: "Exemple redige",
      text: "On considere la suite definie par $$u_n=2+3\\times 0{,}5^n.$$",
      steps: [
        "Comme $0<0{,}5<1$, on a $$0{,}5^n\\to 0.$$",
        "Donc $$3\\times 0{,}5^n\\to 0.$$",
        "Par somme, on obtient $$u_n\\to 2.$$",
        "De plus, $$u_{n+1}-u_n=3\\times 0{,}5^{n+1}-3\\times 0{,}5^n=-1{,}5\\times 0{,}5^n<0,$$ donc la suite est decroissante."
      ]
    },
    examQuestions: [
      {
        title: "Question type bac",
        statement: "Montrer par recurrence que, pour tout entier naturel $n$, on a $u_n\\geqslant 1$.",
        answer: [
          "On initialise en verifiant que $u_0\\geqslant 1$.",
          "On suppose qu'il existe $n\\in\\mathbb{N}$ tel que $u_n\\geqslant 1$.",
          "A l'aide de la relation de recurrence, on montre alors que $u_{n+1}\\geqslant 1$.",
          "On conclut: par recurrence, pour tout entier naturel $n$, on a $u_n\\geqslant 1$."
        ]
      },
      {
        title: "Question type bac",
        statement: "Etudier le sens de variation d'une suite.",
        answer: [
          "On calcule $u_{n+1}-u_n$.",
          "On etudie le signe de cette expression pour tout entier $n$.",
          "On conclut explicitement: la suite est croissante, decroissante, ou non monotone."
        ]
      },
      {
        title: "Question type bac",
        statement: "Determiner la limite d'une suite de la forme $a+bq^n$.",
        answer: [
          "On rappelle que si $|q|<1$, alors $q^n\\to 0$.",
          "Donc $bq^n\\to 0$.",
          "On conclut par somme: $$u_n\\to a.$$"
        ]
      }
    ],
    drills: [
      {
        title: "Reflexe 1",
        text:
          "Quand on te demande d'etudier le sens de variation d'une suite, ton premier reflexe doit etre de calculer $u_{n+1}-u_n$."
      },
      {
        title: "Reflexe 2",
        text:
          "Quand on te demande de montrer qu'une suite est minoree ou majoree, pense d'abord a une recurrence."
      },
      {
        title: "Reflexe 3",
        text:
          "Quand tu vois une suite de la forme $a+bq^n$, pense immediatement a la limite de $q^n$."
      }
    ],
    writingPhrases: [
      {
        title: "Recurrence",
        context: "A reutiliser",
        text:
          "Initialisation: la propriete est verifiee au rang $0$. Heredite: supposons qu'il existe un entier naturel $n$ tel que la propriete soit vraie au rang $n$. Montrons qu'elle est encore vraie au rang $n+1$. Conclusion: par recurrence, la propriete est vraie pour tout entier naturel $n$."
      },
      {
        title: "Variation d'une suite",
        context: "A reutiliser",
        text:
          "Pour tout entier naturel $n$, on calcule $u_{n+1}-u_n$. Cette difference etant positive, on en deduit que la suite $(u_n)$ est croissante."
      }
    ]
  },
  {
    id: "limites",
    title: "Limites et asymptotes",
    summary:
      "Il faut savoir calculer une limite, reconnaitre une forme indeterminee, comparer les termes dominants et rediger correctement l'existence d'une asymptote.",
    mustKnow: [
      "Connaitre les limites usuelles en $+\\infty$, $-\\infty$ et au voisinage d'un reel.",
      "Savoir lever une forme indeterminee.",
      "Savoir comparer les degres dans une fraction rationnelle.",
      "Savoir rediger une conclusion sur une asymptote verticale, horizontale ou oblique."
    ],
    memoryLines: [
      "Si $\\lim\\limits_{x\\to a} f(x)=\\pm\\infty$, alors la droite d'equation $x=a$ est une asymptote verticale.",
      "Si $\\lim\\limits_{x\\to +\\infty} f(x)=\\ell$, alors la droite d'equation $y=\\ell$ est une asymptote horizontale en $+\\infty$.",
      "La forme $\\infty-\\infty$ est une forme indeterminee.",
      "Dans une fraction rationnelle, on factorise par la plus grande puissance de $x$."
    ],
    vocabulary: [
      {
        word: "Asymptote verticale",
        definition:
          "La droite d'equation $x=a$ est une asymptote verticale lorsque $f(x)$ tend vers $+\\infty$ ou $-\\infty$ quand $x$ tend vers $a$.",
        use: "Oui, il faut employer ce mot dans la conclusion."
      },
      {
        word: "Forme indeterminee",
        definition:
          "Une forme indeterminee est une expression pour laquelle on ne peut pas conclure directement sur la limite, comme $\\infty-\\infty$ ou $\\dfrac{\\infty}{\\infty}$.",
        use: "Oui, a utiliser pour expliquer pourquoi tu transformes l'expression."
      }
    ],
    properties: [
      {
        kind: "Propriete",
        title: "Operations sur les limites",
        text:
          "On peut calculer la somme, le produit ou le quotient de deux limites connues, sauf dans le cas des formes indeterminees."
      },
      {
        kind: "Methode",
        title: "Asymptote oblique",
        text:
          "On cherche des reels $a$ et $b$ tels que $f(x)-(ax+b)\\to 0$ lorsque $x\\to \\pm\\infty$."
      }
    ],
    formulas: [
      {
        label: "Limite usuelle",
        expression: "$$\\lim_{x\\to +\\infty}\\frac{1}{x}=0$$",
        note: "Tres utile pour les factorisations."
      },
      {
        label: "Croissance comparee",
        expression: "$$\\lim_{x\\to +\\infty}\\frac{\\ln(x)}{x}=0$$",
        note: "Le logarithme croit moins vite qu'une puissance."
      },
      {
        label: "Asymptote horizontale",
        expression: "$$\\lim_{x\\to \\pm\\infty}f(x)=\\ell$$",
        note: "La droite $y=\\ell$ est asymptote horizontale."
      }
    ],
    methods: [
      {
        title: "Lever une forme indeterminee",
        text:
          "On peut factoriser, mettre au meme denominateur ou developper, selon la forme de l'expression."
      },
      {
        title: "Rediger l'existence d'une asymptote",
        text:
          "On calcule la limite puis on conclut avec une phrase complete: la droite d'equation ... est une asymptote ... a la courbe."
      }
    ],
    example: {
      title: "Exemple redige",
      text: "Etudier la limite en $+\\infty$ de $$f(x)=\\frac{2x+1}{x-3}.$$",
      steps: [
        "On divise le numerateur et le denominateur par $x$ : $$f(x)=\\frac{2+\\frac{1}{x}}{1-\\frac{3}{x}}.$$",
        "Lorsque $x\\to +\\infty$, on a $\\dfrac{1}{x}\\to 0$ et $\\dfrac{3}{x}\\to 0$.",
        "Ainsi, $$\\lim_{x\\to +\\infty}f(x)=\\frac{2+0}{1-0}=2.$$",
        "Donc la droite d'equation $y=2$ est une asymptote horizontale a la courbe en $+\\infty$."
      ]
    },
    examQuestions: [
      {
        title: "Question type bac",
        statement: "Montrer qu'une courbe admet une asymptote verticale.",
        answer: [
          "On repere la valeur interdite $a$.",
          "On calcule les limites de $f(x)$ lorsque $x\\to a^-$ et/ou $x\\to a^+$.",
          "Si l'une des limites vaut $+\\infty$ ou $-\\infty$, on conclut que $x=a$ est une asymptote verticale."
        ]
      },
      {
        title: "Question type bac",
        statement: "Etudier la limite d'une fraction rationnelle a l'infini.",
        answer: [
          "On compare les degres du numerateur et du denominateur.",
          "On factorise par la plus grande puissance de $x$.",
          "On calcule la limite et on precise l'eventuelle asymptote."
        ]
      },
      {
        title: "Question type bac",
        statement: "Lever une forme indeterminee $\\infty-\\infty$.",
        answer: [
          "On transforme l'expression pour faire apparaitre un produit ou une fraction plus simple.",
          "On etudie ensuite la limite de la nouvelle expression."
        ]
      }
    ],
    drills: [
      {
        title: "Reflexe 1",
        text:
          "Quand tu vois une fraction rationnelle a l'infini, compare d'abord les degres."
      },
      {
        title: "Reflexe 2",
        text:
          "Quand une limite donne $\\pm\\infty$ en un reel interdit, pense a l'asymptote verticale."
      },
      {
        title: "Reflexe 3",
        text:
          "Devant une forme indeterminee, ne conclus jamais trop vite: transforme d'abord l'expression."
      }
    ],
    writingPhrases: [
      {
        title: "Asymptote verticale",
        context: "A reutiliser",
        text:
          "Comme $\\lim\\limits_{x\\to a} f(x)=\\pm\\infty$, la droite d'equation $x=a$ est une asymptote verticale a la courbe representative de la fonction $f$."
      },
      {
        title: "Asymptote horizontale",
        context: "A reutiliser",
        text:
          "Comme $\\lim\\limits_{x\\to +\\infty} f(x)=\\ell$, la droite d'equation $y=\\ell$ est une asymptote horizontale a la courbe representative de la fonction $f$ en $+\\infty$."
      }
    ]
  },
  {
    id: "derivees",
    title: "Derivation et variations",
    summary:
      "Ce chapitre sert partout. Il faut savoir calculer une derivee, etudier son signe, remplir un tableau de variations et rediger l'existence d'un extremum ou d'une unique solution.",
    mustKnow: [
      "Connaitre les derivees usuelles.",
      "Savoir deriver une somme, un produit, un quotient et une composee simple.",
      "Toujours preciser l'ensemble de definition.",
      "Savoir passer du signe de $f'$ aux variations de $f$."
    ],
    memoryLines: [
      "Si $f'(x)>0$ sur un intervalle $I$, alors $f$ est strictement croissante sur $I$.",
      "Si $f'(x)<0$ sur un intervalle $I$, alors $f$ est strictement decroissante sur $I$.",
      "La derivee d'un produit est $(uv)'=u'v+uv'.$",
      "Un extremum local apparait souvent en un point ou la derivee s'annule et change de signe."
    ],
    vocabulary: [
      {
        word: "Strictement croissante",
        definition:
          "Une fonction est strictement croissante sur un intervalle lorsque, si $a<b$, alors $f(a)<f(b)$.",
        use: "Oui, ce mot est essentiel pour justifier l'unicite d'une solution."
      },
      {
        word: "Extremum",
        definition:
          "Un extremum est un maximum ou un minimum atteint par une fonction sur un intervalle ou en un point.",
        use: "Oui, a utiliser dans la conclusion quand tu identifies un maximum ou un minimum."
      }
    ],
    properties: [
      {
        kind: "Theoreme",
        title: "Lien entre derivee et variations",
        text:
          "Le signe de la derivee d'une fonction derivable determine son sens de variation sur un intervalle."
      },
      {
        kind: "Conseil",
        title: "Redaction attendue",
        text:
          "Il faut ecrire: comme $f'(x)$ est positive sur ..., la fonction $f$ est croissante sur ..."
      }
    ],
    formulas: [
      {
        label: "Puissance",
        expression: "$$(x^n)'=nx^{n-1}$$",
        note: "Pour tout entier naturel $n\\geqslant 1$."
      },
      {
        label: "Quotient",
        expression: "$$\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$$",
        note: "A condition que $v\\neq 0$."
      },
      {
        label: "Produit",
        expression: "$$(uv)'=u'v+uv'$$",
        note: "Formule incontournable."
      }
    ],
    methods: [
      {
        title: "Dresser un tableau de variations",
        text:
          "On calcule $f'$, on resout $f'(x)=0$, on etudie le signe de $f'$, puis on conclut sur les variations."
      },
      {
        title: "Montrer qu'une equation admet une unique solution",
        text:
          "On montre que la fonction associee est continue et strictement monotone sur l'intervalle considere."
      }
    ],
    example: {
      title: "Exemple redige",
      text: "Etudier les variations de $$f(x)=x^2-4x+1.$$",
      steps: [
        "La fonction est derivable sur $\\mathbb{R}$ et $$f'(x)=2x-4.$$",
        "On resout $$f'(x)=0 \\iff 2x-4=0 \\iff x=2.$$",
        "Si $x<2$, alors $f'(x)<0$ ; si $x>2$, alors $f'(x)>0$.",
        "Donc $f$ est decroissante sur $]-\\infty,2]$ puis croissante sur $[2,+\\infty[$.",
        "Elle admet un minimum en $x=2$ de valeur $$f(2)=-3.$$"
      ]
    },
    examQuestions: [
      {
        title: "Question type bac",
        statement: "Dresser le tableau de variations d'une fonction.",
        answer: [
          "On precise l'ensemble de definition.",
          "On calcule la derivee et on resout $f'(x)=0$.",
          "On etudie le signe de $f'.$",
          "On remplit le tableau de variations et on calcule les valeurs utiles."
        ]
      },
      {
        title: "Question type bac",
        statement: "Montrer qu'une equation $f(x)=0$ admet une unique solution.",
        answer: [
          "On etudie la fonction $f$ sur l'intervalle.",
          "On montre qu'elle est continue et strictement monotone.",
          "On justifie l'existence d'une solution par un changement de signe si besoin.",
          "On conclut a l'unicite grace a la stricte monotonie."
        ]
      },
      {
        title: "Question type bac",
        statement: "Determiner un extremum.",
        answer: [
          "On cherche les reels qui annulent la derivee.",
          "On etudie le changement de signe de $f'$ autour de ces valeurs.",
          "On conclut avec la nature de l'extremum et sa valeur."
        ]
      }
    ],
    drills: [
      {
        title: "Reflexe 1",
        text:
          "Pour un tableau de variations, commence toujours par l'ensemble de definition."
      },
      {
        title: "Reflexe 2",
        text:
          "Quand tu cherches un extremum, resous d'abord $f'(x)=0$."
      },
      {
        title: "Reflexe 3",
        text:
          "Pour une unicite de solution, pense a la stricte monotonie."
      }
    ],
    writingPhrases: [
      {
        title: "Variations",
        context: "A reutiliser",
        text:
          "Comme $f'(x)>0$ sur l'intervalle $I$, la fonction $f$ est strictement croissante sur $I$."
      },
      {
        title: "Extremum",
        context: "A reutiliser",
        text:
          "La derivee s'annule et change de signe en $a$ ; la fonction admet donc un minimum (ou un maximum) en $a$."
      }
    ]
  },
  {
    id: "convexite",
    title: "Convexite et derivee seconde",
    summary:
      "La convexite decrit la courbure d'une fonction. Il faut savoir utiliser la derivee seconde pour etudier la convexite et reconnaitre un point d'inflexion.",
    mustKnow: [
      "Savoir calculer $f''$.",
      "Savoir relier le signe de $f''$ a la convexite ou a la concavite.",
      "Savoir identifier un point d'inflexion.",
      "Savoir rediger la conclusion avec les bons mots."
    ],
    memoryLines: [
      "Si $f''(x)\\geqslant 0$ sur un intervalle, alors $f$ est convexe sur cet intervalle.",
      "Si $f''(x)\\leqslant 0$ sur un intervalle, alors $f$ est concave sur cet intervalle.",
      "Un point d'inflexion est un point ou la convexite change.",
      "Pour montrer qu'il y a un point d'inflexion en $a$, on montre en general que $f''$ change de signe en $a$."
    ],
    vocabulary: [
      {
        word: "Convexe",
        definition:
          "Une fonction est convexe sur un intervalle si sa courbe est tournee vers le haut sur cet intervalle.",
        use: "Oui, si la question porte sur la courbure ou la derivee seconde."
      },
      {
        word: "Point d'inflexion",
        definition:
          "Un point d'inflexion est un point ou la courbe change de convexite.",
        use: "Oui, il faut employer ce terme dans la conclusion."
      }
    ],
    properties: [
      {
        kind: "Propriete",
        title: "Critere de convexite",
        text:
          "Le signe de la derivee seconde permet de determiner les intervalles de convexite et de concavite."
      },
      {
        kind: "Attention",
        title: "Point d'inflexion",
        text:
          "L'egalite $f''(a)=0$ ne suffit pas. Il faut un changement de signe de $f''$."
      }
    ],
    formulas: [
      {
        label: "Convexite",
        expression: "$$f''(x)\\geqslant 0 \\Rightarrow f \\text{ est convexe}$$",
        note: "Sur l'intervalle etudie."
      },
      {
        label: "Concavite",
        expression: "$$f''(x)\\leqslant 0 \\Rightarrow f \\text{ est concave}$$",
        note: "Sur l'intervalle etudie."
      },
      {
        label: "Point d'inflexion",
        expression: "$$f''(a)=0 \\text{ et } f'' \\text{ change de signe en } a$$",
        note: "Critere classique."
      }
    ],
    methods: [
      {
        title: "Etudier la convexite",
        text:
          "On calcule $f''$, on en etudie le signe, puis on conclut sur les intervalles de convexite et de concavite."
      },
      {
        title: "Donner un point d'inflexion",
        text:
          "On donne ses coordonnees sous la forme $$I(a;f(a)).$$"
      }
    ],
    example: {
      title: "Exemple redige",
      text: "On considere $$f(x)=x^3.$$",
      steps: [
        "On calcule $$f'(x)=3x^2$$ puis $$f''(x)=6x.$$",
        "Si $x<0$, alors $f''(x)<0$ ; si $x>0$, alors $f''(x)>0$.",
        "Donc $f$ est concave sur $]-\\infty,0[$ et convexe sur $]0,+\\infty[$.",
        "Comme $f''$ change de signe en $0$, le point $$I(0;0)$$ est un point d'inflexion."
      ]
    },
    examQuestions: [
      {
        title: "Question type bac",
        statement: "Etudier la convexite d'une fonction.",
        answer: [
          "On calcule la derivee seconde.",
          "On etudie son signe sur l'ensemble de definition.",
          "On conclut sur les intervalles de convexite et de concavite."
        ]
      },
      {
        title: "Question type bac",
        statement: "Determiner les points d'inflexion.",
        answer: [
          "On cherche les points ou $f''$ s'annule.",
          "On verifie ensuite que $f''$ change de signe.",
          "On donne enfin les coordonnees des points correspondants."
        ]
      },
      {
        title: "Question type bac",
        statement: "Justifier graphiquement la convexite.",
        answer: [
          "On explique que la courbe est situee au-dessus ou au-dessous de ses tangentes selon les cas.",
          "On relie cela au signe de la derivee seconde."
        ]
      }
    ],
    drills: [
      {
        title: "Reflexe 1",
        text:
          "Quand la question parle de courbure ou de tangente qui traverse la courbe, pense a la convexite."
      },
      {
        title: "Reflexe 2",
        text:
          "Ne te contente jamais de $f''(a)=0$ pour conclure a un point d'inflexion."
      }
    ],
    writingPhrases: [
      {
        title: "Convexite",
        context: "A reutiliser",
        text:
          "Comme $f''(x)\\geqslant 0$ sur l'intervalle $I$, la fonction $f$ est convexe sur $I$."
      },
      {
        title: "Point d'inflexion",
        context: "A reutiliser",
        text:
          "La derivee seconde change de signe en $a$ ; on en deduit que le point de coordonnees $(a;f(a))$ est un point d'inflexion."
      }
    ]
  },
  {
    id: "expo-log",
    title: "Exponentielle et logarithme",
    summary:
      "Chapitre central du programme. Il faut maitriser les regles de calcul, les derivees, les primitives usuelles et la resolution d'equations et d'inequations.",
    mustKnow: [
      "Connaitre les identities sur l'exponentielle et le logarithme.",
      "Toujours verifier que l'argument d'un logarithme est strictement positif.",
      "Savoir reconnaitre les formes $u'e^u$ et $\\dfrac{u'}{u}$.",
      "Savoir utiliser la croissance de $e^x$ et de $\\ln(x)$ pour resoudre des inequations."
    ],
    memoryLines: [
      "Pour tout reel $x$, on a $\\ln(e^x)=x$.",
      "Pour tout reel strictement positif $x$, on a $e^{\\ln(x)}=x$.",
      "La fonction exponentielle est strictement croissante sur $\\mathbb{R}$.",
      "La fonction logarithme est strictement croissante sur $]0,+\\infty[$.",
      "Si $e^a=e^b$, alors $a=b$."
    ],
    vocabulary: [
      {
        word: "Injective",
        definition:
          "Une fonction est injective si deux images egales impliquent deux antecedents egaux.",
        use: "Oui, tres utile pour justifier que $e^a=e^b$ implique $a=b$."
      },
      {
        word: "Admissible",
        definition:
          "Une solution est admissible lorsqu'elle appartient bien a l'ensemble de definition du probleme.",
        use: "Oui, surtout avec le logarithme ou les racines."
      }
    ],
    properties: [
      {
        kind: "Propriete",
        title: "Injectivite",
        text:
          "Les fonctions exponentielle et logarithme sont strictement croissantes, donc injectives."
      },
      {
        kind: "Methode",
        title: "Equations et inequations",
        text:
          "On isole le logarithme ou l'exponentielle, puis on applique la fonction reciproque adaptee."
      }
    ],
    formulas: [
      {
        label: "Derivee de $e^u$",
        expression: "$$\\left(e^{u(x)}\\right)'=u'(x)e^{u(x)}$$",
        note: "Derivee composee."
      },
      {
        label: "Derivee de $\\ln(u)$",
        expression: "$$\\left(\\ln(u(x))\\right)'=\\frac{u'(x)}{u(x)}$$",
        note: "Valable lorsque $u(x)>0$."
      },
      {
        label: "Primitive",
        expression: "$$\\int \\frac{1}{x}\\,dx=\\ln(x)+C$$",
        note: "Sur un intervalle inclus dans $]0,+\\infty[$."
      },
      {
        label: "Equation exponentielle",
        expression: "$$e^a=e^b \\iff a=b$$",
        note: "Formule a connaitre par coeur."
      }
    ],
    methods: [
      {
        title: "Resoudre une equation avec logarithme",
        text:
          "On isole le logarithme puis on exponentie les deux membres."
      },
      {
        title: "Trouver une primitive",
        text:
          "Si l'on reconnait la forme $u'e^u$, une primitive est $e^u$. Si l'on reconnait la forme $\\dfrac{u'}{u}$, une primitive est $\\ln(u)$."
      }
    ],
    example: {
      title: "Exemple redige",
      text: "Resoudre dans $]0,+\\infty[$ l'equation $$\\ln(x)=2.$$",
      steps: [
        "On applique la fonction exponentielle aux deux membres.",
        "On obtient $$x=e^2.$$",
        "Comme $e^2>0$, cette solution est bien admissible.",
        "L'unique solution est donc $$x=e^2.$$"
      ]
    },
    examQuestions: [
      {
        title: "Question type bac",
        statement: "Resoudre l'inequation $e^x\\geqslant 5$.",
        answer: [
          "On rappelle que la fonction exponentielle est strictement croissante.",
          "On applique le logarithme aux deux membres.",
          "On obtient $$x\\geqslant \\ln(5).$$"
        ]
      },
      {
        title: "Question type bac",
        statement: "Determiner une primitive de $(2x+1)e^{x^2+x}$.",
        answer: [
          "On pose $u(x)=x^2+x$, alors $u'(x)=2x+1$.",
          "L'expression est de la forme $u'e^u$.",
          "Une primitive est donc $$e^{x^2+x}.$$"
        ]
      },
      {
        title: "Question type bac",
        statement: "Etudier les variations d'une fonction contenant $e^x$.",
        answer: [
          "On derive la fonction.",
          "On factorise si possible par $e^x$, puisque $e^x>0$ pour tout reel $x$.",
          "On etudie le signe de l'autre facteur pour conclure."
        ]
      }
    ],
    drills: [
      {
        title: "Reflexe 1",
        text:
          "Quand tu vois une equation avec $\\ln$, pense a exponentier apres avoir isole le logarithme."
      },
      {
        title: "Reflexe 2",
        text:
          "Quand tu vois une derivee d'exponentielle composee, cherche la forme $u'e^u$."
      },
      {
        title: "Reflexe 3",
        text:
          "Quand tu derives une fonction avec $e^x$, pense a factoriser par $e^x$ car il est toujours strictement positif."
      }
    ],
    writingPhrases: [
      {
        title: "Equation avec logarithme",
        context: "A reutiliser",
        text:
          "On isole le logarithme, puis on applique la fonction exponentielle aux deux membres. On obtient alors la solution cherchee."
      },
      {
        title: "Verification de solution",
        context: "A reutiliser",
        text:
          "Cette solution est admissible car elle appartient bien a l'ensemble de definition."
      }
    ]
  },
  {
    id: "primitives",
    title: "Primitives et integrales",
    summary:
      "Il faut savoir reconnaitre les primitives usuelles, calculer une integrale et interpreter geometriquement le resultat.",
    mustKnow: [
      "Une primitive $F$ de $f$ verifie $F'=f$.",
      "Pour calculer $\\int_a^b f(x)\\,dx$, on utilise $F(b)-F(a)$.",
      "Savoir reconnaitre les formes usuelles et les formes composees simples.",
      "Savoir distinguer aire geometrique et aire algebrique."
    ],
    memoryLines: [
      "Si $n\\neq -1$, une primitive de $x^n$ est $\\dfrac{x^{n+1}}{n+1}$.",
      "Une primitive de $e^x$ est $e^x$.",
      "Une primitive de $\\dfrac{1}{x}$ sur $]0,+\\infty[$ est $\\ln(x)$.",
      "Si $f$ est continue sur $[a,b]$ et $F$ est une primitive de $f$, alors $$\\int_a^b f(x)\\,dx=F(b)-F(a).$$"
    ],
    vocabulary: [
      {
        word: "Primitive",
        definition:
          "Une primitive de $f$ est une fonction $F$ telle que $F'=f$.",
        use: "Oui, c'est le mot obligatoire dans ce chapitre."
      },
      {
        word: "Aire algebrique",
        definition:
          "L'integrale represente une aire algebrique: les parties sous l'axe des abscisses comptent negativement.",
        use: "Oui, utile si la fonction change de signe."
      }
    ],
    properties: [
      {
        kind: "Theoreme",
        title: "Theoreme fondamental de l'analyse",
        text:
          "Le calcul integral repose sur l'evaluation d'une primitive aux bornes de l'intervalle."
      },
      {
        kind: "Attention",
        title: "Aire geometrique",
        text:
          "Si la courbe est sous l'axe des abscisses, l'integrale est negative. Pour une aire geometrique, il faut tenir compte du signe."
      }
    ],
    formulas: [
      {
        label: "Primitive de $x^n$",
        expression: "$$\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C \\quad (n\\neq -1)$$",
        note: "Formule de base."
      },
      {
        label: "Primitive de $e^x$",
        expression: "$$\\int e^x\\,dx=e^x+C$$",
        note: "A connaitre absolument."
      },
      {
        label: "Calcul integral",
        expression: "$$\\int_a^b f(x)\\,dx=F(b)-F(a)$$",
        note: "Ou $F$ est une primitive de $f$."
      }
    ],
    methods: [
      {
        title: "Trouver une primitive",
        text:
          "On cherche d'abord si la fonction est usuelle. Sinon, on verifie si elle est de la forme $u'e^u$ ou $\\dfrac{u'}{u}$."
      },
      {
        title: "Calculer une integrale",
        text:
          "On determine une primitive, puis on calcule sa valeur aux bornes."
      }
    ],
    example: {
      title: "Exemple redige",
      text: "Calculer $$\\int_0^1(2x+3)\\,dx.$$",
      steps: [
        "Une primitive de la fonction $x\\mapsto 2x+3$ est $$F(x)=x^2+3x.$$",
        "Donc $$\\int_0^1(2x+3)\\,dx=F(1)-F(0).$$",
        "On obtient $$F(1)-F(0)=(1+3)-0=4.$$"
      ]
    },
    examQuestions: [
      {
        title: "Question type bac",
        statement: "Determiner une primitive puis calculer une integrale.",
        answer: [
          "On reconnait la forme de la fonction.",
          "On determine une primitive $F$.",
          "On calcule enfin $F(b)-F(a)$."
        ]
      },
      {
        title: "Question type bac",
        statement: "Interpreter geometriquement une integrale.",
        answer: [
          "On etudie le signe de la fonction sur l'intervalle.",
          "Si la fonction est positive, l'integrale represente l'aire sous la courbe.",
          "Si elle change de signe, on parle d'aire algebrique."
        ]
      },
      {
        title: "Question type bac",
        statement: "Montrer qu'une fonction est une primitive d'une autre.",
        answer: [
          "On derive la fonction proposee.",
          "On verifie que l'on retrouve bien la fonction initiale."
        ]
      }
    ],
    drills: [
      {
        title: "Reflexe 1",
        text:
          "Quand tu calcules une integrale, pense d'abord a chercher une primitive simple."
      },
      {
        title: "Reflexe 2",
        text:
          "Si la question parle d'aire, verifie toujours le signe de la fonction."
      },
      {
        title: "Reflexe 3",
        text:
          "Quand tu reconnais la forme $u'e^u$ ou $\\dfrac{u'}{u}$, tu as souvent deja la primitive."
      }
    ],
    writingPhrases: [
      {
        title: "Calcul integral",
        context: "A reutiliser",
        text:
          "La fonction $f$ admet pour primitive $F$ sur l'intervalle considere. Donc $$\\int_a^b f(x)\\,dx = F(b)-F(a).$$"
      },
      {
        title: "Aire",
        context: "A reutiliser",
        text:
          "Comme la fonction est positive sur l'intervalle, l'integrale represente l'aire du domaine situe sous la courbe."
      }
    ]
  },
  {
    id: "probabilites",
    title: "Probabilites conditionnelles et loi binomiale",
    summary:
      "Il faut savoir completer un arbre, calculer des probabilites conditionnelles, utiliser la formule des probabilites totales et reconnaitre une loi binomiale.",
    mustKnow: [
      "Savoir lire et completer un arbre.",
      "Connaitre la definition d'une probabilite conditionnelle.",
      "Savoir justifier qu'une variable suit une loi binomiale.",
      "Connaitre la formule de $P(X=k)$ et l'esperance d'une loi binomiale."
    ],
    memoryLines: [
      "Si $P(A)\\neq 0$, alors $$P_A(B)=\\frac{P(A\\cap B)}{P(A)}.$$",
      "La formule des probabilites totales s'ecrit $$P(B)=P(A\\cap B)+P(\\overline{A}\\cap B).$$",
      "Si $X$ suit $\\mathcal{B}(n,p)$, alors $$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}.$$",
      "L'esperance d'une loi binomiale est $$E(X)=np.$$"
    ],
    vocabulary: [
      {
        word: "Independantes",
        definition:
          "Deux experiences sont independantes lorsque le resultat de l'une n'influence pas le resultat de l'autre.",
        use: "Oui, indispensable pour justifier une loi binomiale."
      },
      {
        word: "Probabilite conditionnelle",
        definition:
          "La probabilite conditionnelle de $B$ sachant $A$ est la probabilite que $B$ se realise lorsque l'on sait deja que $A$ est realise.",
        use: "Oui, a utiliser dans la redaction des arbres et des questions de conditionnement."
      }
    ],
    properties: [
      {
        kind: "Propriete",
        title: "Schema de Bernoulli",
        text:
          "La repetition de $n$ epreuves de Bernoulli independantes et identiques conduit a une loi binomiale."
      },
      {
        kind: "Methode",
        title: "Lecture d'un arbre",
        text:
          "On multiplie le long d'une branche et on additionne les branches correspondant a l'evenement."
      }
    ],
    formulas: [
      {
        label: "Probabilite conditionnelle",
        expression: "$$P_A(B)=\\frac{P(A\\cap B)}{P(A)}$$",
        note: "Avec $P(A)>0$."
      },
      {
        label: "Loi binomiale",
        expression: "$$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$$",
        note: "Pour $k\\in\\{0,1,\\dots,n\\}$."
      },
      {
        label: "Esperance",
        expression: "$$E(X)=np$$",
        note: "A retenir par coeur."
      }
    ],
    methods: [
      {
        title: "Justifier une loi binomiale",
        text:
          "Il faut faire apparaitre les mots repetition, independance, deux issues, probabilite de succes constante."
      },
      {
        title: "Calculer une probabilite avec un arbre",
        text:
          "On repere les branches utiles, on multiplie puis on additionne si necessaire."
      }
    ],
    example: {
      title: "Exemple redige",
      text: "On lance une piece equilibree $3$ fois et on note $X$ le nombre de faces.",
      steps: [
        "Chaque lancer est une epreuve de Bernoulli de parametre $$p=0{,}5.$$",
        "Les lancers sont independants et repetes $3$ fois.",
        "Donc $$X\\sim \\mathcal{B}(3;0{,}5).$$",
        "Ainsi $$P(X=2)=\\binom{3}{2}(0{,}5)^2(0{,}5)=0{,}375.$$"
      ]
    },
    examQuestions: [
      {
        title: "Question type bac",
        statement: "Justifier qu'une variable suit une loi binomiale.",
        answer: [
          "On montre qu'il y a $n$ repetitions d'une meme experience.",
          "Chaque repetition a deux issues: succes ou echec.",
          "La probabilite de succes est constante.",
          "Les repetitions sont independantes."
        ]
      },
      {
        title: "Question type bac",
        statement: "Calculer une probabilite a l'aide d'un arbre.",
        answer: [
          "On identifie les branches correspondant a l'evenement.",
          "On multiplie les probabilites sur chaque branche.",
          "On additionne si plusieurs branches conviennent."
        ]
      },
      {
        title: "Question type bac",
        statement: "Calculer l'esperance d'une loi binomiale.",
        answer: [
          "On identifie les parametres $n$ et $p$.",
          "On applique directement la formule $$E(X)=np.$$"
        ]
      }
    ],
    drills: [
      {
        title: "Reflexe 1",
        text:
          "Quand l'experience se repete $n$ fois avec succes/echec et probabilite constante, pense a la loi binomiale."
      },
      {
        title: "Reflexe 2",
        text:
          "Sur un arbre, on multiplie le long des branches et on additionne les branches."
      }
    ],
    writingPhrases: [
      {
        title: "Loi binomiale",
        context: "A connaitre par coeur",
        text:
          "L'experience est repetee $n$ fois de maniere identique et independante, avec deux issues possibles: succes ou echec. La probabilite de succes est constante. La variable aleatoire suit donc une loi binomiale."
      },
      {
        title: "Probabilites totales",
        context: "A connaitre par coeur",
        text:
          "Les evenements $A$ et $\\overline{A}$ forment une partition de l'univers. Donc, d'apres la formule des probabilites totales, on a $$P(B)=P(A\\cap B)+P(\\overline{A}\\cap B).$$"
      },
      {
        title: "Conditionnement",
        context: "A reutiliser",
        text:
          "Comme $P(A)\\neq 0$, on peut ecrire $$P_A(B)=\\frac{P(A\\cap B)}{P(A)}.$$"
      }
    ]
  },
  {
    id: "geometrie",
    title: "Geometrie dans l'espace",
    summary:
      "Ce chapitre est tres important au bac. Il faut savoir manipuler droites et plans dans un repere de l'espace, utiliser le vocabulaire exact, reconnaitre une situation de parallelisme ou d'orthogonalite, verifier une appartenance, calculer une intersection et rediger proprement toutes les conclusions.",
    mustKnow: [
      "Savoir lire une representation parametrique d'une droite.",
      "Connaitre la forme cartesianne d'un plan.",
      "Savoir utiliser un vecteur directeur et un vecteur normal.",
      "Savoir demontrer qu'un point appartient a une droite ou a un plan.",
      "Savoir montrer que deux droites sont paralleles ou non.",
      "Savoir montrer qu'une droite est orthogonale ou parallele a un plan.",
      "Savoir determiner l'intersection d'une droite et d'un plan.",
      "Savoir determiner une equation de plan a partir d'un point et d'un vecteur normal.",
      "Savoir calculer la norme d'un vecteur.",
      "Savoir calculer une distance entre deux points.",
      "Savoir calculer la distance d'un point a un plan.",
      "Savoir utiliser le produit scalaire pour montrer une orthogonalite ou calculer un angle.",
      "Savoir calculer l'angle entre deux vecteurs a l'aide du cosinus.",
      "Savoir utiliser les mots colineaires, coplanaires, vecteur directeur, vecteur normal, appartient, intersection."
    ],
    memoryLines: [
      "Une droite est definie par un point et un vecteur directeur.",
      "Un plan est defini par un point et un vecteur normal.",
      "Deux droites sont paralleles si leurs vecteurs directeurs sont colineaires.",
      "Une droite est orthogonale a un plan si son vecteur directeur est colineaire a un vecteur normal du plan.",
      "Une droite est parallele a un plan si un vecteur directeur de la droite est orthogonal a un vecteur normal du plan.",
      "Deux plans sont paralleles si leurs vecteurs normaux sont colineaires.",
      "Pour montrer qu'un point appartient a un plan, on verifie que ses coordonnees satisfont l'equation du plan.",
      "Pour montrer qu'un point appartient a une droite, on cherche une meme valeur du parametre dans les trois equations parametriques.",
      "L'intersection d'une droite et d'un plan se determine en remplacant les equations parametriques de la droite dans l'equation du plan.",
      "La norme d'un vecteur $$\\vec{u}(x;y;z)$$ est $$\\|\\vec{u}\\|=\\sqrt{x^2+y^2+z^2}.$$",
      "La distance entre deux points $A$ et $B$ est egale a la norme du vecteur $$\\overrightarrow{AB}.$$",
      "La distance d'un point $$M(x_M;y_M;z_M)$$ au plan $$ax+by+cz+d=0$$ est $$\\frac{|ax_M+by_M+cz_M+d|}{\\sqrt{a^2+b^2+c^2}}.$$",
      "Le produit scalaire de deux vecteurs permet de caracteriser l'orthogonalite.",
      "Pour calculer un angle, on peut utiliser $$\\vec{u}\\cdot\\vec{v}=\\|\\vec{u}\\|\\,\\|\\vec{v}\\|\\cos(\\widehat{(\\vec{u},\\vec{v})}).$$"
    ],
    vocabulary: [
      {
        word: "Colineaires",
        definition:
          "Deux vecteurs sont colineaires lorsqu'il existe un reel $k$ tel que $\\vec{u}=k\\vec{v}$.",
        use: "Oui, il faut l'utiliser pour montrer que deux droites sont paralleles ou qu'une droite est orthogonale a un plan."
      },
      {
        word: "Vecteur normal",
        definition:
          "Un vecteur normal a un plan est un vecteur perpendiculaire a tous les vecteurs directeurs du plan.",
        use: "Oui, indispensable dans les questions sur les plans."
      },
      {
        word: "Vecteur directeur",
        definition:
          "Un vecteur directeur d'une droite donne sa direction et apparait dans sa representation parametrique.",
        use: "Oui, il faut presque toujours commencer par le determiner dans les questions sur les droites."
      },
      {
        word: "Coplanaires",
        definition:
          "Des points ou des vecteurs sont coplanaires lorsqu'ils appartiennent a un meme plan.",
        use: "A utiliser dans les questions sur l'existence d'un plan ou sur la position relative d'objets de l'espace."
      },
      {
        word: "Appartient",
        definition:
          "Dire qu'un point appartient a une droite ou a un plan signifie que ses coordonnees verifient l'ecriture de cet objet geometrique.",
        use: "Oui, il faut employer ce mot dans la conclusion."
      },
      {
        word: "Intersection",
        definition:
          "L'intersection de deux ensembles geometriques est l'ensemble des points communs a ces deux ensembles.",
        use: "Oui, notamment quand tu trouves le point commun d'une droite et d'un plan."
      },
      {
        word: "Norme",
        definition:
          "La norme d'un vecteur represente sa longueur.",
        use: "Oui, a utiliser pour les longueurs, distances et calculs d'angle."
      },
      {
        word: "Produit scalaire",
        definition:
          "Le produit scalaire est un nombre reel qui permet notamment d'etudier l'orthogonalite et les angles.",
        use: "Oui, il faut le citer dans les questions d'orthogonalite ou d'angle."
      },
      {
        word: "Angle",
        definition:
          "L'angle entre deux vecteurs se calcule souvent a l'aide de la formule du produit scalaire.",
        use: "A utiliser quand la question demande explicitement une mesure d'angle ou une justification geometrique."
      },
      {
        word: "Distance d'un point a un plan",
        definition:
          "C'est la plus petite distance entre le point et l'ensemble des points du plan.",
        use: "A utiliser quand la question demande une distance a un plan ou la distance d'un point a une surface plane."
      }
    ],
    properties: [
      {
        kind: "Propriete",
        title: "Equation d'un plan",
        text:
          "Si un plan a pour vecteur normal $(a;b;c)$, alors il admet une equation de la forme $$ax+by+cz+d=0.$$"
      },
      {
        kind: "Methode",
        title: "Appartenance a un plan",
        text:
          "Pour verifier qu'un point appartient a un plan, on remplace ses coordonnees dans l'equation du plan."
      },
      {
        kind: "Propriete",
        title: "Plan defini par trois points",
        text:
          "Trois points non alignes definissent un unique plan."
      },
      {
        kind: "Propriete",
        title: "Parallelisme de deux plans",
        text:
          "Deux plans sont paralleles lorsque leurs vecteurs normaux sont colineaires."
      },
      {
        kind: "Propriete",
        title: "Parallelisme d'une droite et d'un plan",
        text:
          "Une droite de vecteur directeur $\\vec{u}$ est parallele a un plan de vecteur normal $\\vec{n}$ lorsque $$\\vec{u}\\cdot\\vec{n}=0.$$"
      },
      {
        kind: "Propriete",
        title: "Orthogonalite d'une droite et d'un plan",
        text:
          "Une droite est orthogonale a un plan lorsque son vecteur directeur est colineaire a un vecteur normal du plan."
      },
      {
        kind: "Methode",
        title: "Intersection droite-plan",
        text:
          "On remplace les equations parametriques de la droite dans l'equation du plan, on determine le parametre, puis on calcule les coordonnees du point obtenu."
      },
      {
        kind: "Propriete",
        title: "Norme d'un vecteur",
        text:
          "Si $$\\vec{u}(x;y;z)$$, alors $$\\|\\vec{u}\\|=\\sqrt{x^2+y^2+z^2}.$$"
      },
      {
        kind: "Propriete",
        title: "Distance entre deux points",
        text:
          "La distance $$AB$$ est egale a la norme du vecteur $$\\overrightarrow{AB}.$$"
      },
      {
        kind: "Propriete",
        title: "Distance d'un point a un plan",
        text:
          "Si le plan a pour equation $$ax+by+cz+d=0$$, alors la distance du point $$M(x_M;y_M;z_M)$$ a ce plan est $$\\frac{|ax_M+by_M+cz_M+d|}{\\sqrt{a^2+b^2+c^2}}.$$"
      },
      {
        kind: "Propriete",
        title: "Produit scalaire en coordonnees",
        text:
          "Si $$\\vec{u}(x;y;z)$$ et $$\\vec{v}(x';y';z')$$, alors $$\\vec{u}\\cdot\\vec{v}=xx'+yy'+zz'.$$"
      },
      {
        kind: "Propriete",
        title: "Calcul d'un angle",
        text:
          "Si $$\\vec{u}$$ et $$\\vec{v}$$ sont non nuls, alors $$\\cos(\\widehat{(\\vec{u},\\vec{v})})=\\frac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}.$$"
      }
    ],
    formulas: [
      {
        label: "Droite parametrique",
        expression: "$$\\begin{cases}x=x_0+at\\\\y=y_0+bt\\\\z=z_0+ct\\end{cases}$$",
        note: "Le vecteur directeur est $(a;b;c)$."
      },
      {
        label: "Plan",
        expression: "$$ax+by+cz+d=0$$",
        note: "Le vecteur normal est $(a;b;c)$."
      },
      {
        label: "Produit scalaire",
        expression: "$$\\vec{u}\\cdot\\vec{v}=0$$",
        note: "Il traduit l'orthogonalite."
      },
      {
        label: "Vecteur",
        expression: "$$\\overrightarrow{AB}(x_B-x_A\\,;\\,y_B-y_A\\,;\\,z_B-z_A)$$",
        note: "Tres utile pour construire un vecteur directeur ou verifier un alignement."
      },
      {
        label: "Plan par un point et un normal",
        expression: "$$a(x-x_A)+b(y-y_A)+c(z-z_A)=0$$",
        note: "Forme pratique lorsqu'on connait un point $A$ du plan et un normal $(a;b;c)$."
      },
      {
        label: "Colineaire",
        expression: "$$\\vec{u}=k\\vec{v}$$",
        note: "Forme a faire apparaitre quand tu justifies un parallelisme."
      },
      {
        label: "Norme d'un vecteur",
        expression: "$$\\|\\vec{u}(x;y;z)\\|=\\sqrt{x^2+y^2+z^2}$$",
        note: "Formule indispensable pour les longueurs et angles."
      },
      {
        label: "Distance entre deux points",
        expression: "$$AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$$",
        note: "C'est la norme du vecteur $$\\overrightarrow{AB}.$$"
      },
      {
        label: "Distance point-plan",
        expression: "$$d(M,P)=\\frac{|ax_M+by_M+cz_M+d|}{\\sqrt{a^2+b^2+c^2}}$$",
        note: "Valable pour un plan $$P:ax+by+cz+d=0$$."
      },
      {
        label: "Produit scalaire en coordonnees",
        expression: "$$\\vec{u}(x;y;z)\\cdot\\vec{v}(x';y';z')=xx'+yy'+zz'$$",
        note: "A connaitre pour les questions de perpendicularite et d'angle."
      },
      {
        label: "Cosinus d'un angle",
        expression: "$$\\cos(\\widehat{(\\vec{u},\\vec{v})})=\\frac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}$$",
        note: "Permet de calculer l'angle entre deux vecteurs non nuls."
      }
    ],
    methods: [
      {
        title: "Montrer qu'un point appartient a une droite",
        text:
          "On cherche une meme valeur du parametre $t$ dans les trois equations."
      },
      {
        title: "Determiner une intersection droite-plan",
        text:
          "On remplace les equations parametriques de la droite dans l'equation du plan."
      },
      {
        title: "Montrer que deux droites sont paralleles",
        text:
          "On determine un vecteur directeur de chaque droite, puis on montre que ces vecteurs sont colineaires."
      },
      {
        title: "Montrer qu'une droite est parallele a un plan",
        text:
          "On determine un vecteur directeur de la droite et un vecteur normal du plan, puis on verifie que leur produit scalaire est nul."
      },
      {
        title: "Montrer qu'une droite est orthogonale a un plan",
        text:
          "On determine un vecteur directeur de la droite et un vecteur normal du plan, puis on montre qu'ils sont colineaires."
      },
      {
        title: "Determiner une equation de plan",
        text:
          "On utilise un vecteur normal du plan et un point du plan. On ecrit ensuite l'equation sous la forme $$ax+by+cz+d=0.$$"
      },
      {
        title: "Calculer une distance",
        text:
          "On commence par former le vecteur reliant les deux points, puis on calcule sa norme."
      },
      {
        title: "Calculer un angle",
        text:
          "On calcule d'abord le produit scalaire puis les normes des deux vecteurs, avant d'utiliser la formule du cosinus."
      },
      {
        title: "Calculer la distance d'un point a un plan",
        text:
          "On repere les coefficients du plan $$ax+by+cz+d=0$$, on remplace les coordonnees du point dans le numerateur, puis on divise par $$\\sqrt{a^2+b^2+c^2}.$$"
      },
      {
        title: "Montrer une orthogonalite avec le produit scalaire",
        text:
          "On calcule le produit scalaire de deux vecteurs. S'il est nul, on peut conclure que ces vecteurs sont orthogonaux."
      },
      {
        title: "Rediger une conclusion",
        text:
          "Il faut toujours finir avec une phrase complete: le point appartient au plan, les droites sont paralleles, la droite est orthogonale au plan, ou le point d'intersection est ..."
      }
    ],
    example: {
      title: "Exemple redige",
      text: "On considere la droite $$d:\\begin{cases}x=1+t\\\\y=2-t\\\\z=3+2t\\end{cases}$$ et le plan $$P:x+2y-z+3=0.$$",
      steps: [
        "Un vecteur directeur de $d$ est $$\\vec{u}(1;-1;2).$$",
        "Un vecteur normal de $P$ est $$\\vec{n}(1;2;-1).$$",
        "On remplace les coordonnees de la droite dans l'equation du plan : $$(1+t)+2(2-t)-(3+2t)+3=0.$$",
        "On obtient $$5-3t=0,$$ donc $$t=\\frac{5}{3}.$$",
        "Le point d'intersection a alors pour coordonnees $$\\left(\\frac{8}{3};\\frac{1}{3};\\frac{19}{3}\\right).$$",
        "On conclut que la droite $d$ et le plan $P$ sont secants en un unique point."
      ]
    },
    examQuestions: [
      {
        title: "Question type bac",
        statement: "Montrer que deux droites sont paralleles.",
        answer: [
          "On determine un vecteur directeur de chaque droite.",
          "On verifie que ces deux vecteurs sont colineaires.",
          "On conclut que les droites sont paralleles."
        ]
      },
      {
        title: "Question type bac",
        statement: "Montrer qu'un point appartient a une droite donnee sous forme parametrique.",
        answer: [
          "On remplace les coordonnees du point dans les equations parametriques.",
          "On cherche une meme valeur du parametre dans les trois equations.",
          "Si cette meme valeur existe, alors le point appartient a la droite."
        ]
      },
      {
        title: "Question type bac",
        statement: "Montrer qu'un point appartient a un plan.",
        answer: [
          "On remplace les coordonnees du point dans l'equation du plan.",
          "On verifie que l'egalite est satisfaite.",
          "On conclut explicitement que le point appartient au plan."
        ]
      },
      {
        title: "Question type bac",
        statement: "Determiner le point d'intersection d'une droite et d'un plan.",
        answer: [
          "On remplace les equations parametriques de la droite dans l'equation du plan.",
          "On resout l'equation obtenue pour trouver le parametre.",
          "On en deduit les coordonnees du point d'intersection."
        ]
      },
      {
        title: "Question type bac",
        statement: "Montrer qu'une droite est orthogonale a un plan.",
        answer: [
          "On determine un vecteur directeur de la droite.",
          "On determine un vecteur normal du plan.",
          "On montre que ces vecteurs sont colineaires."
        ]
      },
      {
        title: "Question type bac",
        statement: "Montrer qu'une droite est parallele a un plan.",
        answer: [
          "On determine un vecteur directeur de la droite.",
          "On determine un vecteur normal du plan.",
          "On calcule leur produit scalaire.",
          "S'il est nul, on conclut que la droite est parallele au plan."
        ]
      },
      {
        title: "Question type bac",
        statement: "Determiner une equation de plan a partir d'un point et d'un vecteur normal.",
        answer: [
          "On identifie un point $A(x_A;y_A;z_A)$ du plan et un vecteur normal $(a;b;c)$.",
          "On ecrit l'equation $$a(x-x_A)+b(y-y_A)+c(z-z_A)=0.$$",
          "On developpe pour obtenir une equation sous la forme $$ax+by+cz+d=0.$$"
        ]
      },
      {
        title: "Question type bac",
        statement: "Calculer la distance entre deux points de l'espace.",
        answer: [
          "On calcule d'abord les coordonnees du vecteur $$\\overrightarrow{AB}.$$",
          "On applique ensuite la formule de la norme.",
          "On conclut en donnant la distance exacte."
        ]
      },
      {
        title: "Question type bac",
        statement: "Calculer l'angle entre deux vecteurs.",
        answer: [
          "On calcule le produit scalaire des deux vecteurs.",
          "On calcule la norme de chacun des deux vecteurs.",
          "On utilise la formule du cosinus pour obtenir l'angle."
        ]
      },
      {
        title: "Question type bac",
        statement: "Calculer la distance d'un point a un plan.",
        answer: [
          "On ecrit le plan sous la forme $$ax+by+cz+d=0.$$",
          "On remplace les coordonnees du point $$M$$ dans l'expression $$ax_M+by_M+cz_M+d.$$",
          "On applique ensuite la formule $$d(M,P)=\\frac{|ax_M+by_M+cz_M+d|}{\\sqrt{a^2+b^2+c^2}}.$$"
        ]
      },
      {
        title: "Question type bac",
        statement: "Montrer que deux vecteurs sont orthogonaux.",
        answer: [
          "On calcule leur produit scalaire.",
          "Si ce produit scalaire est nul, on conclut que les deux vecteurs sont orthogonaux."
        ]
      },
      {
        title: "Question type bac",
        statement: "Montrer que deux plans sont paralleles.",
        answer: [
          "On determine un vecteur normal de chaque plan.",
          "On montre que ces deux vecteurs normaux sont colineaires.",
          "On conclut que les deux plans sont paralleles."
        ]
      }
    ],
    drills: [
      {
        title: "Reflexe 1",
        text:
          "Pour une droite, cherche un vecteur directeur. Pour un plan, cherche un vecteur normal."
      },
      {
        title: "Reflexe 2",
        text:
          "Pour montrer qu'un point appartient a un plan, remplace directement ses coordonnees dans l'equation."
      },
      {
        title: "Reflexe 3",
        text:
          "Quand on te parle de parallelisme, pense tout de suite au mot colineaires."
      },
      {
        title: "Reflexe 4",
        text:
          "Quand on te parle de droite et plan, demande-toi si tu dois utiliser un vecteur directeur, un vecteur normal, ou les deux."
      },
      {
        title: "Reflexe 5",
        text:
          "Pour une intersection droite-plan, remplace toujours la droite dans le plan ; n'essaie pas de raisonner a vue."
      },
      {
        title: "Reflexe 6",
        text:
          "Ne conclus jamais juste par un calcul: ecris une phrase geometrique claire avec le vocabulaire attendu."
      },
      {
        title: "Reflexe 7",
        text:
          "Quand une question parle de longueur ou de distance, pense aussitot a la norme d'un vecteur."
      },
      {
        title: "Reflexe 8",
        text:
          "Quand une question parle d'angle ou d'orthogonalite, pense au produit scalaire."
      },
      {
        title: "Reflexe 9",
        text:
          "Quand une question parle de distance a un plan, pense immediatement a la formule avec la valeur absolue au numerateur."
      }
    ],
    writingPhrases: [
      {
        title: "Parallelisme",
        context: "A reutiliser",
        text:
          "Les vecteurs directeurs des deux droites sont colineaires ; on en deduit que ces deux droites sont paralleles."
      },
      {
        title: "Appartenance",
        context: "A reutiliser",
        text:
          "Les coordonnees du point verifient l'equation du plan ; on en deduit que le point appartient au plan."
      },
      {
        title: "Orthogonalite",
        context: "A connaitre par coeur",
        text:
          "Le vecteur directeur de la droite est colineaire a un vecteur normal du plan ; on en deduit que la droite est orthogonale au plan."
      },
      {
        title: "Intersection droite-plan",
        context: "A reutiliser",
        text:
          "En remplacant les equations parametriques de la droite dans l'equation du plan, on obtient une unique valeur du parametre ; la droite et le plan sont donc secants en un unique point."
      },
      {
        title: "Plan parallele",
        context: "A reutiliser",
        text:
          "Les vecteurs normaux des deux plans sont colineaires ; on en deduit que ces deux plans sont paralleles."
      },
      {
        title: "Equation de plan",
        context: "A reutiliser",
        text:
          "Le plan admet pour vecteur normal $(a;b;c)$ et contient le point $A(x_A;y_A;z_A)$ ; on peut donc ecrire $$a(x-x_A)+b(y-y_A)+c(z-z_A)=0.$$"
      },
      {
        title: "Orthogonalite par produit scalaire",
        context: "A reutiliser",
        text:
          "Le produit scalaire des deux vecteurs est nul ; on en deduit que ces deux vecteurs sont orthogonaux."
      },
      {
        title: "Distance",
        context: "A reutiliser",
        text:
          "On calcule d'abord les coordonnees du vecteur $$\\overrightarrow{AB}$$, puis sa norme ; on obtient ainsi la distance $$AB.$$"
      },
      {
        title: "Angle",
        context: "A reutiliser",
        text:
          "On utilise la formule $$\\cos(\\widehat{(\\vec{u},\\vec{v})})=\\frac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}$$ pour calculer l'angle entre les deux vecteurs."
      },
      {
        title: "Distance point-plan",
        context: "A reutiliser",
        text:
          "Le plan est ecrit sous la forme $$ax+by+cz+d=0$$ ; on peut donc appliquer la formule $$d(M,P)=\\frac{|ax_M+by_M+cz_M+d|}{\\sqrt{a^2+b^2+c^2}}.$$"
      }
    ]
  },
  {
    id: "continuite",
    title: "Continuite et TVI",
    summary:
      "Le theoreme des valeurs intermediaires intervient souvent pour prouver l'existence d'une solution. Il faut bien distinguer existence et unicite.",
    mustKnow: [
      "Savoir quand une fonction est continue.",
      "Connaitre l'enonce du theoreme des valeurs intermediaires.",
      "Savoir utiliser un changement de signe pour prouver l'existence d'une solution.",
      "Savoir distinguer existence et unicite."
    ],
    memoryLines: [
      "Toute fonction polynomiale est continue sur $\\mathbb{R}$.",
      "Toute fonction derivee sur un intervalle est continue sur cet intervalle.",
      "Si $f$ est continue sur $[a,b]$ et si $0$ est compris entre $f(a)$ et $f(b)$, alors il existe au moins un reel $c\\in[a,b]$ tel que $f(c)=0$.",
      "Le TVI prouve une existence, pas une unicite."
    ],
    vocabulary: [
      {
        word: "Continue",
        definition:
          "Une fonction est continue sur un intervalle lorsqu'on peut la tracer sans lever le crayon sur cet intervalle.",
        use: "Oui, ce mot est obligatoire avant d'utiliser le TVI."
      },
      {
        word: "Existence",
        definition:
          "Montrer une existence signifie prouver qu'au moins une solution ou un reel verifie la propriete demandee.",
        use: "Oui, notamment pour distinguer existence et unicite."
      }
    ],
    properties: [
      {
        kind: "Theoreme",
        title: "Theoreme des valeurs intermediaires",
        text:
          "Une fonction continue sur un intervalle prend toutes les valeurs intermediaires entre deux images."
      },
      {
        kind: "Methode",
        title: "Existence puis unicite",
        text:
          "On utilise d'abord le TVI pour l'existence, puis la stricte monotonie pour l'unicite."
      }
    ],
    formulas: [
      {
        label: "TVI",
        expression: "$$f(a)\\times f(b)<0 \\Rightarrow \\exists c\\in]a,b[\\text{ tel que }f(c)=0$$",
        note: "Sous l'hypothese que $f$ est continue sur $[a,b]$."
      },
      {
        label: "Unicite",
        expression: "$$f \\text{ strictement monotone sur } I \\Rightarrow f(x)=0 \\text{ a au plus une solution}$$",
        note: "A combiner avec le TVI."
      }
    ],
    methods: [
      {
        title: "Montrer l'existence d'une solution",
        text:
          "On montre que la fonction est continue sur l'intervalle, puis qu'elle change de signe entre les bornes."
      },
      {
        title: "Montrer l'unicite",
        text:
          "On montre ensuite que la fonction est strictement monotone sur cet intervalle."
      }
    ],
    example: {
      title: "Exemple redige",
      text: "On considere $$f(x)=x^3+x-1.$$",
      steps: [
        "La fonction $f$ est polynomiale, donc continue sur $\\mathbb{R}$.",
        "On calcule $$f(0)=-1 \\quad \\text{et} \\quad f(1)=1.$$",
        "Comme $0$ est compris entre $-1$ et $1$, le TVI assure l'existence d'un reel $\\alpha\\in[0,1]$ tel que $$f(\\alpha)=0.$$"
      ]
    },
    examQuestions: [
      {
        title: "Question type bac",
        statement: "Montrer qu'une equation admet au moins une solution sur un intervalle.",
        answer: [
          "On montre que la fonction est continue sur l'intervalle.",
          "On calcule les images des bornes.",
          "On verifie qu'il y a changement de signe.",
          "On applique le TVI."
        ]
      },
      {
        title: "Question type bac",
        statement: "Montrer qu'une equation admet une unique solution.",
        answer: [
          "On prouve d'abord l'existence avec le TVI.",
          "On etudie ensuite la monotonie de la fonction.",
          "La stricte monotonie donne l'unicite."
        ]
      },
      {
        title: "Question type bac",
        statement: "Donner un encadrement d'une solution.",
        answer: [
          "On teste plusieurs valeurs.",
          "On conserve un intervalle ou les images sont de signes opposes."
        ]
      }
    ],
    drills: [
      {
        title: "Reflexe 1",
        text:
          "Le TVI sert a montrer une existence, jamais une unicite a lui seul."
      },
      {
        title: "Reflexe 2",
        text:
          "Pour l'unicite, ajoute toujours un argument de monotonie."
      }
    ],
    writingPhrases: [
      {
        title: "TVI",
        context: "A connaitre par coeur",
        text:
          "La fonction $f$ est continue sur $[a,b]$. De plus, $f(a)$ et $f(b)$ sont de signes opposes. D'apres le theoreme des valeurs intermediaires, il existe au moins un reel $\\alpha\\in[a,b]$ tel que $f(\\alpha)=0$."
      },
      {
        title: "TVI + unicite",
        context: "A connaitre par coeur",
        text:
          "Comme la fonction $f$ est continue sur $[a,b]$ puis strictement monotone sur cet intervalle, l'equation $f(x)=0$ admet une unique solution sur $[a,b]$."
      }
    ]
  },
  {
    id: "fonctions",
    title: "Fonctions usuelles et lectures graphiques",
    summary:
      "Cette fiche rassemble les grands reflexes sur les fonctions usuelles, les tableaux de signes, les variations et la lecture graphique attendue au bac.",
    mustKnow: [
      "Connaitre les fonctions de reference: carre, cube, inverse, racine carree, exponentielle, logarithme.",
      "Savoir lire un tableau de variations.",
      "Savoir determiner une image, un antecedent ou un signe graphiquement.",
      "Savoir interpreter une tangente ou un extremum sur un graphique."
    ],
    memoryLines: [
      "Une image se lit verticalement et un antecedent se lit horizontalement.",
      "Le signe d'une fonction se lit par rapport a l'axe des abscisses.",
      "La pente d'une tangente est donnee par le nombre derive.",
      "Une fonction croissante conserve l'ordre."
    ],
    vocabulary: [
      {
        word: "Antecedent",
        definition:
          "Un antecedent de $y$ par une fonction $f$ est un reel $x$ tel que $f(x)=y$.",
        use: "Oui, il faut l'utiliser dans les questions de lecture graphique."
      },
      {
        word: "Tangente",
        definition:
          "La tangente a la courbe en un point est la droite qui traduit localement la variation de la fonction en ce point.",
        use: "Oui, utile pour toute question liee au nombre derive ou au graphique."
      }
    ],
    properties: [
      {
        kind: "Propriete",
        title: "Lecture du signe",
        text:
          "Si la courbe est au-dessus de l'axe des abscisses, alors la fonction est positive."
      },
      {
        kind: "Methode",
        title: "Utiliser un tableau de variations",
        text:
          "On lit le sens de variation, les extremums et, avec un changement de signe, on peut souvent encadrer une solution."
      }
    ],
    formulas: [
      {
        label: "Fonction inverse",
        expression: "$$f(x)=\\frac{1}{x}$$",
        note: "Definie sur $\\mathbb{R}\\setminus\\{0\\}$."
      },
      {
        label: "Fonction racine carree",
        expression: "$$f(x)=\\sqrt{x}$$",
        note: "Definie sur $[0,+\\infty[$."
      }
    ],
    methods: [
      {
        title: "Lire un antecedent",
        text:
          "On trace mentalement ou reellement une horizontale passant par l'ordonnee donnee."
      },
      {
        title: "Lire le signe d'une fonction",
        text:
          "On regarde si la courbe est au-dessus, sur, ou en dessous de l'axe des abscisses."
      }
    ],
    example: {
      title: "Exemple redige",
      text: "Si la courbe de $f$ coupe l'axe des abscisses en $x=2$, alors :",
      steps: [
        "Le reel $2$ est une solution de l'equation $$f(x)=0.$$",
        "On a donc $$f(2)=0.$$",
        "Le point d'intersection avec l'axe des abscisses a pour coordonnees $$(2;0).$$"
      ]
    },
    examQuestions: [
      {
        title: "Question type bac",
        statement: "Lire graphiquement une solution de $f(x)=0$.",
        answer: [
          "On repere les points ou la courbe coupe l'axe des abscisses.",
          "Les abscisses de ces points sont les solutions."
        ]
      },
      {
        title: "Question type bac",
        statement: "Determiner le signe d'une fonction a l'aide d'un graphique.",
        answer: [
          "On repere les intervalles ou la courbe est au-dessus ou en dessous de l'axe des abscisses.",
          "On conclut avec un tableau de signes si necessaire."
        ]
      },
      {
        title: "Question type bac",
        statement: "Interpreter graphiquement un extremum.",
        answer: [
          "On repere le point le plus haut ou le plus bas sur l'intervalle considere.",
          "On donne son abscisse puis la valeur de la fonction."
        ]
      }
    ],
    drills: [
      {
        title: "Reflexe 1",
        text:
          "Sur un graphique, une solution de $f(x)=0$ se lit sur l'axe des abscisses."
      },
      {
        title: "Reflexe 2",
        text:
          "Le signe de la fonction depend de la position de la courbe par rapport a l'axe des abscisses."
      }
    ],
    writingPhrases: [
      {
        title: "Lecture graphique",
        context: "A reutiliser",
        text:
          "Graphiquement, les solutions de l'equation $f(x)=0$ sont les abscisses des points d'intersection de la courbe avec l'axe des abscisses."
      },
      {
        title: "Signe graphique",
        context: "A reutiliser",
        text:
          "La courbe est situee au-dessus de l'axe des abscisses ; on en deduit que la fonction est positive sur cet intervalle."
      }
    ]
  },
  {
    id: "algo",
    title: "Algorithmique et Python",
    summary:
      "Au bac, on peut te demander d'interpreter ou de completer un algorithme. Il faut comprendre les boucles, les conditions et le lien avec les suites ou les probabilites.",
    mustKnow: [
      "Savoir lire une boucle `for` et une boucle `while`.",
      "Savoir interpreter une affectation.",
      "Savoir relier un algorithme a une suite ou a une simulation.",
      "Savoir determiner ce qu'affiche un programme."
    ],
    memoryLines: [
      "Une affectation modifie la valeur d'une variable.",
      "Une boucle `for` repete un nombre fixe d'etapes.",
      "Une boucle `while` repete des instructions tant qu'une condition est vraie.",
      "Un algorithme de simulation ne prouve pas un resultat mathematique, il donne une approximation."
    ],
    vocabulary: [
      {
        word: "Affectation",
        definition:
          "Une affectation remplace l'ancienne valeur d'une variable par une nouvelle valeur.",
        use: "Oui, utile quand tu expliques ligne par ligne un programme."
      },
      {
        word: "Iteration",
        definition:
          "Une iteration correspond a un passage dans une boucle.",
        use: "Oui, surtout pour expliquer une boucle `for` ou `while`."
      }
    ],
    properties: [
      {
        kind: "Propriete",
        title: "Lien avec les suites",
        text:
          "Une boucle iterative permet souvent de calculer les termes successifs d'une suite definie par recurrence."
      },
      {
        kind: "Methode",
        title: "Lire un programme",
        text:
          "On suit pas a pas l'evolution des variables, ligne apres ligne."
      }
    ],
    formulas: [
      {
        label: "Boucle `for`",
        expression: "$$\\text{repeter un nombre fixe de fois}$$",
        note: "Souvent liee a un nombre d'iterations connu."
      },
      {
        label: "Boucle `while`",
        expression: "$$\\text{repeter tant qu'une condition est vraie}$$",
        note: "Tres presente pour les calculs de seuil."
      }
    ],
    methods: [
      {
        title: "Completer un algorithme",
        text:
          "Il faut d'abord comprendre ce qu'il calcule, puis identifier la variable de comptage et la condition d'arret."
      },
      {
        title: "Interpreter un resultat",
        text:
          "On traduit la valeur affichee dans le contexte mathematique de l'exercice."
      }
    ],
    example: {
      title: "Exemple redige",
      text: "On considere un algorithme qui calcule une suite par recurrence.",
      steps: [
        "On initialise la variable avec la valeur de $u_0$.",
        "A chaque tour de boucle, on remplace la variable par la valeur suivante.",
        "Apres $n$ tours, la variable contient le terme $u_n$."
      ]
    },
    examQuestions: [
      {
        title: "Question type bac",
        statement: "Expliquer ce que calcule un programme.",
        answer: [
          "On identifie les variables.",
          "On suit les affectations dans l'ordre.",
          "On traduit ensuite le resultat obtenu dans le contexte de l'exercice."
        ]
      },
      {
        title: "Question type bac",
        statement: "Completer une boucle `while` pour trouver un seuil.",
        answer: [
          "On choisit une condition correspondant au seuil demande.",
          "On incremente le compteur a chaque iteration.",
          "On explique ce que represente la valeur finale du compteur."
        ]
      },
      {
        title: "Question type bac",
        statement: "Relier un algorithme a une suite.",
        answer: [
          "On identifie la variable qui contient le terme courant.",
          "On repere la formule de recurrence dans l'instruction d'actualisation."
        ]
      }
    ],
    drills: [
      {
        title: "Reflexe 1",
        text:
          "Dans un programme, suis les variables une par une sans sauter de ligne."
      },
      {
        title: "Reflexe 2",
        text:
          "Une boucle `while` sert souvent a trouver le premier rang ou un seuil est depasse."
      }
    ],
    writingPhrases: [
      {
        title: "Interpretation d'algorithme",
        context: "A reutiliser",
        text:
          "A chaque iteration, la variable est mise a jour selon la formule de recurrence ; l'algorithme permet donc de calculer successivement les termes de la suite."
      },
      {
        title: "Seuil",
        context: "A reutiliser",
        text:
          "La boucle s'arrete des que la condition n'est plus verifiee ; la valeur obtenue correspond donc au premier rang cherchant le seuil demande."
      }
    ]
  }
];

chapters.splice(
  chapters.findIndex((chapter) => chapter.id === "algo"),
  0,
  {
    id: "equations-diff",
    title: "Equations differentielles",
    summary:
      "Ce chapitre est classique au bac. Il faut savoir reconnaitre une equation differentielle simple, donner la forme generale des solutions, puis utiliser une condition initiale pour determiner la solution particuliere.",
    mustKnow: [
      "Savoir reconnaitre une equation differentielle de la forme $$y'=ay+b$$ ou $$y'=ay$$.",
      "Connaitre la forme generale des solutions de $$y'=ay$$.",
      "Savoir trouver une solution particuliere de $$y'=ay+b$$.",
      "Savoir utiliser une condition initiale pour determiner la constante.",
      "Savoir verifier qu'une fonction est bien solution d'une equation differentielle."
    ],
    memoryLines: [
      "Les solutions de l'equation differentielle $$y'=ay$$ sont les fonctions $$f(x)=Ce^{ax}$$ ou $C$ est une constante reelle.",
      "Une solution particuliere de $$y'=ay+b$$ permet d'obtenir la solution generale.",
      "Une condition initiale permet de determiner la constante inconnue.",
      "Pour verifier qu'une fonction est solution, on la derive puis on remplace dans l'equation."
    ],
    vocabulary: [
      {
        word: "Equation differentielle",
        definition:
          "Une equation differentielle est une equation dans laquelle intervient une fonction inconnue et sa derivee.",
        use: "Oui, c'est le mot de base du chapitre."
      },
      {
        word: "Solution generale",
        definition:
          "La solution generale est l'ensemble de toutes les solutions d'une equation differentielle.",
        use: "Oui, a employer avant de chercher la solution particuliere."
      },
      {
        word: "Condition initiale",
        definition:
          "Une condition initiale donne une valeur de la fonction en un point, par exemple $$f(0)=3$$.",
        use: "Oui, c'est elle qui permet de determiner la constante."
      }
    ],
    properties: [
      {
        kind: "Propriete",
        title: "Equation $$y'=ay$$",
        text:
          "Les solutions de $$y'=ay$$ sont les fonctions $$f(x)=Ce^{ax}$$ avec $$C\\in\\mathbb{R}.$$"
      },
      {
        kind: "Propriete",
        title: "Equation $$y'=ay+b$$",
        text:
          "On cherche d'abord une solution particuliere, puis on ajoute la solution generale de l'equation homogonee associee $$y'=ay.$$"
      },
      {
        kind: "Methode",
        title: "Verification",
        text:
          "Pour verifier qu'une fonction est solution, on calcule sa derivee puis on remplace dans l'equation differentielle."
      }
    ],
    formulas: [
      {
        label: "Solution generale de $$y'=ay$$",
        expression: "$$f(x)=Ce^{ax}$$",
        note: "Formule a connaitre par coeur."
      },
      {
        label: "Condition initiale",
        expression: "$$f(x_0)=y_0$$",
        note: "Elle permet de determiner la constante $$C$$."
      },
      {
        label: "Verification",
        expression: "$$f'(x)=af(x)+b$$",
        note: "On remplace la fonction et sa derivee pour tester si elle est solution."
      }
    ],
    methods: [
      {
        title: "Resoudre $$y'=ay$$",
        text:
          "On ecrit directement la solution generale sous la forme $$f(x)=Ce^{ax}$$."
      },
      {
        title: "Utiliser une condition initiale",
        text:
          "On remplace la valeur donnee dans l'expression generale pour calculer la constante $$C$$."
      },
      {
        title: "Traiter $$y'=ay+b$$",
        text:
          "On cherche une solution particuliere, puis on ajoute la solution generale de l'equation associee $$y'=ay$$."
      }
    ],
    example: {
      title: "Exemple redige",
      text: "Resoudre sur $$\\mathbb{R}$$ l'equation differentielle $$y'=2y$$ avec la condition $$f(0)=3.$$",
      steps: [
        "Les solutions de $$y'=2y$$ sont les fonctions $$f(x)=Ce^{2x}$$.",
        "On utilise ensuite la condition initiale : $$f(0)=Ce^0=C=3.$$",
        "Donc la solution verifiant $$f(0)=3$$ est $$f(x)=3e^{2x}.$$"
      ]
    },
    examQuestions: [
      {
        title: "Question type bac",
        statement: "Resoudre l'equation differentielle $$y'=ay$$.",
        answer: [
          "On reconnait une equation differentielle lineaire simple.",
          "On ecrit directement la solution generale $$f(x)=Ce^{ax}$$.",
          "On precise que $$C$$ est une constante reelle."
        ]
      },
      {
        title: "Question type bac",
        statement: "Determiner la solution verifiant une condition initiale.",
        answer: [
          "On part de la solution generale.",
          "On remplace dans la condition initiale donnee.",
          "On calcule la constante puis on ecrit la solution particuliere."
        ]
      },
      {
        title: "Question type bac",
        statement: "Verifier qu'une fonction est solution d'une equation differentielle.",
        answer: [
          "On calcule la derivee de la fonction proposee.",
          "On remplace ensuite dans l'equation differentielle.",
          "Si l'egalite est verifiee, on conclut que la fonction est bien solution."
        ]
      }
    ],
    drills: [
      {
        title: "Reflexe 1",
        text:
          "Quand tu vois $$y'=ay$$, pense immediatement a $$Ce^{ax}.$$"
      },
      {
        title: "Reflexe 2",
        text:
          "Quand une condition initiale apparait, elle sert a trouver la constante."
      },
      {
        title: "Reflexe 3",
        text:
          "Pour verifier une solution, derive puis remplace dans l'equation."
      }
    ],
    writingPhrases: [
      {
        title: "Solution generale",
        context: "A connaitre par coeur",
        text:
          "Les solutions de l'equation differentielle $$y'=ay$$ sont les fonctions definies sur $$\\mathbb{R}$$ par $$f(x)=Ce^{ax}$$, ou $$C$$ est une constante reelle."
      },
      {
        title: "Condition initiale",
        context: "A reutiliser",
        text:
          "En utilisant la condition initiale, on determine la constante et on obtient la solution particuliere cherchee."
      }
    ]
  }
);

function enrichMathsChapter(chapterId, patch) {
  const chapter = chapters.find((item) => item.id === chapterId);
  if (!chapter) {
    return;
  }

  ["mustKnow", "memoryLines", "properties", "formulas", "methods", "examQuestions", "drills", "writingPhrases", "vocabulary"].forEach((key) => {
    if (patch[key]) {
      chapter[key].push(...patch[key]);
    }
  });
}

enrichMathsChapter("suites", {
  mustKnow: [
    "Savoir etudier la convergence d'une suite geometrique selon la valeur de la raison.",
    "Savoir conjecturer puis demontrer la limite d'une suite definie par recurrence.",
    "Savoir utiliser un raisonnement par seuil avec un algorithme ou une inegalite."
  ],
  memoryLines: [
    "Pour une suite arithmetique, on a $$u_{n+1}=u_n+r.$$",
    "Une suite geometrique est positive si son premier terme est positif et sa raison positive.",
    "Si une suite converge vers $\\ell$ et si $$u_{n+1}=f(u_n)$$, alors on cherche souvent a resoudre $$f(\\ell)=\\ell.$$"
  ],
  vocabulary: [
    {
      word: "Convergente",
      definition: "Une suite est convergente lorsqu'elle admet une limite finie.",
      use: "Oui, a employer dans la conclusion d'une etude de limite."
    }
  ],
  methods: [
    {
      title: "Chercher une limite de suite recurrente",
      text: "On conjecture la limite, puis on utilise souvent la monotonie, l'encadrement ou l'equation $$f(\\ell)=\\ell$$."
    }
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Conjecturer puis demontrer la limite d'une suite definie par recurrence.",
      answer: [
        "On observe les premiers termes ou le contexte pour conjecturer une limite.",
        "On montre ensuite que la suite est monotone et bornee, ou on met en place un encadrement adapte.",
        "On conclut proprement sur la convergence et la valeur de la limite."
      ]
    }
  ],
  writingPhrases: [
    {
      title: "Suite convergente",
      context: "A reutiliser",
      text: "La suite est monotone et bornee ; on en deduit qu'elle est convergente."
    }
  ]
});

enrichMathsChapter("equations-diff", {
  mustKnow: [
    "Savoir reconnaitre l'equation homogonee associee a $$y'=ay+b$$.",
    "Savoir utiliser une solution constante comme solution particuliere de $$y'=ay+b$$ quand c'est possible.",
    "Savoir modeliser une evolution par une equation differentielle simple.",
    "Savoir distinguer solution generale et solution particuliere."
  ],
  memoryLines: [
    "Si $$g$$ est une solution particuliere de $$y'=ay+b$$, alors les solutions de cette equation sont les fonctions $$f=g+Ce^{ax}.$$",
    "Pour $$y'=ay+b$$ avec $$a\\neq 0$$, une solution particuliere constante est souvent $$-\\frac{b}{a}.$$",
    "La solution verifiant une condition initiale est unique dans les cas etudies en Terminale.",
    "Dans une modelisation, la condition initiale provient souvent d'une valeur a l'instant $$t=0$$."
  ],
  vocabulary: [
    {
      word: "Solution particuliere",
      definition: "Une solution particuliere est une solution precise de l'equation differentielle, obtenue en general grace a une condition initiale.",
      use: "Oui, a utiliser pour distinguer l'ensemble des solutions d'une solution determinee."
    },
    {
      word: "Equation homogonee associee",
      definition: "L'equation homogonee associee a $$y'=ay+b$$ est $$y'=ay$$.",
      use: "Oui, utile pour expliquer la methode de resolution de $$y'=ay+b$$."
    }
  ],
  properties: [
    {
      kind: "Propriete",
      title: "Forme generale de $$y'=ay+b$$",
      text: "Si $$a\\neq 0$$, les solutions de $$y'=ay+b$$ sont les fonctions $$f(x)=Ce^{ax}-\\frac{b}{a}.$$"
    },
    {
      kind: "Propriete",
      title: "Solution constante",
      text: "Pour $$y'=ay+b$$ avec $$a\\neq 0$$, la fonction constante $$x\\mapsto -\\frac{b}{a}$$ est une solution particuliere."
    }
  ],
  formulas: [
    {
      label: "Solution generale de $$y'=ay+b$$",
      expression: "$$f(x)=Ce^{ax}-\\frac{b}{a}$$",
      note: "Formule tres importante si $$a\\neq 0$$."
    },
    {
      label: "Solution particuliere constante",
      expression: "$$f(x)=-\\frac{b}{a}$$",
      note: "A tester quand on traite $$y'=ay+b$$."
    },
    {
      label: "Condition initiale en 0",
      expression: "$$f(0)=C-\\frac{b}{a}$$",
      note: "Tres utile pour determiner rapidement $$C$$."
    }
  ],
  methods: [
    {
      title: "Resoudre $$y'=ay+b$$ avec formule directe",
      text: "Si $$a\\neq 0$$, on peut ecrire directement $$f(x)=Ce^{ax}-\\frac{b}{a}$$, puis utiliser la condition initiale."
    },
    {
      title: "Trouver une solution particuliere constante",
      text: "On cherche une constante $$k$$ telle que $$0=ak+b$$. On obtient alors $$k=-\\frac{b}{a}$$ si $$a\\neq 0$$."
    },
    {
      title: "Application de modelisation",
      text: "On identifie la grandeur etudiee, on ecrit l'equation differentielle, puis on utilise la condition initiale pour obtenir la fonction du modele."
    }
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Resoudre l'equation differentielle $$y'=ay+b$$ avec $$a\\neq 0$$.",
      answer: [
        "On reconnait une equation differentielle lineaire du premier ordre a coefficients constants.",
        "On sait que les solutions sont de la forme $$f(x)=Ce^{ax}-\\frac{b}{a}.$$",
        "On precise que $$C$$ est une constante reelle."
      ]
    },
    {
      title: "Question type bac",
      statement: "Determiner la constante a partir d'une condition initiale dans $$y'=ay+b$$.",
      answer: [
        "On remplace la solution generale dans la condition initiale.",
        "On resout l'equation obtenue pour trouver $$C$$.",
        "On ecrit ensuite la solution particuliere."
      ]
    },
    {
      title: "Question type bac",
      statement: "Exploiter une equation differentielle dans un contexte de refroidissement ou de croissance.",
      answer: [
        "On identifie la grandeur modelisee et le sens de variation attendu.",
        "On resout l'equation differentielle proposee.",
        "On utilise la condition initiale donnee par l'enonce.",
        "On interprete la solution dans le contexte."
      ]
    }
  ],
  drills: [
    {
      title: "Reflexe 4",
      text: "Quand tu vois $$y'=ay+b$$ avec $$a\\neq 0$$, pense a la forme $$Ce^{ax}-\\frac{b}{a}.$$"
    },
    {
      title: "Reflexe 5",
      text: "Dans un exercice de modelisation, la donnee a l'instant initial sert presque toujours a fixer la constante."
    }
  ],
  writingPhrases: [
    {
      title: "Equation $$y'=ay+b$$",
      context: "A connaitre par coeur",
      text: "Les solutions de l'equation differentielle $$y'=ay+b$$, avec $$a\\neq 0$$, sont les fonctions definies par $$f(x)=Ce^{ax}-\\frac{b}{a}$$, ou $$C$$ est une constante reelle."
    },
    {
      title: "Verification d'une solution",
      context: "A reutiliser",
      text: "On derive la fonction proposee puis on remplace dans l'equation differentielle ; l'egalite etant verifiee, cette fonction est bien solution."
    },
    {
      title: "Modelisation",
      context: "A reutiliser",
      text: "La condition initiale permet de determiner la constante ; on obtient ainsi la fonction qui modelise l'evolution de la grandeur consideree."
    }
  ]
});

enrichMathsChapter("equations-diff", {
  mustKnow: [
    "Savoir utiliser la methode d'Euler pour approcher une solution d'equation differentielle.",
    "Savoir interpreter graphiquement la methode d'Euler comme une succession de tangentes."
  ],
  memoryLines: [
    "La methode d'Euler fournit une approximation numerique de la solution d'une equation differentielle.",
    "A chaque etape, on utilise la pente donnee par l'equation differentielle."
  ],
  formulas: [
    {
      label: "Euler",
      expression: "$$y_{n+1}=y_n+h\\,f(x_n,y_n)$$",
      note: "Formule d'approximation avec un pas $$h$$."
    }
  ],
  methods: [
    {
      title: "Appliquer la methode d'Euler",
      text: "On part de la condition initiale, on choisit un pas $$h$$, puis on calcule chaque nouvelle valeur a l'aide de la formule de recurrence."
    }
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Completer un tableau de valeurs obtenu par la methode d'Euler.",
      answer: [
        "On identifie la valeur initiale et le pas.",
        "On applique la formule d'Euler a chaque etape.",
        "On remplit ensuite le tableau ligne par ligne."
      ]
    }
  ],
  writingPhrases: [
    {
      title: "Euler",
      context: "A reutiliser",
      text: "La methode d'Euler permet d'obtenir une approximation de la solution en utilisant localement la pente donnee par l'equation differentielle."
    }
  ]
});

enrichMathsChapter("limites", {
  mustKnow: [
    "Savoir distinguer asymptote horizontale, verticale et oblique.",
    "Savoir traiter une limite de quotient de polynomes par comparaison des degres.",
    "Savoir utiliser les croissances comparees entre logarithme, puissances et exponentielle."
  ],
  memoryLines: [
    "L'exponentielle croit plus vite que toute puissance en $+\\infty$.",
    "Toute puissance positive de $x$ croit plus vite que $\\ln(x)$ en $+\\infty$."
  ],
  formulas: [
    {
      label: "Croissance comparee",
      expression: "$$\\lim_{x\\to+\\infty}\\frac{x^n}{e^x}=0$$",
      note: "L'exponentielle domine les puissances."
    }
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Etudier la limite d'un quotient de polynomes.",
      answer: [
        "On compare les degres du numerateur et du denominateur.",
        "On factorise par la plus grande puissance de $x$.",
        "On conclut ensuite sur la limite et l'eventuelle asymptote."
      ]
    }
  ]
});

enrichMathsChapter("derivees", {
  mustKnow: [
    "Savoir deriver une fonction composee simple.",
    "Savoir utiliser la derivee pour resoudre une equation de tangente.",
    "Savoir relier signe de la derivee et tableau de variations."
  ],
  memoryLines: [
    "Si $$f'(x)=0$$ en un point interieur d'un intervalle, ce point est un candidat a un extremum.",
    "L'equation de la tangente en $a$ est $$y=f'(a)(x-a)+f(a).$$"
  ],
  formulas: [
    {
      label: "Tangente en $a$",
      expression: "$$y=f'(a)(x-a)+f(a)$$",
      note: "Formule a connaitre par coeur."
    }
  ],
  methods: [
    {
      title: "Determiner une tangente",
      text: "On calcule d'abord $$f(a)$$ puis $$f'(a)$$, avant d'utiliser la formule de la tangente."
    }
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Determiner l'equation de la tangente a la courbe en un point.",
      answer: [
        "On calcule $$f(a)$$.",
        "On calcule $$f'(a)$$.",
        "On ecrit ensuite $$y=f'(a)(x-a)+f(a).$$"
      ]
    }
  ]
});

enrichMathsChapter("convexite", {
  mustKnow: [
    "Savoir utiliser le signe de $$f''$$ pour etudier la convexite.",
    "Savoir reconnaitre un point d'inflexion."
  ],
  memoryLines: [
    "Si $$f''(x)>0$$ sur un intervalle, alors la fonction est convexe sur cet intervalle.",
    "Un changement de signe de $$f''$$ peut montrer l'existence d'un point d'inflexion."
  ],
  vocabulary: [
    {
      word: "Point d'inflexion",
      definition: "Un point d'inflexion est un point ou la courbe change de convexite.",
      use: "Oui, si la question porte sur le changement de convexite."
    }
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Montrer qu'un point est un point d'inflexion.",
      answer: [
        "On etudie le signe de la derivee seconde.",
        "On verifie qu'elle change de signe au voisinage du point considere.",
        "On conclut qu'il s'agit d'un point d'inflexion."
      ]
    }
  ]
});

enrichMathsChapter("expo-log", {
  mustKnow: [
    "Savoir resoudre des equations et inequations avec $$e^x$$ ou $$\\ln(x)$$.",
    "Savoir utiliser les identites de logarithme dans les calculs.",
    "Savoir etudier une fonction de la forme $$u(x)e^{u(x)}$$ ou $$\\ln(u(x)).$$"
  ],
  memoryLines: [
    "La fonction logarithme ne s'applique qu'a des reels strictement positifs.",
    "La fonction exponentielle est strictement croissante sur $\\mathbb{R}$.",
    "La fonction logarithme ne change pas l'ordre sur $$]0,+\\infty[.$$"
  ],
  vocabulary: [
    {
      word: "Ensemble de definition",
      definition: "C'est l'ensemble des valeurs de $x$ pour lesquelles l'expression a un sens.",
      use: "Oui, surtout avec le logarithme."
    }
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Resoudre une equation contenant un logarithme.",
      answer: [
        "On commence par preciser l'ensemble de definition.",
        "On utilise ensuite les proprietes du logarithme.",
        "On termine en verifiant que les solutions trouvees sont bien definies."
      ]
    }
  ]
});

enrichMathsChapter("primitives", {
  mustKnow: [
    "Savoir reconnaitre les formes $$u'e^u$$ et $$\\dfrac{u'}{u}$$.",
    "Savoir calculer une integrale et l'interpreter graphiquement ou dans un contexte concret.",
    "Savoir tenir compte du signe de la fonction lors d'une interpretation d'aire."
  ],
  memoryLines: [
    "Une primitive n'est definie qu'a une constante pres.",
    "L'integrale orientee peut etre negative si la fonction est negative sur l'intervalle."
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Interpreter une integrale dans un contexte.",
      answer: [
        "On rappelle d'abord ce que represente mathematiquement l'integrale.",
        "On traduit ensuite cette quantite dans le contexte de l'exercice.",
        "On precise l'unite si elle existe."
      ]
    }
  ],
  writingPhrases: [
    {
      title: "Primitive",
      context: "A reutiliser",
      text: "On reconnait ici la derivee d'une fonction composee ; on peut donc proposer une primitive par identification."
    }
  ]
});

enrichMathsChapter("probabilites", {
  mustKnow: [
    "Savoir lire un arbre de probabilites conditionnelles.",
    "Savoir distinguer probabilites conditionnelles, probabilites totales et independance.",
    "Savoir calculer une probabilite d'au moins un succes avec le complementaire."
  ],
  memoryLines: [
    "Deux evenements $$A$$ et $$B$$ sont independants si $$P(A\\cap B)=P(A)P(B).$$",
    "L'evenement contraire est souvent utile pour calculer une probabilite du type \"au moins un\"."
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Calculer la probabilite d'obtenir au moins un succes.",
      answer: [
        "On calcule d'abord la probabilite de l'evenement contraire.",
        "On utilise ensuite la relation $$P(\\overline{A})=1-P(A).$$",
        "On conclut proprement."
      ]
    }
  ],
  writingPhrases: [
    {
      title: "Independance",
      context: "A reutiliser",
      text: "Les evenements sont independants si et seulement si $$P(A\\cap B)=P(A)P(B).$$"
    }
  ]
});

enrichMathsChapter("probabilites", {
  mustKnow: [
    "Savoir calculer l'esperance, la variance et l'ecart type d'une variable aleatoire.",
    "Connaitre l'esperance et la variance de la loi binomiale.",
    "Savoir utiliser la linearite de l'esperance.",
    "Savoir interpreter la loi des grands nombres dans un contexte de frequences."
  ],
  memoryLines: [
    "L'esperance est une valeur moyenne theorique.",
    "La variance mesure la dispersion d'une variable aleatoire autour de son esperance.",
    "L'ecart type est la racine carree de la variance.",
    "Si $$X\\sim\\mathcal{B}(n,p)$$, alors $$V(X)=np(1-p).$$",
    "La loi des grands nombres explique la stabilisation des frequences lorsque le nombre d'epreuves augmente."
  ],
  vocabulary: [
    {
      word: "Esperance",
      definition: "L'esperance d'une variable aleatoire est sa valeur moyenne theorique.",
      use: "Oui, dans toute question d'interpretation ou de calcul de moyenne."
    },
    {
      word: "Variance",
      definition: "La variance mesure l'etalement des valeurs prises par une variable aleatoire autour de son esperance.",
      use: "Oui, dans les questions de dispersion."
    },
    {
      word: "Ecart type",
      definition: "L'ecart type est la racine carree de la variance.",
      use: "A utiliser quand l'enonce demande une mesure de dispersion dans l'unite de la variable."
    },
    {
      word: "Loi des grands nombres",
      definition: "Quand on repete une meme experience aleatoire un grand nombre de fois, la frequence observee se rapproche en general de la probabilite theorique.",
      use: "Oui, dans les questions d'interpretation de simulation ou de frequences."
    }
  ],
  properties: [
    {
      kind: "Propriete",
      title: "Variance et ecart type",
      text: "L'ecart type d'une variable aleatoire $$X$$ est donne par $$\\sigma(X)=\\sqrt{V(X)}.$$"
    },
    {
      kind: "Propriete",
      title: "Loi binomiale",
      text: "Si $$X\\sim\\mathcal{B}(n,p)$$, alors $$E(X)=np$$ et $$V(X)=np(1-p).$$"
    },
    {
      kind: "Propriete",
      title: "Linearite de l'esperance",
      text: "Pour deux variables aleatoires $$X$$ et $$Y$$, on a $$E(X+Y)=E(X)+E(Y).$$"
    }
  ],
  formulas: [
    {
      label: "Variance",
      expression: "$$V(X)=E(X^2)-[E(X)]^2$$",
      note: "Formule utile pour certains calculs."
    },
    {
      label: "Ecart type",
      expression: "$$\\sigma(X)=\\sqrt{V(X)}$$",
      note: "Toujours positif."
    },
    {
      label: "Variance binomiale",
      expression: "$$V(X)=np(1-p)$$",
      note: "A connaitre par coeur pour $$X\\sim\\mathcal{B}(n,p)$$."
    }
  ],
  methods: [
    {
      title: "Calculer une esperance",
      text: "On multiplie chaque valeur par sa probabilite puis on additionne."
    },
    {
      title: "Calculer variance et ecart type",
      text: "On utilise la formule adaptee, puis on prend la racine carree de la variance pour obtenir l'ecart type."
    },
    {
      title: "Interpreter la loi des grands nombres",
      text: "On relie la stabilisation d'une frequence observee a la probabilite theorique lorsque le nombre d'essais augmente."
    }
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Calculer la variance et l'ecart type d'une variable aleatoire.",
      answer: [
        "On calcule d'abord la variance avec la formule appropriee.",
        "On prend ensuite sa racine carree pour obtenir l'ecart type.",
        "On interprete si le contexte le demande."
      ]
    },
    {
      title: "Question type bac",
      statement: "Interpreter un resultat de simulation avec la loi des grands nombres.",
      answer: [
        "On observe l'evolution de la frequence.",
        "On compare cette frequence a la probabilite theorique.",
        "On conclut en invoquant la loi des grands nombres."
      ]
    }
  ],
  drills: [
    {
      title: "Reflexe 3",
      text: "Quand tu vois une loi binomiale, pense aussi a $$V(X)=np(1-p).$$"
    },
    {
      title: "Reflexe 4",
      text: "Quand un enonce parle de frequence qui se stabilise, pense a la loi des grands nombres."
    }
  ],
  writingPhrases: [
    {
      title: "Variance binomiale",
      context: "A reutiliser",
      text: "Comme $$X\\sim\\mathcal{B}(n,p)$$, on a $$E(X)=np$$ et $$V(X)=np(1-p).$$"
    },
    {
      title: "Loi des grands nombres",
      context: "A reutiliser",
      text: "Lorsque le nombre d'experiences augmente, la frequence observee se rapproche de la probabilite theorique ; c'est une illustration de la loi des grands nombres."
    }
  ]
});

enrichMathsChapter("continuite", {
  mustKnow: [
    "Savoir utiliser un tableau de variations pour renforcer un raisonnement de TVI.",
    "Savoir encadrer une solution avec une methode par balayage."
  ],
  memoryLines: [
    "Une fonction strictement monotone ne peut pas prendre deux fois la meme valeur."
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Expliquer pourquoi une solution est unique.",
      answer: [
        "On justifie que la fonction est strictement monotone sur l'intervalle considere.",
        "On explique alors qu'elle ne peut prendre la valeur 0 qu'une seule fois.",
        "On conclut a l'unicite."
      ]
    }
  ]
});

enrichMathsChapter("fonctions", {
  mustKnow: [
    "Savoir passer d'un graphique a une information de signe, de variation ou d'extremum.",
    "Savoir lire graphiquement une tangente et interpreter son coefficient directeur.",
    "Savoir utiliser les symetries usuelles de certaines fonctions de reference."
  ],
  memoryLines: [
    "Une fonction paire a une courbe symetrique par rapport a l'axe des ordonnees.",
    "Une fonction impaire a une courbe symetrique par rapport a l'origine."
  ],
  vocabulary: [
    {
      word: "Extremum",
      definition: "Un extremum est une valeur maximale ou minimale prise par la fonction sur un intervalle.",
      use: "Oui, dans les questions de lecture graphique ou de variations."
    }
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Determiner graphiquement le signe d'une fonction.",
      answer: [
        "On repere les portions de courbe situees au-dessus et au-dessous de l'axe des abscisses.",
        "On identifie ensuite les intervalles de positivite et de negativite.",
        "On conclut avec une phrase claire ou un tableau de signes."
      ]
    }
  ]
});

enrichMathsChapter("algo", {
  mustKnow: [
    "Savoir traduire un algorithme en langage mathematique.",
    "Savoir relier une boucle `while` a la recherche d'un seuil.",
    "Savoir distinguer calcul exact et simulation aleatoire."
  ],
  memoryLines: [
    "Une simulation repose sur le hasard et ne constitue pas une demonstration.",
    "Une variable de comptage sert souvent a representer un rang ou un nombre d'iterations."
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Interpreter une boucle `while` dans un contexte de seuil.",
      answer: [
        "On identifie la condition d'arret.",
        "On explique ce que compte la variable d'iteration.",
        "On conclut sur le premier rang ou le seuil est atteint ou depasse."
      ]
    }
  ],
  writingPhrases: [
    {
      title: "Simulation",
      context: "A reutiliser",
      text: "Cet algorithme simule l'experience un grand nombre de fois ; il permet d'obtenir une estimation, mais pas une preuve mathematique."
    }
  ]
});

enrichMathsChapter("suites", {
  formulas: [
    {
      label: "Suite arithmetico-geometrique",
      expression: "$$u_{n+1}=au_n+b$$",
      note: "Cas classique de recurrence affine."
    }
  ],
  methods: [
    {
      title: "Etudier une recurrence affine",
      text: "On cherche souvent le point fixe $$\\ell$$ verifiant $$\\ell=a\\ell+b$$, puis on etudie $$u_n-\\ell$$."
    }
  ]
});

enrichMathsChapter("limites", {
  vocabulary: [
    {
      word: "Terme dominant",
      definition: "Le terme dominant est celui qui gouverne le comportement de l'expression pour les grandes valeurs de la variable.",
      use: "Oui, utile dans les limites de polynomes et de quotients."
    }
  ],
  properties: [
    {
      kind: "Methode",
      title: "Formes indeterminees",
      text: "Pour lever une forme indeterminee, on factorise, on met au meme denominateur ou on transforme l'ecriture."
    }
  ]
});

enrichMathsChapter("derivees", {
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Determiner les extremums d'une fonction sur un intervalle.",
      answer: [
        "On calcule la derivee et on etudie son signe.",
        "On dresse le tableau de variations.",
        "On compare ensuite les valeurs prises par la fonction sur l'intervalle."
      ]
    }
  ],
  writingPhrases: [
    {
      title: "Variations",
      context: "A reutiliser",
      text: "Comme $$f'(x)$$ est positive sur l'intervalle considere, la fonction $$f$$ y est strictement croissante."
    }
  ]
});

enrichMathsChapter("convexite", {
  properties: [
    {
      kind: "Propriete",
      title: "Position de la tangente",
      text: "Sur un intervalle de convexite, la courbe est au-dessus de ses tangentes."
    }
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Etudier la position relative d'une courbe et de l'une de ses tangentes.",
      answer: [
        "On determine l'expression de la tangente.",
        "On etudie le signe de la difference entre la fonction et la tangente.",
        "On conclut sur la position relative."
      ]
    }
  ]
});

enrichMathsChapter("expo-log", {
  formulas: [
    {
      label: "Equation exponentielle",
      expression: "$$e^u=e^v \\iff u=v$$",
      note: "L'exponentielle est injective."
    },
    {
      label: "Equation logarithmique",
      expression: "$$\\ln(u)=\\ln(v) \\iff u=v \\quad (u>0,v>0)$$",
      note: "Toujours verifier la positivite."
    }
  ],
  vocabulary: [
    {
      word: "Injective",
      definition: "Une fonction est injective lorsqu'elle ne prend jamais deux fois la meme valeur.",
      use: "Utile pour justifier $$e^u=e^v \\Rightarrow u=v$$ ou $$\\ln(u)=\\ln(v) \\Rightarrow u=v$$."
    }
  ]
});

enrichMathsChapter("primitives", {
  properties: [
    {
      kind: "Propriete",
      title: "Valeur moyenne",
      text: "La valeur moyenne de $$f$$ sur $$[a,b]$$ est $$\\frac{1}{b-a}\\int_a^b f(x)\\,dx.$$"
    }
  ],
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Calculer la valeur moyenne d'une fonction sur un intervalle.",
      answer: [
        "On calcule d'abord l'integrale sur l'intervalle.",
        "On divise ensuite par $$b-a$$.",
        "On conclut avec la valeur moyenne."
      ]
    }
  ]
});

enrichMathsChapter("probabilites", {
  formulas: [
    {
      label: "Evenement contraire",
      expression: "$$P(\\overline{A})=1-P(A)$$",
      note: "Tres utile pour les questions \"au moins un\"."
    }
  ],
  methods: [
    {
      title: "Calculer \"au moins un\"",
      text: "On passe souvent par l'evenement contraire \"aucun\" pour simplifier le calcul."
    }
  ]
});

enrichMathsChapter("continuite", {
  writingPhrases: [
    {
      title: "Existence d'une solution",
      context: "A reutiliser",
      text: "Comme $$0$$ est compris entre $$f(a)$$ et $$f(b)$$, le theoreme des valeurs intermediaires assure l'existence d'une solution sur $$[a,b].$$"
    }
  ]
});

enrichMathsChapter("fonctions", {
  formulas: [
    {
      label: "Parite",
      expression: "$$f(-x)=f(x)$$ ou $$f(-x)=-f(x)$$",
      note: "Permet de reconnaitre une fonction paire ou impaire."
    }
  ],
  methods: [
    {
      title: "Etudier la parite",
      text: "On compare $$f(-x)$$ a $$f(x)$$ ou a $$-f(x)$$ sur un ensemble de definition symetrique."
    }
  ]
});

enrichMathsChapter("geometrie", {
  examQuestions: [
    {
      title: "Question type bac",
      statement: "Determiner la droite d'intersection de deux plans.",
      answer: [
        "On resout le systeme forme par les equations des deux plans.",
        "On fait apparaitre un parametre libre.",
        "On ecrit la droite d'intersection sous forme parametrique."
      ]
    }
  ],
  writingPhrases: [
    {
      title: "Intersection de deux plans",
      context: "A reutiliser",
      text: "Les points communs aux deux plans verifient simultanement leurs deux equations ; on obtient ainsi la droite d'intersection."
    }
  ]
});

const mockExams = [
  {
    title: "Sujet blanc 1 - Analyse",
    tag: "Suites, derivees, TVI",
    scenario:
      "Une entreprise suit l'evolution du nombre d'utilisateurs d'une application. Une fonction modélise le nombre d'inscriptions quotidiennes et une suite modélise le nombre total d'abonnes semaine apres semaine.",
    goal:
      "Travailler un enchainement classique du bac avec etude de fonction, existence d'une solution et suite associee.",
    steps: [
      "Etudier les variations d'une fonction et dresser son tableau.",
      "Montrer que l'equation $f(x)=0$ admet une unique solution avec le TVI et la monotonie.",
      "Definir une suite a partir de la fonction et etudier sa convergence.",
      "Rediger proprement chaque conclusion avec le vocabulaire attendu."
    ],
    expected:
      "On attend une redaction type analyse: variations, TVI pour l'existence, monotonie pour l'unicite, puis etude de la suite avec un raisonnement soigne.",
    writing:
      "Phrase cle: \"La fonction est continue sur [a,b] et strictement monotone sur cet intervalle. L'equation admet donc une unique solution sur [a,b].\""
  },
  {
    title: "Sujet blanc 2 - Exponentielle et integrales",
    tag: "Exp, ln, primitives",
    scenario:
      "On etudie la temperature d'un produit qui refroidit au cours du temps. Le modele utilise une fonction exponentielle et l'energie totale dissipee est interpretee avec une integrale.",
    goal:
      "S'entrainer sur les calculs classiques et la redaction avec exponentielle, logarithme et integrale.",
    steps: [
      "Resoudre une equation ou une inequation avec $\\ln$ ou $e^x$.",
      "Deriver puis etudier les variations d'une fonction contenant $e^x$.",
      "Trouver une primitive par reconnaissance de forme.",
      "Calculer une integrale et l'interpreter comme aire."
    ],
    expected:
      "On attend des calculs exacts, des verifications d'ensemble de definition et une interpretation correcte de l'integrale.",
    writing:
      "Phrase cle: \"Comme $e^x>0$ pour tout reel $x$, le signe de la derivee est celui de l'autre facteur.\""
  },
  {
    title: "Sujet blanc 3 - Probabilites",
    tag: "Arbres et loi binomiale",
    scenario:
      "Un service client etudie les reponses a une campagne d'e-mails. On modele l'ouverture des messages par des probabilites conditionnelles puis les clics sur un lien par une loi binomiale.",
    goal:
      "Revoir les probabilites conditionnelles, la formule des probabilites totales et la loi binomiale avec une redaction propre.",
    steps: [
      "Completer un arbre et calculer des probabilites d'intersection.",
      "Utiliser la formule des probabilites totales.",
      "Justifier qu'une variable suit une loi binomiale.",
      "Calculer une probabilite et une esperance."
    ],
    expected:
      "On attend une justification rigoureuse de la loi binomiale et l'utilisation precise du vocabulaire probabiliste.",
    writing:
      "Phrase cle: \"Les repetitions sont independantes, identiques, a deux issues, et la probabilite de succes est constante: la variable suit donc une loi binomiale.\""
  },
  {
    title: "Sujet blanc 4 - Geometrie dans l'espace",
    tag: "Droites, plans, vecteurs",
    scenario:
      "Dans un repere de l'espace, on etudie le trajet d'un drone et un plan representant une facade. Il faut determiner des positions relatives, une intersection et justifier un parallelisme.",
    goal:
      "S'entrainer a rediger avec le bon vocabulaire de geometrie dans l'espace.",
    steps: [
      "Montrer qu'un point appartient a une droite ou a un plan.",
      "Justifier un parallelisme avec des vecteurs colineaires.",
      "Determiner l'intersection d'une droite et d'un plan.",
      "Conclure avec les mots exacts: colineaire, vecteur normal, appartient, orthogonal."
    ],
    expected:
      "On attend l'usage precis des mots colineaire, vecteur normal, appartient et orthogonal.",
    writing:
      "Phrase cle: \"Les vecteurs directeurs sont colineaires ; on en deduit que les deux droites sont paralleles.\""
  },
  {
    title: "Sujet blanc 5 - Suites et algorithmique",
    tag: "Recurrence et Python",
    scenario:
      "Une banque propose un placement et un script Python simule l'evolution du capital. L'eleve doit relier l'algorithme a une suite et analyser le moment ou un seuil est depasse.",
    goal:
      "Relier un algorithme a une suite et savoir rediger une recurrence proprement.",
    steps: [
      "Lire un programme et identifier la variable qui contient le terme courant.",
      "Exprimer la relation de recurrence.",
      "Montrer une propriete sur la suite par recurrence.",
      "Interpreter le resultat affiche par l'algorithme."
    ],
    expected:
      "On attend une interpretation correcte du code, une recurrence bien redigee et une conclusion claire sur le seuil.",
    writing:
      "Phrase cle: \"A chaque iteration, la variable est remplacee par le terme suivant ; l'algorithme calcule donc successivement les termes de la suite.\""
  }
];

const quizQuestions = [
  {
    chapter: "TVI",
    prompt:
      "Pour utiliser le theoreme des valeurs intermediaires, quelle phrase faut-il absolument ecrire ?",
    choices: [
      "La fonction est continue sur $[a,b]$.",
      "La fonction est derivable sur $[a,b]$.",
      "La fonction est croissante sur $[a,b]$."
    ],
    correctIndex: 0,
    explanation:
      "Le TVI demande d'abord la continuite sur l'intervalle. La derivabilite n'est pas necessaire."
  },
  {
    chapter: "Probabilites",
    prompt:
      "Quel mot faut-il utiliser pour justifier une loi binomiale ?",
    choices: [
      "Colineaire",
      "Independante",
      "Convexe"
    ],
    correctIndex: 1,
    explanation:
      "Les repetitions doivent etre independantes pour conclure a une loi binomiale."
  },
  {
    chapter: "Geometrie",
    prompt:
      "Pour montrer que deux droites sont paralleles, que faut-il dire de leurs vecteurs directeurs ?",
    choices: [
      "Ils sont orthogonaux.",
      "Ils sont colineaires.",
      "Ils sont egaux a 1."
    ],
    correctIndex: 1,
    explanation:
      "Le bon vocabulaire est \"colineaires\"."
  },
  {
    chapter: "Variations",
    prompt:
      "Si $f'(x)>0$ sur un intervalle $I$, quelle conclusion est correcte ?",
    choices: [
      "$f$ est strictement croissante sur $I$.",
      "$f$ est convexe sur $I$.",
      "$f$ admet une asymptote sur $I$."
    ],
    correctIndex: 0,
    explanation:
      "Le signe positif de la derivee donne une fonction strictement croissante."
  },
  {
    chapter: "Integrales",
    prompt:
      "Quelle formule faut-il connaitre par coeur pour calculer une integrale ?",
    choices: [
      "$\\int_a^b f(x)\\,dx = F(b)-F(a)$",
      "$\\int_a^b f(x)\\,dx = F(a)-F(b)$",
      "$\\int_a^b f(x)\\,dx = f(b)-f(a)$"
    ],
    correctIndex: 0,
    explanation:
      "On evalue une primitive $F$ aux bornes."
  },
  {
    chapter: "Suites",
    prompt:
      "Quel premier calcul fait-on souvent pour etudier le sens de variation d'une suite ?",
    choices: [
      "$u_n+u_{n+1}$",
      "$u_{n+1}-u_n$",
      "$u_n^2$"
    ],
    correctIndex: 1,
    explanation:
      "Le calcul de $u_{n+1}-u_n$ est le reflexe classique."
  },
  {
    chapter: "TVI",
    prompt:
      "Le theoreme des valeurs intermediaires permet surtout de montrer :",
    choices: [
      "Une existence de solution",
      "Une unicite de solution",
      "Une derivee seconde positive"
    ],
    correctIndex: 0,
    explanation:
      "Le TVI prouve une existence. Pour l'unicite, il faut en plus un argument de monotonie."
  },
  {
    chapter: "Probabilites",
    prompt:
      "Dans la phrase type sur la loi binomiale, quel mot ne doit pas manquer ?",
    choices: [
      "Independantes",
      "Convexes",
      "Asymptotiques"
    ],
    correctIndex: 0,
    explanation:
      "Le mot \"independantes\" est essentiel dans la justification."
  },
  {
    chapter: "Geometrie",
    prompt:
      "Un vecteur normal a un plan sert surtout a :",
    choices: [
      "Montrer un parallelisme entre deux suites",
      "Caracteriser l'equation du plan et l'orthogonalite",
      "Calculer une integrale"
    ],
    correctIndex: 1,
    explanation:
      "Le vecteur normal intervient dans l'equation d'un plan et les questions d'orthogonalite."
  },
  {
    chapter: "Exponentielle",
    prompt:
      "Si tu derives une expression de la forme $e^{u(x)}$, que dois-tu penser a faire ?",
    choices: [
      "Multiplier par $u'(x)$",
      "Diviser par $u'(x)$",
      "Remplacer $e$ par $\\ln$"
    ],
    correctIndex: 0,
    explanation:
      "La derivee de $e^{u(x)}$ est $u'(x)e^{u(x)}$."
  },
  {
    chapter: "Integrales",
    prompt:
      "Si la fonction est negative sur tout l'intervalle, l'integrale represente :",
    choices: [
      "Toujours une aire positive",
      "Une aire algebrique negative",
      "Une suite geometrique"
    ],
    correctIndex: 1,
    explanation:
      "L'integrale est alors negative: on parle d'aire algebrique."
  },
  {
    chapter: "Limites",
    prompt:
      "Quand on etudie une fraction rationnelle a l'infini, quel est le premier reflexe ?",
    choices: [
      "Comparer les degres",
      "Deriver deux fois",
      "Faire un arbre de probabilites"
    ],
    correctIndex: 0,
    explanation:
      "Comparer les degres permet souvent de trouver tout de suite la bonne methode."
  },
  {
    chapter: "Graphique",
    prompt:
      "Les solutions de l'equation $f(x)=0$ se lisent :",
    choices: [
      "Sur l'axe des ordonnees",
      "Comme les abscisses des points d'intersection avec l'axe des abscisses",
      "Dans le tableau des derivations"
    ],
    correctIndex: 1,
    explanation:
      "C'est la phrase classique de lecture graphique a connaitre."
  },
  {
    chapter: "Algorithmique",
    prompt:
      "Une boucle `while` sert souvent au bac a :",
    choices: [
      "Trouver un seuil ou un premier rang",
      "Deriver une fonction",
      "Montrer qu'un plan est normal"
    ],
    correctIndex: 0,
    explanation:
      "Elle est souvent utilisee pour chercher le premier rang ou une condition devient vraie."
  },
  {
    chapter: "TVI",
    prompt:
      "Dans une redaction TVI, apres avoir dit que $f$ est continue sur $[a,b]$, que faut-il verifier ?",
    choices: [
      "Que $f(a)$ et $f(b)$ sont de signes opposes",
      "Que $f'(a)=f'(b)$",
      "Que $f$ est paire"
    ],
    correctIndex: 0,
    explanation:
      "Le changement de signe entre les bornes est l'autre condition classique du TVI."
  },
  {
    chapter: "TVI",
    prompt:
      "Quelle idee faut-il ajouter au TVI pour montrer qu'une solution est unique ?",
    choices: [
      "La monotonie",
      "La convexite",
      "Le produit scalaire"
    ],
    correctIndex: 0,
    explanation:
      "Le TVI donne l'existence, puis la stricte monotonie donne l'unicite."
  },
  {
    chapter: "Probabilites",
    prompt:
      "Dans un arbre de probabilites, pour obtenir la probabilite d'un chemin, on :",
    choices: [
      "additionne les probabilites de la branche",
      "multiplie les probabilites le long de la branche",
      "soustrait la derniere probabilite"
    ],
    correctIndex: 1,
    explanation:
      "Sur une branche d'arbre, on multiplie les probabilites successives."
  },
  {
    chapter: "Probabilites",
    prompt:
      "La formule des probabilites totales sert a :",
    choices: [
      "decomposer une probabilite en plusieurs cas",
      "deriver une fonction",
      "calculer une asymptote"
    ],
    correctIndex: 0,
    explanation:
      "Elle permet de partager le calcul selon une partition de l'univers."
  },
  {
    chapter: "Probabilites",
    prompt:
      "Si $X\\sim \\mathcal{B}(n,p)$, quelle est la formule de $P(X=k)$ ?",
    choices: [
      "$\\binom{n}{k}p^k(1-p)^{n-k}$",
      "$np$",
      "$\\dfrac{k}{n}$"
    ],
    correctIndex: 0,
    explanation:
      "C'est la formule fondamentale de la loi binomiale."
  },
  {
    chapter: "Suites",
    prompt:
      "Si une suite est croissante et majoree, alors :",
    choices: [
      "elle diverge",
      "elle converge",
      "elle est geometrique"
    ],
    correctIndex: 1,
    explanation:
      "C'est le critere de convergence des suites monotones."
  },
  {
    chapter: "Suites",
    prompt:
      "Pour une suite geometrique de raison $q$, quelle formule est correcte ?",
    choices: [
      "$u_n=u_0+ nq$",
      "$u_n=u_0q^n$",
      "$u_n=q^n$ seulement"
    ],
    correctIndex: 1,
    explanation:
      "La formule generale d'une suite geometrique est bien $u_n=u_0q^n$."
  },
  {
    chapter: "Suites",
    prompt:
      "Si $|q|<1$, alors $q^n$ :",
    choices: [
      "tend vers $+\\infty$",
      "tend vers $0$",
      "reste egal a $1$"
    ],
    correctIndex: 1,
    explanation:
      "C'est un resultat de base a connaitre par coeur."
  },
  {
    chapter: "Limites",
    prompt:
      "Si $\\lim\\limits_{x\\to a} f(x)=\\pm\\infty$, la droite d'equation $x=a$ est :",
    choices: [
      "une asymptote verticale",
      "une tangente",
      "une asymptote horizontale"
    ],
    correctIndex: 0,
    explanation:
      "Une limite infinie en un reel donne une asymptote verticale."
  },
  {
    chapter: "Limites",
    prompt:
      "Quelle expression est une forme indeterminee ?",
    choices: [
      "$\\infty-\\infty$",
      "$\\infty+\\infty$",
      "$5+\\infty$"
    ],
    correctIndex: 0,
    explanation:
      "$\\infty-\\infty$ ne permet pas de conclure directement."
  },
  {
    chapter: "Limites",
    prompt:
      "Si $\\lim\\limits_{x\\to +\\infty} f(x)=\\ell$, alors $y=\\ell$ est :",
    choices: [
      "une asymptote horizontale",
      "une asymptote verticale",
      "un vecteur directeur"
    ],
    correctIndex: 0,
    explanation:
      "C'est la definition d'une asymptote horizontale."
  },
  {
    chapter: "Derivation",
    prompt:
      "La derivee d'un produit $(uv)'$ vaut :",
    choices: [
      "$u'v+uv'$",
      "$u'v'$",
      "$\\dfrac{u'}{v'}$"
    ],
    correctIndex: 0,
    explanation:
      "C'est la formule classique de derivation d'un produit."
  },
  {
    chapter: "Derivation",
    prompt:
      "Si $f'(x)<0$ sur un intervalle, alors $f$ est :",
    choices: [
      "strictement croissante",
      "strictement decroissante",
      "constante"
    ],
    correctIndex: 1,
    explanation:
      "Une derivee negative donne une fonction strictement decroissante."
  },
  {
    chapter: "Derivation",
    prompt:
      "Pour montrer qu'une equation $f(x)=0$ a une unique solution, il est tres utile de montrer que $f$ est :",
    choices: [
      "strictement monotone",
      "periodique",
      "impaire"
    ],
    correctIndex: 0,
    explanation:
      "La stricte monotonie permet d'obtenir l'unicite."
  },
  {
    chapter: "Convexite",
    prompt:
      "Si $f''(x)\\geqslant 0$ sur un intervalle, alors $f$ est :",
    choices: [
      "convexe",
      "concave",
      "decroissante"
    ],
    correctIndex: 0,
    explanation:
      "Le signe positif de la derivee seconde donne la convexite."
  },
  {
    chapter: "Convexite",
    prompt:
      "Pour conclure qu'il y a un point d'inflexion en $a$, il faut surtout montrer que :",
    choices: [
      "$f''(a)=0$ seulement",
      "$f''$ change de signe en $a$",
      "$f(a)=0$"
    ],
    correctIndex: 1,
    explanation:
      "Le changement de signe de $f''$ est l'argument essentiel."
  },
  {
    chapter: "Exponentielle",
    prompt:
      "Pour tout reel $x$, on a :",
    choices: [
      "$\\ln(e^x)=x$",
      "$e^{\\ln(x)}=x$ pour tout reel",
      "$\\ln(x)=e^x$"
    ],
    correctIndex: 0,
    explanation:
      "$\\ln(e^x)=x$ est vraie pour tout reel $x$."
  },
  {
    chapter: "Exponentielle",
    prompt:
      "La fonction logarithme est definie sur :",
    choices: [
      "$\\mathbb{R}$",
      "$]0,+\\infty[$",
      "$[-1,+\\infty[$"
    ],
    correctIndex: 1,
    explanation:
      "Le logarithme n'est defini que pour les reels strictement positifs."
  },
  {
    chapter: "Exponentielle",
    prompt:
      "Si $e^a=e^b$, alors :",
    choices: [
      "$a+b=0$",
      "$a=b$",
      "$a=b+1$"
    ],
    correctIndex: 1,
    explanation:
      "L'exponentielle est injective, donc les exposants sont egaux."
  },
  {
    chapter: "Integrales",
    prompt:
      "Une primitive $F$ d'une fonction $f$ verifie :",
    choices: [
      "$F'=f$",
      "$F=f'$",
      "$F''=f$"
    ],
    correctIndex: 0,
    explanation:
      "C'est la definition meme d'une primitive."
  },
  {
    chapter: "Integrales",
    prompt:
      "Une primitive de $e^x$ est :",
    choices: [
      "$e^x$",
      "$\\ln(x)$",
      "$x e^x$"
    ],
    correctIndex: 0,
    explanation:
      "L'exponentielle est sa propre primitive."
  },
  {
    chapter: "Integrales",
    prompt:
      "Si la fonction est positive sur $[a,b]$, alors l'integrale sur $[a,b]$ represente :",
    choices: [
      "une aire geometrique",
      "une asymptote",
      "une probabilite conditionnelle"
    ],
    correctIndex: 0,
    explanation:
      "Dans ce cas, l'integrale represente l'aire sous la courbe."
  },
  {
    chapter: "Geometrie",
    prompt:
      "Deux vecteurs sont colineaires lorsqu'il existe :",
    choices: [
      "un reel $k$ tel que $\\vec u = k\\vec v$",
      "une derivee commune",
      "une integrale nulle"
    ],
    correctIndex: 0,
    explanation:
      "C'est la definition a connaitre par coeur."
  },
  {
    chapter: "Geometrie",
    prompt:
      "Pour verifier qu'un point appartient a un plan, on :",
    choices: [
      "derive l'equation du plan",
      "remplace ses coordonnees dans l'equation du plan",
      "calcule une limite"
    ],
    correctIndex: 1,
    explanation:
      "On teste directement les coordonnees dans l'equation."
  },
  {
    chapter: "Geometrie",
    prompt:
      "Si le vecteur directeur d'une droite est colineaire a un vecteur normal d'un plan, alors la droite est :",
    choices: [
      "orthogonale au plan",
      "contenue dans le plan",
      "toujours secante"
    ],
    correctIndex: 0,
    explanation:
      "C'est le critere classique d'orthogonalite droite-plan."
  },
  {
    chapter: "Graphique",
    prompt:
      "Un antecedent de $y$ par $f$ est :",
    choices: [
      "un reel $x$ tel que $f(x)=y$",
      "la derivee de $f$",
      "le maximum de $f$"
    ],
    correctIndex: 0,
    explanation:
      "C'est la definition exacte d'un antecedent."
  },
  {
    chapter: "Graphique",
    prompt:
      "La pente de la tangente a la courbe en un point est donnee par :",
    choices: [
      "le nombre derive",
      "l'integrale",
      "la probabilite"
    ],
    correctIndex: 0,
    explanation:
      "Le nombre derive donne le coefficient directeur de la tangente."
  },
  {
    chapter: "Algorithmique",
    prompt:
      "Une affectation dans un programme sert a :",
    choices: [
      "remplacer la valeur d'une variable",
      "supprimer une fonction",
      "tracer une courbe"
    ],
    correctIndex: 0,
    explanation:
      "Une affectation met a jour une variable."
  },
  {
    chapter: "Algorithmique",
    prompt:
      "Une iteration correspond a :",
    choices: [
      "un passage dans une boucle",
      "une asymptote oblique",
      "une equation du second degre"
    ],
    correctIndex: 0,
    explanation:
      "Une iteration est un tour de boucle."
  }
];

const courseMemoryQuizQuestions = [
  {
    chapter: "TVI",
    prompt: "Quelle formulation est la bonne redaction type pour montrer l'existence d'une solution avec le TVI ?",
    choices: [
      "La fonction $f$ est continue sur $[a,b]$. De plus, $f(a)$ et $f(b)$ sont de signes opposes. D'apres le theoreme des valeurs intermediaires, il existe au moins un reel $\\alpha\\in[a,b]$ tel que $f(\\alpha)=0$.",
      "La fonction $f$ est derivable sur $[a,b]$, donc il existe un unique reel $\\alpha$ tel que $f(\\alpha)=0$.",
      "La fonction $f$ est positive sur $[a,b]$, donc elle s'annule en $\\alpha$."
    ],
    correctIndex: 0,
    explanation: "Pour le TVI, il faut la continuite sur l'intervalle et un changement de signe."
  },
  {
    chapter: "TVI",
    prompt: "Quelle phrase faut-il connaitre par coeur pour distinguer existence et unicite ?",
    choices: [
      "Le TVI prouve une existence, pas une unicite.",
      "Le TVI prouve toujours l'unicite.",
      "Le TVI remplace le calcul de derivee."
    ],
    correctIndex: 0,
    explanation: "C'est une phrase essentielle a retenir."
  },
  {
    chapter: "Probabilites",
    prompt: "Quelle redaction type permet de justifier qu'une variable suit une loi binomiale ?",
    choices: [
      "L'experience est repetee $n$ fois de maniere identique et independante, avec deux issues possibles: succes ou echec. La probabilite de succes est constante. La variable aleatoire suit donc une loi binomiale.",
      "La variable suit une loi binomiale parce qu'on utilise un arbre.",
      "La variable suit une loi binomiale parce que l'evenement est certain."
    ],
    correctIndex: 0,
    explanation: "Il faut faire apparaitre repetition, independance, deux issues et probabilite constante."
  },
  {
    chapter: "Probabilites",
    prompt: "Quelle est la bonne phrase a retenir pour la formule des probabilites totales ?",
    choices: [
      "Les evenements $A$ et $\\overline{A}$ forment une partition de l'univers. Donc, d'apres la formule des probabilites totales, on a $$P(B)=P(A\\cap B)+P(\\overline{A}\\cap B).$$",
      "Les probabilites totales disent que $$P(B)=P(A)+P(B).$$",
      "Les probabilites totales ne s'utilisent que pour les suites."
    ],
    correctIndex: 0,
    explanation: "La mention de la partition et la formule exacte sont a connaitre par coeur."
  },
  {
    chapter: "Suites",
    prompt: "Quelle phrase faut-il retenir pour conclure a la convergence d'une suite monotone ?",
    choices: [
      "Si une suite est croissante et majoree, alors elle converge.",
      "Si une suite est croissante, alors elle diverge.",
      "Si une suite est geometrique, alors elle converge toujours."
    ],
    correctIndex: 0,
    explanation: "C'est le critere classique de convergence des suites monotones."
  },
  {
    chapter: "Suites",
    prompt: "Quelle phrase est correcte pour une suite geometrique ?",
    choices: [
      "Pour une suite geometrique de raison $q$, on a $u_n = u_0 q^n$.",
      "Pour une suite geometrique, on a $u_n = u_0 + nq$.",
      "Pour une suite geometrique, on a toujours $u_n = q^n$."
    ],
    correctIndex: 0,
    explanation: "La formule generale doit etre retenue exactement."
  },
  {
    chapter: "Limites",
    prompt: "Quelle phrase faut-il connaitre par coeur pour une asymptote verticale ?",
    choices: [
      "Si $\\lim\\limits_{x\\to a} f(x)=\\pm\\infty$, alors la droite d'equation $x=a$ est une asymptote verticale.",
      "Si $\\lim\\limits_{x\\to +\\infty} f(x)=a$, alors $x=a$ est une asymptote verticale.",
      "Si $f(a)=0$, alors $x=a$ est une asymptote verticale."
    ],
    correctIndex: 0,
    explanation: "Il faut bien lier la limite infinie au voisinage de $a$ et la droite $x=a$."
  },
  {
    chapter: "Limites",
    prompt: "Quelle phrase est correcte pour une asymptote horizontale ?",
    choices: [
      "Si $\\lim\\limits_{x\\to +\\infty} f(x)=\\ell$, alors la droite d'equation $y=\\ell$ est une asymptote horizontale en $+\\infty$.",
      "Si $f(\\ell)=0$, alors $y=\\ell$ est une asymptote horizontale.",
      "Si $f'(x)=\\ell$, alors $y=\\ell$ est une asymptote horizontale."
    ],
    correctIndex: 0,
    explanation: "La formulation exacte doit faire apparaitre la limite et la droite $y=\\ell$."
  },
  {
    chapter: "Derivation",
    prompt: "Quelle phrase faut-il retenir pour le lien entre derivee et variations ?",
    choices: [
      "Si $f'(x)>0$ sur un intervalle $I$, alors $f$ est strictement croissante sur $I$.",
      "Si $f'(x)>0$ sur $I$, alors $f$ est convexe sur $I$.",
      "Si $f'(x)>0$ sur $I$, alors $f$ est toujours affine."
    ],
    correctIndex: 0,
    explanation: "Le signe de la derivee donne le sens de variation."
  },
  {
    chapter: "Convexite",
    prompt: "Quelle phrase faut-il retenir pour la convexite ?",
    choices: [
      "Si $f''(x)\\geqslant 0$ sur un intervalle, alors $f$ est convexe sur cet intervalle.",
      "Si $f''(x)\\geqslant 0$ sur un intervalle, alors $f$ est decroissante.",
      "Si $f''(x)=0$ une fois, alors la fonction est convexe partout."
    ],
    correctIndex: 0,
    explanation: "C'est la phrase de base a connaitre sur la derivee seconde."
  },
  {
    chapter: "Exponentielle",
    prompt: "Quelle identite faut-il connaitre parfaitement ?",
    choices: [
      "Pour tout reel $x$, on a $\\ln(e^x)=x$.",
      "Pour tout reel $x$, on a $e^{\\ln(x)}=x$.",
      "Pour tout reel $x$, on a $\\ln(x)=e^x$."
    ],
    correctIndex: 0,
    explanation: "$\\ln(e^x)=x$ est vraie pour tout reel. En revanche, $e^{\\ln(x)}=x$ seulement pour $x>0$."
  },
  {
    chapter: "Integrales",
    prompt: "Quelle phrase de cours faut-il connaitre pour le calcul integral ?",
    choices: [
      "Si $f$ est continue sur $[a,b]$ et $F$ est une primitive de $f$, alors $$\\int_a^b f(x)\\,dx=F(b)-F(a).$$",
      "Si $f$ est continue, alors $$\\int_a^b f(x)\\,dx=f(b)-f(a).$$",
      "Une integrale se calcule toujours avec une derivee."
    ],
    correctIndex: 0,
    explanation: "C'est la formulation de base du calcul integral a memoriser."
  },
  {
    chapter: "Geometrie",
    prompt: "Quelle phrase faut-il retenir sur le parallelisme de deux droites ?",
    choices: [
      "Deux droites sont paralleles si leurs vecteurs directeurs sont colineaires.",
      "Deux droites sont paralleles si leurs vecteurs directeurs sont orthogonaux.",
      "Deux droites sont paralleles si elles ont la meme ordonnee."
    ],
    correctIndex: 0,
    explanation: "Le mot cle a retenir est \"colineaires\"."
  }
];

const writingMemoryQuizQuestions = [
  {
    chapter: "TVI",
    prompt: "Quelle redaction type faut-il utiliser pour conclure avec le TVI ?",
    choices: [
      "La fonction $f$ est continue sur $[a,b]$. De plus, $f(a)$ et $f(b)$ sont de signes opposes. D'apres le theoreme des valeurs intermediaires, il existe au moins un reel $\\alpha\\in[a,b]$ tel que $f(\\alpha)=0$.",
      "La fonction est derivable, donc l'equation admet une unique solution.",
      "La fonction est positive, donc elle s'annule."
    ],
    correctIndex: 0,
    explanation: "Cette phrase est une vraie formulation type de copie."
  },
  {
    chapter: "Probabilites",
    prompt: "Quelle phrase de redaction faut-il utiliser pour justifier une loi binomiale ?",
    choices: [
      "L'experience est repetee $n$ fois de maniere identique et independante, avec deux issues possibles: succes ou echec. La probabilite de succes est constante. La variable aleatoire suit donc une loi binomiale.",
      "On utilise un arbre, donc la variable suit une loi binomiale.",
      "La probabilite vaut 1, donc la variable suit une loi binomiale."
    ],
    correctIndex: 0,
    explanation: "C'est la redaction complete attendue dans une copie."
  },
  {
    chapter: "Suites",
    prompt: "Quelle phrase de redaction faut-il utiliser pour une recurrence ?",
    choices: [
      "Initialisation: la propriete est verifiee au rang $0$. Heredite: supposons qu'il existe un entier naturel $n$ tel que la propriete soit vraie au rang $n$. Montrons qu'elle est encore vraie au rang $n+1$. Conclusion: par recurrence, la propriete est vraie pour tout entier naturel $n$.",
      "On voit que la propriete est vraie, donc c'est fini.",
      "Comme la suite converge, la recurrence est vraie."
    ],
    correctIndex: 0,
    explanation: "Cette structure de redaction est a connaitre presque mot pour mot."
  },
  {
    chapter: "Geometrie",
    prompt: "Quelle phrase de redaction faut-il utiliser pour conclure a un parallelisme ?",
    choices: [
      "Les vecteurs directeurs des deux droites sont colineaires ; on en deduit que ces deux droites sont paralleles.",
      "Les deux droites sont paralleles car elles se ressemblent.",
      "Les vecteurs sont egaux, donc les plans sont secants."
    ],
    correctIndex: 0,
    explanation: "Le mot cle est \"colineaires\" et la conclusion doit etre explicite."
  },
  {
    chapter: "Integrales",
    prompt: "Quelle phrase de redaction faut-il utiliser pour calculer une integrale ?",
    choices: [
      "La fonction $f$ admet pour primitive $F$ sur l'intervalle considere. Donc $$\\int_a^b f(x)\\,dx = F(b)-F(a).$$",
      "Comme la fonction existe, l'integrale vaut $f(b)-f(a)$.",
      "On derive puis on integre directement."
    ],
    correctIndex: 0,
    explanation: "C'est la formulation de redaction la plus classique."
  }
];

const vocabMemoryQuizQuestions = [
  {
    chapter: "Geometrie",
    prompt: "Quelle definition correcte correspond au mot \"colineaires\" ?",
    choices: [
      "Deux vecteurs sont colineaires lorsqu'il existe un reel $k$ tel que $\\vec{u}=k\\vec{v}$.",
      "Deux vecteurs sont colineaires lorsqu'ils sont perpendiculaires.",
      "Deux vecteurs sont colineaires lorsqu'ils ont la meme norme."
    ],
    correctIndex: 0,
    explanation: "C'est la definition exacte a connaitre."
  },
  {
    chapter: "TVI",
    prompt: "Quelle definition simple faut-il retenir pour le mot \"continue\" ?",
    choices: [
      "Une fonction est continue sur un intervalle lorsqu'on peut la tracer sans lever le crayon sur cet intervalle.",
      "Une fonction est continue quand elle est toujours positive.",
      "Une fonction est continue quand sa derivee est nulle."
    ],
    correctIndex: 0,
    explanation: "C'est la definition intuitive utile dans la copie."
  },
  {
    chapter: "Derivation",
    prompt: "Que signifie \"strictement croissante\" ?",
    choices: [
      "Si $a<b$, alors $f(a)<f(b)$.",
      "Si $a<b$, alors $f(a)>f(b)$.",
      "Si $a=b$, alors $f(a)=f(b)$."
    ],
    correctIndex: 0,
    explanation: "C'est la bonne definition du vocabulaire de variation."
  },
  {
    chapter: "Probabilites",
    prompt: "Que signifie \"independantes\" pour deux experiences ?",
    choices: [
      "Le resultat de l'une n'influence pas le resultat de l'autre.",
      "Les deux experiences donnent toujours le meme resultat.",
      "Les deux experiences ont la meme probabilite."
    ],
    correctIndex: 0,
    explanation: "C'est le bon sens du vocabulaire probabiliste."
  },
  {
    chapter: "Integrales",
    prompt: "Quelle definition correcte correspond a une primitive ?",
    choices: [
      "Une primitive de $f$ est une fonction $F$ telle que $F'=f$.",
      "Une primitive de $f$ est une fonction $F$ telle que $F=f'$.",
      "Une primitive de $f$ est la limite de $f$."
    ],
    correctIndex: 0,
    explanation: "C'est la definition obligatoire du chapitre."
  }
];

const toolboxQuizQuestions = [
  {
    chapter: "Boite a outils",
    prompt: "Quelle est la derivee correcte de $$x^n$$ ?",
    choices: [
      "$$nx^{n-1}$$",
      "$$x^{n-1}$$",
      "$$n x^n$$"
    ],
    correctIndex: 0,
    explanation: "Pour tout entier naturel $n\\geqslant 1$, on a $$(x^n)' = nx^{n-1}.$$"
  },
  {
    chapter: "Boite a outils",
    prompt: "Quelle est la derivee correcte de $$\\frac{1}{x}$$ ?",
    choices: [
      "$$-\\frac{1}{x^2}$$",
      "$$\\frac{1}{x^2}$$",
      "$$-\\frac{1}{x}$$"
    ],
    correctIndex: 0,
    explanation: "Il faut bien garder le signe negatif: $$\\left(\\frac{1}{x}\\right)'=-\\frac{1}{x^2}.$$"
  },
  {
    chapter: "Boite a outils",
    prompt: "Quelle est la derivee de $$e^x$$ ?",
    choices: [
      "$$e^x$$",
      "$$xe^{x-1}$$",
      "$$\\ln(x)$$"
    ],
    correctIndex: 0,
    explanation: "L'exponentielle est sa propre derivee."
  },
  {
    chapter: "Boite a outils",
    prompt: "Quelle est la derivee correcte de $$\\ln(x)$$ ?",
    choices: [
      "$$\\frac{1}{x}$$ pour $$x>0$$",
      "$$\\frac{1}{x^2}$$ pour $$x>0$$",
      "$$\\ln(x)$$"
    ],
    correctIndex: 0,
    explanation: "La formule correcte est $$\\left(\\ln(x)\\right)'=\\frac{1}{x}$$ sur $$]0,+\\infty[$$."
  },
  {
    chapter: "Boite a outils",
    prompt: "Quelle est la primitive correcte de $$e^x$$ ?",
    choices: [
      "$$e^x + C$$",
      "$$xe^x + C$$",
      "$$\\ln(x) + C$$"
    ],
    correctIndex: 0,
    explanation: "L'exponentielle garde la meme forme en primitive."
  },
  {
    chapter: "Boite a outils",
    prompt: "Quelle primitive faut-il reconnaitre pour la forme $$\\frac{u'(x)}{u(x)}$$ ?",
    choices: [
      "$$\\ln(u(x)) + C$$",
      "$$u(x)^2 + C$$",
      "$$\\frac{1}{u(x)} + C$$"
    ],
    correctIndex: 0,
    explanation: "Si $$u(x)>0$$ sur l'intervalle, alors $$\\int \\frac{u'(x)}{u(x)}\\,dx = \\ln(u(x)) + C.$$"
  },
  {
    chapter: "Boite a outils",
    prompt: "Quelle primitive faut-il reconnaitre pour la forme $$u'(x)e^{u(x)}$$ ?",
    choices: [
      "$$e^{u(x)} + C$$",
      "$$u(x)e^{u(x)} + C$$",
      "$$\\ln(u(x)) + C$$"
    ],
    correctIndex: 0,
    explanation: "C'est l'une des formes composees les plus classiques a reconnaitre."
  },
  {
    chapter: "Boite a outils",
    prompt: "Que vaut $$\\int_a^b f(x)\\,dx$$ si $$F$$ est une primitive de $$f$$ ?",
    choices: [
      "$$F(b)-F(a)$$",
      "$$f(b)-f(a)$$",
      "$$F(a)-F(b)$$"
    ],
    correctIndex: 0,
    explanation: "Il faut utiliser la primitive: $$\\int_a^b f(x)\\,dx = F(b)-F(a).$$"
  },
  {
    chapter: "Boite a outils",
    prompt: "Quelle limite usuelle faut-il retenir pour $$\\frac{1}{x}$$ lorsque $$x\\to +\\infty$$ ?",
    choices: [
      "$$0$$",
      "$$+\\infty$$",
      "$$1$$"
    ],
    correctIndex: 0,
    explanation: "C'est un reflexe de base en etude de limites et en factorisation."
  },
  {
    chapter: "Boite a outils",
    prompt: "Laquelle de ces phrases est vraie sur les croissances comparees ?",
    choices: [
      "$$\\lim_{x\\to +\\infty} \\frac{\\ln(x)}{x} = 0$$",
      "$$\\lim_{x\\to +\\infty} \\frac{x}{\\ln(x)} = 0$$",
      "$$\\lim_{x\\to +\\infty} \\ln(x) = 0$$"
    ],
    correctIndex: 0,
    explanation: "Le logarithme croit moins vite que $x$, donc le quotient $$\\frac{\\ln(x)}{x}$$ tend vers 0."
  },
  {
    chapter: "Boite a outils",
    prompt: "Quelle identite exponentielle est correcte ?",
    choices: [
      "$$e^{a+b}=e^ae^b$$",
      "$$e^{a+b}=e^a+e^b$$",
      "$$e^{ab}=e^a e^b$$"
    ],
    correctIndex: 0,
    explanation: "Il faut connaitre par coeur la regle $$e^{a+b}=e^a e^b.$$"
  },
  {
    chapter: "Boite a outils",
    prompt: "Quelle identite logarithmique est correcte pour $$a>0$$ et $$b>0$$ ?",
    choices: [
      "$$\\ln(ab)=\\ln(a)+\\ln(b)$$",
      "$$\\ln(a+b)=\\ln(a)+\\ln(b)$$",
      "$$\\ln(ab)=\\ln(a)\\ln(b)$$"
    ],
    correctIndex: 0,
    explanation: "Le logarithme transforme un produit en somme, pas une somme."
  },
  {
    chapter: "Boite a outils",
    prompt: "Quelle formule donne une probabilite conditionnelle ?",
    choices: [
      "$$P_A(B)=\\frac{P(A\\cap B)}{P(A)}$$",
      "$$P_A(B)=P(A\\cap B)P(A)$$",
      "$$P_A(B)=\\frac{P(B)}{P(A)}$$"
    ],
    correctIndex: 0,
    explanation: "La formule correcte suppose bien que $$P(A)>0$$."
  },
  {
    chapter: "Boite a outils",
    prompt: "Quelle formule correspond a la loi binomiale $$X\\sim \\mathcal{B}(n,p)$$ ?",
    choices: [
      "$$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$$",
      "$$P(X=k)=np$$",
      "$$P(X=k)=\\frac{p^k}{n}$$"
    ],
    correctIndex: 0,
    explanation: "C'est la formule exacte a connaitre pour une variable binomiale."
  },
  {
    chapter: "Boite a outils",
    prompt: "Quel piege faut-il eviter avec la primitive de $$\\frac{1}{x}$$ ?",
    choices: [
      "Verifier le domaine et travailler sur un intervalle de signe fixe.",
      "Remplacer toujours par $$\\ln(|x|)$$ sans jamais justifier.",
      "Dire que la primitive n'existe pas."
    ],
    correctIndex: 0,
    explanation: "Au niveau Terminale, il faut surtout verifier le domaine et justifier l'intervalle de definition."
  },
  {
    chapter: "Boite a outils",
    prompt: "Quel piege classique faut-il retenir pour un quotient $$\\frac{u}{v}$$ ?",
    choices: [
      "Il n'existe pas de formule automatique simple pour une primitive de quotient.",
      "La primitive est toujours $$\\frac{u'v-uv'}{v^2}$$.",
      "On peut toujours integrer numerateur et denominateur separement."
    ],
    correctIndex: 0,
    explanation: "La formule $$\\frac{u'v-uv'}{v^2}$$ est celle de la derivee, pas d'une primitive."
  }
];

window.mathsQuizCatalog = {
  mixed: quizQuestions,
  toolbox: toolboxQuizQuestions,
  memoryCourse: courseMemoryQuizQuestions,
  memoryWriting: writingMemoryQuizQuestions,
  memoryVocab: vocabMemoryQuizQuestions,
  chapterModes: {
    "chapter-suites": ["Suites"],
    "chapter-limites": ["Limites", "TVI"],
    "chapter-derivees": ["Derivation", "Convexite", "Exponentielle", "Integrales"],
    "chapter-probabilites": ["Probabilites"],
    "chapter-geometrie": ["Geometrie", "Graphique"],
    "chapter-equations-diff": ["Equations differentielles"]
  }
};

const isQuizCenterPage = document.body && document.body.dataset.page === "quiz-center";

const derivativeReference = [
  { label: "Constante", expression: "$$(k)' = 0$$", note: "La derivee d'une constante est toujours nulle." },
  { label: "Identite", expression: "$$(x)' = 1$$", note: "Formule de base a connaitre." },
  { label: "Puissance", expression: "$$(x^n)' = nx^{n-1}$$", note: "Pour tout entier naturel $n\\geqslant 1$." },
  { label: "Inverse", expression: "$$\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}$$", note: "Valable pour $x \\neq 0$." },
  { label: "Racine carree", expression: "$$(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$$", note: "Valable pour $x>0$." },
  { label: "Exponentielle", expression: "$$(e^x)' = e^x$$", note: "L'exponentielle est sa propre derivee." },
  { label: "Logarithme", expression: "$$(\\ln x)' = \\frac{1}{x}$$", note: "Valable pour $x>0$." },
  { label: "Produit", expression: "$$(uv)' = u'v + uv'$$", note: "Formule classique a utiliser souvent." },
  { label: "Quotient", expression: "$$\\left(\\frac{u}{v}\\right)' = \\frac{u'v-uv'}{v^2}$$", note: "A condition que $v\\neq 0$." },
  { label: "Composee exponentielle", expression: "$$\\left(e^{u(x)}\\right)' = u'(x)e^{u(x)}$$", note: "Tres utile en exponentielle." },
  { label: "Composee logarithme", expression: "$$\\left(\\ln(u(x))\\right)' = \\frac{u'(x)}{u(x)}$$", note: "Valable lorsque $u(x)>0$." }
];

const primitiveReference = [
  { label: "Constante", expression: "$$\\int k\\,dx = kx + C$$", note: "Pour tout reel $k$." },
  { label: "Puissance", expression: "$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}+C \\quad (n\\neq -1)$$", note: "Formule fondamentale." },
  { label: "Inverse", expression: "$$\\int \\frac{1}{x}\\,dx = \\ln(x)+C$$", note: "Sur un intervalle de nombres strictement positifs." },
  { label: "Exponentielle", expression: "$$\\int e^x\\,dx = e^x + C$$", note: "A connaitre absolument." },
  { label: "Forme $u'e^u$", expression: "$$\\int u'(x)e^{u(x)}\\,dx = e^{u(x)} + C$$", note: "Reflexe classique en Terminale." },
  { label: "Forme $\\dfrac{u'}{u}$", expression: "$$\\int \\frac{u'(x)}{u(x)}\\,dx = \\ln(u(x)) + C$$", note: "Valable si $u(x)>0$." },
  { label: "Lineaire simple", expression: "$$\\int (ax+b)\\,dx = \\frac{a}{2}x^2 + bx + C$$", note: "A retrouver rapidement en exercice." },
  { label: "Calcul integral", expression: "$$\\int_a^b f(x)\\,dx = F(b)-F(a)$$", note: "Ou $F$ est une primitive de $f$." }
];

const limitReference = [
  { label: "Inverse a l'infini", expression: "$$\\lim_{x\\to +\\infty} \\frac{1}{x} = 0$$", note: "Reflexe de base en factorisation." },
  { label: "Puissance", expression: "$$\\lim_{x\\to +\\infty} x^n = +\\infty$$", note: "Pour tout entier naturel $n\\geqslant 1$." },
  { label: "Logarithme", expression: "$$\\lim_{x\\to +\\infty} \\ln(x) = +\\infty$$", note: "Croissance lente mais infinie." },
  { label: "Exponentielle", expression: "$$\\lim_{x\\to +\\infty} e^x = +\\infty$$", note: "Croissance tres rapide." },
  { label: "Croissance comparee", expression: "$$\\lim_{x\\to +\\infty} \\frac{\\ln(x)}{x} = 0$$", note: "Le logarithme croit moins vite que $x$." },
  { label: "Asymptote verticale", expression: "$$\\lim_{x\\to a} f(x) = \\pm\\infty$$", note: "La droite $x=a$ est alors asymptote verticale." }
];

const coreLawsReference = [
  { label: "Identite exponentielle", expression: "$$e^{a+b} = e^a e^b$$", note: "A connaitre par coeur." },
  { label: "Identite logarithme", expression: "$$\\ln(ab) = \\ln(a) + \\ln(b)$$", note: "Pour $a>0$ et $b>0$." },
  { label: "Reciprocite", expression: "$$\\ln(e^x)=x \\quad \\text{et} \\quad e^{\\ln(x)}=x$$", note: "La seconde formule vaut pour $x>0$." },
  { label: "Probabilite conditionnelle", expression: "$$P_A(B)=\\frac{P(A\\cap B)}{P(A)}$$", note: "Avec $P(A)>0$." },
  { label: "Probabilites totales", expression: "$$P(B)=P(A\\cap B)+P(\\overline{A}\\cap B)$$", note: "Si $A$ et $\\overline{A}$ forment une partition." },
  { label: "Loi binomiale", expression: "$$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$$", note: "Pour $X \\sim \\mathcal{B}(n,p)$." },
  { label: "Variance binomiale", expression: "$$V(X)=np(1-p)$$", note: "Pour $X \\sim \\mathcal{B}(n,p)$." },
  { label: "Ecart type", expression: "$$\\sigma(X)=\\sqrt{V(X)}$$", note: "Definition a retenir." },
  { label: "Euler", expression: "$$y_{n+1}=y_n+h\\,f(x_n,y_n)$$", note: "Approximation numerique d'une solution d'equation differentielle." }
];

const finalReferenceSheet = [
  {
    functionName: "$$k$$",
    domain: "$$\\mathbb{R}$$",
    derivative: "$$0$$",
    primitive: "$$kx + C$$",
    trap: "Ne pas oublier que la derivee d'une constante vaut toujours 0."
  },
  {
    functionName: "$$x$$",
    domain: "$$\\mathbb{R}$$",
    derivative: "$$1$$",
    primitive: "$$\\frac{x^2}{2} + C$$",
    trap: "Base indispensable pour tous les calculs."
  },
  {
    functionName: "$$x^n$$",
    domain: "$$\\mathbb{R}$$",
    derivative: "$$nx^{n-1}$$",
    primitive: "$$\\frac{x^{n+1}}{n+1} + C \\quad (n\\neq -1)$$",
    trap: "La formule de primitive ne marche pas pour $n=-1$."
  },
  {
    functionName: "$$\\frac{1}{x}$$",
    domain: "$$\\mathbb{R}\\setminus\\{0\\}$$",
    derivative: "$$-\\frac{1}{x^2}$$",
    primitive: "$$\\ln(x) + C$$ sur $$]0,+\\infty[$$",
    trap: "Attention au domaine: pour la primitive avec $\\ln$, il faut un intervalle de signes fixes."
  },
  {
    functionName: "$$\\sqrt{x}$$",
    domain: "$$[0,+\\infty[$$",
    derivative: "$$\\frac{1}{2\\sqrt{x}}$$",
    primitive: "$$\\frac{2}{3}x^{3/2}+C$$",
    trap: "La derivee n'existe que pour $x>0$."
  },
  {
    functionName: "$$e^x$$",
    domain: "$$\\mathbb{R}$$",
    derivative: "$$e^x$$",
    primitive: "$$e^x + C$$",
    trap: "L'exponentielle garde la meme forme en derivee comme en primitive."
  },
  {
    functionName: "$$\\ln(x)$$",
    domain: "$$]0,+\\infty[$$",
    derivative: "$$\\frac{1}{x}$$",
    primitive: "$$x\\ln(x)-x + C$$",
    trap: "Toujours verifier que $x>0$."
  },
  {
    functionName: "$$u(x)e^{u(x)}$$ ou $$u'(x)e^{u(x)}$$",
    domain: "Selon $u$",
    derivative: "Selon l'expression",
    primitive: "$$e^{u(x)} + C$$ si la forme est $$u'(x)e^{u(x)}$$",
    trap: "Il faut reconnaitre exactement la forme $u'e^u$."
  },
  {
    functionName: "$$\\frac{u'(x)}{u(x)}$$",
    domain: "$$u(x)>0$$",
    derivative: "Selon $u$",
    primitive: "$$\\ln(u(x)) + C$$",
    trap: "Verifier que $u(x)$ ne s'annule pas et reste positif sur l'intervalle."
  },
  {
    functionName: "$$\\frac{u}{v}$$",
    domain: "$$v(x)\\neq 0$$",
    derivative: "$$\\frac{u'v-uv'}{v^2}$$",
    primitive: "Pas de formule automatique",
    trap: "Ne pas inventer de primitive simple pour un quotient."
  },
  {
    functionName: "$$AB$$ dans l'espace",
    domain: "$$A(x_A;y_A;z_A),\\ B(x_B;y_B;z_B)$$",
    derivative: "$$\\overrightarrow{AB}(x_B-x_A;y_B-y_A;z_B-z_A)$$",
    primitive: "$$AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$$",
    trap: "Former d'abord le vecteur $$\\overrightarrow{AB}$$, puis calculer sa norme."
  },
  {
    functionName: "$$d(M,P)$$",
    domain: "$$M(x_M;y_M;z_M),\\ P:ax+by+cz+d=0$$",
    derivative: "$$|ax_M+by_M+cz_M+d|$$",
    primitive: "$$d(M,P)=\\frac{|ax_M+by_M+cz_M+d|}{\\sqrt{a^2+b^2+c^2}}$$",
    trap: "Ne pas oublier la valeur absolue au numerateur ni le $$\\sqrt{a^2+b^2+c^2}$$ au denominateur."
  }
];

window.mathsCourseData = {
  chapters,
  mockExams,
  toolbox: {
    derivatives: derivativeReference,
    primitives: primitiveReference,
    limits: limitReference,
    laws: coreLawsReference,
    reference: finalReferenceSheet
  },
  static: {
    mixed: quizQuestions,
    toolbox: toolboxQuizQuestions,
    memoryCourse: courseMemoryQuizQuestions,
    memoryWriting: writingMemoryQuizQuestions,
    memoryVocab: vocabMemoryQuizQuestions
  },
  chapterModes: window.mathsQuizCatalog.chapterModes
};

const chapterTemplate = document.querySelector("#chapter-template");
const chaptersContainer = document.querySelector("#chapters-container");
const chapterNav = document.querySelector("#chapter-nav");
const searchInput = document.querySelector("#search-input");
const toggleAllButton = document.querySelector("#toggle-all");
const chapterCount = document.querySelector("#chapter-count");
const mockExamsContainer = document.querySelector("#mock-exams");
const quizBox = document.querySelector("#quiz-box");
const newQuizButton = document.querySelector("#new-quiz");
const quizModeSelect = document.querySelector("#quiz-mode");
const mistakesBox = document.querySelector("#mistakes-box");
const derivativesBox = document.querySelector("#derivatives-box");
const primitivesBox = document.querySelector("#primitives-box");
const limitsBox = document.querySelector("#limits-box");
const coreLawsBox = document.querySelector("#core-laws-box");
const referenceSheetBox = document.querySelector("#reference-sheet");
const toolboxTabs = [...document.querySelectorAll(".toolbox-tab")];
const toolboxPanes = [...document.querySelectorAll(".toolbox-pane")];
const progressCompleted = document.querySelector("#progress-completed");
const progressFavorites = document.querySelector("#progress-favorites");
const progressBestQuiz = document.querySelector("#progress-best-quiz");
const progressLastChapter = document.querySelector("#progress-last-chapter");

let areAllOpen = false;
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
const storageKey = "maths-terminale-app-state";
let appState = loadAppState();

function loadAppState() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      return {
        favorites: [],
        completed: [],
        bestQuiz: 0,
        bestQuizTotal: 0,
        lastChapter: "",
        recentQuizPrompts: [],
        mistakePrompts: []
      };
    }

    return {
      favorites: [],
      completed: [],
      bestQuiz: 0,
      bestQuizTotal: 0,
      lastChapter: "",
      recentQuizPrompts: [],
      mistakePrompts: [],
      ...JSON.parse(raw)
    };
  } catch (error) {
    return {
      favorites: [],
      completed: [],
      bestQuiz: 0,
      bestQuizTotal: 0,
      lastChapter: "",
      recentQuizPrompts: [],
      mistakePrompts: []
    };
  }
}

function saveAppState() {
  window.localStorage.setItem(storageKey, JSON.stringify(appState));
}

function toggleStoredId(collectionName, id) {
  const collection = new Set(appState[collectionName]);
  if (collection.has(id)) {
    collection.delete(id);
  } else {
    collection.add(id);
  }
  appState[collectionName] = [...collection];
  saveAppState();
}

function isFavorite(id) {
  return appState.favorites.includes(id);
}

function isCompleted(id) {
  return appState.completed.includes(id);
}

function updateDashboard() {
  if (!progressCompleted || !progressFavorites || !progressBestQuiz || !progressLastChapter) {
    return;
  }

  progressCompleted.textContent = String(appState.completed.length);
  progressFavorites.textContent = String(appState.favorites.length);
  progressBestQuiz.textContent = `${appState.bestQuiz}/${appState.bestQuizTotal}`;

  const lastChapter = chapters.find((chapter) => chapter.id === appState.lastChapter);
  progressLastChapter.textContent = lastChapter ? lastChapter.title : "Aucun";
}

function syncChapterChips(card, chapterId) {
  const favoriteChip = card.querySelector(".favorite-chip");
  const completeChip = card.querySelector(".complete-chip");

  favoriteChip.classList.toggle("is-active", isFavorite(chapterId));
  completeChip.classList.toggle("is-active", isCompleted(chapterId));
  favoriteChip.textContent = isFavorite(chapterId) ? "En favori" : "Ajouter aux favoris";
  completeChip.textContent = isCompleted(chapterId) ? "Chapitre revise" : "Marquer comme revise";
}

function createList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function createVocabCards(vocabulary) {
  return vocabulary
    .map(
      (item) => `
        <article class="vocab-card">
          <span class="vocab-use">${item.use}</span>
          <h4>${item.word}</h4>
          <p>${item.definition}</p>
        </article>
      `
    )
    .join("");
}

function createPropertyCards(properties) {
  return properties
    .map(
      (property) => `
        <article class="property-card">
          <span class="property-kind">${property.kind}</span>
          <h4>${property.title}</h4>
          <p>${property.text}</p>
        </article>
      `
    )
    .join("");
}

function createFormulaCards(formulas) {
  return formulas
    .map(
      (formula) => `
        <article class="formula-card">
          <h4>${formula.label}</h4>
          <div class="formula-expression math-block">${formula.expression}</div>
          <p>${formula.note}</p>
        </article>
      `
    )
    .join("");
}

function createMethodCards(methods) {
  return methods
    .map(
      (method) => `
        <article class="method-card">
          <h4>${method.title}</h4>
          <p>${method.text}</p>
        </article>
      `
    )
    .join("");
}

function createExamCards(examQuestions) {
  return examQuestions
    .map(
      (question) => `
        <article class="exam-card">
          <h4>${question.title}</h4>
          <p><strong>Enonce.</strong> ${question.statement}</p>
          <ol>${question.answer.map((step) => `<li>${step}</li>`).join("")}</ol>
        </article>
      `
    )
    .join("");
}

function createDrillCards(drills) {
  return drills
    .map(
      (drill) => `
        <article class="drill-card">
          <h4>${drill.title}</h4>
          <p>${drill.text}</p>
        </article>
      `
    )
    .join("");
}

function createWritingCards(writingPhrases) {
  return writingPhrases
    .map(
      (item) => `
        <article class="writing-card">
          <span class="writing-tag">${item.context}</span>
          <h4>${item.title}</h4>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function createExampleCard(example) {
  return `
    <article class="example-card">
      <h4>${example.title}</h4>
      <p>${example.text}</p>
      <ol>${example.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </article>
  `;
}

function createMockCards(exams) {
  return exams
    .map(
      (exam) => `
        <article class="mock-card">
          <span class="mock-tag">${exam.tag}</span>
          <h4>${exam.title}</h4>
          <div class="mock-context">
            <p><strong>Mise en situation.</strong> ${exam.scenario || exam.goal}</p>
          </div>
          <p>${exam.goal}</p>
          <ol>${exam.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
          <div class="mock-expected">
            <p><strong>Ce qu'on attend.</strong> ${exam.expected || exam.writing}</p>
          </div>
          <p><strong>Redaction type.</strong> ${exam.writing}</p>
        </article>
      `
    )
    .join("");
}

function createMistakeCards(mistakes) {
  if (mistakes.length === 0) {
    return `
      <article class="mistake-card">
        <h4>Aucune erreur enregistree</h4>
        <p>Quand tu rates des questions au quiz, elles apparaitront ici avec leur correction.</p>
      </article>
    `;
  }

  return mistakes
    .map(
      (mistake) => `
        <article class="mistake-card">
          <span class="mock-tag">${mistake.chapter}</span>
          <h4>${mistake.prompt}</h4>
          <p><strong>Bonne reponse.</strong> ${mistake.choices[mistake.correctIndex]}</p>
          <p><strong>Pourquoi.</strong> ${mistake.explanation}</p>
        </article>
      `
    )
    .join("");
}

function typesetMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function shuffle(array) {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function randomizeQuestionChoices(question) {
  const entries = question.choices.map((choice, index) => ({
    choice,
    isCorrect: index === question.correctIndex
  }));
  const shuffledEntries = shuffle(entries);
  return {
    ...question,
    choices: shuffledEntries.map((entry) => entry.choice),
    correctIndex: shuffledEntries.findIndex((entry) => entry.isCorrect)
  };
}

function buildMemoryQuizQuestions(mode) {
  const generatedPools = getGeneratedQuizPools();

  if (mode === "memory-writing") {
    return generatedPools.memoryWriting;
  }

  if (mode === "memory-vocab") {
    return generatedPools.memoryVocab;
  }

  return generatedPools.memoryCourse;
}

function getGeneratedQuizPools() {
  if (!window.quizGenerator || !window.mathsCourseData) {
    return {
      mixed: quizQuestions,
      toolbox: toolboxQuizQuestions,
      memoryCourse: courseMemoryQuizQuestions,
      memoryWriting: writingMemoryQuizQuestions,
      memoryVocab: vocabMemoryQuizQuestions,
      scenario: []
    };
  }

  return window.quizGenerator.buildMathsPools(window.mathsCourseData);
}

function getAllNonToolboxQuizQuestions() {
  const generatedPools = getGeneratedQuizPools();
  return [...generatedPools.mixed].filter((question) => question.chapter !== "Boite a outils");
}

function getAllQuizQuestions() {
  const generatedPools = getGeneratedQuizPools();
  return [...generatedPools.mixed, ...generatedPools.toolbox];
}

function buildQuizSelection() {
  const mode = quizModeSelect ? quizModeSelect.value : "mixed";
  const recentPrompts = new Set(appState.recentQuizPrompts || []);
  const generatedPools = getGeneratedQuizPools();
  let basePool = generatedPools.mixed;

  if (mode.startsWith("memory-")) {
    basePool = buildMemoryQuizQuestions(mode);
  }

  if (mode === "toolbox") {
    basePool = [...generatedPools.toolbox];
  }

  if (mode === "scenario") {
    basePool = [...generatedPools.scenario];
  }

  if (mode === "mistakes") {
    const mistakeSet = new Set(appState.mistakePrompts || []);
    basePool = [
      ...generatedPools.mixed,
      ...generatedPools.toolbox,
      ...generatedPools.memoryCourse,
      ...generatedPools.memoryWriting,
      ...generatedPools.memoryVocab,
      ...generatedPools.scenario
    ].filter((question) => mistakeSet.has(question.prompt));
    if (basePool.length === 0) {
      basePool = generatedPools.mixed;
    }
  }

  if (mode.startsWith("chapter-")) {
    const chapterMap = window.mathsCourseData ? window.mathsCourseData.chapterModes : window.mathsQuizCatalog.chapterModes;
    const allowed = chapterMap[mode] || [];
    basePool = getAllNonToolboxQuizQuestions().filter((question) => allowed.includes(question.chapter));
  }

  const freshPool = basePool.filter((question) => !recentPrompts.has(question.prompt));
  const preferredPool = freshPool.length >= 8 ? freshPool : basePool;
  const selection = shuffle(preferredPool)
    .slice(0, Math.min(8, preferredPool.length))
    .map(randomizeQuestionChoices);

  appState.recentQuizPrompts = [
    ...selection.map((question) => question.prompt),
    ...(appState.recentQuizPrompts || [])
  ].slice(0, 20);
  saveAppState();

  return selection;
}

function renderMockExams() {
  if (!mockExamsContainer) {
    return;
  }

  mockExamsContainer.innerHTML = createMockCards(mockExams);
}

function renderMistakes() {
  if (!mistakesBox) {
    return;
  }

  const mistakeSet = new Set(appState.mistakePrompts || []);
  const generatedPools = getGeneratedQuizPools();
  const allQuestions = [
    ...generatedPools.mixed,
    ...generatedPools.toolbox,
    ...generatedPools.memoryCourse,
    ...generatedPools.memoryWriting,
    ...generatedPools.memoryVocab,
    ...generatedPools.scenario
  ];
  const mistakes = allQuestions.filter((question) => mistakeSet.has(question.prompt));
  mistakesBox.innerHTML = createMistakeCards(mistakes);
  typesetMath();
}

function renderFinalReferenceSheet() {
  if (!referenceSheetBox) {
    return;
  }

  referenceSheetBox.innerHTML = finalReferenceSheet
    .map(
      (item) => `
        <article class="reference-row">
          <div>
            <span class="reference-label">Fonction</span>
            <div class="formula-expression math-block">${item.functionName}</div>
          </div>
          <div>
            <span class="reference-label">Domaine</span>
            <div class="math-block">${item.domain}</div>
          </div>
          <div>
            <span class="reference-label">Derivee / Primitive</span>
            <div class="math-block">${item.derivative}</div>
            <div class="math-block">${item.primitive}</div>
          </div>
          <div>
            <span class="reference-label">Piege classique</span>
            <p>${item.trap}</p>
          </div>
        </article>
      `
    )
    .join("");

  typesetMath();
}

function renderReferenceTables() {
  if (!derivativesBox || !primitivesBox || !limitsBox || !coreLawsBox) {
    return;
  }

  derivativesBox.innerHTML = createFormulaCards(derivativeReference);
  primitivesBox.innerHTML = createFormulaCards(primitiveReference);
  limitsBox.innerHTML = createFormulaCards(limitReference);
  coreLawsBox.innerHTML = createFormulaCards(coreLawsReference);
  renderFinalReferenceSheet();
  typesetMath();
}

function setActiveToolboxPane(target) {
  if (toolboxTabs.length === 0 || toolboxPanes.length === 0) {
    return;
  }

  toolboxTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.toolboxTarget === target);
  });

  toolboxPanes.forEach((pane) => {
    pane.classList.toggle("is-active", pane.dataset.toolboxPane === target);
  });

  typesetMath();
}

function renderQuizQuestion() {
  if (!quizBox || currentQuiz.length === 0) {
    return;
  }

  const question = currentQuiz[currentQuestionIndex];

  quizBox.innerHTML = `
    <div class="quiz-question">
      <span class="quiz-tag">${question.chapter}</span>
      <p class="quiz-progress">Question ${currentQuestionIndex + 1} sur ${currentQuiz.length}</p>
      <h4>${question.prompt}</h4>
    </div>
    <div class="quiz-choices">
      ${question.choices
        .map(
          (choice, index) => `
            <button class="quiz-choice" type="button" data-choice-index="${index}">
              ${choice}
            </button>
          `
        )
        .join("")}
    </div>
    <div class="quiz-actions">
      <button class="button ghost quiz-secondary" id="skip-question" type="button">Passer</button>
    </div>
  `;

  quizBox.querySelectorAll(".quiz-choice").forEach((button) => {
    button.addEventListener("click", () => handleQuizAnswer(Number(button.dataset.choiceIndex)));
  });

  quizBox.querySelector("#skip-question").addEventListener("click", nextQuizQuestion);
  typesetMath();
}

function renderQuizResult() {
  if (!quizBox) {
    return;
  }

  if (score > appState.bestQuiz || currentQuiz.length > appState.bestQuizTotal) {
    if (
      score > appState.bestQuiz ||
      (score === appState.bestQuiz && currentQuiz.length >= appState.bestQuizTotal)
    ) {
      appState.bestQuiz = score;
      appState.bestQuizTotal = currentQuiz.length;
      saveAppState();
      updateDashboard();
    }
  }

  quizBox.innerHTML = `
    <div class="quiz-result">
      <span class="quiz-tag">Resultat</span>
      <h4>Tu as obtenu ${score} / ${currentQuiz.length}</h4>
      <p>Refais le quiz autant de fois que tu veux pour automatiser les phrases et le vocabulaire du bac.</p>
      <div class="quiz-actions">
        <button class="button primary" id="restart-quiz" type="button">Refaire un quiz</button>
      </div>
    </div>
  `;

  quizBox.querySelector("#restart-quiz").addEventListener("click", startQuiz);
}

function nextQuizQuestion() {
  currentQuestionIndex += 1;
  if (currentQuestionIndex >= currentQuiz.length) {
    renderQuizResult();
    typesetMath();
    return;
  }
  renderQuizQuestion();
}

function handleQuizAnswer(selectedIndex) {
  const question = currentQuiz[currentQuestionIndex];
  const choiceButtons = [...quizBox.querySelectorAll(".quiz-choice")];
  const isCorrect = selectedIndex === question.correctIndex;

  choiceButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.correctIndex) {
      button.classList.add("correct");
    } else if (index === selectedIndex) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    score += 1;
  } else {
    appState.mistakePrompts = [
      question.prompt,
      ...(appState.mistakePrompts || []).filter((prompt) => prompt !== question.prompt)
    ].slice(0, 30);
    saveAppState();
    renderMistakes();
  }

  const feedback = document.createElement("div");
  feedback.className = `quiz-feedback ${isCorrect ? "correct-feedback" : "wrong-feedback"}`;
  feedback.innerHTML = isCorrect
    ? `<p><strong>Bonne reponse.</strong> ${question.explanation}</p>`
    : `<p><strong>Mauvaise reponse.</strong> La bonne reponse etait : ${question.choices[question.correctIndex]}</p><p><strong>Explication.</strong> ${question.explanation}</p>`;
  quizBox.appendChild(feedback);

  const actions = quizBox.querySelector(".quiz-actions");
  actions.innerHTML = `
    <button class="button primary" id="next-question" type="button">
      ${currentQuestionIndex + 1 === currentQuiz.length ? "Voir le score" : "Question suivante"}
    </button>
  `;
  actions.querySelector("#next-question").addEventListener("click", nextQuizQuestion);
  typesetMath();
}

function startQuiz() {
  if (!quizBox || !quizModeSelect) {
    return;
  }

  currentQuiz = buildQuizSelection();
  if (currentQuiz.length === 0) {
    quizBox.innerHTML = `
      <div class="quiz-result">
        <span class="quiz-tag">Quiz</span>
        <h4>Aucune question disponible pour ce mode.</h4>
      </div>
    `;
    return;
  }
  currentQuestionIndex = 0;
  score = 0;
  renderQuizQuestion();
}

function renderChapters() {
  if (!chaptersContainer || !chapterNav || !chapterTemplate) {
    return;
  }

  chaptersContainer.innerHTML = "";
  chapterNav.innerHTML = "";

  chapters.forEach((chapter, index) => {
    const fragment = chapterTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".chapter-card");
    const header = fragment.querySelector(".chapter-header");
    const favoriteChip = fragment.querySelector(".favorite-chip");
    const completeChip = fragment.querySelector(".complete-chip");

    card.id = chapter.id;
    fragment.querySelector(".chapter-index").textContent = `Chapitre ${index + 1}`;
    fragment.querySelector(".chapter-title").textContent = chapter.title;
    fragment.querySelector(".chapter-summary").textContent = chapter.summary;
    fragment.querySelector(".must-know").innerHTML = createList(chapter.mustKnow);
    fragment.querySelector(".memory-lines").innerHTML = createList(chapter.memoryLines);
    fragment.querySelector(".vocab-list").innerHTML = createVocabCards(chapter.vocabulary || []);
    fragment.querySelector(".property-list").innerHTML = createPropertyCards(chapter.properties);
    fragment.querySelector(".formula-list").innerHTML = createFormulaCards(chapter.formulas);
    fragment.querySelector(".method-list").innerHTML = createMethodCards(chapter.methods);
    fragment.querySelector(".example-box").innerHTML = createExampleCard(chapter.example);
    fragment.querySelector(".exam-list").innerHTML = createExamCards(chapter.examQuestions);
    fragment.querySelector(".writing-list").innerHTML = createWritingCards(chapter.writingPhrases || []);
    fragment.querySelector(".drill-list").innerHTML = createDrillCards(chapter.drills || []);
    syncChapterChips(card, chapter.id);

    header.addEventListener("click", () => {
      card.classList.toggle("open");
      appState.lastChapter = chapter.id;
      saveAppState();
      updateDashboard();
      typesetMath();
    });

    favoriteChip.addEventListener("click", () => {
      toggleStoredId("favorites", chapter.id);
      syncChapterChips(card, chapter.id);
      updateDashboard();
    });

    completeChip.addEventListener("click", () => {
      toggleStoredId("completed", chapter.id);
      syncChapterChips(card, chapter.id);
      updateDashboard();
    });

    chaptersContainer.appendChild(fragment);

    const navLink = document.createElement("a");
    navLink.href = `#${chapter.id}`;
    navLink.textContent = chapter.title;
    chapterNav.appendChild(navLink);
  });

  chapterCount.textContent = chapters.length;
  updateDashboard();
  typesetMath();
}

function filterChapters() {
  if (!searchInput || !chapterNav) {
    return;
  }

  const query = searchInput.value.trim().toLowerCase();
  const cards = [...document.querySelectorAll(".chapter-card")];
  const navLinks = [...chapterNav.querySelectorAll("a")];

  cards.forEach((card, index) => {
    const text = card.textContent.toLowerCase();
    const match = text.includes(query);
    card.classList.toggle("hidden", !match);
    navLinks[index].classList.toggle("hidden", !match);
  });
}

function toggleAllChapters() {
  if (!toggleAllButton) {
    return;
  }

  areAllOpen = !areAllOpen;
  document.querySelectorAll(".chapter-card").forEach((card) => {
    card.classList.toggle("open", areAllOpen);
  });
  toggleAllButton.textContent = areAllOpen ? "Tout fermer" : "Tout ouvrir";
  typesetMath();
}

function highlightVisibleSection() {
  if (!chapterNav) {
    return;
  }

  const links = [...chapterNav.querySelectorAll("a")];
  const cards = [...document.querySelectorAll(".chapter-card:not(.hidden)")];
  let currentId = "";

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top <= 140 && rect.bottom >= 140) {
      currentId = card.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
}

if (!isQuizCenterPage && toolboxTabs.length > 0) {
  toolboxTabs.forEach((button) => {
    button.addEventListener("click", () => setActiveToolboxPane(button.dataset.toolboxTarget));
  });
}

if (!isQuizCenterPage) {
  renderChapters();
  renderReferenceTables();
  renderMockExams();
  renderMistakes();
  startQuiz();
  filterChapters();
  highlightVisibleSection();

  if (searchInput) {
    searchInput.addEventListener("input", filterChapters);
  }

  if (toggleAllButton) {
    toggleAllButton.addEventListener("click", toggleAllChapters);
  }

  if (newQuizButton) {
    newQuizButton.addEventListener("click", startQuiz);
  }

  if (quizModeSelect) {
    quizModeSelect.addEventListener("change", startQuiz);
  }

  if (chapterNav) {
    window.addEventListener("scroll", highlightVisibleSection);
  }
}
