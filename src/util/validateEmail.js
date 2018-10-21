
const validateEmail = (email) => {
  let error;
  let isValidData = true;

  // VALIDATE EMAIL
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.trim() === '') {
    error = 'email is required';
    isValidData = false;
  } else if (!regEx.test(email)) {
    error = 'email address is invalid';
    isValidData = false;
  }

  return ({
    isValidData,
    error
  });
};

export default validateEmail;
