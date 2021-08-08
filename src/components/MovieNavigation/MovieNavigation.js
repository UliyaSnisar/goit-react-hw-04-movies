import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';

const MovieNavigation = ({ id, location }) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            exact
            to={{
              pathname: `${routes.movies}/${id}/cast`,
              state: { from: location.state.from },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${routes.movies}/${id}/reviews`,
              state: { ...location.state },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(MovieNavigation);
