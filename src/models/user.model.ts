interface User {
  id: string;
  firstName: null;
  lastName: string;
  login: string;
  email: string;
  phone: string;
}

export interface SignUpDto {}

export interface SignInDto {
  login: string;
  password: string;
}

export default User;
