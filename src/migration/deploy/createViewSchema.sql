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

CREATE OR REPLACE VIEW "players_victory" AS
SELECT 
"players"."id",
"players"."country" ->> 'code' "code",
unnest(string_to_array(translate("players"."data" ->> 'last','[]',''),','))::integer as "total"
FROM "players_one" as players;

CREATE OR REPLACE VIEW "ranking_one" AS
SELECT "players_victory"."code" as "code",
SUM("players_victory"."total") as "total"
FROM "players_victory"
GROUP BY "players_victory"."code";


COMMIT;
