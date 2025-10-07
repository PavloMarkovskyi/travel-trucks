import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
