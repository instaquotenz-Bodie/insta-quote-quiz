const questions = [
  {
    topic: "What it does",
    question: "What is the main job that Insta Quote AI does for a business?",
    options: [
      "Manages your social media",
      "Builds quotes and estimates automatically",
      "Tracks your invoices and payments",
      "Books jobs into your calendar"
    ],
    correct: 1,
    explanation: "Insta Quote AI takes the manual work out of quoting. Instead of building a quote from scratch each time, the AI does it for you — quickly and consistently."
  },
  {
    topic: "The cost",
    question: "How much does Insta Quote AI cost?",
    options: [
      "$50 per month",
      "$500 per month",
      "$99 per month",
      "$1,000 one-off"
    ],
    correct: 1,
    explanation: "It's a $500 subscription."
  },
  {
    topic: "The cost",
    question: "If a business wins just one extra job because they quoted faster, what does that mean for the $500 cost?",
    options: [
      "They still need to win more jobs to break even",
      "It's likely already paid for itself",
      "The cost doesn't change",
      "They need at least 5 jobs to cover it"
    ],
    correct: 1,
    explanation: "In most trades and service businesses, a single job is worth far more than $500. One won quote usually covers the entire investment."
  },
  {
    topic: "How it's set up",
    question: "Is Insta Quote AI a one-size-fits-all tool, or is it customised for each business?",
    options: [
      "It's the same for every business",
      "It's customised to how that business already quotes, replicating your quoting and pricing structure",
      "You have to rebuild your quoting system from scratch",
      "It only works for certain industries"
    ],
    correct: 1,
    explanation: "It's set up around the way you already quote — your pricing, your structure, your job types. It's not a generic template you have to fit into."
  },
  {
    topic: "How it's set up",
    question: "Before going live, what happens to make sure the quotes are accurate?",
    options: [
      "You test it yourself and hope for the best",
      "It gets tested and tweaked until it matches your quoting structure",
      "Nothing — it's accurate straight away",
      "You have to manually check every quote forever"
    ],
    correct: 1,
    explanation: "Every setup goes through a testing and tweaking process to make sure the output matches how you'd quote, before it's ever sent to a customer."
  },
  {
    topic: "How it's set up",
    question: "Who sets up the quoting structure on Insta Quote AI?",
    options: [
      "The user sets it up themselves",
      "It comes pre-loaded with a standard structure",
      "We set up the quoting structure, test and refine it for the user",
      "A third party does it for an extra fee"
    ],
    correct: 2,
    explanation: "When you onboard with Insta Quote AI we work with the user to ensure that we understand their quoting structure and other details needed to make your profile. From there we test your account and make sure it's been refined before handing it back over to start quoting faster, smarter and sharper."
  },
  {
    topic: "Speed",
    question: "Compared to quoting manually, how does Insta Quote AI change the time it takes?",
    options: [
      "It takes about the same time",
      "It's slightly faster",
      "It's significantly faster — quotes that took days can be done in minutes",
      "It's actually slower because you have to check it"
    ],
    correct: 2,
    explanation: "Jobs that took days to quote manually can be turned around in minutes. Over a week, that adds up to hours saved."
  },
  {
    topic: "Speed",
    question: "How does someone start a quote on Insta Quote AI?",
    options: [
      "Fill out a long form with all the job details manually",
      "Call the support team and they do it for you",
      "By either typing or speaking in a job description and attaching photos if they would like",
      "Import a spreadsheet of job details"
    ],
    correct: 2,
    explanation: "By either typing or speaking in a job description and attaching photos if they would like. An example of a job description would be: \"Can you please quote to paint the interior of a residential property, including walls, ceilings, and selected items. The scope includes 110 m² of walls, 60 m² of ceilings, 4 doors, and 5 window frames. All surfaces are in good condition with standard preparation required.\" Simpler descriptions can be done with plans if the quoting structure is measurement based. But the better the job description the better the output."
  },
  {
    topic: "Control",
    question: "Does the business owner still get to check a quote before it goes to the customer?",
    options: [
      "No — it sends automatically",
      "Yes — you review it before anything goes out",
      "Only if you pay extra",
      "It depends on the job type"
    ],
    correct: 1,
    explanation: "You always stay in control. The AI generates the quote but nothing gets sent without your sign-off. It gets put into a quote template which you can review and edit manually."
  },
  {
    topic: "Control",
    question: "How does someone change a quote on Insta Quote AI?",
    options: [
      "You have to start the whole quote again from scratch",
      "You call support and they change it for you",
      "Use the generated template or further prompt the AI",
      "You can't change it once it's generated"
    ],
    correct: 2,
    explanation: "To change a quote you can either use the template generated once you have sent your quote through, otherwise you can continue to prompt the AI."
  },
  {
    topic: "Who it's for",
    question: "Do you need to be good with technology to use Insta Quote AI?",
    options: [
      "Yes — it's quite technical",
      "No — it's built for everyday business owners, not IT people",
      "You need basic coding knowledge",
      "Only if you want the advanced features"
    ],
    correct: 1,
    explanation: "It's designed for tradies and business owners, not tech experts. If you can use ChatGPT, you can use this. Setup is handled for you."
  },
  {
    topic: "Who it's for",
    question: "What type of businesses get the most value from Insta Quote AI?",
    options: [
      "Only large companies with big teams",
      "Retail shops that sell products",
      "Businesses that quote regularly for jobs or services — small, medium or large",
      "Businesses that don't do any quoting"
    ],
    correct: 2,
    explanation: "Any business that regularly sends quotes or estimates is a great fit. The more quotes they do, the more time they save."
  },
  {
    topic: "Winning more jobs",
    question: "Do you win more jobs using Insta Quote AI and why?",
    options: [
      "No, speed doesn't affect whether a quote is accepted",
      "Yes, because the faster quote is up to 80% more likely to be accepted",
      "Possibly, but only if your pricing is lower than competitors",
      "Only if the customer already knows your business"
    ],
    correct: 1,
    explanation: "Insta Quote AI allows users to catch the emotional buyer. For example if someone from the family wants the kitchen renovation more than the other and the other finally says yes, if you're the first to quote before your competitors you can capture that."
  },
  {
    topic: "Consistency",
    question: "If two different people in a business both use Insta Quote AI, what's one major benefit?",
    options: [
      "They'll both charge different prices, which gives flexibility",
      "Their quotes will be consistent — anyone in your business can use it with your quoting structure",
      "Only one of them needs to use it",
      "The AI will choose who quotes each job"
    ],
    correct: 1,
    explanation: "When quotes come from different people, prices and formats can vary, causing confusion and disputes. The AI keeps everything uniform."
  },
  {
    topic: "Handling objections",
    question: "A business owner says \"I don't trust AI.\" What's the best angle to take?",
    options: [
      "Tell them to just trust it",
      "Explain that it uses their own pricing rules and they review every quote — it's a calculator, not a guesser",
      "Agree with them and move on",
      "Tell them AI is always right"
    ],
    correct: 1,
    explanation: "Reframe it. It's not a mysterious AI making decisions — it's their own pricing logic, automated. It's just accelerating the process."
  },
  {
    topic: "Handling objections",
    question: "Why can't someone just use ChatGPT instead?",
    options: [
      "ChatGPT is more expensive",
      "ChatGPT doesn't have internet access",
      "Insta Quote AI and ChatGPT aren't comparable — Insta Quote AI is a specially built system for quoting where ChatGPT is just a general system",
      "ChatGPT can't type fast enough"
    ],
    correct: 2,
    explanation: "Insta Quote AI and ChatGPT aren't comparable as Insta Quote AI is a specially built system for quoting where ChatGPT is just a general system."
  },
  {
    topic: "Handling objections",
    question: "Why is Insta Quote AI better than going to an AI Agency?",
    options: [
      "AI agencies don't use AI at all",
      "AI agencies are free but harder to use",
      "AI agencies charge too much — $2,000 to $10,000 per month — often for weak, untrained software that doesn't deliver",
      "AI agencies are only available overseas"
    ],
    correct: 2,
    explanation: "AI agencies can overcharge for what is really weak and untrained software promising people something that doesn't work."
  },
  {
    topic: "Integrations",
    question: "Does Insta Quote AI currently integrate with Xero?",
    options: [
      "Yes, fully integrated",
      "Not currently, but it doesn't affect how you use the app — and Xero integration is coming within 1–4 weeks",
      "No and there are no plans to integrate",
      "Only on the premium plan"
    ],
    correct: 1,
    explanation: "It just means you may have to slightly change the systems you have in place. In saying this, we are working to have Xero so you can use it through the platform — if you were to sign up now you would be looking at the next 1–4 weeks."
  },
  {
    topic: "Integrations",
    question: "Can Insta Quote AI be used with a customer's current apps?",
    options: [
      "No, it only works on its own",
      "Yes, it works with everything straight away",
      "Not currently out of the box, but as part of the service we work with you to get the integrations your business needs",
      "Only with Xero and Jobber"
    ],
    correct: 2,
    explanation: "Part of our service is helping people have the integrations necessary for their business. Job management tools are great so we can potentially look to work with you in integrating your specific software or tool. Because we are a new app, integrations are still being worked on and decided."
  },
  {
    topic: "Integrations",
    question: "Does Insta Quote AI integrate with a user's suppliers?",
    options: [
      "Yes, all major suppliers are already connected",
      "Only Bunnings",
      "Not yet, but we are working with users to integrate the suppliers they need",
      "No and it never will"
    ],
    correct: 2,
    explanation: "We are working with our users to integrate the suppliers they need. Because we are a new app, integrations are still being worked on. If someone buys their materials from Bunnings for example, we would reach out to connect with them."
  },
  {
    topic: "Materials",
    question: "Can Insta Quote AI factor in materials?",
    options: [
      "No, it only covers labour",
      "Yes, but not to your exact trade prices just yet — supplier integrations are being worked on",
      "Yes, fully including your exact trade prices",
      "Only if you enter them manually every time"
    ],
    correct: 1,
    explanation: "Yes it can, but for now not to your trade prices. We are currently looking to work directly with suppliers to get more accurate pricing. When you sign up we can reach out to the suppliers you use in order to make sure they are a priority in integrating."
  },
  {
    topic: "Plans",
    question: "Can Insta Quote AI quote off plans?",
    options: [
      "No, it only works from written descriptions",
      "Yes — you can upload plans and it will quote for you, and we are continuing to make this more powerful",
      "Only architectural plans",
      "Yes but only on the premium plan"
    ],
    correct: 1,
    explanation: "Yes, Insta Quote AI can quote off plans. We are currently working to make this model more powerful so for certain quoting structures you can upload plans and it will quote it for you."
  },
  {
    topic: "Getting started",
    question: "How does someone get started and subscribe?",
    options: [
      "Walk into an office and sign up in person",
      "Email the team and wait for an invoice",
      "Follow the Stripe payment link — either sent directly or found on the website via the get started buttons",
      "Download the app and pay in-app"
    ],
    correct: 2,
    explanation: "When a user wants to subscribe we'll send them a Stripe payment link so they can purchase their subscription and give us the necessary details to reach out for the onboarding process. They can also access this via the website by following the get started buttons."
  },
  {
    topic: "Getting started",
    question: "Once subscribed, how long does it take for the team to reach out?",
    options: [
      "Same day, always",
      "Up to 2 weeks",
      "1–2 days",
      "Only once the user follows up"
    ],
    correct: 2,
    explanation: "Throughout the process we'll stay connected to ensure that their profile is set up promptly."
  },
  {
    topic: "Getting started",
    question: "Do users have to sign a contract?",
    options: [
      "Yes, a 12-month contract",
      "Yes, a 3-month minimum",
      "No — Insta Quote AI is a no obligations service and they can cancel at any time",
      "Only enterprise customers need a contract"
    ],
    correct: 2,
    explanation: "Insta Quote AI is a no obligations service. They can cancel their subscription at any time."
  },
  {
    topic: "The big picture",
    question: "In one sentence, what does Insta Quote AI give a business owner more of?",
    options: [
      "More customers automatically",
      "More time — by taking the slow, repetitive work out of quoting",
      "More staff",
      "More invoice options"
    ],
    correct: 1,
    explanation: "Time is the real product. Less time on admin, more time on the tools, with customers, or finishing early. That's the core promise."
  }
];

