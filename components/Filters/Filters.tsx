'use client';

import { useCamperStore } from '@/lib/stores/useCamperStore';
import styles from './Filters.module.css';
import { Filters } from '@/types/camper';
import { getCampers } from '@/lib/clientApi';

const FiltersComponent = () => {
  const { filters, setFilters } = useCamperStore();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setFilters({ [name]: true });
    } else {
      setFilters({ ...filters, [name]: undefined });
    }
  };

  const handleBodyTypeToggle = (value: Filters['form']) => {
    setFilters({
      ...filters,
      form: filters.form === value ? '' : value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      filters,
      perPage,
      setCampers,
      setLoading,
      setError,
      setPage,
      resetCampers,
    } = useCamperStore.getState();

    resetCampers();
    setLoading(true);
    setPage(1);

    try {
      const campers = await getCampers(filters, 1, perPage);
      setCampers(campers);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Failed to fetch campers');
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <p className={styles.searchTitle}>Location</p>
        <svg className={styles.searchIcon}>
          <use href="/reviews.svg#map" />
        </svg>
        <input
          className={styles.searchInput}
          type="text"
          name="location"
          placeholder="Kyiv, Ukraine"
          onChange={handleTextChange}
        />
      </div>
      <div className={styles.filterBox}>
        <p className={styles.filterTitle}>Filters</p>
        <fieldset className={styles.fieldSet}>
          <legend className={styles.title}>Vehicle Equipment</legend>
          <label>
            <input
              type="checkbox"
              name="AC"
              onChange={handleCheckboxChange}
              className={styles.hiddenInput}
            />
            <svg className={styles.icon}>
              <use href="/campers-sprite.svg#wind" />
            </svg>
            <span>AC</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="transmission"
              onChange={handleCheckboxChange}
              className={styles.hiddenInput}
            />
            <svg className={styles.icon}>
              <use href="/campers-sprite.svg#diagram" />
            </svg>
            <span>Automatic</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="kitchen"
              onChange={handleCheckboxChange}
              className={styles.hiddenInput}
            />
            <svg className={styles.icon}>
              <use href="/campers-sprite.svg#cup-hot" />
            </svg>
            <span>Kitchen</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="TV"
              onChange={handleCheckboxChange}
              className={styles.hiddenInput}
            />
            <svg className={styles.icon}>
              <use href="/campers-sprite.svg#tv" />
            </svg>
            <span>TV</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="bathroom"
              onChange={handleCheckboxChange}
              className={styles.hiddenInput}
            />
            <svg className={styles.icon}>
              <use href="/campers-sprite.svg#shower" />
            </svg>
            <span>Bathroom</span>
          </label>
        </fieldset>
        <fieldset className={styles.fieldSet}>
          <legend className={styles.title}>Vehicle Type</legend>
          <label
            className={
              filters.form === 'panelTruck'
                ? styles.typeOption + '' + styles.active
                : styles.typeOption
            }
          >
            <input
              type="checkbox"
              checked={filters.form === 'panelTruck'}
              onChange={() => handleBodyTypeToggle('panelTruck')}
              className={styles.hiddenInput}
            />
            <svg className={styles.icon}>
              <use href="/campers-sprite.svg#bi-grid" />
            </svg>
            <span>Van</span>
          </label>
          <label
            className={
              filters.form === 'integrated'
                ? styles.typeOption + '' + styles.active
                : styles.typeOption
            }
          >
            <input
              type="checkbox"
              checked={filters.form === 'integrated'}
              onChange={() => handleBodyTypeToggle('integrated')}
              className={styles.hiddenInput}
            />
            <svg className={styles.icon}>
              <use href="/campers-sprite.svg#grid" />
            </svg>
            <span>Fully Integrated</span>
          </label>
          <label
            className={
              filters.form === 'alcove'
                ? styles.typeOption + '' + styles.active
                : styles.typeOption
            }
          >
            <input
              type="checkbox"
              checked={filters.form === 'alcove'}
              onChange={() => handleBodyTypeToggle('alcove')}
              className={styles.hiddenInput}
            />
            <svg className={styles.icon}>
              <use href="/campers-sprite.svg#grid-gap" />
            </svg>
            <span>Alcove</span>
          </label>
        </fieldset>
      </div>
      <button type="submit" className={styles.searchBtn}>
        Search
      </button>
    </form>
  );
};

export default FiltersComponent;
