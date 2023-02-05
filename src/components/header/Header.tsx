import React from 'react'
import { Logo } from '../../UI/Logo/Logo'
import classes from './Header.module.scss'


const Header = () => {
    
  return (
    <header className={classes.header__wrapper}>
        <ul className={classes.header}>
            <li><Logo/></li>
            <li><a href="#">Прогноз на день</a></li>
            <li><a href="#">Прогноз на 10 дней</a></li>
            {/* todo theme switch */}
        </ul>
     
    </header>
  )
}

export default Header