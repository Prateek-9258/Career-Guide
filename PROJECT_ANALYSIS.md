# Career Vision - project analysis and fixes

## What the project was
A React + Vite frontend (login, career quiz, careers/colleges explorer, compare,
roadmap, profile). It had **no backend**: accounts, passwords, profile, photo and
quiz data all lived in the browser's `localStorage`.

## Backend added (`server/`)
Express + Mongoose (MongoDB). One `User` collection holds the account, profile,
photo, latest quiz result and favourite colleges.

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/api/auth/register` | create account and log in |
| POST | `/api/auth/login` | log in |
| POST | `/api/auth/logout` | log out |
| GET | `/api/auth/me` | current user |
| POST | `/api/auth/change-password` | change password (logs out other devices) |
| GET / PUT | `/api/profile` | read / partially update profile |
| PUT / DELETE | `/api/profile/photo` | profile picture |
| POST | `/api/quiz`, GET `/api/quiz/latest` | quiz result |
| GET / PUT | `/api/favorites` | favourite colleges |
| GET | `/api/health` | server + DB status |

## Mistakes found and fixed

### Security
1. Passwords were stored in plain text in `localStorage` (`cv_users`, `careerVisionPassword`). Now bcrypt-hashed on the server; the old keys are removed from browsers once.
2. "Logged in" was just a `localStorage` flag and every page was open without login. Now a server session (httpOnly JWT cookie) plus route guards on all pages.
3. Change password only updated a separate key, so login kept using the old password (and any "current password" was accepted if none was saved). Now handled on the server.

### Bugs
4. Email regex had an unescaped `.`, so `a@bcd` counted as valid.
5. Quiz result was never saved, so My Profile always said "Quiz Not Completed".
6. My Profile showed hard-coded "65% progress", fake "Saved Careers" and always-ticked roadmap steps. Now derived from real data.
7. Stream/interest choices differed between My Profile (PCM/PCB/Other, free text) and the quiz (Science/Commerce/Arts, fixed list). Now shared (`src/careerOptions.js`).
8. Logout left `cv_login`, `cv_name`, `cv_user` behind; dashboard kept the old name after a profile edit.
9. Toast timer: an old timer hid a newer toast early.
10. Profile photo was stored raw in `localStorage` (quota errors, uncaught). Now resized to 512px and stored on the server. Also fixed: choosing the same file twice, camera never calling `play()`, unguarded `JSON.parse`.
11. Navbar "Contact" link and internal `<a href>` / `window.location.href` caused full page reloads. Now `Link` / `navigate`.
12. `CareerDetails`: no effect cleanup (observers and `window` functions stacked up), unused functions, favourites shared by every account in one browser. Two college URLs had trailing spaces.
13. `Roadmap`: static data re-created on every render, shadowed `category` variable, missing `useMemo` deps. `Comparisons`: unused state.
14. Unknown URLs showed a blank page. Now redirect to the login/home page.

### Config and performance
15. README contained unresolved git merge-conflict markers.
16. `index.html` linked a `favicon.ico` that does not exist.
17. `manifest.json` sat in the project root (Vite bundled and re-hashed it); moved to `public/`.
18. `package.json` had a wrong `main`; `.oxlintrc.json` existed but oxlint was not installed and there was no `lint` script.
19. `.gitignore` used `/node_modules`, which does not cover `server/node_modules`.
20. First JS download 604 KB -> 169 KB (route-level code splitting); hero image 1.4 MB -> 228 KB.
21. Lint: 14 problems -> 0.

## Verification
- 14 API integration tests (`npm --prefix server test`), run against a MongoDB-compatible server (FerretDB), not a real `mongod` - please run them once on your MongoDB.
- End-to-end API flow through the Vite proxy.
- jsdom UI flow: protected route -> signup -> quiz -> profile -> logout.
- Production mode: static files, SPA fallback, `Secure` cookie, `JWT_SECRET` enforced.
- NOT tested in a real browser.

## Not fixed - needs your decision
- Old accounts kept in `localStorage` are not migrated; users must sign up again.
- 141 colleges are still embedded in `CareerDetails.jsx`. Moving them to MongoDB (`/api/colleges`) is the next step, but needs a rewrite of that legacy DOM code.
- Three colleges share one placeholder image; many images are hot-linked from third-party sites and may break.
- Some college link/image pairs look mismatched (e.g. the "Adarsh" entry links to a Kalika Devi college site). Review the data.
- "Education budget" is collected but not used in quiz scoring.
- Contact emails on the dashboard use `@email.com` and look like placeholders.
- "Forgot password" and social login still show "coming soon"; no email verification.
- Quiz score is computed in the browser; the server stores what it is sent.
- `Myprofile.css` keeps its original casing (a case-only rename confuses git on Windows/macOS).
