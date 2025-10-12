'use client';

import { useEffect } from 'react';
import { useCamperStore } from '@/lib/stores/useCamperStore';
import { getCampers } from '@/lib/clientApi';
import FiltersComponent from '@/components/Filters/Filters';
import CamperCard from '@/components/CamperCard/CamperCard';
import styles from './CatalogPage.module.css';
import ScreenLoad from '@/components/ClipLoader/ClipLoader';

const CatalogPage = () => {
  const {
    campers,
    filters,
    page,
    perPage,
    hasMore,
    loading,
    setLoading,
    appendCampers,
    setError,
    setPage,
  } = useCamperStore();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getCampers(filters, page, perPage);
        if (page === 1) {
          useCamperStore.getState().setCampers(data);
        } else {
          useCamperStore.getState().appendCampers(data);
        }
      } catch {
        setError('Помилка завантаження');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters, page, perPage, appendCampers, setLoading, setError]);

  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <FiltersComponent />
      </aside>
      <section>
        <div className={styles.catalog}>
          {campers.length > 0
            ? campers.map(camper => (
                <CamperCard key={camper.id} camper={camper} />
              ))
            : !loading && <p>No campers found</p>}
        </div>
        <div className={styles.catalogBtn}>
          {hasMore && !loading && (
            <button
              className={styles.loadBtn}
              onClick={() => setPage(page + 1)}
            >
              Load more
            </button>
          )}
          {loading && <ScreenLoad />}
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;
