const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app     = express();
const port = 3000;
app.use(express.json());

app.get('/scrape', (req, res) => {
  // Things to scrap
  // Be careful with the url, this is an example
  const url = 'http://www.imdb.com/title/tt1229340/';

  // Request call
  request(url, (error, response, html) => {
    // Check for errorrs IN THE REQUEST
    if (!error) {
      const $ = cheerio.load(html);
      let json = {
        title: '',
        release: '',
        rating: ''
      };
      let { title, release, rating } = json;
    }
  });
});

app.listen(port, () => console.log(`Scrapper levantado en ${port}`));

exports = module.exports = app;