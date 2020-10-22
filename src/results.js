const displayResults = (weather) => {

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
        icon.innerHTML = `<img src="../dist/img/cloudy.svg">`;
    }else if (weatherReport.innerText === 'Clear') {
        icon.innerHTML = `<img src="../dist/img/day.svg">`;
    } else if (weatherReport.innerText === 'Rain') {
        icon.innerHTML = `<img src="../dist/img/rainy-6.svg">`;
    } else if (weatherReport.innerText === 'Mist') {
        icon.innerHTML = `<img src="../dist/img/snowy-1.svg">`;
    } else {
        icon.innerHTML = `<img src="../dist/img/day.svg">`;
    }
};

export default displayResults;