const weatherData = require('../assets/weather.json');
const superagent = require('superagent');
const WEATHER_BIT_KEY = process.env.WEATHER_BIT_KEY;
require('dotenv').config();
const stolenData = {};


const handelWeather =(req, res) => {
    // const arrayOfData = weatherData.data.map( data => new Weather(data));
    const key =`weather:lat=${req.query.lat}lon=${req.query.lon}`;
    const paramsQuery = {

      lon:req.query.lon,
      lat:req.query.lat,
      days:5,

    }
    if (stolenData[key]){
res.send(stolenData[key]);
console.log('stolenData[key]');

    }
    else {
      
      try {
      const weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=6317595787be45b99691493bd98e0eee`;
    console.log(weatherBitUrl);
    console.log(req.query.lon);

    superagent.get(weatherBitUrl).query(paramsQuery).then(weatherBitUrl =>{
      const dataFRomTheUrl = weatherBitUrl.body.data.map(theSendData => new Weather(theSendData));
      res.send(dataFRomTheUrl);
      stolenData[key]=dataFRomTheUrl;
      console.log('get cached');

    })
    } catch (error) {
      const dataFRomTheUrl = data.body.data.map(theSendData => new Weather(theSendData));
      res.send(dataFRomTheUrl);
    }
    }
   
    // superagent.get('');
    // res.send(arrayOfData);
    // req.send(`all good`);
  }
  
  class Weather
  {
      constructor (data){
          this.date = data.valid_date;
          this.description = data.weather.description;
 
      }
 
  } 
  module.exports = handelWeather;