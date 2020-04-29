const express=require("express");
const bodyParser=require("body-parser");
const app=express();


app.set("view engine","ejs");


app.get("/", function(req,res){
    var today=new Date();
    if(today.getDay==6 || today.getDay==7){
        var a="weekend";
       // res.sendFile(__dirname+"/index1.html");
       res.render("app",{day:a});
    }
    else{
        a="weekday";
        //res.sendFile(__dirname+"/index2.html");
        res.render("app",{day:a});
    }
    console.log("Server running at port 3000");
});

app.listen(3000, function(){
  console.log("Server running at port 3000");
});