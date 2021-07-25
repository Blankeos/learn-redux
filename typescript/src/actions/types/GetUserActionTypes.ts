export const GET_USER_LOADING = "GET_USER_LOADING";
export const GET_USER_FAIL = "GET_USER_FAIL";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export interface UserApiResponse {
  results: User[];
}

export interface GetUserLoading {
  type: typeof GET_USER_LOADING;
}

export interface GetUserFail {
  type: typeof GET_USER_FAIL;
}

export interface GetUserSuccess {
  type: typeof GET_USER_SUCCESS;
  payload: User;
}

export type GetUserDispatchTypes =
  | GetUserFail
  | GetUserLoading
  | GetUserSuccess;
