import React, { Component } from 'react';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header>
        <form onSubmit={this.handleSubmit} className={styles.from}>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleChange}
            value={query}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </header>
    );
  }
}

export default SearchForm;
