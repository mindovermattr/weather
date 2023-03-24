import React, { FC } from "react";
import { IGrid } from "../../interface/IGrid";

import "./GridRowCell.scss";

interface Grid {}

export const GridRowCell: FC<IGrid> = ({ forecast }) => {
  return (
    <div key={forecast.time} className="grid__cell">
      <div className="">{forecast.time.split(" ")[1]}</div>
      <div className="grid__temperature">
        <div className="fahrenheit">{forecast.temp_f} °F</div>
        <div>{forecast.temp_c} °C</div>
        <p>Ощущается как: </p>
        <div className="fahrenheit">{forecast.feelslike_f} °F</div>
        <div>{forecast.feelslike_c} °C</div>
      </div>
      <img src={forecast.condition.icon} alt="#" />
      <div>{forecast.condition.text}</div>
      <div className="">{forecast.humidity} %</div>
      <div className="grid__cell-probability">
        <div className="grid__cell-probability-rain">
          {forecast.chance_of_rain}%
        </div>
        <div className="grid__cell-probability-snow">
          {forecast.chance_of_snow}%
        </div>
      </div>
    </div>
  );
};
