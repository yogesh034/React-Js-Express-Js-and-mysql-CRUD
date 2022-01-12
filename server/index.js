const express = require('express');
const app = express();
const mysql = require('mysql');
const cros = require('cors');
const bodyparser = require('body-parser');

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:'',
    database:'node_db'
})

app.use(cros());
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))

app.listen('3001',()=>{
    console.log('server work on port 3001');
})

app.post('/adduser',(req,res)=>{


    console.log(req);
    const Name = req.body.name;
    const Username = req.body.username;
    const Password = req.body.password;

    const sqlInsert = "Insert into user(name,username,password) VALUES(?,?,?)";
    db.query(sqlInsert,[Name,Username,Password],(err,result)=>{
        console.log(err);
    })

})


app.delete('/userdelete/:id',(req,res)=>{

const id = req.params.id
console.log(id);
const sqlDelete = `DELETE FROM user WHERE id = ${req.params.id}`;
db.query(sqlDelete,(err,result)=>{
console.log(result);
})

})

app.get('/user',(req,res)=>{
const sqlSelect = "SELECT * FROM USER";
db.query(sqlSelect,(err,result)=>{
    res.send(result);
});
});