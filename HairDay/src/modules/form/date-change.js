import { schedulesDay } from '../schedules/load';

const inputDate = document.getElementById('date');

inputDate.onchange = async () => await schedulesDay();
