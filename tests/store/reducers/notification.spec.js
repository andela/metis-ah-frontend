import notification from '../../../src/store/reducers/notification';

const initialState = {
  notifications: [],
  count: 0,
  error: '',
};

describe('notification reducer', () => {
  it('should set the initial state', () => {
    const state = notification(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('should dispatch get all notifications', () => {
    const action = {
      type: 'GET_NOTIFICATION_SUCCESS',
      payload: {
        notifications: [
          {
            id: 37,
            receiverId: 28,
            actorId: 32,
            action: 'Jane is now following you',
            notifiable: 'user',
            notifiableId: 32,
            isRead: false,
          },
        ],
        count: 1,
      },
    };

    expect(notification({}, action)).toEqual(action.payload);
  });
});
