# CLAUDE.md - Hablemos Cripto Project Guide

## Project Overview

**Hablemos Cripto** is a Spanish-language cryptocurrency education platform targeting Latin American audiences. The platform teaches Bitcoin and crypto fundamentals through structured courses with gamification, AI assistance, and premium content.

### Core Mission
Democratize Bitcoin/crypto education for Spanish speakers by explaining complex economic and technical concepts in accessible, engaging ways. The content challenges mainstream financial narratives (inflation, fiat money, central banking) and presents Bitcoin as a solution.

### Target Audience
- Spanish-speaking individuals in Latin America
- People new to cryptocurrency
- Those seeking to understand money, inflation, and economic systems
- Ages 18-45, varying technical backgrounds

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 19 + TypeScript + Vite 6 |
| **Styling** | Tailwind CSS 4 + custom design system |
| **Routing** | React Router DOM 7 |
| **Animation** | Framer Motion + tsparticles |
| **Backend** | Supabase (PostgreSQL + Auth + Edge Functions) |
| **AI Chat** | Google Gemini API (CBas AI assistant) |
| **Payments** | Wompi (Colombian payment gateway) |
| **Email** | Resend |
| **Hosting** | GitHub Pages |
| **Runtime** | Deno (for Supabase Edge Functions) |

---

## Directory Structure

```
/
├── components/           # React components
│   ├── education/        # Quiz, checkpoint components
│   ├── ui/               # Reusable UI (Certificate, VideoPlayer, etc.)
│   ├── LessonView.tsx    # Main lesson display (CRITICAL FILE)
│   ├── EducationPage.tsx # Course overview
│   └── ...
├── contexts/             # React Context providers
│   ├── AuthContext.tsx   # Supabase authentication
│   ├── ProgressContext.tsx # Lesson completion tracking
│   └── GamificationContext.tsx # XP, levels, achievements
├── data/
│   └── courseData.ts     # ALL LESSON CONTENT (CRITICAL FILE)
├── services/             # External API integrations
│   ├── geminiService.ts  # AI chat
│   ├── lessonService.ts  # Fetch lessons from Supabase
│   └── paymentService.ts # Wompi payments
├── supabase/
│   ├── functions/        # Edge functions (Deno)
│   │   ├── create-payment/
│   │   └── wompi-webhook/
│   └── *.sql             # Database schemas
├── scripts/
│   └── seed.ts           # Seeds courseData.ts → Supabase
├── lib/
│   └── supabase.ts       # Supabase client
├── utils/
│   └── courseUtils.ts    # Navigation helpers
└── public/
    └── images/lessons/   # Lesson infographics (.webp)
```

---

## Critical Workflows

### Updating Lesson Content
1. Edit `data/courseData.ts` with new content
2. Run `npm run db:seed` to push changes to Supabase
3. Refresh the browser to see changes

**IMPORTANT**: Changes to courseData.ts are NOT reflected until seeded to the database.

### Adding New Images
1. Place images in `public/images/lessons/lesson-X/`
2. Use `.webp` format for optimization
3. Reference in courseData.ts: `/images/lessons/lesson-X/filename.webp`
4. Add `imageSummary` field for "Lo Esencial" boxes
5. Run `npm run db:seed`

### Deploying
- Push to `main` branch triggers GitHub Actions deployment
- Build output goes to `dist/` folder
- Hosted on GitHub Pages

---

## Code Patterns & Conventions

### State Management
- Use React Context for global state (Auth, Progress, Gamification)
- Local state for component-specific UI
- Supabase for persistence

### Component Structure
```typescript
// Preferred pattern for lesson content sections
{
  type: 'main' | 'intro' | 'comparison' | 'takeaways' | 'highlight',
  title: string,
  content?: string,           // Markdown supported
  image?: string,             // Path to image
  imageAlt?: string,
  imageSummary?: string,      // "Lo Esencial" box content
  features?: Feature[],       // Icon + title + text items
  leftSide?: ComparisonSide,  // For comparison type
  rightSide?: ComparisonSide,
}
```

