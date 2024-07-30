const express=require("express");
const mongoose = require('mongoose');
require('./db/config');
const User = require("./db/users");
const app = express();
app.use(express.json());
const cors=require('cors');


app.use(cors());
app.post("/register",async (req,resp)=>{
    let user= new User(req.body);
    let result =await user.save();
    result=result.toObject();
    delete result.password;
    resp.send(result); 
})
app.post("/login",async(req,resp)=>{
   let user= await User.findOne(req.body).select("-password");
 if(req.body.password && req.body.email  ){if(user){
    resp.send(user)
  }
  else{
    resp.send({result:"no user found"})
  }}
  else{
    resp.send({result:"no user found"})
  }

   
   
})

app.listen(5000);
