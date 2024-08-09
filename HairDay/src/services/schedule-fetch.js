import dayjs from 'dayjs';
import { apiConfig } from './api-config.js';
import {
  getLocalStorageData,
  setLocalStorageData,
} from './localStorage-config.js';

export async function scheduleByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    if (!response.ok) {
      throw new Error('API request failed');
    }
    const data = await response.json();
    setLocalStorageData(data); // Update localStorage with the latest data
    const daySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, 'day'),
    );
    return daySchedules;
  } catch (error) {
    console.error(error);
    const data = getLocalStorageData();
    const daySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, 'day'),
    );
    return daySchedules;
  }
}
