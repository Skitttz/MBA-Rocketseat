export const businessHours = [];
const timeRange = { start: 9, end: 21 };

function generateTimeSlots() {
  if (!timeRange.start || !timeRange.end) return null;
  for (let hour = timeRange.start; hour <= timeRange.end; hour++) {
    businessHours.push(`${hour.toString().padStart(2, '0')}:00`);
  }
  return businessHours;
}
generateTimeSlots();
