-- Database is titled react_gallery

CREATE TABLE "galleryItems" (
    id SERIAL PRIMARY KEY,
    path VARCHAR(80) NOT NULL,
    description VARCHAR (200) NOT NULL,
    likes NUMERIC NOT NULL
    );

   INSERT INTO "galleryItems" (path, description, likes)
   VALUES ('https://upload.wikimedia.org/wikipedia/commons/8/8c/Ama_la_Vida_-_Flickr_-_AR_PN_ANDES15_CUENCA_TV_022_%2814584742390%29.jpg', 'I lived in Cuenca, Ecuador for a year after college and am dying to go back!', '0'), ('https://www.nationsonline.org/gallery/Morocco/Chefchaouen-Morocco.jpg', 'I have always wanted to see the beautiful architechture in Morocco.', '0'), ('https://cdn.britannica.com/61/153461-050-3C2B54D7/Acacia-trees-Taita-Hills-Kenya.jpg', 'Kenya looks pretty beautiful. I want to see some of the huge mammals that live on the savannah.', '0');

