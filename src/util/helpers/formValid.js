const regex = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

/**
   * @memberOf Signup
   * @method formValidation
   * @param {*} userDetails
   * @return {*} setstate
   */
const formValidation = (userDetails) => {
  const errors = {};
  let formIsValid = true;
  const foundUpperCase = userDetails.password.split('').some(letter => letter.toUpperCase() === letter);

  // username
  if (userDetails.username.trim().length < 1) {
    formIsValid = false;
    errors.username = 'Username Cannot be empty';
  }

  // Email
  if (!regex.test(userDetails.email)) {
    formIsValid = false;
    errors.email = 'Email is not valid';
  }

  // password
  if (userDetails.password.trim().length < 8) {
    formIsValid = false;
    errors.password = 'Password is less than eight characters';
  }

  if (!foundUpperCase) {
    formIsValid = false;
    errors.password = 'Password should contain at least one uppercase letter';
  }
  if (userDetails.password !== userDetails.confirmPassword) {
    formIsValid = false;
    errors.password = 'Your password does not match confirm password';
  }

  const obj = { formIsValid, errors };
  return obj;
};

export default formValidation;
