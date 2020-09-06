const express = require('express');
const router = express.Router();
const cors = require("cors");
const db = require('../Database-SQL')

router.use(cors())


// Add Show
router.post('/addshow', (req, res) => {
    let sql = 'INSERT INTO shows SET ?'
    let query = db.db.query(sql, req.body, (err, result) => {
        if (err) {
            throw err
        }
        res.send('show added')
    })
})


// Delete Show
router.post('/removeshow', (req, res) => {
    let sql = `DELETE FROM shows WHERE showId = ${req.body.showId}`
    let query = db.db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        res.send('show deleted')
    })
})

// Status Check Show
router.post('/status', (req, res) => {
    let sql = `SELECT * FROM shows WHERE email='${req.body.email}' AND showId=${req.body.showId}`
    let query = db.db.query(sql, (err, data) => {
        if (data.length === 0) {
            res.status(200).send({ status: false })
        }
        else {
            res.status(200).send({ status: true })
        }
    })
})


module.exports = router
