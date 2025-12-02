-- Add icon_name and color fields to levels table for proper UI display

ALTER TABLE levels
ADD COLUMN IF NOT EXISTS icon_name TEXT,
ADD COLUMN IF NOT EXISTS color TEXT;

-- Update existing levels if they exist
UPDATE levels SET icon_name = 'Shield', color = 'brand' WHERE id = 'beginner';
UPDATE levels SET icon_name = 'TrendingUp', color = 'indigo' WHERE id = 'intermediate';
UPDATE levels SET icon_name = 'Star', color = 'rose' WHERE id = 'advanced';
