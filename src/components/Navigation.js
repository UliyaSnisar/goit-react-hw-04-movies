import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className="Navbar">
        <li className={styles.link}>
          <NavLink exact to={routes.home}>
            Home
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to={routes.movies}>Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
