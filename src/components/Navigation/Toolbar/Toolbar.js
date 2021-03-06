import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import ToggleButton from "../SideDrawer/ToggleButton/ToggleButton";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <ToggleButton />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
      <div className={classes.Logo}>
          <Logo />
      </div>
  </header>
);

export default toolbar;