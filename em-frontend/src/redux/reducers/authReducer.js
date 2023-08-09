import {
  AUTH_FAIL,
  AUTH_START,
  AUTH_SUCCESS,
  UPDATE_USER,
} from "../actionTypes/actionTypes";

const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case AUTH_START:
      return { ...state, loading: true, error: false };

    case AUTH_SUCCESS:
      // To clear the whole local storage on log out
      try {
        if (action?.data === null) {
          localStorage.clear();
        } else {
          localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
          localStorage.setItem("token", action?.data.accessToken);
        }
      } catch (error) {
        console.log(error);
        debugger;
      }
      return { ...state, authData: action.data, loading: false, error: false };

    case AUTH_FAIL:
      return { ...state, loading: false, error: true };

    case UPDATE_USER:
      return {
        ...state,
        authData: {
          ...state.authData,
          user: action.payload,
        },
      };

    default:
      return state;
  }
};

export default authReducer;
