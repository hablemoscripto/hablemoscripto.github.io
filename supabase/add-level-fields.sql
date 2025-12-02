-- Add icon_name, color, and order fields to levels table for proper UI display

ALTER TABLE levels
ADD COLUMN IF NOT EXISTS icon_name TEXT,
ADD COLUMN IF NOT EXISTS color TEXT,
ADD COLUMN IF NOT EXISTS "order" INTEGER;

-- Update existing levels if they exist
UPDATE levels SET icon_name = 'Shield', color = 'brand', "order" = 0 WHERE id = 'beginner';
UPDATE levels SET icon_name = 'TrendingUp', color = 'indigo', "order" = 1 WHERE id = 'intermediate';
UPDATE levels SET icon_name = 'Star', color = 'rose', "order" = 2 WHERE id = 'advanced';
