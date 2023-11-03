-- Revert tenisu:initSchema from pg

BEGIN;

DROP TABLE "players";

COMMIT;
