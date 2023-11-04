-- Revert tenisu:createViewSchema from pg

BEGIN;

DROP VIEW "winning";

COMMIT;
