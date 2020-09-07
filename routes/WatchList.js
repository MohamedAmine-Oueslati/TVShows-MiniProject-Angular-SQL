const express = require('express');
const router = express.Router();
const cors = require("cors");
const db = require('../Database-SQL');
const fetch = require("node-fetch");
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());

router.use(cors())


// fetch API
var searchShow = async (id) => {
    var url = `http://api.tvmaze.com/shows/${id}`
    var response = await fetch(url)
    var data = await response.json()
    return data
}

var searchEpisode = async (id) => {
    var url = `http://api.tvmaze.com/shows/${id}/episodes`
    var response = await fetch(url)
    var data = await response.json()
    return data
}

router.post('/getshows', (req, res) => {
    let sql = `SELECT * FROM shows WHERE email='${req.body.email}'`
    let query = db.db.query(sql, (err, data) => {
        res.status(200).send(data)
    })
})


module.exports = router