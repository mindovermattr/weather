import React, { FC } from "react";
import classes from "./Switcher.module.scss";

interface ISwitch {
  onSwitch: () => void;
}

const Switcher: FC<ISwitch> = ({ onSwitch }) => {
  return (
    <div onClick={onSwitch} className={classes["switch-button"]}>
      <input className={classes["switch-button-checkbox"]} type="checkbox" />
      <label className={classes["switch-button-label"]}>
        <span className={classes["switch-button-label-span"]}>Кратко</span>
      </label>
    </div>
  );
};

export default Switcher;
