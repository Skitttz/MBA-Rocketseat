import { apiConfig } from './api-config.js';
import {
  getLocalStorageData,
  setLocalStorageData,
} from './localStorage-config.js';

export async function scheduleCancel({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('API request failed');
    }
    alert('[API] Agendamento cancelado com sucesso!');
  } catch (error) {
    console.error(error);

    let data = getLocalStorageData();
    data = data.filter((schedule) => schedule.id !== id);
    setLocalStorageData(data);
    alert('Agendamento cancelado com sucesso!');
  }
}
