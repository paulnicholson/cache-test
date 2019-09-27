const http = require('http');
const express = require('express')

const hostname = '127.0.0.1';
const port = 8080;

const app = express();
app.set('views', './views');
app.set('view engine', 'slm');

app.use((request, response, next) => {
  response.header('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
  response.header('Expires', '0');
  response.header('Pragma', 'no-cache');
  next();
})

var pageviews = 1;

app.get('/', (request, response) => {
  response.render('index', {
    time: (new Date()).toUTCString(),
    rand: Math.round(Math.random() * 1000),
    pageviews: pageviews++
  });
})

/*app.get('/redirect', (request, response) => {*/
  //response.redirect('/redirect-again')
//});

//app.get('/redirect-again', (request, response) => {
  //response.redirect('/')
/*});*/

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
