const displayResults = (weather) => {
  const city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  const temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  temp.addEventListener('click', () => {
    const metric = document.querySelector('.current .temp span');
    const celsius = Math.round(weather.main.temp);

    if (metric.innerText === '°c') {
      let num = (celsius * 1.8) + 32;
      temp.innerHTML = `${Math.round( num * 100) / 100 }<span>°f</span>`;
    } else {
      temp.innerHTML = `${celsius}<span>°c</span>`;
    }
  });

  const weatherReport = document.querySelector('.current .weather');
  weatherReport.innerText = weather.weather[0].main;

  const hilow = document.querySelector('.hi-low');
  hilow.innerText = `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;

  const icon = document.querySelector('.current .icon');

  if (weatherReport.innerText === 'Clouds') {
    icon.innerHTML = '<img src="../dist/img/cloudy.svg">';
  } else if (weatherReport.innerText === 'Clear') {
    icon.innerHTML = '<img src="../dist/img/day.svg">';
  } else if (weatherReport.innerText === 'Rain') {
    icon.innerHTML = '<img src="../dist/img/rainy-6.svg">';
  } else if (weatherReport.innerText === 'Mist') {
    icon.innerHTML = '<img src="../dist/img/snowy-1.svg">';
  } else {
    icon.innerHTML = '<img src="../dist/img/day.svg">';
  }
};

export default displayResults;
