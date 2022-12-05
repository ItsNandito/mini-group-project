let select = document.getElementById('city');
import { cityDatabase } from "./citiesDatabase.js";
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
    let cityList = document.getElementById('table')
    for (let i = 0; i < citiesFiltered.length; i++) {
        tableHeadTag = document.getElementById('tableHead');
        tableHeadTag.innerText = citiesFiltered[i].name;
        cityList.appendChild(tableHeadTag);
        }

    });