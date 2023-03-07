export interface User {
  userId?: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

export interface CreateUser extends User {
  password: string;
  passwordConfirm: string;
}
