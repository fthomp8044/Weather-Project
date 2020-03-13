const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Greenville&appid=95881f5849639339c8a8dee88d55af14&units=metric"
  https.get(url, function(response){
    console.log(response.statusCode)

    response.on("data", function(data){
      //parse unpacks data into a json object format
      const weatherData = JSON.parse(data)
      const object = {
        name: "Freddy",
        favouriteFood: "Ramen"
      }
      //packs data back in a string form
      console.log(JSON.stringify(object));
    });
  })
  res.send("server up and running!");
});





app.listen(3000, function(){
  console.log("Server is now running on port 3000");
});