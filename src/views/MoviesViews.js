import React, { Component } from 'react';
import axios from 'axios';
import MoviesList from '../components/MoviesList';
import SearchForm from '../components/SearchForm';
import queryString from 'query-string';

class MoviesView extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    // const getQueryFromProps = props =>
    // queryString.parse(props.location.search).query;
    //  const query = getQueryFromProps(this.props);
    const query = queryString.parse(this.props.location.search).query;
    console.log(query);
    if (query) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=b0771150ba8a2e624afdbb8a92bbf802&query=${query}`,
        )
        .then(response => {
          this.setState({
            movies: response.data.results,
          });
        });
    }
  }

  onChangeQuery = query => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b0771150ba8a2e624afdbb8a92bbf802&query=${query}`,
      )
      .then(response => {
        this.setState({
          movies: response.data.results,
        });

        if (this.state.movies.length === 0) {
          alert('Sorry, movie not found');
        }
      });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    console.log(this.props.match.url);
    return (
      <>
        <SearchForm onSubmit={this.onChangeQuery} />

        <h1>Movies Search</h1>

        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}
export default MoviesView;
