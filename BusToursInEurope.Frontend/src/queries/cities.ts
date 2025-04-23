import axios from 'axios';
import { CityDto } from '../types/Cities';

const BASE_URL = 'http://your-api-url/cities';

export const createCity = async (data: CityDto) => {
  return axios.post(BASE_URL, data);
};

export const updateCity = async (id: number, data: CityDto) => {
  return axios.put(`${BASE_URL}/id?id=${id}`, data);
};

export const deleteCity = async (id: number) => {
  return axios.delete(`${BASE_URL}/id?id=${id}`);
};

export const getCities = async (filters: {
  Name?: string;
  Country?: string;
  VisaRequired?: boolean;
  SortBy?: string;
  IsDescending?: boolean;
}) => {
  return axios.get(`${BASE_URL}/filters`, { params: filters });
};