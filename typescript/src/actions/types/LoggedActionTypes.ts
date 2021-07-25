export const SIGN_IN = "SIGN_IN";

export interface LoggedIn {
  type: typeof SIGN_IN;
}

export type LoggedDispatchTypes = LoggedIn;
