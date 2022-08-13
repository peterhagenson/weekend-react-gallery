-- Database is titled react_gallery

CREATE TABLE "galleryItems" (
    id SERIAL PRIMARY KEY,
    path VARCHAR(80) NOT NULL,
    description VARCHAR (200) NOT NULL,
    likes NUMERIC NOT NULL
    );
    
   INSERT INTO "galleryItems" (path, description, likes)
   VALUES ('images/cuencaSmall200.jpeg', 'Cuenca, Ecuador', '0');