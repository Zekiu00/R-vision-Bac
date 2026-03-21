const subjectKey = document.body.dataset.subject;
const config = window.subjectConfigs ? window.subjectConfigs[subjectKey] : null;

if (!config) {
  throw new Error("Configuration de matiere introuvable.");
}

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
const toolboxTabs = [...document.querySelectorAll(".toolbox-tab")];
const toolboxPanes = [...document.querySelectorAll(".toolbox-pane")];
const toolboxLists = {
  markers: document.querySelector("#toolbox-markers"),
  notions: document.querySelector("#toolbox-notions"),
  methods: document.querySelector("#toolbox-methods"),
  actors: document.querySelector("#toolbox-actors"),
  reference: document.querySelector("#reference-sheet")
};
const progressCompleted = document.querySelector("#progress-completed");
const progressFavorites = document.querySelector("#progress-favorites");
const progressBestQuiz = document.querySelector("#progress-best-quiz");
const progressLastChapter = document.querySelector("#progress-last-chapter");

const storageKey = `revision-app-${subjectKey}`;
let areAllOpen = false;
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
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

function createFormulaCards(items) {
  return items
    .map(
      (item) => `
        <article class="formula-card">
          <h4>${item.label}</h4>
          <div class="formula-expression">${item.expression}</div>
          <p>${item.note}</p>
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

function createExampleCard(example) {
  return `
    <article class="example-card">
      <h4>${example.title}</h4>
      <p>${example.text}</p>
      <ol>${example.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </article>
  `;
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

function createWritingCards(items) {
  return items
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

function createMockCards(exams) {
  return exams
    .map(
      (exam) => `
        <article class="mock-card">
          <span class="mock-tag">${exam.tag}</span>
          <h4>${exam.title}</h4>
          <div class="mock-context">
            <p><strong>Mise en situation.</strong> ${exam.scenario}</p>
          </div>
          <p>${exam.goal}</p>
          <ol>${exam.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
          <div class="mock-expected">
            <p><strong>Ce qu'on attend.</strong> ${exam.expected}</p>
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
        <p>Les questions ratees apparaitront ici avec leur correction.</p>
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

function getGeneratedQuizPools() {
  if (!window.quizGenerator) {
    return {
      mixed: config.quizQuestions,
      toolbox: config.toolboxQuizQuestions,
      memoryCourse: config.courseMemoryQuizQuestions,
      memoryWriting: config.writingMemoryQuizQuestions,
      memoryVocab: config.vocabMemoryQuizQuestions,
      scenario: []
    };
  }

  return window.quizGenerator.buildSubjectPools(config);
}

function allQuizQuestions() {
  const generatedPools = getGeneratedQuizPools();
  return [...generatedPools.mixed, ...generatedPools.toolbox];
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

function buildQuizModeOptions() {
  quizModeSelect.innerHTML = `
    <option value="mixed">Quiz melange complet</option>
    <option value="toolbox">Quiz boite a outils</option>
    <option value="memory-course">Phrases de cours</option>
    <option value="memory-writing">Phrases de redaction</option>
    <option value="memory-vocab">Vocabulaire obligatoire</option>
    <option value="scenario">Mises en situation</option>
    <option value="mistakes">Erreurs frequentes</option>
  `;
}

function buildQuizSelection() {
  const mode = quizModeSelect.value;
  const recentPrompts = new Set(appState.recentQuizPrompts || []);
  const generatedPools = getGeneratedQuizPools();
  let pool = generatedPools.mixed;

  if (mode === "toolbox") {
    pool = generatedPools.toolbox;
  } else if (mode.startsWith("memory-")) {
    pool = buildMemoryQuizQuestions(mode);
  } else if (mode === "scenario") {
    pool = generatedPools.scenario;
  } else if (mode === "mistakes") {
    const mistakeSet = new Set(appState.mistakePrompts || []);
    pool = [
      ...generatedPools.mixed,
      ...generatedPools.toolbox,
      ...generatedPools.memoryCourse,
      ...generatedPools.memoryWriting,
      ...generatedPools.memoryVocab,
      ...generatedPools.scenario
    ]
      .filter((question) => mistakeSet.has(question.prompt));
  }

  const fresh = pool.filter((question) => !recentPrompts.has(question.prompt));
  const preferred = fresh.length >= 6 ? fresh : pool;
  const selection = shuffle(preferred)
    .slice(0, Math.min(8, preferred.length))
    .map(randomizeQuestionChoices);

  appState.recentQuizPrompts = [...selection.map((question) => question.prompt), ...(appState.recentQuizPrompts || [])].slice(0, 20);
  saveAppState();
  return selection;
}

function updateDashboard() {
  progressCompleted.textContent = String(appState.completed.length);
  progressFavorites.textContent = String(appState.favorites.length);
  progressBestQuiz.textContent = `${appState.bestQuiz}/${appState.bestQuizTotal}`;
  const lastChapter = config.chapters.find((chapter) => chapter.id === appState.lastChapter);
  progressLastChapter.textContent = lastChapter ? lastChapter.title : "Aucun";
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

function syncChapterChips(card, chapterId) {
  const favoriteChip = card.querySelector(".favorite-chip");
  const completeChip = card.querySelector(".complete-chip");
  const favorite = appState.favorites.includes(chapterId);
  const complete = appState.completed.includes(chapterId);

  favoriteChip.classList.toggle("is-active", favorite);
  completeChip.classList.toggle("is-active", complete);
  favoriteChip.textContent = favorite ? "En favori" : "Ajouter aux favoris";
  completeChip.textContent = complete ? "Chapitre revise" : "Marquer comme revise";
}

function renderHero() {
  document.querySelector("#hero-eyebrow").textContent = config.eyebrow;
  document.querySelector("#hero-title").textContent = config.heroTitle;
  document.querySelector("#hero-copy").textContent = config.heroCopy;
  document.querySelector("#chapter-count").textContent = String(config.chapters.length);
  document.querySelector("#subject-name").textContent = config.label;
  document.querySelector("#toolbox-title").textContent = config.toolboxTitle;
  document.querySelector("#toolbox-copy").textContent = config.toolboxCopy;
  document.querySelector("#full-quiz-link").href = `./quiz-center.html?subject=${config.key}`;
  document.querySelector("#inline-quiz-link").href = `./quiz-center.html?subject=${config.key}`;
}

function renderToolbox() {
  toolboxLists.markers.innerHTML = createFormulaCards(config.toolbox.markers);
  toolboxLists.notions.innerHTML = createFormulaCards(config.toolbox.notions);
  toolboxLists.methods.innerHTML = createFormulaCards(config.toolbox.methods);
  toolboxLists.actors.innerHTML = createFormulaCards(config.toolbox.actors);
  toolboxLists.reference.innerHTML = config.toolbox.reference
    .map(
      (item) => `
        <article class="reference-row">
          <div>
            <span class="reference-label">Type</span>
            <div class="formula-expression">${item.functionName}</div>
          </div>
          <div>
            <span class="reference-label">Base</span>
            <div>${item.domain}</div>
          </div>
          <div>
            <span class="reference-label">A faire</span>
            <div>${item.derivative}</div>
            <div>${item.primitive}</div>
          </div>
          <div>
            <span class="reference-label">Piege</span>
            <p>${item.trap}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function setActiveToolboxPane(target) {
  toolboxTabs.forEach((button) => button.classList.toggle("is-active", button.dataset.toolboxTarget === target));
  toolboxPanes.forEach((pane) => pane.classList.toggle("is-active", pane.dataset.toolboxPane === target));
}

function renderMockExams() {
  mockExamsContainer.innerHTML = createMockCards(config.mockExams);
}

function renderMistakes() {
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
  mistakesBox.innerHTML = createMistakeCards(allQuestions.filter((question) => mistakeSet.has(question.prompt)));
}

function renderQuizQuestion() {
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
}

function renderQuizResult() {
  if (score > appState.bestQuiz || currentQuiz.length > appState.bestQuizTotal) {
    if (score > appState.bestQuiz || (score === appState.bestQuiz && currentQuiz.length >= appState.bestQuizTotal)) {
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
      <p>Refais le quiz pour automatiser vocabulaire, methodes et phrases de redaction.</p>
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
    appState.mistakePrompts = [question.prompt, ...(appState.mistakePrompts || []).filter((prompt) => prompt !== question.prompt)].slice(0, 30);
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
  actions.innerHTML = `<button class="button primary" id="next-question" type="button">${currentQuestionIndex + 1 === currentQuiz.length ? "Voir le score" : "Question suivante"}</button>`;
  actions.querySelector("#next-question").addEventListener("click", nextQuizQuestion);
}

function startQuiz() {
  currentQuiz = buildQuizSelection();
  if (currentQuiz.length === 0) {
    quizBox.innerHTML = `<div class="quiz-result"><h4>Aucune question disponible pour ce mode.</h4></div>`;
    return;
  }
  currentQuestionIndex = 0;
  score = 0;
  renderQuizQuestion();
}

function renderChapters() {
  chaptersContainer.innerHTML = "";
  chapterNav.innerHTML = "";

  config.chapters.forEach((chapter, index) => {
    const fragment = chapterTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".chapter-card");
    const header = fragment.querySelector(".chapter-header");

    card.id = chapter.id;
    fragment.querySelector(".chapter-index").textContent = `Chapitre ${index + 1}`;
    fragment.querySelector(".chapter-title").textContent = chapter.title;
    fragment.querySelector(".chapter-summary").textContent = chapter.summary;
    fragment.querySelector(".must-know").innerHTML = createList(chapter.mustKnow);
    fragment.querySelector(".memory-lines").innerHTML = createList(chapter.memoryLines);
    fragment.querySelector(".vocab-list").innerHTML = createVocabCards(chapter.vocabulary);
    fragment.querySelector(".property-list").innerHTML = createPropertyCards(chapter.properties);
    fragment.querySelector(".formula-list").innerHTML = createFormulaCards(chapter.formulas);
    fragment.querySelector(".method-list").innerHTML = createMethodCards(chapter.methods);
    fragment.querySelector(".example-box").innerHTML = createExampleCard(chapter.example);
    fragment.querySelector(".exam-list").innerHTML = createExamCards(chapter.examQuestions);
    fragment.querySelector(".writing-list").innerHTML = createWritingCards(chapter.writingPhrases);
    fragment.querySelector(".drill-list").innerHTML = createDrillCards(chapter.drills);
    syncChapterChips(card, chapter.id);

    header.addEventListener("click", () => {
      card.classList.toggle("open");
      appState.lastChapter = chapter.id;
      saveAppState();
      updateDashboard();
    });

    fragment.querySelector(".favorite-chip").addEventListener("click", () => {
      toggleStoredId("favorites", chapter.id);
      syncChapterChips(card, chapter.id);
      updateDashboard();
    });

    fragment.querySelector(".complete-chip").addEventListener("click", () => {
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

  chapterCount.textContent = String(config.chapters.length);
  updateDashboard();
}

function filterChapters() {
  const query = searchInput.value.trim().toLowerCase();
  const cards = [...document.querySelectorAll(".chapter-card")];
  const links = [...chapterNav.querySelectorAll("a")];

  cards.forEach((card, index) => {
    const match = card.textContent.toLowerCase().includes(query);
    card.classList.toggle("hidden", !match);
    links[index].classList.toggle("hidden", !match);
  });
}

function toggleAllChapters() {
  areAllOpen = !areAllOpen;
  document.querySelectorAll(".chapter-card").forEach((card) => card.classList.toggle("open", areAllOpen));
  toggleAllButton.textContent = areAllOpen ? "Tout fermer" : "Tout ouvrir";
}

renderHero();
buildQuizModeOptions();
renderToolbox();
renderMockExams();
renderMistakes();
renderChapters();
startQuiz();
filterChapters();
setActiveToolboxPane("markers");

toolboxTabs.forEach((button) => {
  button.addEventListener("click", () => setActiveToolboxPane(button.dataset.toolboxTarget));
});

searchInput.addEventListener("input", filterChapters);
toggleAllButton.addEventListener("click", toggleAllChapters);
newQuizButton.addEventListener("click", startQuiz);
quizModeSelect.addEventListener("change", startQuiz);
