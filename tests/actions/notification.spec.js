import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import thunk from "redux-thunk";
import mockData from '../__mocks__/notificationMock'; 
import {
  getAllUnreadNotifications,
  deleteOneNotification
} from "../../src/store/actions/notification";
import constants from "../../src/store/constants/index";

const { GET_NOTIFICATION_SUCCESS, GET_NOTIFICATION_ERROR } = constants;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const moxios = new MockAdapter(axios);

const initialState = {
  notifications: [],
  count: 0,
  error: ''
};

describe("Notifications Component", () => {
  afterEach(() => moxios.reset());

  describe("Get Notification", () => {
    it("should get all notifications", (done) => {

      moxios.onGet('/notifications').reply(200, {
        notificaiton: {
          notifications: [
            {
              "id": 37,
              "receiverId": 28,
              "actorId": 32,
              "action": "Jane is now following you",
              "notifiable": "user",
              "notifiableId": 32,
              "isRead": true,
              "createdAt": "2018-11-11T19:53:01.561Z",
              "updatedAt": "2018-11-11T19:53:13.131Z"
            },
          ],
          count: 2,
          error: ''
        }
      });

      const expectedAction = [
        {
          type: GET_NOTIFICATION_SUCCESS,
          payload: mockData
        }
      ];

      const store = mockStore(initialState);
      return store.dispatch(getAllUnreadNotifications()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
        done();
      });
    });
  });
});
