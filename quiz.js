const quizzes = {
  sales: {
    title: "Sales Knowledge Quiz",
    questions: [
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
        topic: "Handling objections",
        question: "Why isn't there a free trial?",
        options: [
          "Time goes into helping users build their quoting structure and high quality AI costs money and time",
          "There is a free trial — 14 days, just ask",
          "Free trials aren't allowed under our payment provider's rules",
          "We used to offer one but too many people abused it"
        ],
        correct: 0,
        explanation: "People don't buy cheap power tools because they know they don't work — this is the type of brand image I want to push with Insta Quote AI: that you pay for what you get, which is quite common in the trades and will help us stand out from other companies. When we release the lite version we're still getting the smaller companies with a good brand image. Also worth mentioning: time goes into setting up and refining their quoting structure, along with AI costing money to run at the level we do."
      },
      {
        topic: "Handling objections",
        question: "A customer says \"$500 a month is too expensive.\" What's the best response?",
        options: [
          "Drop the price by 20% to close the deal",
          "Agree it's expensive and suggest they use ChatGPT instead",
          "Reframe it as a quality investment — tradies pay for tools that don't break, and Insta Quote AI is built the same way: a customised setup, premium AI in the background, and ROI on a single won job",
          "Tell them everyone says that and move on"
        ],
        correct: 2,
        explanation: "Tradies don't buy the cheapest power tools on the shelf — they buy quality ones so they don't break on the job and let them down. Insta Quote AI is the same idea applied to quoting: you pay for what you get. The $500 covers a fully customised setup where we build, test and refine the user's quoting structure, plus the cost of running high-quality AI in the background — that's not cheap to run at the level we do it. On top of that, it's $500 against winning extra work — most tradies make that back on a single won job, and quoting faster means winning the emotional buyer before competitors even respond. Compare it to AI agencies charging $2,000–$10,000 a month for software that doesn't deliver, or what they'd pay an in-house estimator, and $500 for a tool built specifically around their business is genuinely good value."
      },
      {
        topic: "Integrations",
        question: "How does Xero work for users?",
        options: [
          "Their quotes through Insta Quote AI get sent to Xero and can be processed from there",
          "Users have to manually re-enter every quote into Xero",
          "Xero replaces Insta Quote AI entirely once connected",
          "Xero only handles invoicing — quotes can't be linked across the two"
        ],
        correct: 0,
        explanation: "Insta Quote AI quotes can be sent to Xero for users that use the accounting software. Users can still send the quote themselves from Insta Quote AI, or they can send the Insta Quote AI–generated quote via Xero and have it accepted there. Invoices of the Insta Quote AI–produced quote can also be done through Xero."
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
          "Only Bunnings — no other suppliers",
          "Yes — when people sign up we link their materials suppliers to the app for live trade pricing",
          "No, suppliers are never connected — pricing is always generic",
          "Only as a paid add-on once you've been a customer for 3 months"
        ],
        correct: 1,
        explanation: "When a user signs up we link their materials suppliers to the app so they get live trade pricing on their quotes. If someone buys their materials from Bunnings for example, we connect that during onboarding so the pricing in their quotes reflects what they actually pay."
      },
      {
        topic: "Materials",
        question: "Can Insta Quote AI factor in materials?",
        options: [
          "No, it only covers labour",
          "Yes — when people sign up we link their materials suppliers to the app for live trade pricing",
          "Yes, but only using generic average prices that don't reflect your actual trade rates",
          "Only if you manually enter every material price every time you quote"
        ],
        correct: 1,
        explanation: "Yes, and to your actual trade prices. When a user signs up we link their materials suppliers to the app for live trade pricing, so the materials in every quote use the rates they really pay rather than generic estimates."
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
    ]
  },

  aiBasics: {
    title: "AI Basics Quiz",
    questions: [
      {
        topic: "What AI is",
        question: "What actually is AI?",
        options: [
          "A robot that thinks and feels like a human",
          "A very well-read assistant that has learned from massive amounts of information and uses that to complete tasks",
          "A search engine that looks things up on Google"
        ],
        correct: 1,
        explanation: "AI doesn't think like a human but it can recognise patterns and complete tasks based on everything it has learned — similar to how a person gets better at their job the more experience they have."
      },
      {
        topic: "What AI is",
        question: "How does AI learn?",
        options: [
          "Someone manually programs every single answer into it",
          "It copies answers from the internet in real time",
          "It gets fed massive amounts of information and over time learns to make sense of it and give useful answers"
        ],
        correct: 2,
        explanation: "Think of it like reading every trade manual and job description ever written. After all that, you'd get pretty good at knowing what a job involves. AI does the same thing."
      },
      {
        topic: "How AI works",
        question: "Is AI just guessing?",
        options: [
          "Yes — it randomly generates answers and hopes for the best",
          "No — it works from what it's been trained on plus the details you give it about the specific job",
          "It depends on the question"
        ],
        correct: 1,
        explanation: "It's more like an experienced tradesperson making a judgement call. The better the information you give it, the better the answer it gives back."
      },
      {
        topic: "How AI works",
        question: "Why doesn't AI just make mistakes all the time?",
        options: [
          "Because AI is perfect and never gets anything wrong",
          "Because it has been tested, refined and there is always a human reviewing the output before it goes anywhere",
          "Because it copies from other quotes online"
        ],
        correct: 1,
        explanation: "It can make mistakes, just like a person can. That's why the setup process involves testing and refining — and the user always reviews the quote before it goes to a customer."
      },
      {
        topic: "How AI works",
        question: "What's the difference between AI and just a calculator?",
        options: [
          "There is no difference — they both just crunch numbers",
          "A calculator is smarter because it never makes mistakes",
          "A calculator only does exactly what you tell it, whereas AI can read a description, understand context and work out what's needed without you entering every figure manually"
        ],
        correct: 2,
        explanation: "AI fills in the gaps using what it knows. A calculator can't read a job description and figure out what's involved — AI can."
      },
      {
        topic: "How AI works",
        question: "Why does giving AI better information lead to a better result?",
        options: [
          "It doesn't matter — AI figures it out regardless of what you give it",
          "AI works with what you give it — the more detail, the more accurate the output",
          "More information actually confuses AI and makes it worse"
        ],
        correct: 1,
        explanation: "It's like briefing a new employee. The more clearly you explain the job, the better they'll do it. Give AI more to work with and it gives you more back."
      },
      {
        topic: "AI in your business",
        question: "Is AI going to replace tradespeople?",
        options: [
          "Yes — eventually AI will do everything",
          "No — AI handles the paperwork side so the tradie can focus on the actual work",
          "Only the less skilled tradespeople will be replaced"
        ],
        correct: 1,
        explanation: "AI can't swing a hammer, assess a site in person or build a relationship with a client. Think of it like a high-powered assistant that handles the time-consuming admin, not the trade itself."
      },
      {
        topic: "AI in your business",
        question: "Why is Insta Quote AI different to just asking ChatGPT to write a quote?",
        options: [
          "They are basically the same thing",
          "ChatGPT is actually better for quoting because it knows more",
          "ChatGPT is a general tool whereas Insta Quote AI has been built specifically for quoting in the trades and is set up around each user's own pricing and structure"
        ],
        correct: 2,
        explanation: "It's the difference between asking a random person on the street to write your quote versus having a trained estimator who has studied your business inside out."
      },
      {
        topic: "AI in your business",
        question: "Does the AI remember how your business quotes each time you use it?",
        options: [
          "No — you have to re-explain your pricing and structure every single time",
          "Yes — your quoting structure, pricing and trade type are all built into your profile so it already knows how you work every time",
          "Only if you remind it at the start of each session"
        ],
        correct: 1,
        explanation: "Think of it like a staff member who has been fully trained and never forgets what they've been taught. It's always working from your profile in the background."
      },
      {
        topic: "Speed & ease",
        question: "Why is AI so much faster than a human at producing a quote?",
        options: [
          "Because it skips important steps to save time",
          "Because it processes everything at once — reading the job, applying your structure and producing the quote all in seconds with no breaks or distractions",
          "Because it uses a simple template and just fills in the blanks"
        ],
        correct: 1,
        explanation: "A human has to think through each step one at a time. AI does it all simultaneously. No coffee break, no starting over, no distraction."
      },
      {
        topic: "Speed & ease",
        question: "Do you need to understand how AI works to use Insta Quote AI?",
        options: [
          "Yes — you need a solid understanding of how AI works before you can use it properly",
          "Only a basic understanding is needed",
          "Not at all — you don't need to know how a car engine works to drive a car"
        ],
        correct: 2,
        explanation: "You type or speak a job description, attach photos if you have them, and it gives you a quote. The technical side is handled entirely in the background."
      }
    ]
  }
};

