class Weather {
  constructor(city, country) {
    this.apiKey = "2f3f911e152a562434134015f58ca2bb";
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`
    );

    const responseData = await response.json();
    // console.log(responseData.weather[0].main);
    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
