const sensoryChallenges = [
  {
    prompt:
      "A dolphin is searching for fish in cloudy water. Which sense helps most?",
    options: ["Echolocation hearing", "Color vision", "Taste of salt", "Sun warmth"],
    answer: "Echolocation hearing",
    explain:
      "Correct. Dolphins send clicks and listen to echoes to map objects in water.",
  },
  {
    prompt:
      "A shark notices tiny electric signals from a hidden fish. What is this called?",
    options: ["Electroreception", "Night vision", "Vibration dancing", "Air breathing"],
    answer: "Electroreception",
    explain:
      "Correct. Sharks use special organs to detect weak electrical signals.",
  },
  {
    prompt:
      "A sea turtle travels back to the same nesting beach years later. What guides it?",
    options: [
      "Only memory from one trip",
      "Magnetic and smell cues",
      "Wing flapping directions",
      "Cloud shapes only",
    ],
    answer: "Magnetic and smell cues",
    explain:
      "Correct. Sea turtles may use Earth magnetic cues and local scent information.",
  },
  {
    prompt:
      "An octopus explores a rock crevice for food. Which ability is especially useful?",
    options: [
      "Strong taste and touch sensors in arms",
      "Loud singing",
      "Long-distance flying",
      "Body glow in daylight only",
    ],
    answer: "Strong taste and touch sensors in arms",
    explain:
      "Correct. Octopus arms have many sensory receptors that help them explore safely.",
  },
  {
    prompt:
      "A catfish feeds in muddy river water with low visibility. Which tool helps it?",
    options: [
      "Barbels with taste and touch",
      "Bright reef colors",
      "Snow camouflage",
      "Large wings",
    ],
    answer: "Barbels with taste and touch",
    explain:
      "Correct. Catfish barbels help detect food when vision is limited.",
  },
];

const traitData = {
  language: {
    label: "Language learning",
    nature: [
      "Brain pathways are prepared for language learning.",
      "Some speech and hearing differences can be inherited.",
    ],
    nurture: [
      "Conversation and reading time improve language growth.",
      "Supportive teachers and caregivers build vocabulary.",
    ],
    range: [45, 80],
  },
  empathy: {
    label: "Empathy and caring",
    nature: [
      "Temperament can influence emotional sensitivity.",
      "Stress response patterns can have biological roots.",
    ],
    nurture: [
      "Modeling kindness teaches social understanding.",
      "Safe relationships help children regulate emotions.",
    ],
    range: [50, 85],
  },
  athletic: {
    label: "Athletic skill",
    nature: [
      "Body structure and muscle traits can be inherited.",
      "Some coordination patterns are partly biological.",
    ],
    nurture: [
      "Practice, coaching, and nutrition improve performance.",
      "Access to safe play spaces is important.",
    ],
    range: [40, 75],
  },
  music: {
    label: "Musical ability",
    nature: [
      "Some pitch perception differences have biological links.",
      "Memory and timing systems vary across people.",
    ],
    nurture: [
      "Lessons and repetition strengthen musical skill.",
      "Cultural music traditions shape style and expression.",
    ],
    range: [50, 85],
  },
  confidence: {
    label: "Self-confidence",
    nature: [
      "Temperament influences comfort with new situations.",
      "Energy and stress patterns differ between people.",
    ],
    nurture: [
      "Encouragement and feedback build confidence over time.",
      "Safe communities support risk-taking and growth.",
    ],
    range: [60, 90],
  },
};

