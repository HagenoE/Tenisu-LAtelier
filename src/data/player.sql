BEGIN; 
 INSERT INTO "players" 
("id", "firstname", "lastname", "shortname", "sex", "picture") 
 VALUES 
( '52', 'Novak','Djokovic', 'N.DJO','M','https://data.latelier.co/training/tennis_stats/resources/Djokovic.png'),
( '95', 'Venus','Williams', 'V.WIL','F','https://data.latelier.co/training/tennis_stats/resources/Venus.webp'),
( '65', 'Stan','Wawrinka', 'S.WAW','M','https://data.latelier.co/training/tennis_stats/resources/Wawrinka.png'),
( '102', 'Serena','Williams', 'S.WIL','F','https://data.latelier.co/training/tennis_stats/resources/Serena.png'),
( '17', 'Rafael','Nadal', 'R.NAD','M','https://data.latelier.co/training/tennis_stats/resources/Nadal.png');

INSERT INTO "country" 
("picture", "code", "players_id") 
 VALUES 
('https://data.latelier.co/training/tennis_stats/resources/Serbie.png', 'SRB', '52'),
('https://data.latelier.co/training/tennis_stats/resources/USA.png', 'USA', '95'),
('https://data.latelier.co/training/tennis_stats/resources/Suisse.png', 'SUI', '65'),
('https://data.latelier.co/training/tennis_stats/resources/USA.png', 'USA', '102'),
('https://data.latelier.co/training/tennis_stats/resources/Espagne.png', 'ESP','17');

 INSERT INTO "data" 
("rank", "points", "weight", "height", "age", "last", "players_id") 
 VALUES 
('2', '2542', '80000', '188', '31', ARRAY[1,1,1,1,1], '52'),
('52', '1105', '74000', '185', '38', ARRAY[0,1,0,0,1], '95'),
('21', '1784', '81000', '183', '33', ARRAY[1,1,1,0,1], '65'),
('10', '3521', '72000', '175', '37', ARRAY[0,1,1,1,0], '102'),
('1', '1982', '85000', '185', '33', ARRAY[1,0,0,0,1], '17');
COMMIT;