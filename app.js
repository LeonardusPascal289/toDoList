const express = require('express');
const app = express();



app.set("view engine","ejs");
app.use(express.static('public'));
// starting the app 
app.get('/',(req,res)=>{
    res.render("index");
})

// listen port 
app.listen (7000);