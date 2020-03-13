const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")

});

app.post("/", function(req, res){
  console.log("Post request recieved");
})

// const query = "Greenville";
// const apikey = "95881f5849639339c8a8dee88d55af14";
// const unit = "imperial"
// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" + unit "";
//
// https.get(url, function(response){
//   console.log(response.statusCode)
//
//   response.on("data", function(data){
//     //parse unpacks data into a json object format
//     const weatherData = JSON.parse(data)
//     const temp = weatherData.main.temp
//     const weatherDescription = weatherData.weather[0].description
//     const icon = weatherData.weather[0].icon
//     const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
//     //sending info back to the browservvv
//     res.write("<p>The weather is currently " + weatherDescription + "</p>");
//     res.write("<h1>The temperature in Greenville is " + temp + " degrees Celcius</h1>");
//     res.write("<img src=" + imageURL +">");
//     res.send()
//
//   })
// })



app.listen(3000, function(){
  console.log("Server is now running on port 3000");
});
