import React, { Component } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';
import routes from '../routes';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import MovieCard from '../components/MovieCard';
import MovieNavigation from '../components/MovieNavigation';

class MovieDetails extends Component {
  state = {
    poster_path: null,
    title: null,
    popularity: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=b0771150ba8a2e624afdbb8a92bbf802`,
    );
    // console.log(response.data);
    this.setState({ ...response.data });
  }
  handleGoBack = () => {
    const { location, history } = this.props;
    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // } history.push(routes.home);
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { poster_path, title, vote_average, overview, genres } = this.state;

    const { movieId } = this.props.match.params;
    return (
      <>
        <button
          type="button"
          onClick={this.handleGoBack}
          className="back-button"
        >
          Go back
        </button>
        <MovieCard
          poster_path={poster_path}
          title={title}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
        />
        <h4 className="title">Additional information</h4>

        <MovieNavigation id={movieId} />

        <Route
          path={`${routes.cast}`}
          render={props => <Cast movieId={props.match.params.movieId} />}
        />

        <Route
          path={`${routes.reviews}`}
          render={props => {
            // console.log(props.match.params.movieId);
            return <Reviews movieId={props.match.params.movieId} />;
          }}
        />
      </>
    );
  }
}

export default MovieDetails;
