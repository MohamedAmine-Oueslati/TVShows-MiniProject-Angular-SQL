const express = require('express');
const router = express.Router();
const cors = require("cors");
const db = require('../Database-SQL');
const fetch = require("node-fetch");
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());

router.use(cors())

// Add Show
router.post('/feedpost', (req, res) => {
    console.log(req.body)
    let sql = 'INSERT INTO feed SET ?'
    let query = db.db.query(sql, req.body.feed, (err, result) => {
        if (err) {
            throw err
        }
        res.send('feed added')
    })
})

module.exports = router