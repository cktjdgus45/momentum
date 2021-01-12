const weather = document.querySelector(".js-weather");

const API_KEY = '175f516a65aad231d8b2b5d1abb46438';
const COORDS = 'coords';


function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then((response) => {
        return response.json();
    }).then((json) => {
        const temp = json.main.temp;
        const city = json.name;
        weather.innerHTML = `${temp}˚C / ${city}`;
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getCoordSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function getCoordFalse() {
    alert('failed to get curret position');
}

function askForCoords() {
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(getCoordSuccess, getCoordFalse, options);
}


function loadCoords() {
    const getCoords = localStorage.getItem(COORDS);
    const coords = JSON.parse(getCoords);
    if (coords === null) {
        askForCoords();
    } else {
        getWeather(coords.latitude, coords.longitude);
    }
}


function init() {
    loadCoords();
}

init();

//just for test