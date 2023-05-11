import { getIconById } from "../../utils/getIconById";

const WeatherCard = ({ ChangeTemp, Temperature, countryData }) => {
  return (
    <>
      {countryData && (
        <div className="weatherBox">
          <div className="weatherBox_LeftSide">
            <p className="temperature">
              {ChangeTemp ? Temperature + "°" : Temperature + "°"}
            </p>
            <div className="humidity_speed">
              <p>Humidity: {countryData?.main.humidity}%</p>
              <p>Wind speed: {countryData?.wind.speed} mph</p>
            </div>
            <p className="country">
              {countryData?.name}, {countryData?.sys.country}{" "}
            </p>
          </div>
          <div className="weatherBox_RightSide">
            <img src={getIconById(countryData?.weather[0].icon)}></img>
            <p className="description">{countryData?.weather[0].description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
