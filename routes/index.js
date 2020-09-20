const express = require('express');
const router = express.Router();
const {get_all_countries} = require('../lib/home_countries');
const {get_one_country} = require('../lib/home_countries');




//===> get all ountries
router.get('/', (req, res)=>{
    get_all_countries("https://restcountries.eu/rest/v2/all")
    .then((all_countries)=>{
        res.render('index', {all_countries: all_countries});
    });
});


//==> get one single country
router.get('/country/:name', (req, res)=>{
    const name = req.params.name;
    console.log(name);
    get_one_country(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((one_country)=>{
        res.render('./show_country/country', {one_country: one_country[0]});
    })
});



module.exports = router;