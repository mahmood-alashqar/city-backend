const express = require('express');
const weatherData = require('./assets/weather.json');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3030;
const app = express()
 app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
});
// app.get('/about', function (req, res) {
//     console.log('server');
//   });
  app.get('/weather', function (req, res) {
    const arrayOfData = weatherData.data.map( data => new Weather(data));
    res.send(arrayOfData);
  });

 class Weather
 {
     constructor (data){
         this.date = data.valid_date;
         this.description = data.weather.description;

     }

 } 

app.listen(PORT, () => {
    console.log(`server is ${PORT}`);
})
//
