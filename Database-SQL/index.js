const Sequelize = require('sequelize');
const db = {}


const sequelize = new Sequelize("nodejs_login1", "root1", "", {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.Sequelize = sequelize
db.sequelize = sequelize

module.exports = db


// Create Connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'nodemysql'
// })
// db.connect((err) => {
//     if (err) {
//         throw err
//     }
//     console.log('mysql connected')
// })

// // Create DB
// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE nodemysql';
//     db.query(sql, (err, result) => {
//         if (err) {
//             throw err
//         }
//         res.send('Database created')
//     })
// })

// module.exports.db = db;