-- Revert tenisu:createViewSchema from pg

BEGIN;

DROP VIEW "ranking";

COMMIT;
