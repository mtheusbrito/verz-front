export interface User {
  id?: number;
  name: string;
  email: string;
  master: boolean | false;
}
export interface UserCreateEdit extends User {
  password?: string;
  confirmPassword?: string;
}

export interface Class {
  id?: number;
  name: string;
  exhibition: any;
  id_module?: number;
}
export interface Module {
  id?: number;
  name: string;
  classes?: Class[];
}

export interface ParamsProps {
  id_module?: string;
  id_class?: string;
  id_user?: string;
}
export interface ErrorResponse {
  response: {
    data: {
      message: string[];
      error: string
    };
    status: number;
  };
}
