import React from 'react';

import classes from './Logo.css';
import burgerLogo from '../../assests/images/27.1 burger-logo.png'
const logo = props => (
  <h1 className={classes.Logo} style={ {height: props.height}}>
    <a href="/">
      <img src={burgerLogo} alt="burger logo"/>
    </a>
  </h1>
);

export default logo;