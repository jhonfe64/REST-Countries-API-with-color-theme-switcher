let drodawnRegion = document.getElementById("drodawnRegion");
let dropdownOptions = document.getElementById("dropdownOptions");
let dark_mode = document.getElementById("dark_mode_btn");
let light_mode = document.getElementById("light_mode_btn");
// let top_header = document.getElementById("top_header");
// let searching_country = document.getElementById("searching_country");
// let searching_button = document.getElementById("searching_button");
// let searching_form = document.getElementById("searching_form");
// let country_card = document.getElementsByClassName("country_card");
 let whole_body = document.getElementById("fff");
// let main_title = document.getElementById("main_title");
// let country_card_results = document.getElementsByClassName("country_card_results");
// let dropdown_region = document.getElementsByClassName("dropdown_region");
// let back_button = document.getElementById("back_button");
// let country_info_container = document.getElementById("country_info_container");
// let related_countries = document.getElementsByClassName("related_countries");

if(dropdownOptions){
    let drodawnRegion_Width = drodawnRegion.offsetWidth;
    dropdownOptions.style.width = `${drodawnRegion_Width}px`;
}



dark_mode.addEventListener("click", function(){

    this.classList.remove("d-flex");
    this.classList.add("d-none");
    light_mode.classList.remove("d-none");
    light_mode.classList.add("d-flex");
    whole_body.classList.add("dark_background");

    localStorage.setItem("dark_mode", "dark_background");
});

var dark_modes = localStorage.getItem("dark_mode");

if(dark_modes){
    whole_body.classList.add("dark_background");
    dark_mode.classList.remove("d-flex");
    dark_mode.classList.add("d-none");
    light_mode.classList.add("d-flex");
}


light_mode.addEventListener("click", function(){
    dark_mode.classList.add("d-flex");
    this.classList.remove("d-flex");
    this.classList.add("d-none");
   
    whole_body.classList.remove("dark_background");
    localStorage.removeItem("dark_mode");    
});

















 