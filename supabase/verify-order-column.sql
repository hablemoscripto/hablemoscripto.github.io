-- Verify if the order column exists in the levels table
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'levels'
AND table_schema = 'public'
ORDER BY ordinal_position;
