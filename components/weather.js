const weatherData = require('../assets/weather.json');
const superagent = require('superagent');
const WEATHER_BIT_KEY = process.env.WEATHER_BIT_KEY;
require('dotenv').config();

const stolenData = {};
const handelWeather =(req, res) => {
    // const arrayOfData = weatherData.data.map( data => new Weather(data));
      // const weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=6317595787be45b99691493bd98e0eee&lat=32.33&lon=33.55`;
      const weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily`;
      const key = `weather-${req.query.lat}${req.query.lon}`;
      const queryParams={
          key:process.env.WEATHER_API_KEY ,
          lat:req.query.lat,
          lon:req.query.lon,
          lang:'en',
          days:5
      }
         
if (stolenData[key])
{
 res.send(stolenData[key]);
 console.log('in my cached');
}
else 
      {
    try {
    superagent.get(weatherBitUrl).query(queryParams).then(weatherBitUrl =>{
      const dataFRomTheUrl = weatherBitUrl.body.data.map(theSendData => new Weather(theSendData));
      stolenData[key]=dataFRomTheUrl;
      res.send(dataFRomTheUrl);

    })
    } catch (error) {
      const dataFRomTheUrl = data.body.data.map(theSendData => new Weather(theSendData));
      res.send(dataFRomTheUrl);
    }
    
    // superagent.get('');
    // res.send(arrayOfData);
    // req.send(`all good`);
  }
}
  class Weather
  {
      constructor (data){
          this.date = data.valid_date;
          this.description = data.weather.description;
 
      }
 
  } 
  module.exports = handelWeather;