-- Deploy tenisu:createViewSchema to pg

BEGIN;

CREATE OR REPLACE VIEW "winning" AS 
SELECT 
"data"."id",
(SELECT SUM(test) FROM UNNEST ("data"."last") as test) as "total",
"data"."players_id"
FROM "data";

COMMIT;
