import { Component } from 'react';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';
export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleInput = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.info('Please enter a value to search!');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    const { handleInput, handleSubmit } = this;
    const { query } = this.state;
    return (
      <header className={styles.searchbar}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <button type="submit" className={styles.searchButton}>
            <span className={styles.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.searchInput}
            type="text"
            name="query"
            value={query}
            onChange={handleInput}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
