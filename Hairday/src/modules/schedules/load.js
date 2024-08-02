import { hoursLoad } from '../form/hours-load.js';
import { scheduleByDay } from '../../services/schedule-fetch.js';
import { schedulesShow } from './show.js';
const inputDate = document.getElementById('date');
export async function schedulesDay() {
  const date = inputDate.value;

  const daySchedules = await scheduleByDay({ date });
  schedulesShow({ daySchedules });
  hoursLoad({ date, daySchedules });
}
