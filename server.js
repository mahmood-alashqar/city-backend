const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3030;
const weatherHandler = require('./components/weather');
const moviesHandler = require('./components/movies');
const app = express()
 app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/weather', weatherHandler);

  
app.get('/movies' ,moviesHandler );

 
 

app.listen(PORT, () => {
    console.log(`server is ${PORT}`);
})
//
