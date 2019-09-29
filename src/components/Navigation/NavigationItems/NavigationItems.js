import React from 'react';

import classes from './NavigationItems.css';
import NavigationIntem from './NaigationItem/NavigationItem';

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationIntem link="/" active>Burger Builder</NavigationIntem>
    <NavigationIntem link="/">Checkout</NavigationIntem>
  </ul>
);

export default navigationItems;