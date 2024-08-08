import database from '../../db.json';
import { ApiConfig } from './api-config.js';

function existDataClientStorage() {
  const existingData = localStorage.getItem(ApiConfig.localStorageKey);
  if (!existingData) {
    return insertDataLocalStorage();
  }
  return;
}

function insertDataLocalStorage() {
  try {
    const databaseClient = {
      data: JSON.stringify(database),
    };
    localStorage.setItem(
      ApiConfig.localStorageKey,
      JSON.stringify(databaseClient),
    );
  } catch (error) {
    console.error(error);
  }
}

export async function getClientDataStorage() {
  const data = localStorage.getItem(ApiConfig.localStorageKey);
  return {
    ok: true,
    status: 200,
    json: () => Promise.resolve(data ? JSON.parse(data) : []),
  };
}

existDataClientStorage();
