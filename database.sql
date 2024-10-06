CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/goat_stache.png', 'Goat Stache!', 'Photo of a mustachioed goat taken at Glacier National Park.'),
('images/escape.jpg', 'escape!', 'a gray fox escaping up the trunk of a tree.'),
('images/reflect.png', 'reflect', 'a red fox using a shine like fox mccloud.'),
('images/surfin.png', 'surfin', 'a red fox having fun on the internet.'),
('images/toopowerful.png', 'toopowerful', 'an arctic fox with a sharingan charging a beam attack.'),
('images/tree_punk.png', 'tree punk', 'an island fox laughing at a ground predator that cannot catch it.');
  