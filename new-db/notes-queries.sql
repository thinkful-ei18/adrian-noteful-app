-- Select all the notes
-- SELECT * FROM notes;

-- Select all the notes and limit by 5
-- SELECT * FROM notes
-- LIMIT 5;

-- Select all the notes and change the sort order. Experiment with sorting by id, title and date. Try both ascending and descending.
-- SELECT * FROM notes
-- ORDER BY title ASC;

-- SELECT id, title, created FROM notes
-- ORDER BY id DESC;

-- SELECT id, title, created FROM notes
-- ORDER BY id ASC;

-- Select notes where title matches a string exactly
-- SELECT * FROM notes WHERE title = 'Why you should forget everything you learned about cats';

-- Select notes where title is LIKE a string. In other words the title contains the word or phrase (e.g cats or ways)
-- SELECT * FROM notes WHERE title LIKE '%cats%' AND title LIKE '%ways%';

-- Update the title and content of a specific note.
-- UPDATE notes
-- SET title = 'CATS ARE EVIL',
-- content = 'THEY WANT TO TAKE OVER THE WORLD'
-- WHERE id = '1001';

-- Insert a new note. Try providing incomplete data like missing content or title fields.
-- INSERT into notes
-- (title, content) VALUES
-- ('Can a cat be president?', 'Yes.');

-- Delete a note by id
-- DELETE FROM notes WHERE id = '1010';