import React, { FC } from "react";
import { IWeatherRespone } from "../../interface/IWeatherResponse";
import { GridCell } from "../GridCell/GridCell";
import "./DayWeatherGrid.scss";

const DayWeatherGrid: FC<IWeatherRespone> = (props) => {
  return (
    <div className="grid__wrapper">
      {props.forecast.forecastday[0].hour.map((forecast) => (
        <GridCell forecast={forecast} />
      ))}
    </div>
  );
};

export default DayWeatherGrid;
