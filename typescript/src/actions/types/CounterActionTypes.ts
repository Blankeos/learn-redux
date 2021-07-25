export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export interface IncrementCounter {
  type: typeof INCREMENT;
  payload: number;
}

export interface DecrementCounter {
  type: typeof DECREMENT;
  payload: number;
}

export type CounterDispatchTypes = IncrementCounter | DecrementCounter;
