import displayResults from './results';
import './load';

const api = {
  key: '74b515b6adf05a133d5641ca29abaa14',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector('.search-box');

const getResults = (query) => {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`, { mode: 'cors' }).then((weather) => weather.json()).then(displayResults);
};

const setQuery = (event) => {
  if (event.keyCode === 13) {
    getResults(searchBox.value);
  }
};

searchBox.addEventListener('keypress', setQuery);
