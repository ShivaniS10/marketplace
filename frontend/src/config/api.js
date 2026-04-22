// API Configuration
// In development: VITE_API_URL is not set, so API_BASE_URL is '' and requests
// go through Vite's proxy (vite.config.js) to http://localhost:3000.
// In production: set VITE_API_URL=https://eg-marketplace-1.onrender.com in your .env

const API_BASE_URL = import.meta.env.VITE_API_URL || '';
const SOCKET_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  AUTH: `${API_BASE_URL}/api/auth`,
  PRODUCTS: `${API_BASE_URL}/api/products`,
  ORDERS: `${API_BASE_URL}/api/orders`,
  RATINGS: `${API_BASE_URL}/api/ratings`,
  DISPUTES: `${API_BASE_URL}/api/disputes`,
  ADMIN: `${API_BASE_URL}/api/admin`,
  VENDORS: `${API_BASE_URL}/api/vendors`,
  CART: `${API_BASE_URL}/api/cart`,
  CONTACT: `${API_BASE_URL}/api/contact`,
};

export { API_BASE_URL, SOCKET_URL };

