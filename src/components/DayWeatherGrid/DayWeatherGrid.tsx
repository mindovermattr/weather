import React, { FC } from "react";
import { IWeatherRespone } from "../../interface/IWeatherResponse";
import { GridCell } from "../GridCell/GridCell";
import { GridRowCell } from "../GridRowCell/GridRowCell";
import "./DayWeatherGrid.scss";

interface IGrid extends IWeatherRespone {
  isShortly: boolean;
}

const DayWeatherGrid: FC<IGrid> = (props) => {
  return (
    <div
      className={["grid__wrapper", props.isShortly ? "shortly" : ""].join(" ")}
    >
      {props.forecast.forecastday[0].hour.map((forecast) =>
        props.isShortly ? (
          <GridCell forecast={forecast} />
        ) : (
          <>
            {/* todo хедер таблицы */}
            <GridRowCell forecast={forecast} />
          </>
        )
      )}
    </div>
  );
};

export default DayWeatherGrid;
