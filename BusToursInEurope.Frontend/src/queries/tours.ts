import axios, { AxiosResponse } from 'axios';
import { CreateTourDto, ShortTourDto, UpdateTourDto } from '../types/Tours';
import { TOURS_URL } from '../utils/constants/urlConstants';

export const createTour = async (data: CreateTourDto) => {
  return axios.post(TOURS_URL, data);
};

export const updateTour = async (id: number, data: UpdateTourDto) => {
  return axios.put(`${TOURS_URL}/id?id=${id}`, data);
};

export const deleteTour = async (id: number) => {
  return axios.delete(`${TOURS_URL}/id?id=${id}`);
};

export const getTour = async (id: number) => {
  return axios.get(`${TOURS_URL}/id`, {
    params: { id }
  });
};

export const getTopTours = async (): Promise<AxiosResponse<ShortTourDto[]>> => {
  return axios.get(`${TOURS_URL}/top`);
};

export const getToursByFilters = async (filters: {
  Country?: string;
  MinPrice?: number;
  MaxPrice?: number;
  StartDate?: string;
  EndDate?: string;
}) => {
  return axios.get(`${TOURS_URL}/filters`, { params: filters });
};