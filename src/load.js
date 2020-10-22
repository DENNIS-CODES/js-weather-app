import dateBuilder from './date';

(window.onload = () => {
  const now = new Date();
  const date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);
})();
