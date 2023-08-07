import * as AuthApi from "../../api/AuthRequests";
import { delay } from "../../utils";
import {
  UPDATE_USER,
  UPDATE_USER_FAILURE,
} from "../actionTypes/actionTypes.js";

export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    // const { startTokenVerification } = verifyToken();
    // startTokenVerification();
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    // A 1 second delay before the signout process
    await delay(1000);
    dispatch({ type: "AUTH_SUCCESS", data: null });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const updateUserInStore = (user) => {
  return async (dispatch) => {
    try {
      // // Make an API request to update the user data
      // const response = await fetch('/api/update-user', {
      //   method: 'POST',
      //   body: JSON.stringify(user),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });

      // const data = await response.json();

      // Dispatch the UPDATE_USER_SUCCESS action with the updated user data
      dispatch({
        type: UPDATE_USER,
        // payload: data,
        payload: user,
      });
    } catch (error) {
      // Dispatch the UPDATE_USER_FAILURE action with the error message
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};
