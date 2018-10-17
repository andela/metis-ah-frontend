/**
   * @method loginFromValidation
   * @param {*} userDetails
   * @return {*} boolean
   */
const loginFromValidation = (userDetails) => {
  if (userDetails.email.trim() !== '' || userDetails.password.trim() !== '') {
    return true;
  }
  return false;
};

export default loginFromValidation;
