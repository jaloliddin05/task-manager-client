export interface AuthStateInterface {
  isAuthorized: boolean;
  token: string;
}

function state(): AuthStateInterface {
  return {
    isAuthorized: false,
    token: '',
  };
}

export default state;
