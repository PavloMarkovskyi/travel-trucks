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
    ...(filters.AC !== undefined ? { AC: filters.AC ? 'true' : 'false' } : {}),
    ...(filters.kitchen !== undefined ? { kitchen: filters.kitchen ? 'true' : 'false' } : {}),
    ...(filters.location ? { location: filters.location } : {}),
    ...(filters.form ? { form: filters.form } : {}),
  };

  const response = await api.get<GetCampersResponse>("/campers", { params });
  console.log("API response:", response.data);


  return Array.isArray(response.data.items) ? response.data.items : [];
};
