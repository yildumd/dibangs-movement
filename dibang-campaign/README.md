# Dibangs Movement — Campaign Website
### React + Vite

Full campaign site for Hon. Amb. Fwangshak Isaiah Dibang (YPP, Bokkos Constituency,
Plateau State House of Assembly), built the same way as the other Yilnan projects —
React components, Vite build, GitHub → Vercel.

## Structure

```
dibang-campaign/
├── public/
│   └── assets/            <- his 3 photos go here (see below)
├── src/
│   ├── components/        <- Nav, Hero, Bio, Manifesto, Agenda, Numbers, Support, etc.
│   │   └── *.css           each component has its co-located stylesheet
│   ├── hooks/
│   │   └── useReveal.js    <- scroll-reveal + count-up animation hooks
│   ├── App.jsx             <- assembles all sections
│   ├── main.jsx
│   └── index.css           <- design tokens, resets, shared styles
├── index.html               <- meta tags, SEO, Paystack script tag
├── package.json
└── vite.config.js
```

## 1. Add the photos

Drop these into `public/assets/`, exact filenames:
- `portrait-formal.jpg` — blue traditional cap + agbada (hero)
- `portrait-suit.jpg` — blue suit + gold tie (About section)
- `portrait-casual.jpg` — white agbada + sunglasses (spare)

## 2. Run locally

```bash
cd dibang-campaign
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Dibangs Movement campaign site — React + Vite"
git branch -M main
git remote add origin https://github.com/yildumd/dibangs-movement.git
git push -u origin main
```

## 4. Deploy to Vercel

Go to vercel.com → Add New Project → import the repo. Vite is auto-detected —
leave Build Command (`npm run build`) and Output Directory (`dist`) as default.
Deploy. Every future `git push` auto-redeploys.

## 5. Turn on real donations (Paystack)

`src/components/Support.jsx` has this line near the top:

```js
const PAYSTACK_PUBLIC_KEY = "pk_test_REPLACE_WITH_YOUR_PUBLIC_KEY";
```

Replace it with the real **public** key from his Paystack dashboard
(Settings → API Keys & Webhooks). Never the secret key — that never belongs
in front-end code.

## 6. Ward data (still placeholder)

`src/components/Numbers.jsx` has a `wards` array marked with a `TODO` — it's
still placeholder data (14 names, invented polling-unit counts), not the real
20-ward list. Swap it for the actual figures once confirmed.

## 7. Domain

`votedibang.com.ng` (registered via Whogohost) — once DNS is pointed at
Vercel (Vercel project → Settings → Domains → Add), it'll serve this site
directly, same as `bethstreamsolutions.com` and the others.
