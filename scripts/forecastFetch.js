// import {cityDatabase} from './citiesDatabase.js';

window.onload = () =>{
    // import the dropdown js file and impliment it into my file 

    //declaring stationLookupUrl as the endpoint 
 
    let stationLookupUrl =`https://api.weather.gov/points/27.995776,-82.451116`;
    
    

    // fetch the data from the endpoint 
    fetch(stationLookupUrl)

    // turn that data into a json object and create a data function 
         .then(response => response.json())
         .then(data =>{
            console.log(data)
            //calling the forecast endpoint(fetch) inside of the another fetch
                     let weatherUrl = data.properties.forecast;
                    console.log(weatherUrl)
                    fetch(weatherUrl)
                        .then(response => response.json())
                        .then(data => {
                            //getting the data inside of the array in the forecast endpoint 
                            let forecastArray = data.properties.periods;
                            console.log(forecastArray)
                            // displayWeather(forecastArray);
        
                    
                    })
                })
         
                  
            
       
                
                      
                     
              
            
            
         


    //open the api data and displace
 
 
        
}