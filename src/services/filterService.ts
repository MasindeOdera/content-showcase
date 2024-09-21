import axios from 'axios';
import { getBearerToken } from './authService';

export async function filterProjectsByCategory(category: string, page = 1, limit = 20) {
  const token = await getBearerToken();
  const response = await axios.get(
    `https://api.foleon.com/v2/magazine/edition?query[field]=category&type=eq&value=${category}&page=${page}&limit=${limit}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
}
