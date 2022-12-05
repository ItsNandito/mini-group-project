import {cityDatabase} from "./citiesDatabase.js";
let select = document.getElementById('city');

for (let i = 0; i < cityDatabase.length; i++) {
    let opt = cityDatabase[i].name;
    let el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
};

document.getElementById('city').addEventListener("change", function () {
    let eId = document.getElementById('city');
    let selectedOptions = eId.options[eId.selectedIndex].text;
    console.log(selectedOptions);

    let citiesFiltered = cityDatabase.filter(function (cityDatabase) {
        if (cityDatabase.name === selectedOptions) {
        } return selectedOptions === cityDatabase.name;
    }); console.log(citiesFiltered);
/*     let cityList = document.getElementById('table')
    for (let i = 0; i < citiesFiltered.length; i++) {
        tableHeadTag = document.getElementById('tableHead');
        tableHeadTag.innerText = citiesFiltered[i].name;
        cityList.appendChild(tableHeadTag);
        } */
        citiesFiltered.forEach(numCities)
        function numCities (items){
            console.log(items.latitude, items.longitude)
            return items.latitude, items.longitude
            
        }
        let i = 0;
        let stationLookupUrl =`https://api.weather.gov/points/${citiesFiltered[i].latitude},${citiesFiltered[i].longitude}`;
     
        console.log(citiesFiltered[i].latitude)
    

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
                                console.log(data)
                                //getting the data inside of the array in the forecast endpoint 
                                let forecastArray = data.properties.periods;
                                console.log(forecastArray)
                                // displayWeather(forecastArray);
            
                        
                        })
                    })
               
    })

