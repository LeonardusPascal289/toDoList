const express = require('express');
const app = express();



app.set("view engine","ejs");
app.use(express.static('public'));
// starting the app 
app.get('/',(req,res)=>{
    res.render("index");
})

// sign Up Pages
app.get('/signUp',(req,res)=>{
    res.render('sign Up')
})
// submit Register User
app.post('/userSignUp',(req,res)=>{
    res.redirect('/')
})
// listen port 
app.listen (7000);


