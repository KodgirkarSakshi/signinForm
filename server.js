var express = require('express');
//var body_parser = require('body-parser');
var path = require('path');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);

// var staticFolder = express.static(path.json(__dirname,"public"));
// app.use(staticFolder);

app.get("/",(req,res)=>{
    res.sendFile('public/index.html',{root:__dirname});
});

app.listen(8000);
console.log("App listing on port 5000");