const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
// const humidElement = document.querySelector("humidity-value p");

iconElement.innerHTML =

    `<img src=icons/${weather.iconId}.png/>`;

tempElement.innerHTML = 

    `${weather.temperature.value} °F`;

descElement.innerHTML = 

    weather.description;

// humidElement.innerHTML = 