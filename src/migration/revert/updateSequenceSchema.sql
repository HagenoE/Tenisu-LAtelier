-- Revert tenisu:updateSequenceSchema from pg

BEGIN;

-- XXX Add DDLs here.
SELECT setval('players_id_seq', 1);
DROP COLLATION numeric;
COMMIT;
