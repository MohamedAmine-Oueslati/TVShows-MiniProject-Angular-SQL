const mysql = require('mysql')

// Create Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodemysql'
})
db.connect((err) => {
    if (err) {
        throw err
    }
    console.log('mysql connected')
})

module.exports.db = db;