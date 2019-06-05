//import config from 'config';
import axios from 'axios';

export const login = auth => ({
  type: 'LOGIN_USER',
  auth
});

export const startLogin = (userData = {}) => {
  return dispatch => {
    const { username = '', password = '' } = userData;

    const user = { username, password };

    return axios
      .post('api/users/login', user)
      .then(snapshot => {
        console.log(snapshot);

        console.log(snapshot.headers.xauthtoken);

        localStorage.setItem('x-auth-token', snapshot.headers.xauthtoken);
        dispatch(login(snapshot.data));
        return snapshot.data;
      })
      .catch(e => {
        const user = {
          _id: '',
          username: '',
          isAdmin: false,
          email: '',
          error: e.response.data.error
        };
        dispatch(login(user));
        return { success: false };
        // console.log(error.response.data)
      });
    // try {
    //     const callBackEnd = await axios.post('api/users/login', user);
    //     dispatch(login(callBackEnd.data))
    // } catch (error) {
    //     if (error.response) {
    //                 console.log(error.response.data)
    //                 return error.response.data
    //             }
    // }
  };
};
