const express = require('express');
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const db = require('../Database-SQL')


const User = require("../models/User")
router.use(cors())

process.env.SECRET_KEY = 'secret'


// //register
// router.post('/register', (req, res) => {
//     const userData = {
//         email: req.body.email,
//         username: req.body.username,
//         password: req.body.password
//     }
//     User.findOne({
//         where: {
//             email: req.body.email
//         }
//     }).then(user => {
//         if (!user) {
//             const hash = bcrypt.hashSync(userData.password, 10)
//             userData.password = hash
//             User.create(userData)
//                 .then(user => {
//                     let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, { expiresIn: 1440 })
//                     res.json({ token: token })
//                 })
//                 .catch(err => {
//                     res.send('err : ' + err)
//                 })
//         }
//         else {
//             res.json({ error: 'User already exists' })
//         }
//     })
//         .catch(err => {
//             res.send('err : ' + err)
//         })
// })



router.post("/register", (req, res) => {
    const userData = {
        email: req.body.email,
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    }
    let sql = `SELECT * FROM users WHERE email='${req.body.email}'`
    let query = db.db.query(sql, (err, result) => {
        console.log(result.length)
        if (result.length === 0) {
            const hash = bcrypt.hashSync(userData.password, 10)
            userData.password = hash
            let sql1 = 'INSERT INTO users SET ?'
            let query1 = db.db.query(sql1, userData, (err, data) => {
                if (err) {
                    throw err
                }
                let token = jwt.sign({ data: data }, process.env.SECRET_KEY, { expiresIn: 1440 })
                res.json({ token: token })
            })
        }
        else {
            res.send('User already exists')
        }
    })
})


router.post("/login", (req, res) => {
    let sql = `SELECT * FROM users WHERE email='${req.body.email}'`
    let query = db.db.query(sql, (err, data) => {
        if (bcrypt.compareSync(req.body.password, data[0].password)) {
            let token = jwt.sign({ data: data }, process.env.SECRET_KEY, { expiresIn: 1440 })
            res.json({ token: token })
        }
        else {
            res.send('User does not exist')
        }
    })
})

router.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    console.log(decoded)
    let sql = `SELECT * FROM users WHERE id='${decoded.data[0].id}'`
    let query = db.db.query(sql, (err, data) => {
        console.log(data)
        if (data.length !== 0) {
            res.json(data[0])
        }
        else {
            res.send('User does not exist')
        }
    })
})


module.exports = router