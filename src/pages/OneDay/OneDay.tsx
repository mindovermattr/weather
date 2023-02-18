import React, { FC, useEffect, useState } from "react";
import ApiCall from "../../API/ApiCall";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import DayWeatherGrid from "../../components/DayWeatherGrid/DayWeatherGrid";
import useFetch from "../../hooks/useFetch";
import { Coordinates } from "../../interface/Coordinates";
import { IWeatherRespone } from "../../interface/IWeatherResponse";
import Loader from "../../UI/Loader/Loader";
import Switcher from "../../UI/Switcher/Switcher";
import "./OneDay.scss";

const OneDay: FC<Coordinates> = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState<IWeatherRespone>(
    {} as IWeatherRespone
  );

  const [fetchWeather, isWeatherLoading, weatherError] = useFetch(async () => {
    const response = await ApiCall.getWeatherData(latitude, longitude, 1);
    setWeatherData(response.data);
  });

  const [isShortly, setIsShortly] = useState<boolean>(true);

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <>
      {isWeatherLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <CurrentWeather
            forecast={weatherData.forecast}
            location={weatherData.location}
            current={weatherData.current}
          />
          {/* придумать classname */}
          <h3 className="forecast">Прогноз погоды по часам:</h3>
          <Switcher />
          <DayWeatherGrid
            forecast={weatherData.forecast}
            location={weatherData.location}
            current={weatherData.current}
          />
        </div>
      )}
    </>
  );
};

export default OneDay;
