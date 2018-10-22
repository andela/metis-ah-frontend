import setAxiosHeader from 'Utils/helpers/setAxiosHeader';
import { resetCurrentUser } from 'Store/actions/authUser';

const setUser = (store) => {
  if (localStorage.user) {
    const token = localStorage.getItem('userToken');
    const user = JSON.parse(localStorage.getItem('user'));
    const expireAt = localStorage.getItem('expireAt');

    if (new Date() < new Date(expireAt)) {
      store.dispatch(resetCurrentUser(user));
      setAxiosHeader(token);
    } else {
      localStorage.removeItem('userToken');
      localStorage.removeItem('user');
      localStorage.removeItem('expireAt');
    }
  }
};

export default setUser;
