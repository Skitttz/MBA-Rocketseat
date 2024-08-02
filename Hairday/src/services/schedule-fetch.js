import { apiConfig } from './api-config.js';
import dayjs from 'dayjs';

export async function scheduleByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await response.json();
    const daySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, 'day'),
    );
    return daySchedules;
  } catch (error) {
    console.error(error);
    alert('Nao foi possivel buscar os agendamentos do dia selecionado');
  }
}
