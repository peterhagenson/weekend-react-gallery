const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');
//const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE

router.post('/', (req, res) => {
    console.log('req.body is', req.body)
    const item = req.body;
    console.log(item);
    const queryText = `INSERT INTO "galleryItems" ("path", "description")
                       VALUES ($1, $2);`;
    pool.query(queryText, [item.path, item.description])
    .then((result) => {
        console.log('added item');
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error making database query')
        res.sendStatus(500);
    })
})

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    let idToUpdate = req.params.id;
    let numberOfLikes = req.body.likes;
    let queryText = `
    UPDATE "galleryItems"
    SET "likes" = $2
    WHERE "id" = $1`;
    pool.query(queryText, [idToUpdate, numberOfLikes])
    .then((result) => {
        console.log('added like');
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error updatng likes')
        res.sendStatus(500);
    });
});
    

    // const galleryId = req.params.id;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    
 // END PUT Route

// // GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "galleryItems";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query`, error);
            res.sendStatus(500);
        });
    }); 


//    res.send(galleryItems);
// END GET Route

module.exports = router;