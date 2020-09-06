const express = require('express');
const router = express.Router();
const cors = require("cors");
const db = require('../Database-SQL')

router.use(cors())


router.post('/update', (req, res) => {
    let str = "";
    if (!!req.body.firstName) { str += `firstName= '${req.body.firstName}',` }
    if (!!req.body.lastName) { str += `LastName= '${req.body.lastName}',` }
    if (!!req.body.address) { str += `address= '${req.body.address}',` }
    if (!!req.body.city) { str += `city= '${req.body.city}',` }
    if (!!req.body.country) { str += `country= '${req.body.country}',` }
    if (!!req.body.zipCode) { str += `zipCode= '${req.body.zipCode}',` }
    if (!!req.body.aboutMe) { str += `aboutMe= '${req.body.aboutMe}',` }
    str = str.slice(0, str.length - 1)
    let sql = `UPDATE users SET ${str} WHERE id=${req.body.id}`
    let query = db.db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        res.send('profile updated')
    })
})


module.exports = router
