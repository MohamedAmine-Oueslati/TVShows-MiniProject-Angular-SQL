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

var searchCast = async (id) => {
    var url = `http://api.tvmaze.com/shows/${id}/cast`
    var response = await fetch(url)
    var data = await response.json()
    return data
}

router.post('/filtershows', (req, res) => {
    searchShow(req.body.id).then(shows => {
        res.status(200).send({ shows })
    })
})
router.post('/filterepisodes', (req, res) => {
    searchEpisode(req.body.id).then(episodes => {
        var numSeason = episodes[episodes.length - 1].season;
        var ep = [];
        for (let j = 1; j <= numSeason; j++) {
            var arr = []
            for (let i = 0; i < episodes.length; i++) {
                if (episodes[i].season === j) { arr.push(episodes[i]) }
            }
            ep.push(arr)
        }
        res.status(200).send({ episodes: ep })
    })
})
router.post('/filterseasons', (req, res) => {
    searchEpisode(req.body.id).then(result => {
        var numSeason = result[result.length - 1].season;
        var seasons = [];
        for (var i = 1; i <= numSeason; i++) {
            seasons.push(i);
        }
        res.status(200).send({ seasons })
    })
})

router.post('/filtercast', (req, res) => {
    searchCast(req.body.id).then(result => {
        let cast = []
        for (let i = 0; i < 6; i++) {
            cast.push(result[i])
        }
        res.status(200).send({ cast })
    })
})

router.post('/epchecked', (req, res) => {
    let arr = req.body.arr
    let str = arr.join(',')
    let sql = `UPDATE shows SET checker= '${str}' 
    WHERE email='${req.body.email}' AND showId=${req.body.showId}`
    db.db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        res.send('check updated')
    })
})


// router.post('/filtercheck', (req, res) => {
//     let sql = `SELECT * FROM shows
//     WHERE email='${req.body.email}' AND showId=${req.body.showId}`
//     db.db.query(sql, (err, result) => {
//         if (err) {
//             throw err
//         }
//         let check = []
//         if (result[0].checker) {
//             check = result[0].checker.split(',')
//         }
//         res.status(200).send({ check })
//     })
// })


module.exports = router