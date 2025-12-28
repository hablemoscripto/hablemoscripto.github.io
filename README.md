# Hablemos Cripto

Plataforma educativa en español sobre Bitcoin y criptomonedas. Aprende desde los fundamentos del dinero hasta conceptos avanzados de blockchain y DeFi.

## Tech Stack

- **Frontend:** React 19 + TypeScript + Vite + Tailwind CSS
- **Backend:** Supabase (PostgreSQL, Auth, Edge Functions)
- **AI Assistant:** Google Gemini API
- **Payments:** Wompi
- **Hosting:** GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Seed database with lesson content
npm run db:seed
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your keys:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_SUPABASE_SERVICE_KEY=
VITE_GEMINI_API_KEY=
VITE_WOMPI_PUBLIC_KEY=
```

## Project Structure

```
├── components/       # React components
├── contexts/         # Auth, Progress, Gamification state
├── data/             # Course content (courseData.ts)
├── services/         # API integrations
├── supabase/         # Edge functions & SQL schemas
└── public/images/    # Lesson infographics
```

## License

All rights reserved.
