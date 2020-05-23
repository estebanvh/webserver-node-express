const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');


//para heroku
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'esteban villarroel henRíquez'
    })

});

app.get('/about', (req, res) => {

    res.render('about');

})

app.get('/data', (req, res) => {

    res.send('Hola data')

})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});