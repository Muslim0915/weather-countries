let currentLocation = 'TASHKENT';
let API = `https://api.weatherapi.com/v1/current.json?key=43cbfe0275934e6b96e54230242202&q=Tashkent&aqi=yes`;
const weatherContainer = document.querySelector('.weather__container');
const weatherLocationTitle = document.querySelector('.location');
const searchButton = document.querySelector('.fa-search');

const updateWeather = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json();
        setWeatherStates(data);
        console.log(data);
    } catch (error) {
        console.log(error);
        weatherContainer.innerHTML = 'You probably entered the cities incorrectly or have bad internet.';
        weatherLocationTitle.innerHTML = ''
    }
};

const setWeatherStates = (data) => {
    const weatherLocaltime = document.querySelector('.weather__localtime');
    weatherLocationTitle.innerHTML = `${data.location.name}, ${data.location.country}`
    weatherContainer.innerHTML = `
        <div class="weather__icon">
            <img src="${data.current.condition.icon}" alt="icon">
        </div>
        <div class="weather__temperature">
            <span>${data.current.temp_c}</span>&#8451;
        </div>
        <div class="weather__states">
            <div class="weather__state__item wind">Wind: <span>${data.current.wind_mph}</span> mph</div>
            <div class="weather__state__item precip">Precip: <span>${data.current.precip_mm}</span> mm</div>
            <div class="weather__state__item pressure">Pressure: <span>${data.current.pressure_mb}</span>mb</div>
            <div class="weather__state__item humidity">Pressure: <span>${data.current.humidity}</span> pa</div>
            <div class="weather__state__item visibility">Visibility: <span>${data.current.vis_km}</span> km</div>
        </div>
    `;
    weatherLocaltime.innerHTML = data.location.localtime;
};

const saveData = () => {
    localStorage.setItem('currentLocation', currentLocation);
};

const loadAndSetWeather = async () => {
    currentLocation = localStorage.getItem('currentLocation') || currentLocation;
    API = `https://api.weatherapi.com/v1/current.json?key=43cbfe0275934e6b96e54230242202&q=${currentLocation}&aqi=yes`;
    await updateWeather();
};

window.onload = loadAndSetWeather;
async function searchLocation() {
    currentLocation = document.querySelector('.search-input').value;
    document.querySelector('.search-input').value = '';
    saveData();
    await loadAndSetWeather();
}
window.addEventListener('keydown', async (event)=>{
    if(event.key === 'Enter'){
        await searchLocation();
    }
})
searchButton.addEventListener('click',() => searchLocation());

