
const validatePassword = (userInfo) => {
  const { password, confirmPassword } = userInfo;
  let error;
  let isValidData = true;

  // VALIDATE PASSWORD
  const regEx = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&]{8,}$/;
  if (password.trim() === '') {
    error = 'Password is required';
    isValidData = false;
  } else if (!regEx.test(password)) {
    error = 'Password must contain an uppercase, a lowercase and must not be less than 8 characters';
    isValidData = false;
  } else if (!(password === confirmPassword)) {
    error = 'Passwords do not match';
    isValidData = false;
  }

  return ({
    isValidData,
    error
  });
};

export default validatePassword;
