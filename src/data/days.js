const getPreviousAndNext3Days = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const datesWithDays = [];
  const today = new Date();

  for (let i = -3; i < 0; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      datesWithDays.push({ day: days[date.getDay()], date: date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }) });
  }

  datesWithDays.push({ day: days[today.getDay()], date: today.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }) });

  for (let i = 1; i <= 3; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      datesWithDays.push({ day: days[date.getDay()], date: date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }) });
  }

  return datesWithDays;
}

export const prevAndNext3DaysWithDays = getPreviousAndNext3Days();
