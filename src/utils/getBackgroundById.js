import clearSkyDay from "../assets/img/clearSkyDay.jpg";
import clearSkyNight from "../assets/img/clearSkyNight.jpg";
import fewCloudsDay from "../assets/img/fewCloudsDay.jpg";
import fewCloudsNight from "../assets/img/fewCloudsNight.jpg";
import scatteredClouds from "../assets/img/scatteredClouds.jpg";
import brokenClouds from "../assets/img/brokenClouds.jpg";
import showerRain from "../assets/img/showerRain.jpg";
import rainDay from "../assets/img/rainDay.jpg";
import rainNight from "../assets/img/rainNight.jpg";
import thunderstorm from "../assets/img/thunderstorm.jpg";
import snow from "../assets/img/snow.jpg";
import mist from "../assets/img/mist.jpg";

const getBackgroundById = (idImg) => {
  switch (idImg) {
    case "01d":
      return clearSkyDay;
    case "01n":
      return clearSkyNight;
    case "02d":
      return fewCloudsDay;
    case "02n":
      return fewCloudsNight;
    case "03d":
    case "03n":
      return scatteredClouds;
    case "04d":
    case "04n":
      return brokenClouds;
    case "09d":
    case "09n":
      return showerRain;
    case "10d":
      return rainDay;
    case "10n":
      return rainNight;
    case "11d":
    case "11n":
      return thunderstorm;
    case "13d":
    case "13n":
      return snow;
    case "50d":
    case "50n":
      return mist;
  }
};

export default getBackgroundById;
