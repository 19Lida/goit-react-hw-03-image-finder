import { Component } from 'react';
import { toast } from 'react-toastify';
import { BiSearch } from 'react-icons/bi';
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
      toast('Please enter a value to search!');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    // const { handleInput, handleSubmit } = this;
    const { query } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchButton}>
            <BiSearch style={{ width: 25, height: 25 }} />
            <span className={styles.SearchFormButtonLabel}></span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            name="query"
            value={query}
            onChange={this.handleInput}
            autoComplete="off"
            autoFocus
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
