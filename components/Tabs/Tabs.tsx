import styles from './Tabs.module.css';

interface Props {
  active: 'features' | 'reviews';
  onChange: (tab: 'features' | 'reviews') => void;
}

const Tabs = ({ active, onChange }: Props) => {
  return (
    <div>
      <button
        className={`${styles.tab} ${active === 'features' ? styles.active : ''}`}
        onClick={() => onChange('features')}
      >
        Features
      </button>
      <button
        className={`${styles.tab} ${active === 'reviews' ? styles.active : ''}`}
        onClick={() => onChange('reviews')}
      >
        Reviews
      </button>
    </div>
  );
};

export default Tabs;
