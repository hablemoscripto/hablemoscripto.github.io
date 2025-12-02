-- Create the 'levels' table
CREATE TABLE levels (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  lessons_count INTEGER,
  duration TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create the 'modules' table
CREATE TABLE modules (
  id SERIAL PRIMARY KEY,
  level_id TEXT REFERENCES levels(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  icon_name TEXT,
  "order" INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create the 'lessons' table
CREATE TABLE lessons (
  id INTEGER PRIMARY KEY,
  module_id INTEGER REFERENCES modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  duration TEXT,
  type TEXT,
  is_locked BOOLEAN DEFAULT FALSE,
  "order" INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create the 'lesson_details' table for rich content
CREATE TABLE lesson_details (
  lesson_id INTEGER PRIMARY KEY REFERENCES lessons(id) ON DELETE CASCADE,
  level TEXT,
  number TEXT,
  description TEXT,
  sections JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create the 'quizzes' table
CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY,
  lesson_id INTEGER REFERENCES lessons(id) ON DELETE CASCADE UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create the 'quiz_questions' table
CREATE TABLE quiz_questions (
  id SERIAL PRIMARY KEY,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  options JSONB,
  correct_answer TEXT,
  explanation TEXT,
  "order" INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create the 'referrals' table
CREATE TABLE referrals (
  id SERIAL PRIMARY KEY,
  lesson_id INTEGER REFERENCES lessons(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  link TEXT,
  button_text TEXT,
  code TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security for all tables
ALTER TABLE levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access
CREATE POLICY "Allow public read access to levels" ON levels FOR SELECT USING (true);
CREATE POLICY "Allow public read access to modules" ON modules FOR SELECT USING (true);
CREATE POLICY "Allow public read access to lessons" ON lessons FOR SELECT USING (true);
CREATE POLICY "Allow public read access to lesson_details" ON lesson_details FOR SELECT USING (true);
CREATE POLICY "Allow public read access to quizzes" ON quizzes FOR SELECT USING (true);
CREATE POLICY "Allow public read access to quiz_questions" ON quiz_questions FOR SELECT USING (true);
CREATE POLICY "Allow public read access to referrals" ON referrals FOR SELECT USING (true);
