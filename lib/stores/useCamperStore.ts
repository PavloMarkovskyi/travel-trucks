import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Camper, Filters } from '@/types/camper';

interface CamperState {
  campers: Camper[];
  favorites: string[];
  filters: Filters;
  page: number;
  perPage: number;
  hasMore: boolean;
  loading: boolean;
  error: string | null;

  setCampers: (campers: Camper[]) => void;
  appendCampers: (campers: Camper[]) => void;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (id: string) => void;
  setFilters: (patch: Filters) => void;
  resetCampers: () => void;
  setPage: (page: number) => void;
  setLoading: (value: boolean) => void;
  setError: (message: string | null) => void;
}

export const useCamperStore = create<CamperState>()(
  persist(
    (set, get) => ({
      campers: [],
      favorites: [],
      filters: {},
      page: 1,
      perPage: 6,
      hasMore: true,
      loading: false,
      error: null,

      setCampers: (campers) =>
        set(() => ({
          campers,
          hasMore: campers.length >= get().perPage,
          loading: false,
        })),

    appendCampers: (newCampers) =>
  set((state) => {
    const existingIds = new Set(state.campers.map((c) => c.id));
    const uniqueCampers = newCampers.filter((c) => !existingIds.has(c.id));
    return {
      campers: [...state.campers, ...uniqueCampers],
      hasMore: uniqueCampers.length >= state.perPage,
      loading: false,
    };
  }),


      addFavorite: (id) =>
        set((state) =>
          state.favorites.includes(id)
            ? {}
            : { favorites: [...state.favorites, id] }
        ),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav !== id),
        })),

      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((fav) => fav !== id)
            : [...state.favorites, id],
        })),

      setFilters: (patch) =>
        set((state) => ({
          filters: { ...state.filters, ...patch },
          page: 1,
          campers: [],
          hasMore: true,
        })),

      resetCampers: () =>
        set(() => ({
          campers: [],
          page: 1,
          hasMore: true,
          loading: false,
        })),

      setPage: (page) => set(() => ({ page })),

      setLoading: (value) => set(() => ({ loading: value })),

      setError: (message) => set(() => ({ error: message })),
    }),
    {
      name: 'traveltrucks-storage',
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);