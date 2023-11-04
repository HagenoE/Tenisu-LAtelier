-- Revert tenisu:initSchema from pg

BEGIN;

DROP TABLE "data";
DROP TABLE "country";
DROP TABLE "players";

COMMIT;
