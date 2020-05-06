export const formatDate = (date: Date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const formatTime = (time: Date, timeZone: string, showSeconds = true) => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: showSeconds ? 'numeric' : undefined,
    timeZone
  };
  return new Intl.DateTimeFormat('en-US', options).format(time);
};
