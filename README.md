# Nasreddine Jaouadi – Portfolio (Next.js 15, App Router, JavaScript)

## Run locally
bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check


## Before you publish
1. Edit `lib/site.js`: real email, LinkedIn, GitHub and site URL.
2. Put your CV at `public/cv.pdf`.
3. Add source links in `lib/data.js` (`repo: "https://github.com/..."`) and screenshots if you like.
4. Add certifications to the `certifications` array in `lib/data.js` when you earn them.

## Deploy to Vercel
Push to GitHub, then import the repository at vercel.com/new. Vercel detects Next.js automatically.
Set the final domain in `lib/site.js` (`url`) for correct Open Graph links.

## Contact form
The form opens the visitor's email app with the message filled in, so it needs no backend.
For direct submissions later, use Formspree or Resend from a Next.js route handler.
