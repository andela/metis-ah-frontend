
const formatDate = (timestamps) => {
  const [year, month, day] = timestamps.split('-');
  return ({ year, month, day });
};

export const dayHelper = timestamps => formatDate(timestamps).day.slice(0, 2);

export const monthHelper = (timestamps) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return months[formatDate(timestamps).month - 1];
};
