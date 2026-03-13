# GritTemplate

Sports league landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```
app/
├── layout.tsx                     # Root layout + metadata
├── globals.css                    # Tailwind + global styles + fonts
├── page.tsx                       # Main page (imports all sections)
└── components/
    ├── navbar/index.tsx           # Sticky nav + mobile menu
    ├── hero/index.tsx             # Hero section
    ├── stats/index.tsx            # Stats bar
    ├── how-it-works/index.tsx     # 3-step process
    ├── benefits/index.tsx         # Benefits grid
    ├── testimonials/index.tsx     # Member quotes
    ├── signup/index.tsx           # Registration form
    └── footer/index.tsx           # Footer
```

## Brand colors

| Token     | Value     |
|-----------|-----------|
| Background | `#0e132b` |
| Surface    | `#131829` |
| Accent red | `#DA1D3A` |

To change the brand color, find/replace `#DA1D3A` across the project.

## Build for production

```bash
npm run build
npm start
```
