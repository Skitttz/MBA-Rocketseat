import { apiConfig } from './api-config.js';

export function getLocalStorageData() {
  const data = localStorage.getItem(apiConfig.localStorageKey);
  return data ? JSON.parse(data) : [];
}

// Helper function to set data in localStorage
export function setLocalStorageData(data) {
  localStorage.setItem(apiConfig.localStorageKey, JSON.stringify(data));
}
