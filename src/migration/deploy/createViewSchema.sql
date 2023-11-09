-- Deploy tenisu:createViewSchema to pg

BEGIN;

CREATE OR REPLACE VIEW "ranking" AS 
SELECT "country"."code", sum("winning"."total") as total
FROM (SELECT 
"data"."id",
(SELECT SUM(test) FROM UNNEST ("data"."last") as test) as "total",
"data"."players_id"
FROM "data") AS winning
JOIN "country" ON "winning"."players_id" = "country"."players_id"
GROUP BY "country"."code"
ORDER BY total desc;

COMMIT;
