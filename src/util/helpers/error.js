import alert from './alert';

const checkError = (error) => {
  if (error.response) {
    if (error.response.data.data) {
      return alert.error(error.response.data.data.message);
    }
    return alert.error(error.response.data.message);
  }
  return alert.error(error.message);
};

export default checkError;
