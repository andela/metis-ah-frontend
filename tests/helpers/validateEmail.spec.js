import validateEmail from 'Utils/validateEmail';


describe('Reset Password Email Validation', () => {
  let result;

  it('should fail when email is an empty string', () => {
    result = validateEmail('');
    expect(result.isValidData).toBe(false);
    expect(result.error).toEqual('Email is required');
  });

  it('should fail when email is invalid', () => {
    result = validateEmail('@john');
    expect(result.error).toBe('Email address is invalid');
  });
  it('should return successfully when email is valid', () => {
    result = validateEmail('johndoe@gmail.com');
    expect(result.isValidData).toBe(true);
    expect(result.error).toBe(undefined);
  });
});