const aquaticAnimals = [
  {
    id: "dolphin",
    name: "Bottlenose Dolphin",
    habitat: "ocean",
    keySense: "Echolocation hearing",
    adaptation: "Click sounds bounce off objects and return as echoes.",
    fact: "Dolphins can coordinate in groups while hunting schools of fish.",
    action: "Protect quiet marine zones and reduce ocean noise pollution.",
  },
  {
    id: "octopus",
    name: "Common Octopus",
    habitat: "reef",
    keySense: "Touch and chemical sensing",
    adaptation: "Arms can sense texture and chemical cues while exploring.",
    fact: "Octopuses are known for problem solving and camouflage behavior.",
    action: "Keep reefs healthy by reducing plastic and harmful runoff.",
  },
  {
    id: "axolotl",
    name: "Axolotl",
    habitat: "freshwater",
    keySense: "Water vibration and smell",
    adaptation: "Sensitive lateral line system detects movement in water.",
    fact: "Axolotls can regrow parts of limbs and some tissues.",
    action: "Support wetland habitat restoration and clean water projects.",
  },
  {
    id: "shark",
    name: "Hammerhead Shark",
    habitat: "ocean",
    keySense: "Electroreception",
    adaptation: "Special pores detect tiny electric fields from prey.",
    fact: "Hammerhead head shape may help improve directional sensing.",
    action: "Choose sustainable seafood and avoid products from shark finning.",
  },
  {
    id: "clownfish",
    name: "Clownfish",
    habitat: "reef",
    keySense: "Vision and smell",
    adaptation: "Mucus coating protects clownfish among stinging anemones.",
    fact: "Clownfish and anemones form mutual partnerships.",
    action: "Protect coral habitats and learn reef-safe tourism habits.",
  },
  {
    id: "narwhal",
    name: "Narwhal",
    habitat: "polar",
    keySense: "Hearing and pressure sensing",
    adaptation: "Adapted for icy waters and deep dives in Arctic regions.",
    fact: "Narwhals rely on sea ice systems and seasonal migration routes.",
    action: "Support climate action and respect Indigenous Arctic knowledge.",
  },
];

const cultureEntries = [
  {
    id: "mikmaq",
    name: "Mi'kmaq Peoples",
    region: "Atlantic Northeast, including parts of present-day Canada",
    history:
      "Mi'kmaq communities have deep relationships with land and water built over many generations.",
    tradition: "Oral storytelling and seasonal knowledge sharing.",
    value: "Respect for reciprocity, community, and the natural world.",
    question:
      "You are learning a traditional story. What is the most respectful step?",
    options: [
      {
        text: "Ask permission before recording or reposting it.",
        correct: true,
        explain:
          "Correct. Consent and cultural protocols are essential when sharing knowledge.",
      },
      {
        text: "Post it online right away without context.",
        correct: false,
        explain:
          "Not yet. Sharing without permission can ignore community ownership and context.",
      },
      {
        text: "Change details to make it more dramatic.",
        correct: false,
        explain:
          "Not respectful. Changing cultural stories can misrepresent meaning.",
      },
    ],
  },
  {
    id: "maori",
    name: "Maori",
    region: "Aotearoa New Zealand",
    history:
      "Maori navigators crossed vast ocean distances using environmental observation and star knowledge.",
    tradition: "Whakapapa and careful stewardship of place and kinship.",
    value: "Connection between people, ancestors, and environment.",
    question:
      "You visit a site with cultural significance. What should you do first?",
    options: [
      {
        text: "Follow local guidance and ask what behavior is appropriate.",
        correct: true,
        explain:
          "Correct. Respect begins with listening to local communities and protocols.",
      },
      {
        text: "Touch and move objects to inspect them.",
        correct: false,
        explain: "Not respectful. Cultural sites should be treated with care and permission.",
      },
      {
        text: "Ignore signs because you are curious.",
        correct: false,
        explain:
          "Not respectful. Signs and rules protect people, stories, and places.",
      },
    ],
  },
  {
    id: "egypt",
    name: "Ancient Egypt",
    region: "Nile River valley, northeastern Africa",
    history:
      "The Nile supported farming cycles, cities, and complex engineering over long historical periods.",
    tradition: "Calendars, records, and rituals connected to seasonal change.",
    value: "Planning, learning, and shared civic responsibility.",
    question:
      "When studying ancient writing systems, what is best practice?",
    options: [
      {
        text: "Use trusted sources and cite where ideas come from.",
        correct: true,
        explain:
          "Correct. Reliable sources and citation protect accuracy and integrity.",
      },
      {
        text: "Guess meanings and present them as facts.",
        correct: false,
        explain:
          "Not accurate. Historical claims need evidence and careful interpretation.",
      },
      {
        text: "Copy from one website without checking.",
        correct: false,
        explain:
          "Not enough. Cross-checking helps avoid errors and oversimplified claims.",
      },
    ],
  },
  {
    id: "maya",
    name: "Maya Civilizations",
    region: "Parts of present-day Mexico, Guatemala, Belize, and Honduras",
    history:
      "Maya societies developed advanced astronomy, mathematics, architecture, and calendar systems.",
    tradition: "Knowledge transfer through communities, artisans, and scholars.",
    value: "Observation, precision, and continuity of knowledge.",
    question: "How can you study this history respectfully?",
    options: [
      {
        text: "Learn from both archaeological research and living descendant communities.",
        correct: true,
        explain:
          "Correct. History is strongest when ancient and living knowledge are both respected.",
      },
      {
        text: "Assume the culture ended long ago and is no longer relevant.",
        correct: false,
        explain:
          "Not respectful. Descendant communities are living cultures today.",
      },
      {
        text: "Use stereotypes instead of evidence.",
        correct: false,
        explain: "Not accurate. Evidence-based learning avoids harmful stereotypes.",
      },
    ],
  },
  {
    id: "yoruba",
    name: "Yoruba Peoples",
    region: "West Africa and global diaspora communities",
    history:
      "Yoruba communities carry rich artistic, philosophical, and oral traditions across generations.",
    tradition: "Storytelling, music, festivals, and intergenerational teaching.",
    value: "Community memory, creativity, and social responsibility.",
    question:
      "A classmate shares a tradition from their family. What is the best response?",
    options: [
      {
        text: "Listen carefully and ask respectful questions.",
        correct: true,
        explain:
          "Correct. Listening and respectful curiosity build trust and understanding.",
      },
      {
        text: "Laugh because it is different from your tradition.",
        correct: false,
        explain:
          "Not respectful. Differences should be met with care, not mockery.",
      },
      {
        text: "Say only one tradition is correct.",
        correct: false,
        explain:
          "Not inclusive. Multiple traditions can hold important meaning and value.",
      },
    ],
  },
];

