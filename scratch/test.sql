-- SELECT * FROM restaurants WHERE id = 25;

-- INSERT INTO restaurants
--   (name, borough, cuisine, address_building_number,
--     address_street, address_zipcode) VALUES
--     ('Prince Taco', 'Queens', 'Mexican', '620', 'Astoria Boulevard', '11372') RETURNING id, name;

-- INSERT INTO restaurants
--   (name, borough, cuisine) VALUES
--     ('Rebecca''s', 'Queens', 'Comfort');

-- INSERT INTO restaurants
--   (name, borough, cuisine) VALUES
--     ($$Rebecca's$$, 'Queens', 'Comfort');

-- INSERT INTO restaurants (borough) VALUES ('Queens');
-- LOGS AN ERROR

-- use /x for expanded view
-- SELECT * FROM restaurants;

-- return subset of fields
-- SELECT id, name FROM restaurants;

-- retrieve single id
-- SELECT * FROM restaurants WHERE id='9000';

-- retrieve by multiple criteria
-- SELECT * FROM restaurants
--   WHERE borough = 'Brooklyn'
--   AND cuisine = 'Italian';

-- limit number of results
-- SELECT id, name FROM restaurants LIMIT 3;

-- sort by restaurant name in ascending order
-- SELECT id, name from restaurants
--   WHERE borough = 'Bronx'
--   AND cuisine = 'Japanese'
--   ORDER BY name ASC
--   LIMIT 10;

-- returns the number of grades in the grades table
-- SELECT count(*) from grades;

-- return number of indian restaurants in Manhattan
-- SELECT count(*) from restaurants
--   WHERE cuisine = 'Indian'
--   AND borough = 'Manhattan';

-- UPDATE restaurants
--   SET cuisine = 'la cuisine Française'
--   WHERE cuisine = 'French';

-- UPDATE restaurants
-- SET name = 'Foo Bar''s'
-- WHERE id = 15000;

-- DELETE FROM grades WHERE grade = 'Z';

-- DELETE from restaurants WHERE id = 1;

-- CREATE TABLE customers(
--   id serial PRIMARY KEY,
--   modified timestamp DEFAULT current_timestamp,
--   first_name text,
--   last_name text NOT NULL
-- );


-- ALTER TABLE customers
-- ADD COLUMN nick_name text,
-- DROP COLUMN first_name;


-- ALTER TABLE customers
-- RENAME COLUMN modified TO modified_as_of;

-- DROP TABLE customers;