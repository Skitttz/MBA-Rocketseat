export function hoursSelect() {
  const hours = document.querySelectorAll('.hour-available');
  hours.forEach((available) => {
    available.addEventListener('click', (selected) => {
      // Remove class hour-selected all li
      hours.forEach((hour) => {
        hour.classList.remove('hour-selected');
      });
      // Add Class in tag li Clicked
      selected.target.classList.add('hour-selected');
    });
  });
}
