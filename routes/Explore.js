const express = require('express');
const router = express.Router();
const cors = require("cors");
const db = require('../Database-SQL')
const fetch = require("node-fetch");

router.use(cors())


// fetch API
var searchShow = async (query) => {
    var url = `http://api.tvmaze.com/search/shows?q=${query}`
    var response = await fetch(url)
    var data = await response.json()
    return data
}

router.post("/searchshows", (req, res) => {
    var query = req.body
    searchShow(query.query)
        .then((data) => {
            res.json(data)
        })
})

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
