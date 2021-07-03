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

export interface Class{
  id?: number;
  name:string;
  exhibition: any;
  module_id?: number;
}
export interface Module{
  id?: number;
  name: string;
  classes?: Class[];
}

export interface ParamsProps{
id_module?: string;
id_class?:string;

}