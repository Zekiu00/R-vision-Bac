(function () {
  function unique(items) {
    return [...new Set((items || []).filter(Boolean))];
  }

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  }

  function sample(items, count, excluded) {
    const blocked = new Set([...(excluded || [])]);
    return shuffle(unique(items).filter((item) => !blocked.has(item))).slice(0, count);
  }

  function buildChoices(correctChoice, distractorPool) {
    const blocked = new Set([correctChoice]);
    const wrongChoices = sample(distractorPool, 2, blocked);
    while (wrongChoices.length < 2) {
      wrongChoices.push(`Aucune des autres propositions ne reprend correctement cette idee.`);
    }

    return {
      choices: [correctChoice, ...wrongChoices],
      correctIndex: 0
    };
  }

  function createQuestion(chapter, prompt, correctChoice, distractorPool, explanation) {
    const built = buildChoices(correctChoice, distractorPool);
    return {
      chapter,
      prompt,
      choices: built.choices,
      correctIndex: built.correctIndex,
      explanation
    };
  }

  function flattenChapterItems(chapters, key) {
    return (chapters || []).flatMap((chapter) => chapter[key] || []);
  }

  function buildGenericChapterPools(chapters) {
    const mixed = [];
    const memoryCourse = [];
    const memoryWriting = [];
    const memoryVocab = [];
    const scenario = [];

    const allMustKnow = flattenChapterItems(chapters, "mustKnow");
    const allMemoryLines = flattenChapterItems(chapters, "memoryLines");
    const allWriting = flattenChapterItems(chapters, "writingPhrases");
    const allMethods = flattenChapterItems(chapters, "methods");
    const allFormulas = flattenChapterItems(chapters, "formulas");
    const allVocabulary = flattenChapterItems(chapters, "vocabulary");
    const allExamQuestions = flattenChapterItems(chapters, "examQuestions");

    (chapters || []).forEach((chapter) => {
      const chapterLabel = chapter.title;

      (chapter.mustKnow || []).forEach((item, index) => {
        mixed.push(
          createQuestion(
            chapterLabel,
            `Dans le chapitre "${chapter.title}", quel savoir-faire fait partie des attendus essentiels ?`,
            item,
            allMustKnow,
            `C'est bien un savoir-faire attendu dans le chapitre "${chapter.title}".`
          )
        );

        if (index === 0) {
          mixed.push(
            createQuestion(
              chapterLabel,
              `Quel premier axe de revision convient le mieux si tu recommences le chapitre "${chapter.title}" ?`,
              item,
              allMustKnow,
              `Cette idee fait partie des priorites de revision du chapitre "${chapter.title}".`
            )
          );
        }
      });

      (chapter.memoryLines || []).forEach((line) => {
        const question = createQuestion(
          chapterLabel,
          `Quelle phrase de cours faut-il retenir pour le chapitre "${chapter.title}" ?`,
          line,
          allMemoryLines,
          `C'est une phrase de cours a connaitre par coeur dans "${chapter.title}".`
        );
        mixed.push(question);
        memoryCourse.push(question);
      });

      (chapter.writingPhrases || []).forEach((item) => {
        const promptText = item.title
          ? `Quelle phrase de redaction convient pour "${item.title}" dans le chapitre "${chapter.title}" ?`
          : `Quelle formulation de redaction peut-on reutiliser dans le chapitre "${chapter.title}" ?`;
        const question = createQuestion(
          chapterLabel,
          promptText,
          item.text,
          allWriting.map((entry) => entry.text),
          `Cette formulation correspond a une phrase de redaction a reutiliser dans "${chapter.title}".`
        );
        mixed.push(question);
        memoryWriting.push(question);
      });

      (chapter.vocabulary || []).forEach((item) => {
        const definitionQuestion = createQuestion(
          chapterLabel,
          `Dans le chapitre "${chapter.title}", que signifie "${item.word}" ?`,
          item.definition,
          allVocabulary.map((entry) => entry.definition),
          `"${item.word}" doit etre utilise avec cette definition. ${item.use || ""}`.trim()
        );
        const useQuestion = createQuestion(
          chapterLabel,
          `Dans une copie, quand dois-tu utiliser le mot "${item.word}" ?`,
          item.use,
          allVocabulary.map((entry) => entry.use),
          `Il faut savoir non seulement definir "${item.word}", mais aussi savoir quand l'utiliser.`
        );
        mixed.push(definitionQuestion, useQuestion);
        memoryVocab.push(definitionQuestion, useQuestion);
      });

      (chapter.methods || []).forEach((item) => {
        mixed.push(
          createQuestion(
            chapterLabel,
            `Quelle methode correspond a "${item.title}" dans le chapitre "${chapter.title}" ?`,
            item.text,
            allMethods.map((entry) => entry.text),
            `Cette methode est celle attendue pour "${item.title}".`
          )
        );
      });

      (chapter.formulas || []).forEach((item) => {
        mixed.push(
          createQuestion(
            chapterLabel,
            `Quelle ecriture correspond a "${item.label}" ?`,
            item.expression,
            allFormulas.map((entry) => entry.expression),
            `${item.label} s'ecrit ainsi. ${item.note || ""}`.trim()
          )
        );
      });

      (chapter.examQuestions || []).forEach((item) => {
        if (item.answer && item.answer.length) {
          scenario.push(
            createQuestion(
              chapterLabel,
              `Face a la question type bac "${item.statement}", quelle est la meilleure premiere etape ?`,
              item.answer[0],
              allExamQuestions
                .flatMap((entry) => entry.answer || [])
                .filter((answer) => answer !== item.answer[0]),
              `En situation d'evaluation, on commence par cette etape pour structurer la reponse.`
            )
          );
        }

        if (item.answer && item.answer.length > 1) {
          scenario.push(
            createQuestion(
              chapterLabel,
              `Dans la question "${item.statement}", quelle idee fait vraiment partie de la demarche attendue ?`,
              item.answer[Math.min(1, item.answer.length - 1)],
              allExamQuestions
                .flatMap((entry) => entry.answer || [])
                .filter((answer) => answer !== item.answer[Math.min(1, item.answer.length - 1)]),
              `Cette etape appartient a la methode de reponse attendue pour cette question type bac.`
            )
          );
        }
      });
    });

    return { mixed, memoryCourse, memoryWriting, memoryVocab, scenario };
  }

  function buildSubjectToolboxPool(config) {
    const toolbox = config.toolbox || {};
    const sections = [
      { chapter: "Boite a outils", items: toolbox.markers || [] },
      { chapter: "Boite a outils", items: toolbox.notions || [] },
      { chapter: "Boite a outils", items: toolbox.methods || [] },
      { chapter: "Boite a outils", items: toolbox.actors || [] }
    ];
    const pool = [];
    const allItems = sections.flatMap((section) => section.items);

    sections.forEach((section) => {
      section.items.forEach((item) => {
        pool.push(
          createQuestion(
            section.chapter,
            `Dans la boite a outils ${config.label.toLowerCase()}, que designe "${item.label}" ?`,
            item.expression,
            allItems.map((entry) => entry.expression),
            `${item.label} correspond bien a cette idee. ${item.note || ""}`.trim()
          )
        );

        if (item.note) {
          pool.push(
            createQuestion(
              section.chapter,
              `Quel rappel faut-il associer a "${item.label}" ?`,
              item.note,
              allItems.map((entry) => entry.note),
              `Ce rappel est celui qui accompagne "${item.label}" dans la boite a outils.`
            )
          );
        }
      });
    });

    (toolbox.reference || []).forEach((item) => {
      pool.push(
        createQuestion(
          "Boite a outils",
          `Dans la fiche de reference, quel piege faut-il eviter pour "${item.functionName}" ?`,
          item.trap,
          (toolbox.reference || []).map((entry) => entry.trap),
          `C'est bien le piege principal signale dans la fiche de reference.`
        )
      );
      pool.push(
        createQuestion(
          "Boite a outils",
          `Dans la fiche de reference, quelle base de travail est associee a "${item.functionName}" ?`,
          item.domain,
          (toolbox.reference || []).map((entry) => entry.domain),
          `Cette base de travail correspond a "${item.functionName}".`
        )
      );
    });

    return pool;
  }

  function buildMockExamScenarioPool(label, mockExams) {
    const exams = mockExams || [];
    const goals = exams.map((exam) => exam.goal);
    const expected = exams.map((exam) => exam.expected);
    const writings = exams.map((exam) => exam.writing);
    const firstSteps = exams.map((exam) => (exam.steps && exam.steps.length ? exam.steps[0] : ""));

    return exams.flatMap((exam) => {
      const chapter = `${label} - Mise en situation`;
      const questions = [
        createQuestion(
          chapter,
          `Dans la mise en situation "${exam.title}", quel est l'objectif principal ?`,
          exam.goal,
          goals,
          `Cette mise en situation te fait travailler cet objectif principal.`
        ),
        createQuestion(
          chapter,
          `Pour "${exam.title}", quelle phrase de redaction type convient le mieux ?`,
          exam.writing,
          writings,
          `C'est la formulation de redaction type donnee pour cette mise en situation.`
        ),
        createQuestion(
          chapter,
          `Dans "${exam.title}", qu'attend prioritairement le correcteur ?`,
          exam.expected,
          expected,
          `C'est exactement ce qui est attendu dans cette mise en situation.`
        )
      ];

      if (exam.steps && exam.steps.length) {
        questions.push(
          createQuestion(
            chapter,
            `Face au sujet "${exam.title}", quelle premiere etape de travail est pertinente ?`,
            exam.steps[0],
            firstSteps,
            `Commencer par cette etape aide a lancer correctement la resolution du sujet.`
          )
        );
      }

      return questions;
    });
  }

  function buildMathsToolboxPool(mathsData) {
    const toolbox = mathsData.toolbox || {};
    const categories = [
      { chapter: "Boite a outils", items: toolbox.derivatives || [], prompt: "Quelle expression correspond a la derivee usuelle" },
      { chapter: "Boite a outils", items: toolbox.primitives || [], prompt: "Quelle expression correspond a la primitive usuelle" },
      { chapter: "Boite a outils", items: toolbox.limits || [], prompt: "Quelle ecriture correspond a cette limite usuelle" },
      { chapter: "Boite a outils", items: toolbox.laws || [], prompt: "Quelle identite ou loi est correcte" }
    ];
    const pool = [];

    categories.forEach((category) => {
      const expressions = category.items.map((item) => item.expression);
      const notes = category.items.map((item) => item.note);

      category.items.forEach((item) => {
        pool.push(
          createQuestion(
            category.chapter,
            `${category.prompt} "${item.label}" ?`,
            item.expression,
            expressions,
            `${item.label} s'ecrit ainsi. ${item.note || ""}`.trim()
          )
        );

        if (item.note) {
          pool.push(
            createQuestion(
              category.chapter,
              `Quel rappel faut-il associer a "${item.label}" ?`,
              item.note,
              notes,
              `Ce rappel accompagne "${item.label}" dans la boite a outils.`
            )
          );
        }
      });
    });

    const reference = toolbox.reference || [];
    reference.forEach((item) => {
      pool.push(
        createQuestion(
          "Boite a outils",
          `Pour la fonction ${item.functionName}, quelle derivee faut-il connaitre ?`,
          item.derivative,
          reference.map((entry) => entry.derivative),
          `C'est la derivee attendue pour cette ligne de la fiche finale.`
        )
      );
      pool.push(
        createQuestion(
          "Boite a outils",
          `Pour la fonction ${item.functionName}, quelle primitive peut-on retenir ?`,
          item.primitive,
          reference.map((entry) => entry.primitive),
          `C'est la primitive de reference donnee dans la fiche finale.`
        )
      );
      pool.push(
        createQuestion(
          "Boite a outils",
          `Quel piege classique faut-il eviter pour ${item.functionName} ?`,
          item.trap,
          reference.map((entry) => entry.trap),
          `Ce piege est explicitement signale dans la fiche finale.`
        )
      );
    });

    return pool;
  }

  function dedupeQuestions(questions) {
    const seen = new Set();
    return questions.filter((question) => {
      const key = `${question.chapter}|${question.prompt}`;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  function buildSubjectPools(config) {
    const base = buildGenericChapterPools(config.chapters || []);
    const toolbox = buildSubjectToolboxPool(config);
    const scenarios = buildMockExamScenarioPool(config.label, config.mockExams || []).concat(base.scenario);

    return {
      mixed: dedupeQuestions(base.mixed.concat(config.quizQuestions || [], toolbox, scenarios)),
      toolbox: dedupeQuestions(toolbox.concat(config.toolboxQuizQuestions || [])),
      memoryCourse: dedupeQuestions(base.memoryCourse.concat(config.courseMemoryQuizQuestions || [])),
      memoryWriting: dedupeQuestions(base.memoryWriting.concat(config.writingMemoryQuizQuestions || [])),
      memoryVocab: dedupeQuestions(base.memoryVocab.concat(config.vocabMemoryQuizQuestions || [])),
      scenario: dedupeQuestions(scenarios)
    };
  }

  function buildMathsPools(mathsData) {
    const base = buildGenericChapterPools(mathsData.chapters || []);
    const toolbox = buildMathsToolboxPool(mathsData);
    const scenarios = buildMockExamScenarioPool("Maths", mathsData.mockExams || []).concat(base.scenario);

    return {
      mixed: dedupeQuestions(base.mixed.concat((mathsData.static && mathsData.static.mixed) || [], toolbox, scenarios)),
      toolbox: dedupeQuestions(toolbox.concat((mathsData.static && mathsData.static.toolbox) || [])),
      memoryCourse: dedupeQuestions(base.memoryCourse.concat((mathsData.static && mathsData.static.memoryCourse) || [])),
      memoryWriting: dedupeQuestions(base.memoryWriting.concat((mathsData.static && mathsData.static.memoryWriting) || [])),
      memoryVocab: dedupeQuestions(base.memoryVocab.concat((mathsData.static && mathsData.static.memoryVocab) || [])),
      scenario: dedupeQuestions(scenarios)
    };
  }

  window.quizGenerator = {
    buildSubjectPools,
    buildMathsPools
  };
})();
