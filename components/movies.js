const { response } = require('express');
const superagent = require('superagent');
require('dotenv').config();


const stolenData = {};

const handelMovies =(req , res) => {
    
        // console.log(process.env.REACT_APP_MOVIES_KEY);
        const url = `https://api.themoviedb.org/3/search/movie`; 
        const movieQuery = req.query.querySearch || 'paris';
    const paraQuery = 
    {
        query: movieQuery,
        api_key: process.env.REACT_APP_MOVIES_KEY,
        
    }
    
if (stolenData[movieQuery])
{
 res.send(stolenData[movieQuery]);
 console.log('in my cached');
}
else 
      { try { superagent.get(url).query(paraQuery).then( data => {
            const moviesData = data.body.results.map( data1 => new Movies(data1));
            res.send(moviesData);
            stolenData[movieQuery]=moviesData;
            console.log('!in my cached');
    
            })
     
      }
         catch (error) {
          const moviesData = data.body.results.map( data1 => new Movies(data1));
            res.send(moviesData);
          
        }


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
  module.exports = handelMovies;