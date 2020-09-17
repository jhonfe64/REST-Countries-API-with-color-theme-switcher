const express = require('express');
const router = express.Router();
const {get_all_countries} = require('../lib/home_countries');





router.get('/', (req, res)=>{
    get_all_countries("https://restcountries.eu/rest/v2/all")
    .then((all_countries)=>{
        res.render('index', {all_countries: all_countries});
    });
});



module.exports = router;