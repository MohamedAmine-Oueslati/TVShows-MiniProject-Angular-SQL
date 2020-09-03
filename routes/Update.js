const express = require('express');
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const db = require('../Database-SQL')


const User = require("../models/User")
router.use(cors())


router.post('/update', (req, res) => {
    console.log(req.body)
    let sql = `UPDATE users SET 
  firstName= '${req.body.firstName}',
  LastName= '${req.body.lastName}',
  address= '${req.body.address}',
  city= '${req.body.city}',
  country= '${req.body.country}',
  zipCode= '${req.body.zipCode}',
  aboutMe= '${req.body.aboutMe}'
    WHERE id=${req.body.id}`
    let query = db.db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send('profile updated')
    })
})


module.exports = router
