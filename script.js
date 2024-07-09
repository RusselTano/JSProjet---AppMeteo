//53fb55fe-fbbf-47b6-9ab0-4e0038f4078c

async function fetchWeatherApi() {
  await fetch(
    "http://api.airvisual.com/v2/nearest_city?key=53fb55fe-fbbf-47b6-9ab0-4e0038f4078c"
  )
    .then((res) => res.json())
    .then((data) => console.log((dataWeather = data.data)));

  displayInfo();
}

fetchWeatherApi();

const city = document.querySelector(".meteo__city");
const country = document.querySelector(".meteo__country");
const temperature = document.querySelector(".meteo__temperature");
const img = document.querySelector(".meteo__img");

function displayInfo() {
  city.textContent = dataWeather.city;
  country.textContent = dataWeather.country;
  temperature.textContent = dataWeather.current.weather.tp;
  img.textContent = dataWeather.country;

  console.log(dataWeather.current.weather.tp);
}
