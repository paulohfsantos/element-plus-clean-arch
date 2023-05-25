import axios, { AxiosResponse } from 'axios';
import { User, RegisterRequest, LoginRequest } from '../types/user';

export const authService = {
  login: async ({ password, username }: LoginRequest): Promise<AxiosResponse<User>> => {
    const response = await axios.post('http://localhost:3000/login', { username, password });

    return response.data;
  },

  register: async ({ name, email, username, password }: RegisterRequest): Promise<AxiosResponse<User>> => {
    const response = await axios
      .post('http://localhost:3000/register', { name, email, username, password });

    return response.data;
  }
}