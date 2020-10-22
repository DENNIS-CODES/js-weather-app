import dateBuilder from "./date";

( window.onload = function () {
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
})();