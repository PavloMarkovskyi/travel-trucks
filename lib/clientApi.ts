import { Camper, Filters } from "@/types/camper";
import { api } from "./api";


interface GetCampersResponse {
  total: number;
  items: Camper[];
}

export const getCampers = async (
  filters: Filters,
  page: number,
  limit: number
): Promise<Camper[]> => {
  const params: Record<string, string | number> = {
    page,
    limit,
    ...(filters.location?.trim() ? { location: filters.location.trim() } : {}),
    ...(filters.form ? { form: filters.form } : {}),
    ...(typeof filters.transmission === 'string' ? { transmission: filters.transmission } : {}),
    ...(filters.AC !== undefined ? { AC: String(filters.AC) } : {}),
    ...(filters.kitchen !== undefined ? { kitchen: String(filters.kitchen) } : {}),
    ...(filters.TV !== undefined ? { TV: String(filters.TV) } : {}),
    ...(filters.bathroom !== undefined ? { bathroom: String(filters.bathroom) } : {}),
    ...(filters.radio !== undefined ? { radio: String(filters.radio) } : {}),
    ...(filters.refrigerator !== undefined ? { refrigerator: String(filters.refrigerator) } : {}),
    ...(filters.microwave !== undefined ? { microwave: String(filters.microwave) } : {}),
    ...(filters.gas !== undefined ? { gas: String(filters.gas) } : {}),
    ...(filters.water !== undefined ? { water: String(filters.water) } : {}),
  };

  const response = await api.get<GetCampersResponse>("/campers", { params });
 


  return Array.isArray(response.data.items) ? response.data.items : [];
};
