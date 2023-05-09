import axios from "axios";
const getWeather = (lat, lon) => {
  const params = { lat, lon, appid: "443fa328a428a2235857fa7d507750e4" };
  const weather = axios("https://api.openweathermap.org/data/2.5/weather", {
    params,
  })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });

  return weather;
};

export default getWeather;
