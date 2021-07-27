import {
  CounterDispatchTypes,
  DECREMENT,
  INCREMENT,
} from "./../actions/types/CounterActionTypes";
type DefaultStateI = number;

const defaultState: DefaultStateI = 0;

const counterReducer = (
  state: DefaultStateI = defaultState,
  action: CounterDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case INCREMENT:
      return state + (action.payload ? action.payload : 1);
    case DECREMENT:
      return state - (action.payload ? action.payload : 1);
    default:
      return state;
  }
};

export default counterReducer;
