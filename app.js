//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//port
const port=3000;

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/billgenerator')

//on connection
mongoose.connection.on('connected',()=>{
  console.log("Connected to MongoDB")
})

//on error
mongoose.connection.on('error',(err)=>{
  console.log(err)
})


//adding middleware
app.use(cors());

//adding bodyparser
app.use(bodyparser.json());

//routes
const route = require('./routes/route.js');
app.use('/billgenerator/rest/api',route);


//static files
app.use(express.static(path.join(__dirname,'public')));

app.listen(port,()=>{
  console.log("Server started at port "+port);
});

app.get('/',(req,res)=>{
  res.send('Success');
})
