import React, { FC } from 'react'
import classes from "./Logo.module.scss"

export const Logo :FC = () => {
  return (
        <a href='#' className={classes.logo}>
            Weather
        </a>
  )
}