const quizBank = [
  {
    question:
      "Which animal is known for using echolocation clicks in water?",
    options: ["Dolphin", "Sea turtle", "Axolotl", "Clownfish"],
    answer: "Dolphin",
  },
  {
    question:
      "In most human traits, nature and nurture are best understood as:",
    options: [
      "Working together",
      "Only nature",
      "Only nurture",
      "Never related",
    ],
    answer: "Working together",
  },
  {
    question:
      "What is a respectful way to learn about a culture's story?",
    options: [
      "Ask permission and use context",
      "Share it without asking",
      "Rewrite details for fun",
      "Treat it like a rumor",
    ],
    answer: "Ask permission and use context",
  },
  {
    question:
      "Which adaptation helps sharks detect hidden prey?",
    options: [
      "Electroreception",
      "Wing beats",
      "Loud calls",
      "Feather color",
    ],
    answer: "Electroreception",
  },
  {
    question:
      "A strong learning environment usually does what?",
    options: [
      "Supports growth of skills over time",
      "Has no effect on skills",
      "Removes all challenges",
      "Changes the past",
    ],
    answer: "Supports growth of skills over time",
  },
  {
    question:
      "Why should we include living descendant communities in history learning?",
    options: [
      "Because cultures continue in the present",
      "Because old sources are always wrong",
      "Because history has no evidence",
      "Because dates are not useful",
    ],
    answer: "Because cultures continue in the present",
  },
  {
    question:
      "Which action helps aquatic ecosystems?",
    options: [
      "Reducing plastic pollution",
      "Dumping waste",
      "Ignoring habitat damage",
      "Removing reef species",
    ],
    answer: "Reducing plastic pollution",
  },
  {
    question:
      "Which statement is most accurate about sensory perception in animals?",
    options: [
      "Different species rely on different senses",
      "All species sense the world the same way",
      "Only sight matters",
      "Senses are not useful underwater",
    ],
    answer: "Different species rely on different senses",
  },
];

const appState = {
  points: 0,
  completion: {
    sensory: false,
    nature: false,
    aquatic: false,
    culture: false,
  },
  sensory: {
    index: 0,
    answered: false,
    answeredCount: 0,
  },
  nature: {
    scoredTraits: new Set(),
  },
  aquatic: {
    visited: new Set(),
    currentFilter: "all",
  },
  culture: {
    scoredEntries: new Set(),
  },
  quiz: {
    questions: [],
    index: 0,
    score: 0,
    answered: false,
  },
};

