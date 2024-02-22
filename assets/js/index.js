let loader = document.querySelector('.lds-dual-ring');
const weatherRepository = {
    API_URL: 'https://api.weatherapi.com/v1/current.json?key=43cbfe0275934e6b96e54230242202&aqi=yes&q=',

    async fetch(currentLocation) {
        showLoader()
        const response = await fetch(`${this.API_URL}${currentLocation}`);
        return await response.json();
    }
}

const LOCATION_DEFAULT = 'TASHKENT';

const searchButton = document.querySelector('.fa-search');
const weatherWrapper =  document.querySelector('.container')
const weatherContainer = weatherWrapper.querySelector('.weather__container');
const weatherLocationTitle = weatherWrapper.querySelector('.location');
const weatherLocaltime = weatherWrapper.querySelector('.weather__localtime');

const updateWeather = async (currentLocation) => {
    try {
        const data = await weatherRepository.fetch(currentLocation);
        setWeatherStates(data);
    } catch (error) {
        console.log(error);
        weatherContainer.innerHTML = 'You probably entered the cities incorrectly or have bad internet.';
        weatherLocationTitle.innerHTML = '';
        weatherLocaltime.innerHTML = '';
    }
    finally {
        hideLoader()
    }
};

const setWeatherStates = (data) => {
    weatherLocationTitle.innerHTML = `${data.location.name}, ${data.location.country}`;
    weatherContainer.innerHTML = ''; // Очищаем контейнер перед обновлением
    weatherContainer.innerHTML += `
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

const saveData = (currentLocation) => {
    localStorage.setItem('currentLocation', currentLocation);
};

const loadAndSetWeather = async () => {
    const currentLocation = localStorage.getItem('currentLocation') || LOCATION_DEFAULT || location;
    await updateWeather(currentLocation);
};

window.onload = loadAndSetWeather;

async function searchLocation() {
    let currentLocation = document.querySelector('.search-input').value;
    saveData(currentLocation);
    await loadAndSetWeather(currentLocation);
    document.querySelector('.search-input').value = '';
}

window.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        await searchLocation();
    }
});

searchButton.addEventListener('click', () => searchLocation());



function showLoader() {
    loader.classList.remove('hidden');
}

function hideLoader() {
    loader.classList.add('hidden');
}
