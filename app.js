const express= require("express");
const axios= require("axios");
const port= 3000;
const app= express();
app.set("view engine", 'ejs');
app.get("/", async(req, res)=>{
    try{
    const response= await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
    const joke= response.data.joke;
    res.render("index", {joke});
    }
    catch(error){
        res.render("index.js",{joke: "sorry couldnot find the joke"});
    }
});

app.listen(port, ()=>{
    console.log("sever running on the port 3000");
});