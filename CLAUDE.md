# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Hablemos Cripto** is a Spanish-language cryptocurrency education platform for Latin American audiences. Teaches Bitcoin and crypto fundamentals through structured courses with gamification, AI assistance, and premium content.

All user-facing content is in **Spanish**.

## Commands

```bash
npm run dev          # Vite dev server on port 3000
npm run build        # Build to dist/
npm run db:seed      # Push courseData.ts to Supabase (REQUIRED after content changes)
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
- **AI Chat**: Google Gemini API (CBas AI assistant)
- **Payments**: Wompi (Colombian gateway)
- **Hosting**: GitHub Pages (push to `main` triggers deploy)

### Key Files
| File | Purpose |
|------|---------|
| `data/courseData.ts` | ALL lesson content - levels, modules, lessons, quizzes |
| `components/LessonView.tsx` | Renders all lesson content |
| `scripts/seed.ts` | Seeds courseData.ts → Supabase (defines available Lucide icons) |
| `services/lessonService.ts` | Fetches lessons from Supabase |
| `contexts/*.tsx` | Auth, Progress, Gamification state management |

### State Management
- React Context for global state (AuthContext, ProgressContext, GamificationContext)
- Supabase for persistence
- Local state for component-specific UI

## Lesson Content Structure

### Section Types
```typescript
{
  type: 'main' | 'intro' | 'comparison' | 'takeaways' | 'highlight',
  title: string,
  content?: string,           // Markdown supported
  image?: string,             // Path: /images/lessons/lesson-X/filename.webp
  imageAlt?: string,
  imageSummary?: string,      // "Lo Esencial" box content (appears after images)
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
- Layout: Wide content (75%), slim sidebar (25%)

## Course Structure

- **Principiante** (Beginner): 20 lessons - Money fundamentals, inflation, Cantillon effect, Bitcoin intro
- **Intermedio** (Intermediate): 16 lessons - Blockchain, wallets, security, DeFi basics
- **Avanzado** (Advanced): 14 lessons - Technical deep dives, trading, advanced DeFi

## Environment Variables

```
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
VITE_SUPABASE_SERVICE_KEY  # Required for seeding
VITE_GEMINI_API_KEY
VITE_WOMPI_PUBLIC_KEY
```
