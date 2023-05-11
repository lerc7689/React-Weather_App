import axios from "axios";
const geCountrytWeather = (country) => {
  const weather = axios(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      country +
      "&appid=443fa328a428a2235857fa7d507750e4"
  )
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      return error;
    });

  return weather;
};

export default geCountrytWeather;
