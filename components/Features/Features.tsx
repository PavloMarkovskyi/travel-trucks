import { Camper, DetailsKey, FeatureIconKey } from '@/types/camper';
import styles from './Features.module.css';
import { renderValue } from '@/utils/renderValue';

interface Props {
  camper: Camper;
}
const featureIcons: { key: FeatureIconKey; label: string; icon: string }[] = [
  { key: 'transmission', label: 'Transmission', icon: 'diagram' },
  { key: 'engine', label: 'Engine', icon: 'fuel-pump' },
  { key: 'AC', label: 'AC', icon: 'wind' },
  { key: 'bathroom', label: 'Bathroom', icon: 'shower' },
  { key: 'kitchen', label: 'Kitchen', icon: 'cup-hot' },
  { key: 'TV', label: 'TV', icon: 'tv' },
  { key: 'radio', label: 'Radio', icon: 'radio' },
  { key: 'refrigerator', label: 'Refrigerator', icon: 'fridge' },
  { key: 'microwave', label: 'Microwave', icon: 'microwave' },
  { key: 'gas', label: 'Gas', icon: 'gas-stove' },
  { key: 'water', label: 'Water', icon: 'water' },
];
const featureDetails: { key: DetailsKey; label: string }[] = [
  { key: 'form', label: 'Form' },
  { key: 'length', label: 'Length' },
  { key: 'width', label: 'Width' },
  { key: 'height', label: 'Height' },
  { key: 'tank', label: 'Tank' },
  { key: 'consumption', label: 'Consumption' },
];

const Features = ({ camper }: Props) => {
  return (
    <section className={styles.wrapper}>
      <div>
        <ul className={styles.iconList}>
          {featureIcons.map(({ key, label, icon }) => {
            const value = camper[key];
            if (value === undefined || value === false) return null;
            return (
              <li className={styles.iconItem} key={key}>
                <svg className={styles.icon} aria-label={label}>
                  <use href={`/campers-sprite.svg#${icon}`} />
                </svg>
                <span>
                  {typeof value === 'boolean' ? label : renderValue(value)}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.list}>
        <h3 className={styles.title}>Vehicle details</h3>
        <dl className={styles.listDetails}>
          {featureDetails.map(({ key, label }) => {
            const value = camper[key];
            return (
              <div key={key} className={styles.item}>
                <dt className={styles.listDeatailsItem}>{label}</dt>
                <dd className={styles.listDeatailsItem}>
                  {renderValue(value)}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default Features;
