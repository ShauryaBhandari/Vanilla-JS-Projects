class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }
  showUI(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = (weather.main.temp - 273.15).toFixed(2) + " °C";
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );

    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.feelsLike.textContent = `Feels like: ${(
      weather.main.feels_like - 273.15
    ).toFixed(2)} °C`;
    this.wind.textContent = `Wind speed: ${weather.wind.speed}`;
  }
}
