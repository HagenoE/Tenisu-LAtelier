-- Revert tenisu:initSchema from pg

BEGIN;

DROP TABLE "data" CASCADE;
DROP TABLE "country" CASCADE;
DROP TABLE "players";

COMMIT;
