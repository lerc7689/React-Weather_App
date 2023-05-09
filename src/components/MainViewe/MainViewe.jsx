import "../../App.css";
import "../MainViewe/MainViewe.css";
import getCurrentPosition from "../../services/GetCurrentPosition";
import getWeather from "../../services/GetWeather";
import { useState, useEffect } from "react";
import { convertTemp } from "../../utils/convertTemp";
import { getIconById } from "../../utils/getIconById";
import Loading from "../Loading/Loading";

const MainViewe = () => {
  const [Coords, setCoords] = useState(null);
  const [ChangeTemp, setChangeTemp] = useState(false);

  const loadWeather = async () => {
    const coordinates = await getCurrentPosition();

    getWeather(coordinates.latitude, coordinates.longitude).then((response) => {
      setCoords(response);
    });
  };
  //setTemperature(convertTemp(ChangeTemp, Coords));
  const Temperature = convertTemp(ChangeTemp, Coords);

  useEffect(() => {
    loadWeather();
  }, []);

  return (
    <>
      {Coords ? (
        <div className="fullContainer">
          <div className="nav">
            <h2>Weather app</h2>
          </div>

          <div className="boxcontainer">
            <div className="weatherBox">
              <div className="weatherBox_RightSide">
                <p className="temperature">
                  {ChangeTemp ? Temperature + "°" : Temperature + "°"}
                </p>
                <div className="humidity_speed">
                  <p>Humidity: {Coords?.main.humidity}%</p>
                  <p>Wind speed: {Coords?.wind.speed} mph</p>
                </div>
                <p className="country">
                  {Coords?.name}, {Coords?.sys.country}{" "}
                </p>
              </div>
              <div className="weatherBox_LeftSide">
                <img src={getIconById(Coords?.weather[0].icon)}></img>
                <p className="description">{Coords?.weather[0].description}</p>
              </div>
            </div>
            <button
              className="btnChange"
              onClick={() => setChangeTemp(!ChangeTemp)}
            >
              Change to {ChangeTemp ? " F°" : " C°"}
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default MainViewe;
