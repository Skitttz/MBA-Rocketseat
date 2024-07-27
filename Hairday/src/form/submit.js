import dayjs from 'dayjs';
const form = document.querySelector('form');
const inputDate = document.getElementById('date');
const dateToday = dayjs(newDate().format('YYYY-MM-DD'));

inputDate.value = dateToday;
inputDate.min = dateToday;

document.addEventListener('submit', (event) => {
  event.preventDefault();
});
