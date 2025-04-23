import axios from 'axios';
import { BusDto } from '../types/Buses';

const BASE_URL = 'http://your-api-url/buses';

export const createBus = async (data: BusDto) => {
  return axios.post(BASE_URL, data);
};

export const updateBus = async (id: number, data: BusDto) => {
  return axios.put(`${BASE_URL}/id?id=${id}`, data);
};

export const deleteBus = async (id: number) => {
  return axios.delete(`${BASE_URL}/id?id=${id}`);
};

export const getBuses = async (filters: {
  Name?: string;
  MinSeats?: number;
  MaxSeats?: number;
  SortBy?: string;
  IsDescending?: boolean;
}) => {
  return axios.get(`${BASE_URL}/filters`, { params: filters });
};