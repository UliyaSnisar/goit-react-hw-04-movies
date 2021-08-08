import React, { Component } from 'react';
import Axios from 'axios';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b0771150ba8a2e624afdbb8a92bbf802`,
    );

    this.setState({ cast: response.data.cast });
  }

  render() {
    const { cast } = this.state;
    return (
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />
            <h3>{actor.name}</h3>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
export default Cast;
