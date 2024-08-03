export interface loginParams {
  username: string;
  password: string;
}

export interface registerParams {
  username: string;
  email: string;
  password: string;
  name: string;
  lastname: string;
  pushToken?: string;
}