const state = {
  activeQuiz: null,
  currentIndex: 0,
  answers: [],
  score: 0
};

const selectScreen = document.getElementById("select-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const chooseAnotherBtn = document.getElementById("choose-another-btn");
const backToSelectBtn = document.getElementById("back-to-select");

const topicLabel = document.getElementById("topic-label");
const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const feedbackStatus = document.getElementById("feedback-status");
const feedbackExplanation = document.getElementById("feedback-explanation");
const progressFill = document.getElementById("progress-fill");

const resultsTitle = document.getElementById("results-title");
const scoreCorrect = document.getElementById("score-correct");
const scoreTotal = document.getElementById("score-total");
const scorePercent = document.getElementById("score-percent");
const scoreMessage = document.getElementById("score-message");
const topicResults = document.getElementById("topic-results");
const reviewList = document.getElementById("review-list");

const letters = ["A", "B", "C", "D", "E"];

document.getElementById("sales-count").textContent = quizzes.sales.questions.length;
document.getElementById("ai-count").textContent = quizzes.aiBasics.questions.length;

function showScreen(screen) {
  [selectScreen, quizScreen, resultsScreen].forEach(s => s.classList.add("hidden"));
  screen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz(quizKey) {
  state.activeQuiz = quizKey;
  state.currentIndex = 0;
  state.answers = [];
  state.score = 0;
  showScreen(quizScreen);
  renderQuestion();
}

function getActiveQuestions() {
  return quizzes[state.activeQuiz].questions;
}

function renderQuestion() {
  const questions = getActiveQuestions();
  const q = questions[state.currentIndex];
  topicLabel.textContent = q.topic;
  questionCounter.textContent = `Question ${state.currentIndex + 1} of ${questions.length}`;
  questionText.textContent = q.question;

  const progress = (state.currentIndex / questions.length) * 100;
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
  const questions = getActiveQuestions();
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
  const questions = getActiveQuestions();
  state.currentIndex++;
  if (state.currentIndex >= questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  showScreen(resultsScreen);
  const quiz = quizzes[state.activeQuiz];
  const total = quiz.questions.length;
  const correct = state.score;
  const percent = Math.round((correct / total) * 100);

  resultsTitle.textContent = `${quiz.title} — Complete`;
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
  const questions = getActiveQuestions();
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
  const questions = getActiveQuestions();
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

document.querySelectorAll(".quiz-card").forEach(card => {
  card.addEventListener("click", () => startQuiz(card.dataset.quiz));
});

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", () => startQuiz(state.activeQuiz));
chooseAnotherBtn.addEventListener("click", () => showScreen(selectScreen));
backToSelectBtn.addEventListener("click", () => {
  if (state.currentIndex === 0 && state.answers.length === 0) {
    showScreen(selectScreen);
  } else if (confirm("Leave this quiz? Your progress will be lost.")) {
    showScreen(selectScreen);
  }
});
