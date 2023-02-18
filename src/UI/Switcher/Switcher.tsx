import React from "react";
import classes from "./Switcher.module.scss";

const Switcher = () => {
  return (
    <div className={classes["switch-button"]}>
      <input
        className={classes["switch-button-checkbox"]}
        type="checkbox"
      ></input>
      <label className={classes["switch-button-label"]}>
        <span className={classes["switch-button-label-span"]}>Кратко</span>
      </label>
    </div>
  );
};

export default Switcher;
