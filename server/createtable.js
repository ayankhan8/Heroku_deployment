var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "WTPROJECT"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE authentication (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(255),last_name VARCHAR(255), gender VARCHAR(10),email_address VARCHAR(255),password VARCHAR(255),hashed_password VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});