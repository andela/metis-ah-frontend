import validatePassword from 'Utils/validatePassword';


describe('Reset Password - Password Validations', () => {
  let result;

  test('should fail when password is an empty string', () => {
    const userInfo = {
      password: '',
      confirmPassword: ''
    };
    result = validatePassword(userInfo);
    expect(result.isValidData).toBe(false);
    expect(result.error).toEqual('Password is required');
  });

  test('should fail when password does not meet the required criteria', () => {
    const userInfo = {
      password: 'password',
      confirmPassword: 'password'
    };
    result = validatePassword(userInfo);
    expect(result.isValidData).toBe(false);
    expect(result.error).toBe('Password must contain an uppercase, a lowercase and must not be less than 8 characters');
  });
  test('should fail when password and resetPassword do not match', () => {
    const userInfo = {
      password: 'Password',
      confirmPassword: 'password'
    };
    result = validatePassword(userInfo);
    expect(result.isValidData).toBe(false);
    expect(result.error).toEqual('Passwords do not match');
  });
  test('should return successfully when valid password is provided and it matches confirmPassowrd', () => {
    const userInfo = {
      password: 'Password7jo',
      confirmPassword: 'Password7jo'
    };
    result = validatePassword(userInfo);
    expect(result.isValidData).toBe(true);
    expect(result.error).toEqual(undefined);
  });
});
