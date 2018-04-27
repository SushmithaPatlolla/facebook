var express = require('express')
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser')
jwt = require('jsonwebtoken')
cors = require('cors');

mongoose.connect("mongodb://localhost/Facebook");

// cors to manage both the angular and server

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  app.use(cors(corsOptions))

app.use(bodyParser.json()); 

var loginSchema = new mongoose.Schema({
    "username" : String,
    "password" : String
})

var postSchema = new mongoose.Schema({
    "title" : String,
    "description" : String
})

//model
var Login = mongoose.model('login', loginSchema)
var Post = mongoose.model('post', postSchema)



//api call register
app.post('/register', function(req,res){
    Login.create(req.body, function(err, data){
        if(!err){
            res.send(data)
        }
        else{
            console.log(err)
        }
    })
})

//login
app.post('/login', function(req,res){ 

    var token = jwt.sign({'username':req.body.username}, 'secret', {expiresIn: '1h'})
    Login.findOne({username:req.body.username, password:req.body.password}, function(err, data){
        if(!err && data != null){
            res.send(
                { "data": data,
                "token" : token,
                "loggedIn": true
                })
        }
        else{
            res.send({
                "loggedIn": false  
            })
             console.log(err)
        }
    })
})

app.use(function(req,res,next){
    console.log(req.headers)
    var token = req.headers.authorize;
    if(token){
        console.log(token);
        jwt.verify(token, 'secret', function(err, decoded){
            if(err){
                console.log(err)
            }
            else{
                req.decoded = decoded
                next()
            }
        })
    }else{
        console.log("token",token)
        console.log('else');
    }
})
// create post
app.post('/home', function(req,res){
    Post.create(req.body, function(err, data){
        if(!err){
            console.log(data)
            res.send(data)
        }
        else{
            console.log(err)
        }
    })
})

app.get('/home', function(req,res){
    console.log('in serbver')
    Post.find({}, function(err, data){
        if(!err && data != null){

            res.send(data)
        }
        else{
             console.log(err)
        }
    })
})


//listening on port 2000
app.listen(2000,function(){
    console.log("server started")
})
