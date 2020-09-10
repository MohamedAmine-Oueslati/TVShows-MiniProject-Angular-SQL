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

router.post('/showdetails', (req, res) => {
    if (req.body.hasOwnProperty('show')) {
        var show = req.body.show
        var id = req.body.show.id
        // console.log(req.body)
    }
    searchEpisode(id).then(data => {
        res.status(200).send({ show, episode: data })
    })
})


module.exports = router