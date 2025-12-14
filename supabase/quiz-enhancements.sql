-- ============================================
-- QUIZ SYSTEM ENHANCEMENTS
-- ============================================
-- This migration adds support for:
-- 1. Multiple question types (multiple-choice, true-false, multiple-select, ordering, fill-blank)
-- 2. Difficulty levels and points
-- 3. Hints for questions
-- 4. Checkpoint quizzes within lessons
-- ============================================

-- Add new columns to quiz_questions table
ALTER TABLE quiz_questions
ADD COLUMN IF NOT EXISTS question_type TEXT DEFAULT 'multiple-choice',
ADD COLUMN IF NOT EXISTS difficulty TEXT DEFAULT 'medium',
ADD COLUMN IF NOT EXISTS points INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS hint TEXT,
ADD COLUMN IF NOT EXISTS correct_answers JSONB, -- For multiple-select questions (array of indices)
ADD COLUMN IF NOT EXISTS items JSONB, -- For ordering questions (array of items to order)
ADD COLUMN IF NOT EXISTS correct_order JSONB, -- For ordering questions (correct sequence)
ADD COLUMN IF NOT EXISTS text_before TEXT, -- For fill-blank questions
ADD COLUMN IF NOT EXISTS text_after TEXT, -- For fill-blank questions
ADD COLUMN IF NOT EXISTS acceptable_answers JSONB; -- For fill-blank questions (array of acceptable answers)

-- Add check constraint for question types
ALTER TABLE quiz_questions
DROP CONSTRAINT IF EXISTS valid_question_type;

ALTER TABLE quiz_questions
ADD CONSTRAINT valid_question_type CHECK (
    question_type IN ('multiple-choice', 'true-false', 'multiple-select', 'ordering', 'fill-blank')
);

-- Add check constraint for difficulty
ALTER TABLE quiz_questions
DROP CONSTRAINT IF EXISTS valid_difficulty;

ALTER TABLE quiz_questions
ADD CONSTRAINT valid_difficulty CHECK (
    difficulty IN ('easy', 'medium', 'hard')
);

-- Create checkpoint_quizzes table for mid-lesson quizzes
CREATE TABLE IF NOT EXISTS checkpoint_quizzes (
    id SERIAL PRIMARY KEY,
    lesson_id INTEGER REFERENCES lessons(id) ON DELETE CASCADE,
    title TEXT DEFAULT 'Checkpoint',
    section_index INTEGER, -- Which section this checkpoint appears after
    "order" INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create checkpoint_questions table
CREATE TABLE IF NOT EXISTS checkpoint_questions (
    id SERIAL PRIMARY KEY,
    checkpoint_id INTEGER REFERENCES checkpoint_quizzes(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    options JSONB NOT NULL, -- Array of option strings
    correct_answer INTEGER NOT NULL, -- Index of correct option
    explanation TEXT,
    hint TEXT,
    "order" INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for new tables
ALTER TABLE checkpoint_quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE checkpoint_questions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to checkpoint_quizzes"
ON checkpoint_quizzes FOR SELECT USING (true);

CREATE POLICY "Allow public read access to checkpoint_questions"
ON checkpoint_questions FOR SELECT USING (true);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_checkpoint_quizzes_lesson_id ON checkpoint_quizzes(lesson_id);
CREATE INDEX IF NOT EXISTS idx_checkpoint_questions_checkpoint_id ON checkpoint_questions(checkpoint_id);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_quiz_id ON quiz_questions(quiz_id);

-- ============================================
-- SAMPLE DATA: Enhanced Questions Examples
-- ============================================

-- Example: Update an existing multiple-choice question with hints
-- UPDATE quiz_questions
-- SET hint = 'Piensa en las propiedades que lo hacen útil para el comercio',
--     difficulty = 'medium',
--     points = 2
-- WHERE id = 1;

-- Example: Add a true-false question
-- INSERT INTO quiz_questions (quiz_id, question, question_type, correct_answer, explanation, hint, difficulty, "order")
-- VALUES (
--     1,
--     'Bitcoin tiene un suministro máximo de 21 millones de unidades.',
--     'true-false',
--     'true',
--     'Correcto. El protocolo de Bitcoin establece un límite de 21 millones de BTC que jamás serán creados.',
--     'Busca en el whitepaper original de Satoshi',
--     'easy',
--     5
-- );

-- Example: Add a multiple-select question
-- INSERT INTO quiz_questions (quiz_id, question, question_type, options, correct_answers, explanation, hint, difficulty, "order")
-- VALUES (
--     1,
--     '¿Cuáles de las siguientes son características del dinero duro?',
--     'multiple-select',
--     '["Escasez", "Emitido por gobiernos", "Divisibilidad", "Inflación controlada por bancos centrales", "Durabilidad"]',
--     '[0, 2, 4]',
--     'El dinero duro se caracteriza por ser escaso, divisible y durable. No está controlado por entidades centrales.',
--     'Piensa en el oro y sus propiedades',
--     'medium',
--     6
-- );

-- Example: Add an ordering question
-- INSERT INTO quiz_questions (quiz_id, question, question_type, items, correct_order, explanation, difficulty, "order")
-- VALUES (
--     1,
--     'Ordena cronológicamente estos eventos en la historia del dinero:',
--     'ordering',
--     '["Creación de Bitcoin", "Nixon abandona el patrón oro", "Invención del papel moneda en China", "Trueque primitivo"]',
--     '[3, 2, 1, 0]',
--     'El orden correcto es: Trueque → Papel moneda (China, ~700 d.C.) → Nixon shock (1971) → Bitcoin (2009)',
--     'hard',
--     7
-- );

-- Example: Add a fill-blank question
-- INSERT INTO quiz_questions (quiz_id, question, question_type, text_before, text_after, correct_answer, acceptable_answers, explanation, difficulty, "order")
-- VALUES (
--     1,
--     'El suministro máximo de Bitcoin es:',
--     'fill-blank',
--     'El suministro máximo de Bitcoin es',
--     'millones de BTC.',
--     '21',
--     '["21 millones", "veintiuno", "21M"]',
--     'Bitcoin tiene un hard cap de 21 millones de unidades, lo que lo convierte en un activo deflacionario.',
--     'easy',
--     8
-- );

-- Example: Add a checkpoint quiz to lesson 1
-- INSERT INTO checkpoint_quizzes (lesson_id, title, section_index, "order")
-- VALUES (1, 'Verifica tu comprensión', 1, 1);

-- INSERT INTO checkpoint_questions (checkpoint_id, question, options, correct_answer, explanation, hint, "order")
-- VALUES (
--     1,
--     '¿Por qué decimos que el dinero fiat es "dinero por decreto"?',
--     '["Porque es emitido por decretos presidenciales", "Porque su valor depende de la confianza y la ley, no de un respaldo físico", "Porque solo se puede usar en ciertos países"]',
--     1,
--     'El dinero fiat no tiene respaldo en oro ni otro activo físico. Su valor existe porque el gobierno lo declara como moneda de curso legal.',
--     'Piensa en qué hace que un billete de $100 valga $100',
--     1
-- );
