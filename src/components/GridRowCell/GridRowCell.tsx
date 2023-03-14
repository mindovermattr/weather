import React, { FC } from "react";
import { IGrid } from "../../interface/IGrid";

import "./GridRowCell.scss";

interface Grid {}

export const GridRowCell: FC<IGrid> = ({ forecast }) => {
  return (
    <div key={forecast.time} className="grid__cell">
      <div className="">{forecast.time.split(" ")[1]}</div>
      <img src={forecast.condition.icon} alt="#" />
      <div>{forecast.condition.text}</div>
      <div className="">{forecast.humidity} %</div>
      <div>{forecast.temp_c} °C</div>
    </div>
  );
};
