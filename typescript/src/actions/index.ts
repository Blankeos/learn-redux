import { Dispatch } from "redux";
import {
  GetUserDispatchTypes,
  GET_USER_FAIL,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  UserApiResponse,
} from "./types/GetUserActionTypes";
import {
  CounterDispatchTypes,
  INCREMENT,
  DECREMENT,
} from "./types/CounterActionTypes";
import axios from "axios";
import { LoggedDispatchTypes, SIGN_IN } from "./types/LoggedActionTypes";

export const getUserAsync =
  () => async (dispatch: Dispatch<GetUserDispatchTypes>) => {
    try {
      dispatch({
        type: GET_USER_LOADING,
      });

      const res = await axios.get(
        "https://randomuser.me/api/?inc=email,name,picture"
      );

      const data = res.data as UserApiResponse;

      dispatch({
        type: GET_USER_SUCCESS,
        payload: data.results[0],
      });
    } catch (e) {
      dispatch({
        type: GET_USER_FAIL,
      });
    }
  };

export const increment =
  (byNumber: number) => (dispatch: Dispatch<CounterDispatchTypes>) => {
    dispatch({
      type: INCREMENT,
      payload: byNumber,
    });
  };

export const decrement =
  (byNumber: number) => (dispatch: Dispatch<CounterDispatchTypes>) => {
    dispatch({
      type: DECREMENT,
      payload: byNumber,
    });
  };

export const signIn = () => (dispatch: Dispatch<LoggedDispatchTypes>) => {
  dispatch({
    type: SIGN_IN,
  });
};
