import { showModal } from '../modules/modal.js';
import { ApiConfig } from './api-config.js';

export async function clientByID(userId) {
  try {
    const response = await fetch(`${ApiConfig.baseURL}/clients`);
    if (!response.ok) {
      throw new Error('API fetch failed');
    }
    const data = await response.json();
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
