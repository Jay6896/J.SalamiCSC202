# J.SalamiCSC202

A week-by-week learning workspace covering:

- **Core JavaScript** (arrays, strings, objects, functions)
- **OOP basics**
- **TypeScript fundamentals**
- **HTML/CSS mini site**
- **Next.js (React) application** (primary app-style project)

---

## Quick navigation

### React Application (Next.js) — **main “app” project**

Location: [React Nextjs/first-react-proj](React%20Nextjs/first-react-proj)

Key files:

- App shell/layout: [app/layout.tsx](React%20Nextjs/first-react-proj/app/layout.tsx)
- Navbar component: [`default export Navbar`](React%20Nextjs/first-react-proj/app/components/Navbar.tsx) in [app/components/Navbar.tsx](React%20Nextjs/first-react-proj/app/components/Navbar.tsx)
- Home page: [`default export Home`](React%20Nextjs/first-react-proj/app/page.tsx) in [app/page.tsx](React%20Nextjs/first-react-proj/app/page.tsx)
- Profile page: [`default export Profile`](React%20Nextjs/first-react-proj/app/profile-page/page.tsx) in [app/profile-page/page.tsx](React%20Nextjs/first-react-proj/app/profile-page/page.tsx)
- Styling (Tailwind v4 import): [app/globals.css](React%20Nextjs/first-react-proj/app/globals.css)
- Project scripts/deps: [package.json](React%20Nextjs/first-react-proj/package.json)

Run it (VS Code terminal):

```sh
cd "React Nextjs/first-react-proj"
npm install
npm run dev
```

Then open: http://localhost:3000

Notes:

- Navigation is driven by the `navMenu` map inside [`Navbar`](React%20Nextjs/first-react-proj/app/components/Navbar.tsx).
- The layout renders `<Navbar />` once for all pages in [`RootLayout`](React%20Nextjs/first-react-proj/app/layout.tsx).

---

### HTML-CSS folder — **static multi-page site**

Location: [Week - 8 (HTML-CSS)](<Week%20-%208%20(HTML-CSS)>)

Key files:

- Main page: [index.html](<Week%20-%208%20(HTML-CSS)/index.html>)
- Shared styles: [index.css](<Week%20-%208%20(HTML-CSS)/index.css>)
- Browse page: [browse.html](<Week%20-%208%20(HTML-CSS)/browse.html>)
- Contacts route: [contacts/index.html](<Week%20-%208%20(HTML-CSS)/contacts/index.html>)
- Saved items route: [saved-items/index.html](<Week%20-%208%20(HTML-CSS)/saved-items/index.html>)

How to view:

- Open [Week - 8 (HTML-CSS)/index.html](<Week%20-%208%20(HTML-CSS)/index.html>) in a browser (or use VS Code “Live Server” if installed).
- Internal navigation uses folder routing conventions (e.g. `/saved-items` loads `saved-items/index.html`).

---

## Weekly learning modules (JS/TS)

- **Week - 2**: Arrays + arrow functions  
  Files: [Week - 2/Array_Functions_1.js](Week%20-%202/Array_Functions_1.js), [Week - 2/Arrow Function Exercise.js](Week%20-%202/Arrow%20Function%20Exercise.js)

- **Week - 3**: Array references + array/string methods  
  Files: [Week - 3/Array References.js](Week%20-%203/Array%20References.js), [Week - 3/Array_Functions_2.js](Week%20-%203/Array_Functions_2.js), [Week - 3/String_Functions_1.js](Week%20-%203/String_Functions_1.js)

- **Week - 4**: Objects + string practice  
  Files: [Week - 4/Objects.js](Week%20-%204/Objects.js), [Week - 4/practice_2.js](Week%20-%204/practice_2.js), [Week - 4/practice_3.js](Week%20-%204/practice_3.js)

- **Week - 5**: OOP notes + JS concepts used in React (structuring/destructuring)  
  Files: [Week - 5/OOP.js](Week%20-%205/OOP.js), [Week - 5/React_JS.js](Week%20-%205/React_JS.js)

- **Week - 6**: TypeScript intro + compiled JS  
  Files: [Week - 6/Typescript_Intro.ts](Week%20-%206/Typescript_Intro.ts), [Week - 6/Typescript_Intro.js](Week%20-%206/Typescript_Intro.js)

- **Week - 7**: TypeScript practice  
  Files: [Week - 7/Typescript_Intro_2.ts](Week%20-%207/Typescript_Intro_2.ts), [Week - 7/Object-test.ts](Week%20-%207/Object-test.ts)
