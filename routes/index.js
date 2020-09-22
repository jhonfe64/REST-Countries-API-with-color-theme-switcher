const express = require('express');
const router = express.Router();
const {get_country} = require('../lib/home_countries');




//===> get all ountries
router.get('/', (req, res)=>{
    get_country("https://restcountries.eu/rest/v2/all")
    .then((all_countries)=>{
        res.render('index', {all_countries: all_countries});
    });
});


//==> get one single country
router.get('/country/:name', (req, res)=>{
    const name = req.params.name;
    get_country(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((one_country)=>{
        res.render('./show_country/country', {one_country: one_country[0]});
    })
});


//==> get searched country
router.get('/search', (req, res)=>{
    const {country} = req.query;
    get_country(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((country)=>{
        res.render('index', {all_countries: country});
    }).catch(()=>{
        res.render('./partials/404');
    });
});

//==> get country by region
router.get('/country', (req, res)=>{
    const {region} = req.query;
    console.log(region);
    get_country(`https://restcountries.eu/rest/v2/region/${region}`)
    .then((regionCountry)=>{
        res.render('index', {all_countries: regionCountry});
    }).catch((err)=>{
        res.render('./partials/404');
    })
});




router.use((req, res, next)=>{
    res.render('./partials/404');
    next();
})


module.exports = router;