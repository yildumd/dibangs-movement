# Yilnan Academy website

React + Vite + React Router. Two schools: the School of Hospitality & Culinary Arts and the School of Technology.

## Run it on your computer

```bash
npm install      # once, after downloading
npm run dev      # then open the address it prints, e.g. http://localhost:5173
```

## Where to change things

| What | File |
|---|---|
| Programmes, fees, modules, durations | `src/data/programmes.js` |
| Phone, WhatsApp, email, address, enrolment dates | `src/data/site.js` |
| Campus build photos and captions | `src/pages/Campus.jsx` (the `LOG` list) |
| Admissions FAQ and weekly timetable | `src/pages/Admissions.jsx` |
| Colours and fonts | `src/index.css` (top of the file) |
| Photos | `public/img/` |

A fee of `null` shows "Announced soon". Change one programme in `programmes.js` and the school pages, programme page, fees table and enrolment form all update.

## Pages

`/` Home · `/culinary` · `/technology` · `/programmes/<name>` · `/admissions` · `/campus` · `/flavour-library` · `/about` · `/contact`

## Deploy (GitHub + Vercel)

```bash
git add .
git commit -m "Yilnan Academy website"
git branch -M main
git remote add origin https://github.com/yildumd/yilnan-academy.git   # create the empty repo on GitHub first
git push -u origin main
```

Then on vercel.com: **Add New → Project → import `yilnan-academy`**. Vercel detects Vite automatically. `vercel.json` makes page links like `/culinary` work when opened directly.

To use a domain such as `yilnanacademy.com`: Vercel project → **Settings → Domains → Add**, then add the DNS records Vercel shows at your registrar.
