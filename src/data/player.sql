BEGIN; 
 INSERT INTO "players" 
(id, firstname, lastname, shortname, sex, country, picture, data) 
 VALUES 
( '52', 'Novak','Djokovic', 'N.DJO','M','{"picture":"https://data.latelier.co/training/tennis_stats/resources/Serbie.png","code":"SRB"}','https://data.latelier.co/training/tennis_stats/resources/Djokovic.png','{"rank":2,"points":2542,"weight":80000,"height":188,"age":31,"last":[1,1,1,1,1]}'),
( '95', 'Venus','Williams', 'V.WIL','F','{"picture":"https://data.latelier.co/training/tennis_stats/resources/USA.png","code":"USA"}','https://data.latelier.co/training/tennis_stats/resources/Venus.webp','{"rank":52,"points":1105,"weight":74000,"height":185,"age":38,"last":[0,1,0,0,1]}'),
( '65', 'Stan','Wawrinka', 'S.WAW','M','{"picture":"https://data.latelier.co/training/tennis_stats/resources/Suisse.png","code":"SUI"}','https://data.latelier.co/training/tennis_stats/resources/Wawrinka.png','{"rank":21,"points":1784,"weight":81000,"height":183,"age":33,"last":[1,1,1,0,1]}'),
( '102', 'Serena','Williams', 'S.WIL','F','{"picture":"https://data.latelier.co/training/tennis_stats/resources/USA.png","code":"USA"}','https://data.latelier.co/training/tennis_stats/resources/Serena.png','{"rank":10,"points":3521,"weight":72000,"height":175,"age":37,"last":[0,1,1,1,0]}'),
( '17', 'Rafael','Nadal', 'R.NAD','M','{"picture":"https://data.latelier.co/training/tennis_stats/resources/Espagne.png","code":"ESP"}','https://data.latelier.co/training/tennis_stats/resources/Nadal.png','{"rank":1,"points":1982,"weight":85000,"height":185,"age":33,"last":[1,0,0,0,1]}');
COMMIT;