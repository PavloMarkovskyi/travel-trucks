import { Camper, Filters } from "@/types/camper";
import { api } from "./api";



export const getCampers = async (
  filters: Filters,
  page: number,
  limit: number
): Promise<Camper[]> => {
  const response = await api.get<Camper[]>('/campers', {
    params: {
      ...filters,
      page,
      limit,
    },
  });
  return response.data;
};



