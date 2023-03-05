import { ThreeCircles } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <ThreeCircles
      className={styles.Loader}
      height="100"
      width="100"
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
};