const pointsValue = document.getElementById("points-value");
const progressText = document.getElementById("progress-text");
const badgeText = document.getElementById("badge-text");
const progressFill = document.getElementById("progress-fill");

function addPoints(amount) {
  appState.points += amount;
  pointsValue.textContent = String(appState.points);
  updateBadge();
}

function setComplete(moduleKey) {
  if (!appState.completion[moduleKey]) {
    appState.completion[moduleKey] = true;
    updateProgress();
  }
}

function updateProgress() {
  const completedCount = Object.values(appState.completion).filter(Boolean).length;
  progressText.textContent = `${completedCount}/4`;
  progressFill.style.width = `${(completedCount / 4) * 100}%`;
  updateBadge();
}

function updateBadge() {
  const completedCount = Object.values(appState.completion).filter(Boolean).length;

  if (appState.points >= 130) {
    badgeText.textContent = "Master Navigator";
    return;
  }

  if (completedCount === 4) {
    badgeText.textContent = "Learning Guardian";
    return;
  }
  if (completedCount === 3) {
    badgeText.textContent = "Culture Keeper";
    return;
  }
  if (completedCount === 2) {
    badgeText.textContent = "Deep Diver";
    return;
  }
  if (completedCount === 1) {
    badgeText.textContent = "Scout";
    return;
  }
  badgeText.textContent = "Explorer";
}

function setupTabs() {
  const tabs = Array.from(document.querySelectorAll("[role='tab']"));
  const tabList = document.querySelector("[role='tablist']");

  function activateTab(tabToActivate) {
    tabs.forEach((tab) => {
      const panelId = tab.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);
      const isSelected = tab === tabToActivate;

      tab.setAttribute("aria-selected", String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;

      if (isSelected) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab));
  });

  tabList.addEventListener("keydown", (event) => {
    const currentIndex = tabs.indexOf(document.activeElement);
    if (currentIndex < 0) return;

    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    if (nextIndex !== currentIndex) {
      event.preventDefault();
      tabs[nextIndex].focus();
      activateTab(tabs[nextIndex]);
    }
  });
}

function setupSensoryLab() {
  const numberEl = document.getElementById("sensory-number");
  const promptEl = document.getElementById("sensory-prompt");
  const optionsEl = document.getElementById("sensory-options");
  const feedbackEl = document.getElementById("sensory-feedback");
  const nextBtn = document.getElementById("next-sensory");

  function renderChallenge() {
    const challenge = sensoryChallenges[appState.sensory.index];
    appState.sensory.answered = false;

    numberEl.textContent = `Challenge ${appState.sensory.index + 1}`;
    promptEl.textContent = challenge.prompt;
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";
    nextBtn.disabled = true;

    optionsEl.innerHTML = "";
    challenge.options.forEach((optionText) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer";
      button.textContent = optionText;
      button.addEventListener("click", () => {
        if (appState.sensory.answered) return;

        appState.sensory.answered = true;
        const isCorrect = optionText === challenge.answer;
        if (isCorrect) {
          button.classList.add("correct");
          feedbackEl.textContent = challenge.explain;
          feedbackEl.className = "feedback good";
          addPoints(10);
        } else {
          button.classList.add("wrong");
          feedbackEl.textContent = `Not quite. Correct answer: ${challenge.answer}.`;
          feedbackEl.className = "feedback warn";
        }

        const buttons = Array.from(optionsEl.querySelectorAll("button"));
        buttons.forEach((btn) => {
          btn.disabled = true;
          if (btn.textContent === challenge.answer) {
            btn.classList.add("correct");
          }
        });

        appState.sensory.answeredCount += 1;
        if (appState.sensory.answeredCount >= 3) {
          setComplete("sensory");
        }
        nextBtn.disabled = false;
      });

      optionsEl.append(button);
    });
  }

  nextBtn.addEventListener("click", () => {
    appState.sensory.index = (appState.sensory.index + 1) % sensoryChallenges.length;
    renderChallenge();
  });

  renderChallenge();
}

