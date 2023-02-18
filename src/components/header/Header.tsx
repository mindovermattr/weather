import React from "react";
import { Logo } from "../../UI/Logo/Logo";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.header__list}>
        <li className={classes["header__list-item"]}>
          <Logo />
        </li>
        <li className={classes["header__list-item"]}>
          <a className={classes.header__link} href="#">
            Прогноз на день
          </a>
        </li>
        <li className={classes["header__list-item"]}>
          <a className={classes.header__link} href="#">
            Прогноз на 10 дней
          </a>
        </li>
        {/* todo theme switch */}
      </ul>
    </header>
  );
};

export default Header;
