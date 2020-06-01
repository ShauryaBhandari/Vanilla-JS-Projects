// Init weather object
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();
// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation(city, country);
  storage.setLocationData(city, country);
  // get weather called again
  getWeather();

  //close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.showUI(results);
    })
    .catch((err) => console.log(err));
}
