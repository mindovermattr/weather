import React, { FC } from "react";
import { IWeatherRespone } from "../../interface/IWeatherResponse";
import "./CurrentDay.scss";

//todo
const CurrentWeather: FC<IWeatherRespone> = (props) => {
  return (
    <section className="current-weather__wrapper">
      <div className="current-weather">
        <h1 className="current-weather__city ">{props.location?.name}</h1>
        <h2 className="current-weather__title">
          Прогноз погоды на ближайший час:
        </h2>
        <div className="current-weather__forecast">
          <img
            className="current-weather__forecast--img"
            src={props.current?.condition.icon}
            alt="img"
          />
          <div>
            {props.current?.temp_c} °C, {props.current?.condition.text}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
