import resetPasswordReducer from 'Reducers/resetPasswordReducer';
import {
  VERIFY_USER_EMAIL_SUCCESS,
  VERIFY_USER_EMAIL_STARTED,
  VERIFY_USER_EMAIL_FAILED,
  RESET_PASSWORD_STARTED,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS
} from 'Constants';

const initialState = {
  successMessage: '',
  errorMessage: '',
  isLoading: false
};

describe('RESET PASSWORD REDUCER TESTS', () => {
  test('should return default', () => {
    const state = resetPasswordReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  test('should set isLoading to true', () => {
    const state = resetPasswordReducer(initialState, { type: VERIFY_USER_EMAIL_STARTED });
    expect(state.isLoading).toEqual(true);
  });

  test('should return default', () => {
    const state = resetPasswordReducer(initialState, { type: VERIFY_USER_EMAIL_SUCCESS, message: 'Password reset link has been sent to your email' });
    expect(state).toEqual({
      successMessage: 'Password reset link has been sent to your email',
      errorMessage: '',
      isLoading: false
    });
  });

  test('should return default', () => {
    const state = resetPasswordReducer(initialState, { type: VERIFY_USER_EMAIL_FAILED, message: 'Invalid credential provided' });
    expect(state).toEqual({
      successMessage: '',
      errorMessage: 'Invalid credential provided',
      isLoading: false
    });
  });

  test('should set isLoading to true', () => {
    const state = resetPasswordReducer(initialState, { type: RESET_PASSWORD_STARTED });
    expect(state.isLoading).toEqual(true);
  });

  test('should return default', () => {
    const state = resetPasswordReducer(initialState, { type: RESET_PASSWORD_SUCCESS, message: 'Password reset is successful' });
    expect(state).toEqual({
      successMessage: 'Password reset is successful',
      errorMessage: '',
      isLoading: false
    });
  });

  test('should return default', () => {
    const state = resetPasswordReducer(initialState, { type: RESET_PASSWORD_FAILED, message: 'Server error' });
    expect(state).toEqual({
      successMessage: '',
      errorMessage: 'Server error',
      isLoading: false
    });
  });
});
