const getDate = (time) => {
  const now = new Date(time);
  return {dateTime: now.toISOString(), date: now.toLocaleTimeString().slice(0,-3)};
};

export default getDate;