### Styling Conventions
- Dark theme: `bg-slate-900`, `bg-slate-800`, `text-slate-300`
- Brand color: `brand-500` (amber/gold #ffc107)
- Accent colors: `green-500` (positive), `red-500` (negative)
- Use Tailwind utilities, avoid custom CSS
- Glass effect: `bg-slate-900/50 backdrop-blur-sm border border-white/10`

### Icon Usage
- Use Lucide React icons
- Import in courseData.ts, convert to string names in seed.ts
- Available icons defined in `scripts/seed.ts` ICONS object

---

## Design Principles

### Educational Content
1. **Narrative arc**: Problem → Deeper Problem → Root Cause → Solution
2. **Emotional hooks**: Connect abstract concepts to lived experience
3. **Visual learning**: Infographics do heavy pedagogical lifting
4. **"Lo Esencial" summaries**: Reinforce key takeaways after each image
5. **Spaced retrieval**: Quizzes and checkpoints throughout lessons

### UI/UX Guidelines
- Content-first: Wide content area (75%), slim sidebar (25%)
- Responsive: Mobile stacks, desktop side-by-side
- Breathing room: Generous spacing, don't cram
- Visual hierarchy: Clear section titles, callout boxes for key insights
- Accessibility: Alt text on images, readable contrast

### Brand Voice
- Conversational but authoritative
- Challenge mainstream narratives respectfully
- Use concrete examples (Venezuela, Argentina, etc.)
- Avoid hype ("get rich quick") - focus on education
- Spanish language, Latin American context

---

## Content Structure

### Course Levels
1. **Principiante** (Beginner): "El Dinero Está Roto" - 20 lessons
   - Money fundamentals, inflation, Cantillon effect, Bitcoin intro
2. **Intermedio** (Intermediate): 16 lessons
   - Blockchain, wallets, security, DeFi basics
3. **Avanzado** (Advanced): 14 lessons
   - Technical deep dives, trading, advanced DeFi

### Lesson Anatomy
- Video (optional)
- Intro section with hook
- Multiple content sections with images
- "Lo Esencial" boxes after infographics
- Comparison sections (before/after, pros/cons)
- Takeaways summary
- End-of-lesson quiz

---

## Common Tasks Reference

### Start Development
```bash
npm run dev          # Vite dev server on port 3000
```

### Build for Production
```bash
npm run build        # Output to dist/
```

### Seed Database
```bash
npm run db:seed      # Push courseData.ts to Supabase
```

### Environment Variables Required
```
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
VITE_SUPABASE_SERVICE_KEY  # For seeding
VITE_GEMINI_API_KEY
VITE_WOMPI_PUBLIC_KEY
```

---

## Important Notes for Claude

1. **Always read before editing**: Use Read tool on files before making changes
2. **courseData.ts is large**: Contains all lesson content, read in chunks if needed
3. **Images are educational**: They're not decorative - they teach core concepts
4. **Spanish content**: All user-facing text should be in Spanish
5. **Test builds**: Run `npm run build` to verify changes compile
6. **Seed after content changes**: Remind user to run `npm run db:seed`
7. **Respect the narrative**: Lessons build on each other, maintain consistency

---

## File Importance Ranking

| Priority | Files | Reason |
|----------|-------|--------|
| Critical | `data/courseData.ts` | All educational content |
| Critical | `components/LessonView.tsx` | Renders all lesson content |
| High | `contexts/*.tsx` | State management |
| High | `components/education/*.tsx` | Quiz system |
| Medium | `services/*.ts` | API integrations |
| Medium | `supabase/functions/` | Payment processing |
| Low | `scripts/seed.ts` | Usually doesn't need changes |

---

## Recent Improvements (Session Context)

- Added `imageSummary` field for "Lo Esencial" boxes after infographics
- Improved lesson layout: wider content (75%), slimmer sidebar (25%)
- Responsive container: `max-w-6xl` on lg, `max-w-7xl` on xl screens
- Enhanced comparison sections with gradients, icons, and VS badge
