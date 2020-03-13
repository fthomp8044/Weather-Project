const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
//this allows to parse our body through the post request
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")

});

app.post("/", function(req, res){
  // console.log(req.body.cityName);

  const query = req.body.cityName;
  const apikey = "95881f5849639339c8a8dee88d55af14";
  const unit = "imperial"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" + unit + "";

  https.get(url, function(response){
    console.log(response.statusCode)

    response.on("data", function(data){
      //parse unpacks data into a json object format
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      //sending info back to the browservvv
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius</h1>");
      res.write("<img src=" + imageURL +">");

    })
  })
})

app.listen(3000, function(){
  console.log("Server is now running on port 3000");
});
