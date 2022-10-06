function isToday(dateEvent: Date): boolean {
  const now = new Date();

  if (
    now.getDay() === dateEvent.getDay() &&
    now.getMonth() === dateEvent.getMonth() &&
    now.getFullYear() === dateEvent.getFullYear()
  ) {
    return true;
  } else {
    return false;
  }
}

const dateUtils = { methods: { isToday } };

export { dateUtils };
