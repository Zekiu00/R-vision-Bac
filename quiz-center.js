(function () {
const params = new URLSearchParams(window.location.search);
const subject = params.get("subject") || "maths";

const subjectTitles = {
  maths: "Maths",
  histoire: "Histoire",
  geographie: "Geographie",
  ses: "SES"
};

const quizModeSelect = document.querySelector("#quiz-mode");
const quizBox = document.querySelector("#quiz-box");
const mistakesBox = document.querySelector("#mistakes-box");
const newQuizButton = document.querySelector("#new-quiz");

const storageKey = `revision-quiz-center-${subject}`;
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let state = loadState();

function typesetMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function loadState() {
  try {
    return {
      recentQuizPrompts: [],
      mistakePrompts: [],
      ...JSON.parse(window.localStorage.getItem(storageKey) || "{}")
    };
  } catch (error) {
    return { recentQuizPrompts: [], mistakePrompts: [] };
  }
}

function saveState() {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
}

function getCatalog() {
  if (subject === "maths") {
    const generated = window.quizGenerator && window.mathsCourseData
      ? window.quizGenerator.buildMathsPools(window.mathsCourseData)
      : {
          mixed: window.mathsQuizCatalog.mixed,
          toolbox: window.mathsQuizCatalog.toolbox,
          memoryCourse: window.mathsQuizCatalog.memoryCourse,
          memoryWriting: window.mathsQuizCatalog.memoryWriting,
          memoryVocab: window.mathsQuizCatalog.memoryVocab,
          scenario: []
        };
    return {
      label: "Maths",
      course: "./index.html",
      mixed: generated.mixed,
      toolbox: generated.toolbox,
      memoryCourse: generated.memoryCourse,
      memoryWriting: generated.memoryWriting,
      memoryVocab: generated.memoryVocab,
      scenario: generated.scenario
    };
  }

  const config = window.subjectConfigs[subject];
  const generated = window.quizGenerator
    ? window.quizGenerator.buildSubjectPools(config)
    : {
        mixed: config.quizQuestions,
        toolbox: config.toolboxQuizQuestions,
        memoryCourse: config.courseMemoryQuizQuestions,
        memoryWriting: config.writingMemoryQuizQuestions,
        memoryVocab: config.vocabMemoryQuizQuestions,
        scenario: []
      };
  return {
    label: config.label,
    course: `./${subject}.html`,
    mixed: generated.mixed,
    toolbox: generated.toolbox,
    memoryCourse: generated.memoryCourse,
    memoryWriting: generated.memoryWriting,
    memoryVocab: generated.memoryVocab,
    scenario: generated.scenario
  };
}

const catalog = getCatalog();

function allQuestions() {
  return [...catalog.mixed, ...catalog.toolbox];
}

function buildModeOptions() {
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

function updateHeader() {
  document.querySelector("#quiz-page-title").textContent = `Quiz ${catalog.label}`;
  document.querySelector("#quiz-page-copy").textContent = `Mode plein ecran pour reviser ${catalog.label.toLowerCase()} sans le reste du cours.`;
  document.querySelector("#back-to-course").href = catalog.course;
  document.querySelector("#back-to-course").textContent = `Retour au cours de ${catalog.label}`;

  document.querySelectorAll("[data-subject-link]").forEach((link) => {
    link.classList.toggle("is-current", link.dataset.subjectLink === subject);
  });
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

function buildSelection() {
  const mode = quizModeSelect.value;
  const recent = new Set(state.recentQuizPrompts || []);
  let pool = allQuestions();

  if (mode === "toolbox") {
    pool = catalog.toolbox;
  } else if (mode === "memory-course") {
    pool = catalog.memoryCourse;
  } else if (mode === "memory-writing") {
    pool = catalog.memoryWriting;
  } else if (mode === "memory-vocab") {
    pool = catalog.memoryVocab;
  } else if (mode === "scenario") {
    pool = catalog.scenario;
  } else if (mode === "mistakes") {
    const mistakeSet = new Set(state.mistakePrompts || []);
    pool = allQuestions()
      .concat(catalog.memoryCourse, catalog.memoryWriting, catalog.memoryVocab, catalog.scenario)
      .filter((question) => mistakeSet.has(question.prompt));
  }

  const fresh = pool.filter((question) => !recent.has(question.prompt));
  const preferred = fresh.length >= 6 ? fresh : pool;
  const selection = shuffle(preferred)
    .slice(0, Math.min(8, preferred.length))
    .map(randomizeQuestionChoices);
  state.recentQuizPrompts = [...selection.map((item) => item.prompt), ...(state.recentQuizPrompts || [])].slice(0, 20);
  saveState();
  return selection;
}

function renderMistakes() {
  const mistakeSet = new Set(state.mistakePrompts || []);
  const questions = allQuestions().concat(catalog.memoryCourse, catalog.memoryWriting, catalog.memoryVocab, catalog.scenario);
  const mistakes = questions.filter((question) => mistakeSet.has(question.prompt));
  mistakesBox.innerHTML = mistakes.length
    ? mistakes
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
        .join("")
    : `<article class="mistake-card"><h4>Aucune erreur enregistree</h4><p>Les questions ratees apparaitront ici.</p></article>`;
  typesetMath();
}

function renderQuestion() {
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
    button.addEventListener("click", () => handleAnswer(Number(button.dataset.choiceIndex)));
  });
  quizBox.querySelector("#skip-question").addEventListener("click", nextQuestion);
  typesetMath();
}

function renderResult() {
  quizBox.innerHTML = `
    <div class="quiz-result">
      <span class="quiz-tag">Resultat</span>
      <h4>Tu as obtenu ${score} / ${currentQuiz.length}</h4>
      <p>Tu peux relancer directement un autre quiz ou revenir au cours.</p>
      <div class="quiz-actions">
        <button class="button primary" id="restart-quiz" type="button">Refaire un quiz</button>
      </div>
    </div>
  `;
  quizBox.querySelector("#restart-quiz").addEventListener("click", startQuiz);
  typesetMath();
}

function nextQuestion() {
  currentQuestionIndex += 1;
  if (currentQuestionIndex >= currentQuiz.length) {
    renderResult();
    return;
  }
  renderQuestion();
}

function handleAnswer(selectedIndex) {
  const question = currentQuiz[currentQuestionIndex];
  const buttons = [...quizBox.querySelectorAll(".quiz-choice")];
  const isCorrect = selectedIndex === question.correctIndex;

  buttons.forEach((button, index) => {
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
    state.mistakePrompts = [question.prompt, ...(state.mistakePrompts || []).filter((prompt) => prompt !== question.prompt)].slice(0, 30);
    saveState();
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
  actions.querySelector("#next-question").addEventListener("click", nextQuestion);
  typesetMath();
}

function startQuiz() {
  currentQuiz = buildSelection();
  if (currentQuiz.length === 0) {
    quizBox.innerHTML = `<div class="quiz-result"><h4>Aucune question disponible pour ce mode.</h4></div>`;
    typesetMath();
    return;
  }
  currentQuestionIndex = 0;
  score = 0;
  renderQuestion();
}

buildModeOptions();
updateHeader();
renderMistakes();
startQuiz();

newQuizButton.addEventListener("click", startQuiz);
quizModeSelect.addEventListener("change", startQuiz);
})();
