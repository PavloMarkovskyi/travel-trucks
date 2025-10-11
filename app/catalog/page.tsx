'use client';

import { useEffect } from 'react';
import { useCamperStore } from '@/lib/stores/useCamperStore';
import { getCampers } from '@/lib/clientApi';
import FiltersComponent from '@/components/Filters/Filters';
import CamperCard from '@/components/CamperCard/CamperCard';

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
    <main>
      <aside>
        <FiltersComponent />
      </aside>
      <section style={{ flex: 1 }}>
        {campers.length > 0
          ? campers.map(camper => (
              <CamperCard key={camper.id} camper={camper} />
            ))
          : !loading && <p>No campers found</p>}

        {hasMore && !loading && (
          <button onClick={() => setPage(page + 1)}>Load more</button>
        )}
        {loading && <p>Loading...</p>}
      </section>
    </main>
  );
};

export default CatalogPage;
