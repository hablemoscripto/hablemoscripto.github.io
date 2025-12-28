# Course Database Migration Guide

This guide will help you complete the migration of your course content from static TypeScript files to the Supabase database.

## What's Been Done

✅ Created database schema (`supabase/course-schema.sql`)
✅ Updated seed script to include icon_name and color fields
✅ Created lesson service (`services/lessonService.ts`) to fetch from database
✅ Updated `LessonView.tsx` to fetch lessons from database dynamically
✅ Created SQL migration for level fields (`supabase/add-level-fields.sql`)

## Migration Steps

### Step 1: Update Database Schema

Run these SQL files in your Supabase SQL Editor (in order):

1. **course-schema.sql** - Creates all tables (if not already done)
2. **add-level-fields.sql** - Adds icon_name and color to levels table

```sql
-- Run this in Supabase SQL Editor:
-- Copy/paste contents of supabase/add-level-fields.sql
```

### Step 2: Ensure Environment Variables

Make sure your `.env.local` file has:

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_SUPABASE_SERVICE_KEY=your_service_role_key  # Needed for seed script
GEMINI_API_KEY=your_gemini_key
RESEND_API_KEY=your_resend_key
```

### Step 3: Run the Seed Script

```bash
npm run db:seed
```

This will:
- Clean up any existing data
- Populate levels (Beginner, Intermediate, Advanced)
- Create all modules
- Insert all 48 lessons
- Add lesson details (sections, content)
- Create quizzes and questions
- Add referral links

### Step 4: Verify Data

Go to your Supabase dashboard and check:

- **levels** table: Should have 3 rows (beginner, intermediate, advanced)
- **modules** table: Should have ~8 rows
- **lessons** table: Should have 48 rows
- **lesson_details** table: Should have 48 rows
- **quizzes** table: Should have ~48 rows
- **quiz_questions** table: Should have many rows
- **referrals** table: Should have referral links

### Step 5: Test the Application

```bash
npm run dev
```

Visit `http://localhost:3000/education` and:

1. ✅ Check that levels load from database
2. ✅ Click on a lesson
3. ✅ Verify lesson content displays correctly
4. ✅ Check that quizzes work
5. ✅ Test lesson completion and progress tracking
6. ✅ Verify referral links display

## Benefits of This Migration

### Before (Static Files)
- ❌ 34KB+ TypeScript file (hard to maintain)
- ❌ Required code deployment for content changes
- ❌ No real-time content updates
- ❌ Can't track content performance
- ❌ Single person can edit

### After (Database)
- ✅ Content managed in database
- ✅ Update content without deployment
- ✅ Real-time changes
- ✅ Can track which lessons perform best
- ✅ Multiple admins can update
- ✅ Content versioning possible
- ✅ A/B testing ready
- ✅ API-driven (can build admin panel)

## Next Steps (Future Improvements)

1. **Build Admin Panel** - UI to edit lessons without SQL
2. **Content Versioning** - Track changes over time
3. **Analytics Integration** - See which lessons work best
4. **Scheduled Publishing** - Auto-release lessons
5. **User-Specific Content** - Personalized learning paths
6. **Content Search** - Full-text search across lessons
7. **Draft Mode** - Preview before publishing

## Troubleshooting

### "Error seeding level: duplicate key value"
- Database already has data. The seed script cleans up first, but if it fails, manually delete rows:
```sql
TRUNCATE referrals, quiz_questions, quizzes, lesson_details, lessons, modules, levels CASCADE;
```

### "Lesson not found" after migration
- Check that seed script ran successfully
- Verify lesson_details table has data
- Check browser console for errors

### Quiz not loading
- Verify quizzes table has entries
- Check quiz_questions table
- Ensure correct_answer field matches option IDs

## Rolling Back

If you need to revert to static files temporarily:

```typescript
// In LessonView.tsx, change back to:
import { LESSONS_DATA } from '../data/courseData';
const lesson = LESSONS_DATA[id];
```

And remove the fetchLessonById calls.

## Support

If you encounter issues, check:
1. Supabase logs
2. Browser console errors
3. Network tab (API calls)
4. Verify RLS policies allow public read
