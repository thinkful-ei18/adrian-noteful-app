-- 1. Get all restaurants
-- Write a query that returns all of the restaurants, with all of the fields.

-- SELECT * FROM restaurants;

-- 2. Get Italian restaurants
-- Write a query that returns all of the Italian restaurants, with all of the fields

-- SELECT * FROM restaurants
-- WHERE cuisine = 'Italian';

-- 3. Get 10 Italian restaurants, subset of fields
-- Write a query that gets 10 Italian restaurants, returning only the id and name fields.

-- SELECT id, name FROM restaurants
-- WHERE cuisine = 'Italian';

-- 4. Count of Thai restaurants
-- Write a query that returns the number of Thai restaurants.

-- SELECT count(*) from restaurants
-- WHERE cuisine = 'Thai';

-- 5. Count of restaurants
-- Write a query that returns the total number of restaurants.

-- SELECT count(*) FROM restaurants;

-- 6. Count of Thai restaurants in zip code
-- Write a query that returns the number of Thai restaurants in the 11372 zip code.

-- SELECT count(*) FROM restaurants
-- WHERE address_zipcode = '11372';

-- 7. Italian restaurants in one of several zip codes
-- Write a query that returns the id and name of five Italian restaurants in the 10012, 10013, or 10014 zip codes. The initial results (before limiting to five) should be alphabetically sorted.

-- SELECT id, name FROM restaurants
-- WHERE address_zipcode = '10012' OR
-- address_zipcode = '10013' OR
-- address_zipcode = '10014'
-- ORDER BY name ASC
-- LIMIT 10;

-- 8. Create a restaurant
-- Create a restaurant with the following properties:

-- INSERT into restaurants
-- (name, borough, cuisine, address_building_number, address_street, address_zipcode) VALUES
-- ('Byte Cafe', 'Brooklyn', 'coffee', '123', 'Atlantic Avenue', '11231');

-- 9. Create a restaurant and return id and name
-- Create a restaurant with values of your choosing, and return the id and name.

-- INSERT into restaurants
-- (name, borough, cuisine, address_building_number, address_street, address_zipcode) VALUES
-- ('Corner Stop Cafe', 'Brooklyn', 'Southern', '413', 'Pike Street', '30044')
-- RETURNING id, name;

-- 10. Create three restaurants and return id and name
-- Create three restaurants using a single command, with values of your choosing, returning the id and name of each restaurant.

-- INSERT into restaurants
-- (name, borough, cuisine, address_building_number, address_street, address_zipcode) VALUES
-- ('Corner Stop Diner', 'Brooklyn', 'Southern', '413', 'Pike Street', '30044'),
-- ('Corner Stop Drive-Thru', 'Brooklyn', 'Southern', '413', 'Pike Street', '30044'),
-- ('Corner Stop Cuisine', 'Brooklyn', 'Southern', '413', 'Pike Street', '30044')
-- RETURNING id, name;

-- 11. Update a record
-- Update the record whose value for nyc_restaurant_id is '30191841'. Change the name from 'Dj Reynolds Pub And Restaurant' to 'DJ Reynolds Pub and Restaurant'.

-- UPDATE restaurants
-- SET name = 'DJ Reynolds Pub and Restaurant'
-- WHERE nyc_restaurant_id = '30191841';

-- 12. Delete by id
-- Delete the grade whose id is 10.

-- DELETE FROM grades WHERE id = '10';

-- 13. A blocked delete
-- Try deleting the restaurant with id of 22. What error do you get?
-- Paste the error text for the answer. We'll learn about foreign key constraints in the next reading, but take two seconds and come up with your own theory about what this message means.

-- DELETE FROM restaurants WHERE id = '22';

-- 14. Create a table
-- Create a new table called inspectors with the following properties:

-- CREATE TABLE customers (
--   id serial PRIMARY KEY,
--   first_name text NOT NULL,
--   last_name text NOT NULL,
--   borough borough_options
-- );

-- 15. Update a table
-- Add a notes field to the grades table. notes are not required, and are text.

-- ALTER TABLE grades
-- ADD COLUMN notes text;

-- DROP TABLE customers;
