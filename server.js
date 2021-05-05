const express = require('express');
const weatherData = require('./assets/weather.json');
const cors = require('cors');
const superagent = require('superagent');
require('dotenv').config();
const PORT = process.env.PORT || 3030;
const WEATHER_BIT_KEY = process.env.WEATHER_BIT_KEY;
const app = express()
 app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
});
// app.get('/about', function (req, res) {
//     console.log('server');
//   });
  app.get('/weather', function (req, res) {
    // const arrayOfData = weatherData.data.map( data => new Weather(data));
    try {
      const weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_BIT_KEY}&lat=${req.query.lat}&lon=${req.query.lon}`;
    
    superagent.get(weatherBitUrl).then(weatherBitUrl =>{
      const dataFRomTheUrl = weatherBitUrl.body.data.map(theSendData => new Weather(theSendData));
      res.send(dataFRomTheUrl);

    })
    } catch (error) {
      const dataFRomTheUrl = data.body.data.map(theSendData => new Weather(theSendData));
      res.send(dataFRomTheUrl);
    }
    
    // superagent.get('');
    // res.send(arrayOfData);
    // req.send(`all good`);
  });
  app.get('/movies' , (req , res) => {
    try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e1e87cba462f5119dbeb3f736b910fa9&query=paris`;
    superagent.get(url).then( data => {
        const moviesData = data.body.results.map( data1 => new Movies(data1));
        res.send(moviesData);
        console.log(data.body.results);

        })
  //       }
  //       // console.log(object);

  //   })
  }
     catch (error) {
      const moviesData = data.body.results.map( data1 => new Movies(data1));
        res.send(moviesData);
      // console.log('[data.result]');
    }
  
    
  });

 class Weather
 {
     constructor (data){
         this.date = data.valid_date;
         this.description = data.weather.description;

     }

 } 
 class Movies{
   constructor(data){
    this.title= data.title ;
    this.overview =data.overview;
      this.average_votes =data.vote_average;
      this.total_votes=data.vote_count ;
      if(data.backdrop_path !== null)
          this.image_url =`https://image.tmdb.org/t/p/w500${data.backdrop_path}`;
      else
          this.image_url = 'there is no image';
      this.popularity = data.popularity ;
      this.released_on = data.release_date ;
  }
 }

app.listen(PORT, () => {
    console.log(`server is ${PORT}`);
})
//
