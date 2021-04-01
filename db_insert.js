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
    var sql = "INSERT INTO users (name, address) VALUES ('Marvin', '123 First Street')";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("1 record insterted");
    });
});
