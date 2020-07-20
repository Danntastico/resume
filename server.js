const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname, +'/public'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => console.log('Listening on port 3000'));
