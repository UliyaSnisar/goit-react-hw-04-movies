import React, { Component } from 'react';
import Axios from 'axios';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b0771150ba8a2e624afdbb8a92bbf802`,
    );
    this.setState({ reviews: response.data.results });
  }
  render() {
    const { reviews } = this.state;
    return this.state.reviews.length > 0 ? (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <h1>Sorry, no reviews</h1>
    );
  }
}
export default Reviews;
