const express= require("express");
const axios= require("axios");
const app= 3000;

app.get("/", (req, res)=>{
    const result= async axios.get("https://v2.jokeapi.dev/joke/Any?type=single")
})





app.listen(prompt, ()=>{
    console.log("sever running on the port 3000");
})