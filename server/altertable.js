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
  var sql = "ALTER TABLE authentication ADD COLUMN iv VARCHAR(255)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});
