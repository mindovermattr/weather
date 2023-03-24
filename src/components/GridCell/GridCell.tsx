import React, { FC } from "react";
import { IGrid } from "../../interface/IGrid";
import classes from "./GridCell.module.scss";

export const GridCell: FC<IGrid> = ({ forecast }) => {
  //console.log(new Date(props.forecast.time)); возможная реализация
  return (
    <div key={forecast.time} className={classes.grid__cell}>
      <div className={classes.grid__time}>{forecast.time.split(" ")[1]}</div>
      <img src={forecast.condition.icon} alt="#" />
      <div>{forecast.condition.text}</div>
      <div className={classes.grid__humidity}>{forecast.humidity} %</div>
      <div>{forecast.temp_c} °C</div>
    </div>
  );
};
