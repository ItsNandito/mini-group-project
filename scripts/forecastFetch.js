import {cityDatabase} from './citiesDatabase.js';

window.onload = () =>{
    // import the dropdown js file and impliment it into my file 

    //declaring stationLookupUrl as the endpoint 
    for(let i =0; i<cityDatabase.length; i++ ){
    console.log(cityDatabase[i].latitude, cityDatabase[i].longitude)
    let stationLookupUrl =`https://api.weather.gov/points/${cityDatabase[i].latitude},${cityDatabase[i].longitude}`;
    

    // fetch the data from the endpoint 
    fetch(stationLookupUrl)

    // turn that data into a json object and create a data function 
         .then(response => response.json())
         .then(data =>{
            console.log(data)
            //calling the forecast endpoint(fetch) inside of the another fetch
            let forecastUrl = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast/';
            fetch(forecastUrl)
                .then(response => response.json())
                .then(data =>{
                    let weatherUrl = data.properties.forecast;
                    getWeather(weatherUrl);
                  console.log(getWeather)
                })
            
           
         })
    //when a city is selected i want the log and lat 

    //than i want to find the log and lat in the api 

    //open the api data and displace
 
 
        }
}