import axiosInstance from './axiosInstance';
import axios from 'axios';
export const apiRequest = async (method, url, data, params) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'API Error');
    } else {
      throw new Error('Unexpected error occurred');
    }
  }
};
