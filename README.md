# Insta Quote AI — Sales Knowledge Quiz

A simple, interactive quiz site to train sales partners on Insta Quote AI.

## What it does

- 26 multiple-choice questions across 11 topic areas
- Shows the correct answer and explanation immediately after each response
- Final summary with overall score, topic-by-topic breakdown, and full answer review

## Running it

It's a static site — just open `index.html` in a browser, or serve the folder with any static server:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

Drop the folder into any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.). No build step required.

## Files

- `index.html` — markup
- `styles.css` — styling
- `quiz.js` — questions data and quiz logic
