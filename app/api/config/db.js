const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'hansarts_admin',
    password: 'Hansartss@123',
    database: 'hansarts_shop',
});

db.connect( err => {
    if(err) {
        console.log("error", err);
    } else {
        console.log("connected to my database")
    }
})

module.exports = db;