import React, { FC } from "react";
import classes from "./Container.module.scss";
interface IContainer {
  children: React.ReactNode;
}

export const Container: FC<IContainer> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};
