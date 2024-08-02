import dayjs from 'dayjs';
import { businessHours } from '../../utils/openning-hours.js';
import { hoursSelect } from './hours-selected.js';
const hours = document.getElementById('hours');

export function hoursLoad({ date, daySchedules }) {
  hours.innerHTML = '';
  const unavailableHours = daySchedules.map((schedule) =>
    dayjs(schedule.when).format('HH:mm'),
  );
  const openning = businessHours.map((hour) => {
    // Resgata somente a hora
    const [bussinessHour] = hour.split(':');
    // Adiciona a hora verificacao de hora para o passado
    const isHourPast = dayjs(date).add(bussinessHour, 'hour').isBefore(dayjs());
    const available = !unavailableHours.includes(hour) && !isHourPast;
    return {
      hour,
      availableHour: available,
    };
  });
  openning.forEach(({ hour, availableHour }) => {
    const li = document.createElement('li');
    li.classList.add('hour');
    li.classList.add(availableHour ? 'hour-available' : 'hour-unavailable');

    li.textContent = hour;
    if (hour === '9:00') {
      hoursPeriodAdd('Manha');
    } else if (hour === '13:00') {
      hoursPeriodAdd('Tarde');
    } else if (hour === '18:00') {
      hoursPeriodAdd('Noite');
    }
    hours.append(li);
  });
  hoursSelect();
}

function hoursPeriodAdd(title) {
  const header = document.createElement('li');
  header.classList.add('hour-period');
  header.textContent = title;

  hours.append(header);
}
