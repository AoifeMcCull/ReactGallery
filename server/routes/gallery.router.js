const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')
// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const id = req.params.id;
  console.log('in PUT /like request for id: ', id);
  let queryText = `UPDATE "gallery" set likes = likes + 1 where id = ${id}`
  pool.query(queryText).then((result) => {
    res.sendStatus(200)
  }).catch((err) => {
    console.log('error putting like!', err)
  })
});

// GET /gallery
router.get('/', (req, res) => {
  console.log('in GET / request');
  let queryText= 'SELECT * from "gallery" ORDER BY id'
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((err) => {
    console.log('error getting gallery!: ', err);
    res.sendStatus(500);
  })
});

module.exports = router;
