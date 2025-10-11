import styles from './ClipLoader.module.css';
import ClipLoader from 'react-spinners/ClipLoader';

const ScreenLoad = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader color="#e44848" size={40} />
    </div>
  );
};

export default ScreenLoad;
