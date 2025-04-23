import axios from 'axios';
import { AuthorizationDto, RegistrationDto } from '../types/Authorization';

const BASE_URL = 'http://your-api-url/auth';

export const register = async (data: RegistrationDto) => {
  return axios.post(`${BASE_URL}/reg`, data);
};

export const login = async (data: AuthorizationDto) => {
  return axios.post(`${BASE_URL}/auth`, data);
};