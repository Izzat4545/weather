import {get} from './ApiUtils/utils.js'

function wether() {
    const apiKey = 'e21d00b0cac14a5ea27102535232906';
    const city = document.getElementById('citySearch').value;
    const weather_card = document.querySelector('.weather-card');
    const temperatureElement = document.querySelector('.temperature');
    const locationElement = document.querySelector('.city');
    const iconElement = document.querySelector('.icon-img');
    const windSpeed = document.querySelector('.windSpeed');
    const errorMessage = document.querySelector(".error");
    const time = document.querySelector(".current_time");
    
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    get(url)
      .then(data => {
        if(data !== null){
            weather_card.style.display = 'flex'
            weather_card.style.opacity = '1'
            temperatureElement.textContent = `${data.current.temp_c}°C`;
            locationElement.textContent = data.location.name;
            iconElement.src = `https:${data.current.condition.icon}`;
            windSpeed.textContent = `Wind speed:${data.current.wind_kph} kph`;
            time.textContent = data.location.localtime
            errorMessage.textContent = ""
        }
        else{
            weather_card.style.opacity = '0'
        }

      })
      .catch(error => {
        if(city === ''){
            errorMessage.textContent = "Please enter a city"
        }
        else{
            errorMessage.textContent = "Unable to find that city"
        }
        weather_card.style.opacity = '0'
        weather_card.style.display = 'none'
      });
  }
  
  const submitButton = document.getElementById('submitBtn');
  submitButton.addEventListener('click', wether);
  