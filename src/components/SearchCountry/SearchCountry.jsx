import { useState, useEffect } from "react";
import getCurrentPosition from "../../services/GetCurrentPosition";
import getWeather from "../../services/GetWeather";
import "../../App.css";
import "./SearchCountry.css";
import { convertTemp } from "../../utils/convertTemp";
import getCountryWeather from "../../services/GetCountryWeather";
import WeatherCard from "../weatherCard/weatherCard";
import Loading from "../Loading/Loading";

const SearchCountry = () => {
  const [ChangeTemp, setChangeTemp] = useState(false);
  const [Country, setCountry] = useState();
  const [CountryData, setCountryData] = useState();

  let Temperature = convertTemp(ChangeTemp, CountryData);

  const loadWeather = async () => {
    const coordinates = await getCurrentPosition();

    getWeather(coordinates.latitude, coordinates.longitude).then((response) => {
      setCountryData(response);
    });
  };

  const CountryWeather = async () => {
    if ((Country != null) & (Country != "")) {
      let Data = await getCountryWeather(Country);
      if (Data.cod != 200) {
        alert("Wrong country name");
      } else {
        setCountryData(Data);
        Temperature = convertTemp(ChangeTemp, CountryData);
      }
    } else {
      alert("please, enter a country name");
    }
  };

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      CountryWeather();
      event.preventDefault();
    }
  };
  //
  useEffect(() => {
    loadWeather();
  }, []);

  return (
    <>
      {CountryData ? (
        <div className="fullContainer">
          <div className="nav">
            <h2>Weather app</h2>
          </div>
          <div className="boxcontainer">
            <div className="searchForm">
              <input
                type="text"
                name="search"
                value={Country}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Search a country"
              />
            </div>
            <WeatherCard
              ChangeTemp={ChangeTemp}
              Temperature={Temperature}
              countryData={CountryData}
            />
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
export default SearchCountry;
