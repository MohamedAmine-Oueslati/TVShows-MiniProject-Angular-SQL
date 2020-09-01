const sequelize = require('sequelize')
const db = require('../Database-SQL');

module.exports = db.sequelize.define('user',
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: sequelize.STRING
        },
        usename: {
            type: sequelize.STRING
        },
        password: {
            type: sequelize.STRING
        },
        firstName: {
            type: sequelize.STRING
        },
        lastName: {
            type: sequelize.STRING
        },
        address: {
            type: sequelize.STRING
        },
        city: {
            type: sequelize.STRING
        },
        country: {
            type: sequelize.STRING
        },
        zipCode: {
            type: sequelize.STRING
        },
        aboutMe: {
            type: sequelize.STRING
        }
    }, {
    timestamps: false
})

// Create Table
// app.get('/createpoststable', (req, res) => {
//     let sql = `CREATE TABLE User(id int AUTO_INCREMENT, email VARCHAR(255), username VARCHAR(255),
//      password VARCHAR(255), firstName VARCHAR(255), LastName VARCHAR(255),address VARCHAR(255),
//      city VARCHAR(255),country VARCHAR(255),zipCode VARCHAR(255),aboutMe VARCHAR(255),
//      PRIMARY KEY(id))`;
//     db.db.query(sql, (err, result) => {
//         if (err) {
//             throw err
//         }
//         console.log(result)
//         res.send('User table created')
//     })
// })
  // Add Post
  // app.get('/addpost', (req, res) => {
  //     let post = { title: 'amine', body: 'Juve' };
  //     let sql = 'INSERT INTO posts SET ?'
  //     let query = db.db.query(sql, post, (err, result) => {
  //         if (err) {
  //             throw err
  //         }
  //         console.log(result)
  //         res.send('Post 1 added')
  //     })
  // })

  // Delete Post
  // app.get('/deletepost/:id', (req, res) => {
  //     let sql = `DELETE FROM posts WHERE id = ${req.params.id}`
  //     let query = db.db.query(sql, (err, result) => {
  //         if (err) {
  //             throw err
  //         }
  //         console.log(result)
  //         res.send('Post 1 deleted')
  //     })
  // })