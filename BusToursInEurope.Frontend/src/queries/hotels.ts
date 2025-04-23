import axios from 'axios';
import { HotelDto } from '../types/Hotels';

const BASE_URL = 'http://your-api-url/hotels';

export const createHotel = async (data: HotelDto) => {
  return axios.post(BASE_URL, data);
};

export const updateHotel = async (id: number, data: HotelDto) => {
  return axios.put(`${BASE_URL}/id?id=${id}`, data);
};

export const deleteHotel = async (id: number) => {
  return axios.delete(`${BASE_URL}/id?id=${id}`);
};

export const getHotels = async (filters: {
  Name?: string;
  MinRating?: number;
  MaxRating?: number;
  CityId?: number;
}) => {
  return axios.get(`${BASE_URL}/filters`, { params: filters });
};