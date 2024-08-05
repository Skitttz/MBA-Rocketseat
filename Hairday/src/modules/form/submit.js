import dayjs from 'dayjs';
import { scheduleNew } from '../../services/schedule-new.js';
import { schedulesDay } from '../schedules/load.js';

const form = document.querySelector('form');
const inputDate = document.getElementById('date');
const inputClientName = document.getElementById('client');
const dateToday = dayjs(new Date()).format('YYYY-MM-DD');

inputDate.value = dateToday;
inputDate.min = dateToday;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    const name = inputClientName.value.trim();
    if (!name) {
      return alert('Informe o nome do client!');
    }

    const hourSelected = document.querySelector('.hour-selected');
    if (!hourSelected) {
      return alert('Selecione o Horario');
    }
    const [hour] = hourSelected.innerText.split(':');

    const when = dayjs(inputDate.value).add(hour, 'hour');
    const id = new Date().getTime().toString();
    await scheduleNew({
      id,
      name,
      when,
    });
    await schedulesDay();
    inputClientName.value = '';
  } catch (error) {
    alert('Nao foi possivel realizar o agendamento');
    console.error(error);
  }
});
