import authUser from '../src/store/reducers/authUser';

describe('authUser reducer', () => {
  const state = {
    user: {},
    isAuthenticated: false,
  };

  it('should return right state', () => {
    expect(authUser(state, { type: 'default' })).toEqual({
      user: {},
      isAuthenticated: false,
    });
  });

  it('should change the state', () => {
    expect(authUser(state, {
      type: 'SET_CURRENT_USER',
      payload: {
        stuff: 'hello',
      }
    })).toEqual({
      isAuthenticated: true,
      user: {
        stuff: 'hello',
      }
    });
  });
});
