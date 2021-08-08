import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import Container from './components/Container';
import AppBar from './components/AppNavBar';
import Spinner from './components/Loader';
const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-page" */),
);
const MoviesViews = lazy(() =>
  import('./views/MoviesViews.js' /* webpackChunkName: "movies-page" */),
);
const MovieDetails = lazy(() =>
  import(
    './views/MovieDetails.js' /* webpackChunkName: "moviesDetails-page" */
  ),
);

const App = () => (
  <Container>
    <AppBar />

    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.movieDetails} component={MovieDetails} />
        <Route path={routes.movies} component={MoviesViews} />

        <Route component={HomeView} />
      </Switch>
    </Suspense>
  </Container>
);

export default App;