function setupNatureNurture() {
  const traitSelect = document.getElementById("trait-select");
  const natureList = document.getElementById("nature-list");
  const nurtureList = document.getElementById("nurture-list");
  const slider = document.getElementById("nature-nurture-slider");
  const nurtureValue = document.getElementById("nurture-value");
  const checkBtn = document.getElementById("check-balance");
  const feedbackEl = document.getElementById("balance-feedback");

  Object.entries(traitData).forEach(([key, value]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = value.label;
    traitSelect.append(option);
  });

  function fillList(target, items) {
    target.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      target.append(li);
    });
  }

  function renderTrait() {
    const trait = traitData[traitSelect.value];
    fillList(natureList, trait.nature);
    fillList(nurtureList, trait.nurture);
    slider.value = "50";
    nurtureValue.textContent = "50%";
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";
  }

  slider.addEventListener("input", () => {
    nurtureValue.textContent = `${slider.value}%`;
  });

  checkBtn.addEventListener("click", () => {
    const key = traitSelect.value;
    const trait = traitData[key];
    const value = Number(slider.value);
    const [low, high] = trait.range;

    if (value >= low && value <= high) {
      feedbackEl.textContent = `Great estimate. Research often places nurture around ${low}% to ${high}% for this trait.`;
      feedbackEl.className = "feedback good";

      if (!appState.nature.scoredTraits.has(key)) {
        appState.nature.scoredTraits.add(key);
        addPoints(8);
      }
    } else {
      feedbackEl.textContent = `Good try. For this trait, many studies suggest nurture is often around ${low}% to ${high}%.`;
      feedbackEl.className = "feedback warn";
    }

    setComplete("nature");
  });

  renderTrait();
  traitSelect.addEventListener("change", renderTrait);
}

function setupAquaticExplorer() {
  const filterButtons = Array.from(document.querySelectorAll(".filter"));
  const animalGrid = document.getElementById("animal-grid");
  const animalName = document.getElementById("animal-name");
  const animalFact = document.getElementById("animal-fact");
  const animalSense = document.getElementById("animal-sense");
  const animalAdaptation = document.getElementById("animal-adaptation");
  const animalAction = document.getElementById("animal-action");

  function renderAnimals() {
    animalGrid.innerHTML = "";
    const animals = aquaticAnimals.filter((animal) => {
      return (
        appState.aquatic.currentFilter === "all" ||
        animal.habitat === appState.aquatic.currentFilter
      );
    });

    animals.forEach((animal) => {
      const cardButton = document.createElement("button");
      cardButton.type = "button";
      cardButton.className = "animal-card";
      cardButton.innerHTML = `<strong>${animal.name}</strong><p class="micro">Habitat: ${animal.habitat}</p>`;

      cardButton.addEventListener("click", () => {
        animalName.textContent = animal.name;
        animalFact.textContent = animal.fact;
        animalSense.textContent = animal.keySense;
        animalAdaptation.textContent = animal.adaptation;
        animalAction.textContent = animal.action;

        if (!appState.aquatic.visited.has(animal.id)) {
          appState.aquatic.visited.add(animal.id);
          addPoints(4);
        }

        if (appState.aquatic.visited.size >= 2) {
          setComplete("aquatic");
        }
      });

      animalGrid.append(cardButton);
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      appState.aquatic.currentFilter = button.dataset.filter;
      renderAnimals();
    });
  });

  renderAnimals();
}

