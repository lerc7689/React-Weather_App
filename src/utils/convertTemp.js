export const convertTemp = (ChangeTemp, Coords) => {
  if (ChangeTemp) {
    //kelvin to celsius
    return Math.round(Coords?.main.temp - 273.15);
  } else {
    //kelvin to fahrenheit
    return Math.round(((Coords?.main.temp - 273.15) * 9) / 5 + 32);
  }
};
