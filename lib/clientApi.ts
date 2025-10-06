import { Camper } from "@/types/camper";
import { GetCampersParams } from "@/types/params";
import { api } from "./api";


export const getCampers = async (params: GetCampersParams = {}): Promise<Camper[]> => {
    const { page = 1, perPage = 6, ...filters } = params;

    const res = await api.get<Camper[]>("/campers", {
        params:{page, limit: perPage, ...filters}
    })

    return res.data;
}


export const getCamperById = async (id: string) => {

    const res = await api.get<Camper>(`/campers/${id}`);
    
    return res.data;
}