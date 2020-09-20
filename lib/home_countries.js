const fetch = require("node-fetch");

async function get_all_countries(url){
    const fetch_url = await fetch(url);
    const all_countries = await fetch_url.json();
    return all_countries
}


async function get_one_country(url){
    const fetch_url = await fetch(url)
    const one_country = await fetch_url.json();
    return one_country;
}


module.exports = {get_all_countries, get_one_country}
