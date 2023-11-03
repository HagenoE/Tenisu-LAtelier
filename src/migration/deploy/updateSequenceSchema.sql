-- Deploy tenisu:updateSequenceSchema to pg

BEGIN;

SELECT setval('players_id_seq', (SELECT MAX(id) FROM "players") + 1);

COMMIT;
