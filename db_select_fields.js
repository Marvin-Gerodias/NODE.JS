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
        console.log(fields); // console.log(fields[1].name) returns 'address', "name attribute" of index 1.

    });
});
