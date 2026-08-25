# Samangile Guest Lodge — Next.js site

## Local setup
```
npm install
npm run dev
```
Visit http://localhost:3000

## Still needed before this is deploy-ready
- `public/assets/brand/samangile-logo-master.png` — referenced in Header.js and Footer.js, not yet included
- Any room/gallery/wellness photography (site currently uses placeholder tiles)
- Confirm all PLACEHOLDER values in `lib/data.js` (phone, email, WhatsApp, pricing, room names, etc.)

## Deploying
- Push to GitHub, then connect the repo as a new site in Netlify
- Netlify auto-detects Next.js — build command `next build`, no publish directory override needed (their Next.js Runtime plugin handles it)
