// This is the Code used to populate the Weather API on the Final Page - for Bountiful Fruits


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const curHumidity = document.querySelector(".humidity");

const url = 'https://api.openweathermap.org/data/2.5/weather?id=5334223&units=imperial&appid=881c87c9ee9a32a4970c3e0a43ff5871';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();


  
function displayResults(weatherData) {
    console.log('displaying weather data');
    console.log(weatherData);
    console.log('displayed weather data');

    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const hum = weatherData.main.humidity
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
    curHumidity.innerHTML = "Humidity:" + " " + hum + "%";
  }