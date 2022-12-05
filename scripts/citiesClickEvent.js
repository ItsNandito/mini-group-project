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

                                // -----------Displaying data to website

                                // declarying all variables

                                // let mainWeatherBody = document.getElementsByClassName('future-forecast');
                                // let imgbody = document.getElementsByClassName('w-icon');
                                // let todayWeatherCard = document.getElementsByClassName('today');
                                // let upcomingWeatherCard = document.getElementsByClassName('weather-forecast-item');

                                // let weatherpng = document.createElement('img');
                                // let currentDay = document.createElement('div');

                                let todayDate = document.getElementById('day1');
                                let todayWeatherDay = document.getElementById('day1-day');
                                let todayWeatherNight = document.getElementById('day1-night');
                                let todayWeatherPng = document.getElementById('icon-day1');

                                todayDate.innerHTML = forecastArray[0].name;
                                todayWeatherDay.innerHTML = `${forecastArray[0].temperature}&#176; F`;
                                todayWeatherNight.innerHTML = `${forecastArray[1].temperature}&#176; F`;
                                // todayWeatherPng.setAttribute('src', forecastArray[0].icon)

                                let day2Name = document.getElementById('day2');
                                let day2WeatherDay = document.getElementById('day2-day');
                                let day2WeatherNight = document.getElementById('day2-night');
                                let day2WeatherPng = document.getElementById('icon-day2');

                                day2Name.innerHTML = forecastArray[2].name;
                                day2WeatherDay.innerHTML = `${forecastArray[2].temperature}&#176; F`;
                                day2WeatherNight.innerHTML = `${forecastArray[3].temperature}&#176; F`;
                                // day2WeatherPng.setAttribute('src', forecastArray[2].icon)

                                let day3Name = document.getElementById('day3');
                                let day3WeatherDay = document.getElementById('day3-day');
                                let day3WeatherNight = document.getElementById('day3-night');
                                let day3WeatherPng = document.getElementById('icon-day3');

                                day3Name.innerHTML = forecastArray[4].name;
                                day3WeatherDay.innerHTML = `${forecastArray[4].temperature}&#176; F`;
                                day3WeatherNight.innerHTML = `${forecastArray[5].temperature}&#176; F`;
                                // day3WeatherPng.setAttribute('src', forecastArray[4].icon)

                                let day4Name = document.getElementById('day4');
                                let day4WeatherDay = document.getElementById('day4-day');
                                let day4WeatherNight = document.getElementById('day4-night');
                                let day4WeatherPng = document.getElementById('icon-day4');

                                day4Name.innerHTML = forecastArray[6].name;
                                day4WeatherDay.innerHTML = `${forecastArray[6].temperature}&#176; F`;
                                day4WeatherNight.innerHTML = `${forecastArray[7].temperature}&#176; F`;
                                // day4WeatherPng.setAttribute('src', forecastArray[6].icon)

                                let day5Name = document.getElementById('day5');
                                let day5WeatherDay = document.getElementById('day5-day');
                                let day5WeatherNight = document.getElementById('day5-night');
                                let day5WeatherPng = document.getElementById('icon-day5');

                                day5Name.innerHTML = forecastArray[8].name;
                                day5WeatherDay.innerHTML = `${forecastArray[8].temperature}&#176; F`;
                                day5WeatherNight.innerHTML = `${forecastArray[9].temperature}&#176; F`;
                                // day5WeatherPng.setAttribute('src', forecastArray[8].icon)

                                let day6Name = document.getElementById('day6');
                                let day6WeatherDay = document.getElementById('day6-day');
                                let day6WeatherNight = document.getElementById('day6-night');
                                let day6WeatherPng = document.getElementById('icon-day6');

                                day6Name.innerHTML = forecastArray[10].name;
                                day6WeatherDay.innerHTML = `${forecastArray[10].temperature}&#176; F`;
                                day6WeatherNight.innerHTML = `${forecastArray[11].temperature}&#176; F`;
                                // day6WeatherPng.setAttribute('src', forecastArray[10].icon)

                                let day7Name = document.getElementById('day7');
                                let day7WeatherDay = document.getElementById('day7-day');
                                let day7WeatherNight = document.getElementById('day7-night');
                                let day7WeatherPng = document.getElementById('icon-day7');

                                day7Name.innerHTML = forecastArray[12].name;
                                day7WeatherDay.innerHTML = `${forecastArray[12].temperature}&#176; F`;
                                day7WeatherNight.innerHTML = `${forecastArray[13].temperature}&#176; F`;
                                // day7WeatherPng.setAttribute('src', forecastArray[12].icon)






                        
                        })
                    })
               
    })