function setupCultureModule() {
  const cultureSelect = document.getElementById("culture-select");
  const cultureName = document.getElementById("culture-name");
  const cultureRegion = document.getElementById("culture-region");
  const cultureHistory = document.getElementById("culture-history");
  const cultureTradition = document.getElementById("culture-tradition");
  const cultureValue = document.getElementById("culture-value");
  const respectQuestion = document.getElementById("respect-question");
  const respectOptions = document.getElementById("respect-options");
  const checkBtn = document.getElementById("check-respect");
  const feedbackEl = document.getElementById("respect-feedback");

  cultureEntries.forEach((entry) => {
    const option = document.createElement("option");
    option.value = entry.id;
    option.textContent = entry.name;
    cultureSelect.append(option);
  });

  function renderCulture() {
    const selected = cultureEntries.find((entry) => entry.id === cultureSelect.value);
    cultureName.textContent = selected.name;
    cultureRegion.textContent = selected.region;
    cultureHistory.textContent = selected.history;
    cultureTradition.textContent = selected.tradition;
    cultureValue.textContent = selected.value;
    respectQuestion.textContent = selected.question;
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";

    respectOptions.innerHTML = "";
    selected.options.forEach((option, index) => {
      const wrapper = document.createElement("label");
      wrapper.className = "radio-row";
      wrapper.innerHTML = `<input type="radio" name="respect-option" value="${index}" /> <span>${option.text}</span>`;
      respectOptions.append(wrapper);
    });
  }

  checkBtn.addEventListener("click", () => {
    const selectedCulture = cultureEntries.find((entry) => entry.id === cultureSelect.value);
    const checked = document.querySelector("input[name='respect-option']:checked");

    if (!checked) {
      feedbackEl.textContent = "Select an answer first.";
      feedbackEl.className = "feedback warn";
      return;
    }

    const selectedOption = selectedCulture.options[Number(checked.value)];
    feedbackEl.textContent = selectedOption.explain;
    feedbackEl.className = selectedOption.correct ? "feedback good" : "feedback warn";

    if (selectedOption.correct && !appState.culture.scoredEntries.has(selectedCulture.id)) {
      appState.culture.scoredEntries.add(selectedCulture.id);
      addPoints(8);
    }

    setComplete("culture");
  });

  renderCulture();
  cultureSelect.addEventListener("change", renderCulture);
}

function shuffleArray(items) {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function setupQuiz() {
  const startBtn = document.getElementById("start-quiz");
  const quizArea = document.getElementById("quiz-area");
  const quizProgress = document.getElementById("quiz-progress");
  const quizQuestion = document.getElementById("quiz-question");
  const quizOptions = document.getElementById("quiz-options");
  const quizFeedback = document.getElementById("quiz-feedback");
  const nextBtn = document.getElementById("next-quiz");
  const quizResult = document.getElementById("quiz-result");

  function renderQuestion() {
    const current = appState.quiz.questions[appState.quiz.index];
    appState.quiz.answered = false;

    quizProgress.textContent = `Question ${appState.quiz.index + 1} of ${appState.quiz.questions.length}`;
    quizQuestion.textContent = current.question;
    quizFeedback.textContent = "";
    quizFeedback.className = "feedback";
    nextBtn.hidden = true;
    nextBtn.textContent =
      appState.quiz.index === appState.quiz.questions.length - 1
        ? "See Results"
        : "Next Question";

    quizOptions.innerHTML = "";
    current.options.forEach((optionText) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer";
      button.textContent = optionText;
      button.addEventListener("click", () => {
        if (appState.quiz.answered) return;

        appState.quiz.answered = true;
        const correct = optionText === current.answer;
        if (correct) {
          button.classList.add("correct");
          quizFeedback.textContent = "Correct.";
          quizFeedback.className = "feedback good";
          appState.quiz.score += 1;
          addPoints(6);
        } else {
          button.classList.add("wrong");
          quizFeedback.textContent = `Correct answer: ${current.answer}.`;
          quizFeedback.className = "feedback warn";
        }

        const buttons = Array.from(quizOptions.querySelectorAll("button"));
        buttons.forEach((btn) => {
          btn.disabled = true;
          if (btn.textContent === current.answer) btn.classList.add("correct");
        });

        nextBtn.hidden = false;
      });

      quizOptions.append(button);
    });
  }

  function showResult() {
    const total = appState.quiz.questions.length;
    quizArea.hidden = true;
    quizResult.textContent = `Quiz complete: ${appState.quiz.score}/${total}. Replay to build an even stronger score.`;
  }

  startBtn.addEventListener("click", () => {
    appState.quiz.questions = shuffleArray(quizBank).slice(0, 6);
    appState.quiz.index = 0;
    appState.quiz.score = 0;
    appState.quiz.answered = false;

    quizArea.hidden = false;
    quizResult.textContent = "";
    startBtn.textContent = "Restart Quiz";
    renderQuestion();
  });

  nextBtn.addEventListener("click", () => {
    if (appState.quiz.index < appState.quiz.questions.length - 1) {
      appState.quiz.index += 1;
      renderQuestion();
      return;
    }
    showResult();
  });
}

setupTabs();
setupSensoryLab();
setupNatureNurture();
setupAquaticExplorer();
setupCultureModule();
setupQuiz();
updateProgress();
pointsValue.textContent = "0";
