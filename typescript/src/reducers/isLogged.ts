type DefaultStateI = boolean;

const defaultState: DefaultStateI = false;

const isLoggedReducer = (
  state: DefaultStateI = defaultState,
  action: any
): DefaultStateI => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

export default isLoggedReducer;
