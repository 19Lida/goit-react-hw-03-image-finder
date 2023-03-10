import PropTypes from 'prop-types';
import styles from './Button.module.css';
export const Button = ({ loadMore }) => {
  return (
    <button className={styles.Button} onClick={loadMore}>
      Load more
    </button>
  );
};
Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
