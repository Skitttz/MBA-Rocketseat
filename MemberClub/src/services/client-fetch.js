import { ApiConfig } from './api-config.js';
import { getClientDataStorage } from './storage.js';

export async function clientByID(userId) {
  try {
    const response = ApiConfig.inProd
      ? await getClientDataStorage()
      : await fetch(`${ApiConfig.baseURL}/clients`);

    if (!response.ok) {
      throw new Error('API fetch failed');
    }
    let data = await response.json();
    if (!Array.isArray(data) && ApiConfig.inProd) {
      const parsedData = JSON.parse(data.data);
      data = parsedData.clients;
    }

    const client = data.find((client) => client.id === userId);
    if (!data || !client) {
      return null;
    }

    const { id, name, avatar, clientSince, appointmentHistory, loyaltyCard } =
      client;
    return { id, name, avatar, clientSince, appointmentHistory, loyaltyCard };
  } catch (error) {
    console.error(error);
  }
}
