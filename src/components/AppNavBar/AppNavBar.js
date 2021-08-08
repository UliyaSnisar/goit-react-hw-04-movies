import React from 'react';
import Navigation from '../Navigation';
import styles from './NavBar.module.css';

const AppBar = () => {
  return (
    <header className={styles.nav}>
      <Navigation />
    </header>
  );
};

export default AppBar;
