# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Hablemos Cripto** is a Spanish-language cryptocurrency education platform for Latin American audiences. Teaches Bitcoin and crypto fundamentals through structured courses with gamification, AI assistance, and premium content.

All user-facing content is in **Spanish**.

## Commands

```bash
npm run dev          # Vite dev server on port 3000
npm run build        # Build to dist/
npm run preview      # Preview production build locally
npm run db:seed      # Push courseData.ts to Supabase (REQUIRED after content changes)
npx tsc              # Type-check without emitting
```

## Architecture

### Data Flow
```
courseData.ts (source of truth) → npm run db:seed → Supabase DB → lessonService.ts → LessonView.tsx
```

**Critical**: Changes to `data/courseData.ts` are NOT reflected until seeded to the database with `npm run db:seed`.

### Tech Stack
- **Frontend**: React 19 + TypeScript + Vite 6 + Tailwind CSS 4
- **Backend**: Supabase (PostgreSQL + Auth + Edge Functions with Deno)
- **AI Chat**: Google Gemini API via Edge Function (CBas assistant, server-side key)
- **Payments**: Wompi (Colombian gateway)
- **Hosting**: Vercel (push to `main` triggers deploy, `vercel.json` handles SPA rewrites)
- **Email**: Resend API via `mail.hablemoscripto.io` domain
- **Animations**: Framer Motion (page transitions, UI animations)
- **SEO**: react-helmet-async (OG meta tags, Twitter Cards)

### Project Structure
Root-level entry points (`App.tsx`, `index.tsx`, `index.css`) — no `src/` folder. Path alias `@/` maps to project root.

Route components are **lazy-loaded** via `React.lazy()` for code-splitting.

### Key Files
| File | Purpose |
|------|---------|
| `data/courseData.ts` | ALL lesson content — levels, modules, lessons, quizzes |
| `components/LessonView.tsx` | Renders lesson content sections |
| `components/AuthModal.tsx` | Auth modal: login, signup, forgot-password, verify-email views |
| `components/LegalPage.tsx` | Privacy policy (`/privacidad`) and terms of service (`/terminos`) |
| `components/ErrorBoundary.tsx` | Top-level error boundary wrapping the entire app |
| `components/NotFoundPage.tsx` | 404 page for unknown routes |
| `components/NewsletterAdmin.tsx` | Admin-only newsletter sending UI |
| `components/PaymentButton.tsx` | Wompi payment integration button |
| `scripts/seed.ts` | Seeds courseData.ts → Supabase (defines available Lucide icons) |
| `services/lessonService.ts` | Fetches lessons from Supabase |
| `contexts/*.tsx` | Auth, Progress, Gamification state management |
| `supabase/functions/` | Edge Functions (Deno) — see Edge Functions section |

### Routes
| Path | Component | Auth |
|------|-----------|------|
| `/` | LandingPage | No |
| `/education` | EducationPage | Yes |
| `/education/beginner` | LevelDetail | Yes |
| `/education/intermediate` | LevelDetail | Yes |
| `/education/advanced` | LevelDetail | Yes |
| `/education/lesson/:lessonId` | LessonView | Yes |
| `/admin/newsletter` | NewsletterAdmin | Yes |
| `/privacidad` | LegalPage (privacy) | No |
| `/terminos` | LegalPage (terms) | No |
| `/unsubscribe` | UnsubscribePage | No |
| `/pago-completado` | PaymentSuccess | No |
| `*` | NotFoundPage | No |

### Edge Functions (`supabase/functions/`)
| Function | Purpose | Auth |
|----------|---------|------|
| `gemini-chat` | Proxies to Gemini 2.5 Flash API with SSE streaming. Rate limited: 20/min | Yes |
| `create-payment` | Creates Wompi payment record + integrity signature. Rate limited: 5/min | Yes |
| `wompi-webhook` | Receives Wompi payment events, verifies signature, upgrades to premium | Webhook |
| `send-newsletter` | Sends newsletter via Resend API (individual emails with unsubscribe links) | Admin only |
| `unsubscribe` | Sets `is_active=false` in `newsletter_subscribers` | No (public) |

### State Management
- React Context for global state (AuthContext, ProgressContext, GamificationContext)
- AuthContext exposes: `signUp`, `signIn`, `signInWithGoogle`, `signOut`, `resetPassword`, `resendVerification`
- Supabase for persistence

## Lesson Content Structure

### Section Types
```typescript
{
  type: 'intro' | 'main' | 'comparison' | 'takeaways',
  title: string,
  content?: string,           // Markdown supported
  image?: string,             // Path: /images/lessons/lesson-X/filename.webp
  imageAlt?: string,
  imageCaption?: string,      // Small italic caption below images
  imageSummary?: string,      // "Lo Esencial" box content (appears after images)
  highlight?: {               // Optional highlight box on any section
    title: string,
    text: string,
  },
  features?: Feature[],       // Icon + title + text items
  leftSide?: ComparisonSide,  // For comparison type
  rightSide?: ComparisonSide,
}
```

### Adding New Images
1. Place in `public/images/lessons/lesson-X/` as `.webp`
2. Reference in courseData.ts: `/images/lessons/lesson-X/filename.webp`
3. Add `imageSummary` field for "Lo Esencial" boxes
4. Run `npm run db:seed`

### Icon Usage
Icons are Lucide React components in courseData.ts, converted to string names by seed.ts. Available icons are defined in the `ICONS` object in `scripts/seed.ts`.

## Styling Conventions

- Dark theme: `bg-slate-900`, `bg-slate-800`, `text-slate-300`
- Brand color: `brand-500` (amber/gold #ffc107)
- Accent: `green-500` (positive), `red-500` (negative)
- Glass effect: `bg-slate-900/50 backdrop-blur-sm border border-white/10`
- Fonts: `font-sans` (Inter), `font-heading` (Outfit)
- Custom dark scale: `dark-900` (#0f172a), `dark-800` (#1e293b), `dark-700` (#334155)

## Course Structure

- **Principiante** (Beginner): 19 lessons — Money fundamentals, inflation, Cantillon effect, Bitcoin intro, wallets, stablecoins, DCA, investment planning
- **Intermedio** (Intermediate): 12 lessons — Blockchain deep dives, DeFi basics, liquidity pools, yield farming
- **Avanzado** (Advanced): 11 lessons — Staking, advanced DeFi, MEV, governance, trading strategies

All 42 lessons are fully built.

## Environment Variables

### Frontend (Vite)
```
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
VITE_SUPABASE_SERVICE_KEY  # Required for seeding only
VITE_WOMPI_PUBLIC_KEY
```

### Supabase Edge Function Secrets
```
GEMINI_API_KEY             # Google Gemini API key (gemini-chat function)
RESEND_API_KEY             # Resend email API key (send-newsletter function)
WOMPI_INTEGRITY_SECRET     # Wompi payment signature (create-payment function)
WOMPI_EVENTS_SECRET        # Wompi webhook verification (wompi-webhook function)
```

## Public Assets
- `public/sitemap.xml` — SEO sitemap
- `public/robots.txt` — Search engine crawl rules
- `public/images/og-cover.png` — OG/Twitter Card social sharing image
- `public/CNAME` — Legacy artifact (hosting is Vercel, not GitHub Pages)
