import {
  GetUserDispatchTypes,
  User,
  GET_USER_FAIL,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
} from "../actions/types/GetUserActionTypes";

interface DefaultStateI {
  loading: boolean;
  user?: User;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const userReducer = (
  state: DefaultStateI = defaultState,
  action: GetUserDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case GET_USER_FAIL:
      return {
        loading: false,
      };
    case GET_USER_LOADING:
      return {
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
