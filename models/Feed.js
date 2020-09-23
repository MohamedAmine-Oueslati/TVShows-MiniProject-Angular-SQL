const express = require('express')
const app = express();
const db = require('../Database-SQL');
const router = express.Router();


router.get('/createfeedtable', (req, res) => {
    let sql = `CREATE TABLE feed(id int AUTO_INCREMENT, email VARCHAR(255), message VARCHAR(255), 
    image VARCHAR(255), likes VARCHAR(255), PRIMARY KEY(id))`;
    db.db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send('Feed table created')
    })
})

module.exports = router