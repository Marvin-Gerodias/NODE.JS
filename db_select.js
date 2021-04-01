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
    con.query("SELECT * FROM users", (err, result, fields) => {
        // SELECT * will return all the columns
        if (err) throw err;
        console.log(result);
    });
});
