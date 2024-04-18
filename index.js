

function showTemperature(response) {
    let temperatureElement = document.querySelector(".current-temperature-value");
    let temperature = Math.round(response.data.temperature.current);
    let h1Element = document.querySelector("#city");
    let description = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let windSpeed = document.querySelector("#wind-speed");
    let icon = document.querySelector("#icon");

    h1Element.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
    description.innerHTML = `,${response.data.condition.description}`;
    humidity.innerHTML = ` ${response.data.temperature.humidity}%,`;
    windSpeed.innerHTML = `${response.data.wind.speed}km.h`;
    icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-temperature-icon"/>`;
}

function updateCurrentTime() {
    let now = new Date();
    let p = document.querySelector("#current-time");
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[now.getDay()];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[now.getMonth()];
    
}

function searchCity(city) {
    let apiKey = "3d4faf1712bac890aob409810t89d488";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl)
        .then(showTemperature)
        .catch(error => console.error("Error fetching weather data:", error));



        let newTime = `${day}, ${date} ${month} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        p.innerHTML = newTime;

}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let city = searchInput.value;
    searchCity(city);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);


searchCity("Paris");


let forecast = document.querySelector("forecast");
forecast.innerHTML = `
    <div class="weather-forecast-day">
    <div class="weather-forecast-date">Tue</div>
    <div class="weather-forecast-icon"></div>
    <div class="weather-forecast-temperatures">
    <div class="weather-forecast-temperature">
    <strong></strong>
    </div>
    <div class="weather-forecast-temperatures"></div>
    </div>
    </div>
`;










updateCurrentTime();
setInterval(updateCurrentTime, 60000); 


const searchInput = document.getElementById("search-input");
const city = document.getElementById("city");


searchInput.addEventListener("input", () => {
  
  city.textContent = searchInput.value;
});



