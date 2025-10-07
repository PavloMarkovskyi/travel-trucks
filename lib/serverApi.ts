import { Camper } from "@/types/camper";
import { api } from "./api";



export const fetchCamperById = async (id: string): Promise<Camper> => {
    const { data } = await api.get<Camper>(`/campers/${id}`);
    return data;
}