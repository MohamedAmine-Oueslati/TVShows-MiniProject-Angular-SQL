const express = require('express');
const router = express.Router();
const cors = require("cors");
const db = require('../Database-SQL');
const fetch = require("node-fetch");
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());

router.use(cors())

// Post msg
router.post('/feedpost', (req, res) => {
    console.log(req.body)
    let sql = 'INSERT INTO feed SET ?'
    let query = db.db.query(sql, req.body.feed, (err, result) => {
        if (err) {
            throw err
        }
        // res.send('feed added')
    })
    let sql1 = `SELECT * FROM feed WHERE email='${req.body.feed.email}'`
    db.db.query(sql1, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
    res.status(200).send(result)
})
})

// Get messages
router.post('/feedget', (req, res) => {
    console.log(req.body)
    let sql1 = `SELECT * FROM feed WHERE email='${req.body.email}'`
    db.db.query(sql1, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
    res.status(200).send(result)
})
})

module.exports = router