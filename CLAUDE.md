# CLAUDE.md — Smartech FM Website

> Read this file at the start of every session. It gives you the full project context so you don't have to infer it from source files.

---

## What this project is

**Smartech FM** is a marketing/product website for a UK-based facilities management software company. It is a static SPA — there is no backend, no database, no auth. Its sole purpose is to communicate the product offering and generate demo requests.

The company is small by design (lean team, fast decisions). Tone is confident and direct — not corporate. The target audience is FM managers and contract leaders at mid-market organisations who are tired of bloated enterprise software.

---

## Tech stack

| Concern | Tool |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 (JIT) |
| Icons | Lucide React |
| Fonts | Inter (body), Poppins (headings) — loaded from Google Fonts in `index.html` |
| Deployment | Manual (no CI/CD configured yet — see open items) |

No state management library. No router library — page state is a single `useState` in `App.tsx`.

---

## Brand / design system

Defined in `tailwind.config.js`:

```js
colors: {
  primary:   '#059669'  // emerald-600 — main green
  secondary: '#047857'  // emerald-700 — darker green
  charcoal:  '#111827'  // near-black — dark backgrounds
  darkblue:  '#064E3B'  // deep emerald — used sparingly
  lightgray: '#F3F4F6'  // section backgrounds
}
```

**Never introduce new colours.** Use these tokens. When in doubt, use `primary` for accents, `charcoal` for dark surfaces, `lightgray` for alternating section backgrounds.

---

## Routing pattern

There is no React Router. Navigation works via a `page` state variable in `App.tsx`:

```tsx
const [page, setPage] = useState('home');
```

Valid page values: `'home'`, `'services'`, `'products'`, `'privacy'`, `'terms'`, `'cookies'`

The `handleNavigate(targetPage, targetSection?)` function:
- Sets the page state
- If navigating to `'home'`, optionally smooth-scrolls to a section by `id` after a 100ms delay
- Otherwise scrolls to top

**Section IDs on the home page:** `home-hero`, `about`, `services`, `contact`
Note: `Hero` renders with `id="home"` on the `<section>` but the wrapper `<div>` in App has `id="home-hero"`.

---

## Navbar / hero layout — important pattern

The navbar is **fixed** (`position: fixed; top: 0`). Its height is **dynamic** — it changes between scrolled (`py-3`) and unscrolled (`py-4`) states, and it includes safe-area insets.

The navbar publishes its measured height to a CSS custom property:

```tsx
// In Navbar.tsx — useLayoutEffect + ResizeObserver
document.documentElement.style.setProperty('--nav-h', `${Math.ceil(h)}px`);
```

The hero consumes this:

```tsx
<section className="... pt-[var(--nav-h)]">
```

**Do not remove this pattern.** Any page that renders content at the top of the viewport must account for the navbar height using `pt-[var(--nav-h)]` or equivalent.

---

## Component index

| Component | Purpose |
|---|---|
| `App.tsx` | Root. Owns page state and `handleNavigate` |
| `Navbar.tsx` | Fixed nav. Publishes `--nav-h` CSS var |
| `Hero.tsx` | Above-the-fold hero on home page |
| `Services.tsx` | Services grid on home page |
| `Sectors.tsx` | Industry sectors on home page |
| `About.tsx` | About section on home page |
| `Contact.tsx` | Contact section on home page (phone, email, LinkedIn) |
| `Footer.tsx` | Sitewide footer with nav, legal links, social |
| `ServicesPage.tsx` | Full services page (`page === 'services'`) |
| `ProductsPage.tsx` | Full products page (`page === 'products'`) |
| `PrivacyPolicy.tsx` | Legal page |
| `TermsOfService.tsx` | Legal page |
| `CookiePolicy.tsx` | Legal page |
| `Button.tsx` | Reusable button — variants: `primary`, `ghost` |
| `Logo.tsx` | Logo mark — prop `lightMode` controls text colour |

---

## Key content decisions (do not revert)

These were agreed through iteration — don't change them without being asked:

- **Hero headline:** "Enterprise FM Capability. Without the Enterprise Price Tag."
- **Hero subhead:** "Purpose-built software for field services, quoting, compliance, and asset strategy — plus hands-on delivery when you need it. Built by FM practitioners. Priced for real teams."
- **About headline:** "FM Software That Actually Works."
- **About quote:** "Built by FM professionals. The tools we wished we'd had — now yours."
- **Contact phone:** +44 (0) 7435 146 951
- **LinkedIn:** https://www.linkedin.com/company/smartech-fm
- **Navbar background (unscrolled):** `bg-charcoal/90 backdrop-blur-sm` — NOT transparent, NOT white

---

## Open items (known gaps)

- [ ] No `.gitignore` — `.DS_Store` files are being committed. Create one.
- [ ] `index.html` meta description is stale — still says "Precision in Every Detail"
- [ ] Footer social links (Twitter, Facebook, Instagram) are all `href="#"` placeholders
- [ ] No deployment configuration (Vercel/Netlify)
- [ ] No CI/CD (no build check on push)
- [ ] `PrivacyPolicy`, `TermsOfService`, `CookiePolicy` are not exported from `index.ts` barrel

---

## What has gone wrong before (lessons)

### 1. Markdown pasted into source files
AI responses include code AND explanation. If you paste the whole response into a `.tsx` file, the instructions end up inside the component. **Always copy only the code block — nothing else.**

### 2. Two AI tools editing the same file in sequence
Switching between ChatGPT and Claude without briefing the new session caused copy, structure, and component decisions to oscillate across multiple commits. **If you switch AI tools, paste this CLAUDE.md into the new session at the start.**

### 3. Fixed navbar / content overlap
The navbar is fixed. Any content that renders at `top: 0` will slide under it. Always use `pt-[var(--nav-h)]` on hero/page-top sections. Do not use a hardcoded pixel value — the nav height changes at different scroll states.

---

## Commit message convention

Use imperative, descriptive messages. Examples:

```
Add .gitignore to exclude .DS_Store and dist/
Fix meta description in index.html to match current hero copy
Wire up LinkedIn link in footer social icons
Add Vercel deployment configuration
```

Not: `fix`, `update`, `error correct`, `Nav Bar Fix`

---

## Running locally

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # TypeScript check + Vite production build
npm run preview   # preview the production build
```

Always run `npm run build` before committing to catch TypeScript errors.
