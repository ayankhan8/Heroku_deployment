const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const PORT = 3008;

const { encrypt, decrypt } = require("./EncryptionHandler");

var em;


app.use(cors());
app.use(express.json());

var db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "WTPROJECT",
  });

app.post('/addpassword',(req,res)=>{
    const{first_name,last_name,password,email_address,gender}=req.body;
    const hashedPassword = encrypt(password);

    db.query("INSERT INTO authentication (first_name,last_name,password,email_address,gender,hashed_password) VALUES(?,?,?,?,?,?)",[
        first_name,last_name,hashedPassword.password,email_address,gender,hashedPassword.iv],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Success");
        }
      })
});

app.post('/myEmailGetter',(req,res)=>{
  const{email}=req.body;
  em = email;
  console.log(em);
});



app.get('/mypassword',(request,response)=>{
  hashed = db.query("SELECT password,hashed_password FROM authentication WHERE email_address = ?",[em],
  function(error, results, fields) {
    if (results.length > 0) {
      results = JSON.stringify(results);
      var result1 = JSON.parse(results);
      console.log(results);
      var originalPassword = decrypt(result1);
      console.log(originalPassword);
      response.send(originalPassword);
      
    } else {
      //console.log('Bye!!');
      
      response.send('Incorrect Username and/or Password!');
    }			
    response.end();
    });

});


app.listen(process.env.PORT || PORT,()=>{
    console.log("Server is running");
})
