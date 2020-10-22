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

function displayResults (weather) {

    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;


    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    temp.addEventListener("click", function (){
        let metric = document.querySelector('.current .temp span');
        let celsius = Math.round(weather.main.temp);

        console.log(metric.innerText)
        if (metric.innerText === '°c') {
            temp.innerHTML = `${(celsius * 9/5) + 32}<span>°f</span>`;
        } else {
            temp.innerHTML = `${celsius}<span>°c</span>`;
        }
    });


    let weatherReport = document.querySelector('.current .weather');
    weatherReport.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;

    let icon = document.querySelector('.current .icon')

    if (weatherReport.innerText === 'Clouds') {
        icon.innerHTML = `<img src="animated/cloudy.svg">`;
    }else if (weatherReport.innerText === 'Clear') {
        icon.innerHTML = `<img src="animated/day.svg">`;
    } else if (weatherReport.innerText === 'Rain') {
        icon.innerHTML = `<img src="animated/rainy-6.svg">`;
    } else if (weatherReport.innerText === 'Mist') {
        icon.innerHTML = `<img src="animated/snowy-1.svg">`;
    } else {
        icon.innerHTML = `<img src="animated/day.svg">`;
    }
}
