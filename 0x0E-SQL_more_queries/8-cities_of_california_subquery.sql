-- find all cities from california
SELECT id,
name FROM cities
WHERE cities.id = 1 GROUP BY id ASC;