const state = {
  currentIndex: 0,
  answers: [],
  score: 0
};

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const topicLabel = document.getElementById("topic-label");
const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const feedbackStatus = document.getElementById("feedback-status");
const feedbackExplanation = document.getElementById("feedback-explanation");
const progressFill = document.getElementById("progress-fill");

const scoreCorrect = document.getElementById("score-correct");
const scoreTotal = document.getElementById("score-total");
const scorePercent = document.getElementById("score-percent");
const scoreMessage = document.getElementById("score-message");
const topicResults = document.getElementById("topic-results");
const reviewList = document.getElementById("review-list");

const letters = ["A", "B", "C", "D"];

function showScreen(screen) {
  [startScreen, quizScreen, resultsScreen].forEach(s => s.classList.add("hidden"));
  screen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  state.currentIndex = 0;
  state.answers = [];
  state.score = 0;
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const q = questions[state.currentIndex];
  topicLabel.textContent = q.topic;
  questionCounter.textContent = `Question ${state.currentIndex + 1} of ${questions.length}`;
  questionText.textContent = q.question;

  const progress = ((state.currentIndex) / questions.length) * 100;
  progressFill.style.width = `${progress}%`;

  optionsContainer.innerHTML = "";
  q.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="option-letter">${letters[idx]}.</span><span>${option}</span>`;
    btn.addEventListener("click", () => handleAnswer(idx));
    optionsContainer.appendChild(btn);
  });

  feedbackEl.classList.add("hidden");
  feedbackEl.classList.remove("correct-feedback", "incorrect-feedback");
}

function handleAnswer(selectedIdx) {
  const q = questions[state.currentIndex];
  const isCorrect = selectedIdx === q.correct;

  if (isCorrect) state.score++;

  state.answers.push({
    questionIndex: state.currentIndex,
    selected: selectedIdx,
    correct: isCorrect
  });

  const optionButtons = optionsContainer.querySelectorAll(".option");
  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) {
      btn.classList.add("correct");
    } else if (idx === selectedIdx) {
      btn.classList.add("incorrect");
    }
  });

  feedbackStatus.textContent = isCorrect ? "✓ Correct" : "✗ Not quite";
  feedbackStatus.className = `feedback-status ${isCorrect ? "correct" : "incorrect"}`;
  feedbackExplanation.textContent = q.explanation;
  feedbackEl.classList.remove("hidden");
  feedbackEl.classList.add(isCorrect ? "correct-feedback" : "incorrect-feedback");

  nextBtn.textContent = state.currentIndex === questions.length - 1 ? "See Results" : "Next Question";

  feedbackEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function nextQuestion() {
  state.currentIndex++;
  if (state.currentIndex >= questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  showScreen(resultsScreen);

  const total = questions.length;
  const correct = state.score;
  const percent = Math.round((correct / total) * 100);

  scoreCorrect.textContent = correct;
  scoreTotal.textContent = total;
  scorePercent.textContent = `${percent}%`;
  progressFill.style.width = "100%";

  let message;
  if (percent === 100) message = "Perfect score — you're ready to sell with confidence.";
  else if (percent >= 85) message = "Excellent work — strong grasp across the board.";
  else if (percent >= 70) message = "Good job — review the misses and you're solid.";
  else if (percent >= 50) message = "Decent start — worth running through the quiz again.";
  else message = "Worth another pass through the material before going live.";
  scoreMessage.textContent = message;

  renderTopicBreakdown();
  renderReview();
}

function renderTopicBreakdown() {
  const topicStats = {};
  questions.forEach((q, idx) => {
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { total: 0, correct: 0 };
    }
    topicStats[q.topic].total++;
    if (state.answers[idx] && state.answers[idx].correct) {
      topicStats[q.topic].correct++;
    }
  });

  topicResults.innerHTML = "";
  Object.entries(topicStats).forEach(([topic, stats]) => {
    const row = document.createElement("div");
    row.className = "topic-row";
    const isFull = stats.correct === stats.total;
    row.innerHTML = `
      <span class="topic-name">${topic}</span>
      <span class="topic-score${isFull ? " full" : ""}">${stats.correct} / ${stats.total}</span>
    `;
    topicResults.appendChild(row);
  });
}

function renderReview() {
  reviewList.innerHTML = "";
  questions.forEach((q, idx) => {
    const answer = state.answers[idx];
    const isCorrect = answer.correct;
    const item = document.createElement("div");
    item.className = `review-item${isCorrect ? "" : " wrong"}`;

    let yourAnswerHtml = "";
    if (!isCorrect) {
      yourAnswerHtml = `<div class="review-answer your-answer-wrong"><strong>Your answer:</strong> ${letters[answer.selected]}. ${q.options[answer.selected]}</div>`;
    }

    item.innerHTML = `
      <div class="review-question">Q${idx + 1}. ${q.question}</div>
      ${yourAnswerHtml}
      <div class="review-answer correct-answer"><strong>Correct answer:</strong> ${letters[q.correct]}. ${q.options[q.correct]}</div>
      <div class="review-explanation">${q.explanation}</div>
    `;
    reviewList.appendChild(item);
  });
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", startQuiz);
