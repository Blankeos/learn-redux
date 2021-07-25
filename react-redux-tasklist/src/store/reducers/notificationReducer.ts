import { NotificationAction, NotificationState } from "../types";

const initialState: NotificationState = {
  message: "",
  type: "success",
};

export default (
  state = initialState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    default:
      return state;
  }
};
