import { BikeProps } from "../types";
import api from "./api";

class BikeService {
  async get(): Promise<BikeProps[]> {
    const { data } = await api.get("/bicicleta");
    return data;
  }

  async post(props:{
    id: number;
    color: string;
    size: string;
    material: string;
    gender: string;
    speedkit: string;
    rim: string;
    suspension: string;
    description: string;
    hourlyvalue: string;
    dailyvalue: string;
    latitude: string;
    longitude: string;
  }): Promise<any> {
    const { data } = await api.post("/bicicleta", props);
    return data;
  }
}

const service = new BikeService();
export default service;