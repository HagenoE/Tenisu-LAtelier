-- Verify tenisu:initSchema on pg

BEGIN;

SELECT FALSE FROM "players";

ROLLBACK;
