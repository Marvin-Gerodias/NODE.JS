var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))";
    // var sql = "ALTER TABLE users ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query("SELECT name, address FROM users", (err, result, fields) => {
        // SELECT * will return all the columns
        if (err) throw err;
        console.log(result); // console.log (result[2].address) gives you back 'Lowstreet 4', address of 2nd index.

    });
});
