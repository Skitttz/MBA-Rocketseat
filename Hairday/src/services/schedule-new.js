import { apiConfig } from './api-config.js';
import {
  getLocalStorageData,
  setLocalStorageData,
} from './localStorage-config.js';

export async function scheduleNew({ id, name, when }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, when }),
    });
    if (!response.ok) {
      throw new Error('API request failed');
    }
    alert('[API] Agendamento realizado com sucesso');
  } catch (error) {
    console.error(error);

    // Save to localStorage
    const data = getLocalStorageData();
    data.push({ id, name, when });
    setLocalStorageData(data);
    alert('Agendamento realizado com sucesso');
  }
}
