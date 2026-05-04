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
  },

  objections: {
    title: "Sales Objections Quiz",
    questions: [
      {
        topic: "Price",
        question: "A customer says \"$500 — that's too expensive.\" What's the strongest angle to take?",
        options: [
          "Drop the price by 20% to close the deal",
          "ROI reframe — anchor it to a single won quote, compare to the cost of a quoting staff member, and highlight downstream savings",
          "Tell them everyone says that and move on",
          "Suggest they use ChatGPT instead because it's free"
        ],
        correct: 1,
        explanation: "ROI reframe. A single won quote almost certainly covers the $500 — anchor to that one job. Then frame it against the hourly cost of manual quoting, the extra volume Insta Quote AI lets them produce, and downstream savings like fewer errors, fewer callbacks and fewer re-quotes. For perspective: a quantity surveyor in NZ costs $90,000–$120,000 a year, in Australia $115,000–$130,000 — Insta Quote AI delivers a chunk of that work for a fraction. It's quality that justifies the price."
      },
      {
        topic: "Price",
        question: "A customer asks \"Can I try it before I commit to the full price?\" What's the best approach?",
        options: [
          "Offer them a 14-day free trial",
          "Risk reversal — explain we help set up and adjust their quoting structure for accuracy, which takes 2–3 days, and that's the key reason there isn't a free trial",
          "Cut the price by 25% as a compromise",
          "Tell them no and end the call"
        ],
        correct: 1,
        explanation: "Risk reversal. What they're really asking is for proof before paying. Address that head-on: explain that we work directly with them to set up and refine their quoting structure to make sure it's accurate — that takes about 2–3 days of our time, and it's the key reason a free trial doesn't make sense. They're not paying for software they have to figure out alone — they're paying for a customised, working setup from day one."
      },
      {
        topic: "Trust & accuracy",
        question: "A customer says \"How do I know the AI quotes will be accurate?\" What's the right approach?",
        options: [
          "Tell them the AI is always 100% accurate and they don't need to worry",
          "Suggest they just trust it",
          "Customisation and testing — it's built around their existing structure, every setup is tested before going live, accuracy improves with use, and they review every quote before sending",
          "Tell them it pulls from generic industry rates"
        ],
        correct: 2,
        explanation: "Customisation and testing. The system is built around their existing quoting structure — it's not generic AI guessing prices. Every setup goes through testing and tweaking before going live, and accuracy improves over time as it learns their specific job types. They retain full control to review every quote before it goes to a customer. And remember: errors happen in manual quoting too — the comparison isn't \"perfect vs AI\", it's \"AI vs human error rate\"."
      },
      {
        topic: "Trust & accuracy",
        question: "A customer says \"I don't trust AI with my business.\" What's the best response?",
        options: [
          "Tell them they should trust AI because it's the future",
          "Agree with them and walk away",
          "Tell them the AI runs entirely on its own with no input",
          "Control and familiarity — it uses their own pricing and logic, they review every quote before sending, and they already trust calculators and estimating software which is the same idea"
        ],
        correct: 3,
        explanation: "Control and familiarity. It's not a mystery box making decisions — it uses their own pricing and logic, not an industry standard rate. They review every quote before it goes anywhere, so nothing leaves without their sign-off. Reframe it: they already trust calculators, estimating software and spreadsheets to do the maths for them. Insta Quote AI is the same idea, just faster and more flexible."
      },
      {
        topic: "Trust & accuracy",
        question: "A customer says \"What happens if it quotes wrong and I lose money on a job?\" How do you respond?",
        options: [
          "Tell them we'll refund any losses caused by the AI",
          "Risk management — they set the pricing rules and margins, the AI calculates not guesses, and checking a generated quote is far quicker than building one from scratch",
          "Suggest they add a 30% buffer to every quote just in case",
          "Tell them the AI never gets things wrong"
        ],
        correct: 1,
        explanation: "Risk management. They set the pricing rules and the margins — the AI doesn't guess, it calculates from what they've put in. Checking a generated quote takes a fraction of the time it takes to build one from scratch, so a quick review catches anything off. And human quotes have errors too — Insta Quote AI gives them a reviewable, consistent baseline rather than starting fresh every single time."
      },
      {
        topic: "Technical",
        question: "A customer says \"I'm not tech-savvy — I won't be able to use it.\" What's the right angle?",
        options: [
          "Tell them they'll need to take a training course before signing up",
          "Suggest they hire a tech-savvy assistant to use it on their behalf",
          "Simplicity and support — designed for tradies and business owners by a tradie, onboarding is handled for them, and the app is as easy to use as ChatGPT",
          "Agree it might not be the right fit"
        ],
        correct: 2,
        explanation: "Simplicity and support. It's designed for tradies and business owners by a tradie — not for IT people. If they can use a phone, they can use this. Onboarding and setup is handled for them, and the app itself is as easy to use as ChatGPT. Ongoing support means they're never left alone with a problem."
      },
      {
        topic: "Technical",
        question: "A customer asks \"What software does it integrate with? Mine might not be compatible.\" What's the strongest response?",
        options: [
          "Tell them it integrates with absolutely everything from day one",
          "Tell them they'll need to switch to our preferred apps",
          "Tell them integrations don't matter",
          "Integration flexibility — clarify what they're using, explain we're working on a wide variety of integrations across suppliers, job management and accounting software, and worst case the quote drops into whatever workflow they already have"
        ],
        correct: 3,
        explanation: "Integration flexibility. First clarify what they're currently using — then explain we're working on a wide variety of integrations across suppliers, job management apps and accounting software. Even standalone, Insta Quote AI saves significant time. Worst case: the generated quote drops straight into whatever workflow they already have, and they can put job numbers into their template themselves."
      },
      {
        topic: "Change & adoption",
        question: "A customer says \"My team won't want to change how they do things.\" How should you respond?",
        options: [
          "Tell them to force the team to adopt it",
          "Change management — it doesn't replace anyone's judgement, adoption is faster once they see the first quote produced, and you can start with one person or one job type to prove value internally",
          "Suggest they fire anyone who resists",
          "Walk away — team buy-in is too risky"
        ],
        correct: 1,
        explanation: "Change management. It doesn't replace anyone's judgement — it just handles the repetitive parts of quoting. Adoption is faster than people expect once they see the first quote come out. The easiest way in is to start with one person or one job type, prove the value internally, then roll it out wider."
      },
      {
        topic: "Change & adoption",
        question: "A customer says \"We've tried software before and it didn't stick.\" What's the right approach?",
        options: [
          "Tell them all software is essentially the same",
          "Past experience reframe — acknowledge the frustration, differentiate Insta Quote AI on trades knowledge and support, ask what specifically failed last time and address that directly",
          "Tell them this one will work because we say so",
          "Drop the price to win them over"
        ],
        correct: 1,
        explanation: "Past experience reframe. Acknowledge the frustration — this is a common and valid concern. Then differentiate: Insta Quote AI is built with deep trades knowledge and proper support behind it, not a generic SaaS dropped on them with no help. Ask what specifically failed before — complexity, lack of support, poor fit — and address that directly. The onboarding and setup process is designed to avoid the cliff edge that kills adoption."
      },
      {
        topic: "Change & adoption",
        question: "A customer says \"I need to talk to my business partner / accountant first.\" What does that mean and how do you respond?",
        options: [
          "Walk away — it means they're not interested",
          "Tell them they should make the decision on their own",
          "Stakeholder alignment — welcome it as a buying signal, offer to be on the call or send a one-page summary, and ask what questions the partner is likely to raise so you can address them in advance",
          "Push hard for a yes on the spot before they leave"
        ],
        correct: 2,
        explanation: "Stakeholder alignment. This is a buying signal, not a block — welcome it. Offer to jump on a call with them and the partner, or provide a one-page summary they can share. Ask up front what questions the partner is likely to raise (price, contract, integrations) and address them now so the follow-up conversation is as easy as possible."
      },
      {
        topic: "Time & effort",
        question: "A customer says \"I don't have time to set it up right now.\" What's the best response?",
        options: [
          "Tell them to come back in 6 months",
          "Effort minimisation — setup is handled for them so their time investment is minimal, and doing nothing has a cost too because every manually-written quote this week is time they could have saved",
          "Suggest they hire a consultant first to evaluate",
          "Agree and end the call"
        ],
        correct: 1,
        explanation: "Effort minimisation. Setup is handled by us — their time investment to get started is minimal. Doing nothing has a cost too: every quote they write manually this week is time they could have saved. The longer they wait, the more hours pile up on manual quoting that Insta Quote AI would have handled in minutes."
      },
      {
        topic: "Time & effort",
        question: "A customer says \"Our quoting volume is low — we don't quote that often.\" How do you respond?",
        options: [
          "Agree and recommend they don't subscribe",
          "Tell them quoting volume isn't relevant",
          "Tell them it only works for high-volume businesses",
          "Per-quote value — lower volume usually means each quote is higher-value and takes longer, Insta Quote AI cuts that by at least 50%, and even saving 30 minutes on 2 quotes a week is over 50 hours a year"
        ],
        correct: 3,
        explanation: "Per-quote value. Lower volume usually means each quote is higher-value and takes more time — Insta Quote AI cuts that by at least 50% and handles the complexity of the task. Time saved per quote is the same regardless of how many they do. Even saving 30 minutes on 2 quotes a week is over 50 hours a year — and a single won job from quoting faster usually covers the cost."
      },
      {
        topic: "Time & effort",
        question: "A customer says \"I'm in a busy period right now — can I come back to this later?\" How do you respond?",
        options: [
          "Apologise and end the call",
          "Tell them yes, definitely come back later",
          "Urgency and timing — busy periods are exactly when this pays off most, setup is minimal and doesn't disrupt their current workflow, and the cost of delay is real",
          "Cut the price as compensation for catching them at a bad time"
        ],
        correct: 2,
        explanation: "Urgency and timing. Busy periods are exactly when Insta Quote AI pays off the most — they're losing the most time right now, on the quotes they don't have time to write. Setup is minimal and doesn't disrupt their current workflow. Every week they wait is more hours spent quoting manually that they won't get back."
      },
      {
        topic: "Fit & need",
        question: "A customer says \"My jobs are all different — they can't be templated.\" What's the right angle?",
        options: [
          "Tell them yes, every job is forced into the same template",
          "Tell them they should standardise their jobs to fit the system",
          "Walk away — they're not a fit",
          "Flexibility and structure — the AI handles the repeatable parts while they apply judgement to the variables, it treats each job individually rather than copy-pasting old quotes, and accuracy comes from them pairing with the AI"
        ],
        correct: 3,
        explanation: "Flexibility and structure. The AI handles the repeatable parts of quoting; they still apply their own judgement to the variables. It takes each job as its own job and applies their quoting structure to it — it's not \"I've done one like this before, copy that down\". It's not a rigid one-size-fits-all template. Accuracy comes from them pairing with the AI, not the AI working alone."
      },
      {
        topic: "Fit & need",
        question: "A customer says \"We already have someone who does quoting — why would I need this?\" What do you say?",
        options: [
          "Tell them to fire that person",
          "Augmentation not replacement — it makes their quoter faster and more consistent, freed-up time goes to higher-value work, and consistent quotes reduce disputes and rework",
          "Agree they don't need it",
          "Tell them the AI is better than any human quoter"
        ],
        correct: 1,
        explanation: "Augmentation not replacement. This isn't about replacing their quoting person — it's about making them faster and more consistent. The freed-up time goes into higher-value work like sales, follow-up and supervision. And consistency across quotes — same prices, same format, no matter who built it — reduces disputes and rework down the line."
      },
      {
        topic: "Fit & need",
        question: "A customer says \"My industry is very specialised — this probably isn't built for us.\" How do you respond?",
        options: [
          "Agree it probably won't work for them",
          "Tell them their industry is the same as everyone else's",
          "Specialisation capability — it's built around their structure not a generic industry template, specialisation is an argument for the tool not against it, and you can map their quoting process directly to the system",
          "Suggest they wait until we build a special version"
        ],
        correct: 2,
        explanation: "Specialisation capability. It's built around their structure, not a generic industry template — that's exactly why specialisation isn't a problem. Specialisation is actually an argument for it: inconsistent manual quoting is worse in complex industries, not better. Ask them to walk through their quoting process and you can show directly how it maps to the system."
      },
      {
        topic: "General",
        question: "A prospect asks you to send them more information instead of committing on the call. What's the right move?",
        options: [
          "Send them a long PDF and wait for them to reply",
          "Refuse to send anything",
          "Tell them you'll get information through to them via the website or a one-pager — or, preferably, redirect them to another call where you can go into more depth",
          "Drop the price to keep them on the call"
        ],
        correct: 2,
        explanation: "Don't lose them in an email thread. Either tell them you'll get the information through to them via a website link or a one-pager, or — preferably — redirect them to another call where you can go into more depth in person and answer their specific questions live."
      },
      {
        topic: "General",
        question: "A customer asks how long onboarding takes. What do you tell them?",
        options: [
          "Same day, always",
          "2 weeks minimum",
          "1–2 hours",
          "2–3 days, depending on how quickly they get us their details and how quickly we onboard their profile to the system"
        ],
        correct: 3,
        explanation: "Onboarding takes about 2–3 days. The exact time depends on how quickly the customer gets their details over to us and how quickly we onboard their profile into the system. We stay in touch throughout to keep things moving."
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
document.getElementById("objections-count").textContent = quizzes.objections.questions.length;

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
