export interface User{
  id?:number;
  name: string;
  email: string;
  master: string;
}
export interface UserCreateEdit extends User{
  password?: string;
  confirmPassword?: string;
}