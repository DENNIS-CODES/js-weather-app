const api = {
    key: "74b515b6adf05a133d5641ca29abaa14",
    base: "https://api.openweathermap.org/data/2.5/",
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery (event) {
    if (event.keyCode === 13){
        getResults(searchBox.value);
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`, {mode: 'cors'}).then(weather => {
        return weather.json();
    }).then(displayResults)
}

window.onload = function () {
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
}

function  dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}