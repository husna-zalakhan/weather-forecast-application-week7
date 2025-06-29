function updatedWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  let cityElement = document.querySelector("#city");
  //moved from the handleSearchSubmit function
  // to avoid mistyping the city name
}

function searchCity(city) {
  //new function for api(separation of concerns)
  //api call and update the interface
  //the value of the searchInput is going to send to this function
  let apiKey = "3e01514e9e60aafo05f35b074d89a4t4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  console.log(apiUrl);

  axios.get(apiUrl).then(updatedWeather);
  //get the result of api
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");

  cityElement.innerHTML = searchInput.value;

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
