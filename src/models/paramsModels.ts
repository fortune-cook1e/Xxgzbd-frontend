
// 登录 model
export interface LoginModel {
  username:string;
  password:string;
}

// 注册 model
export interface RegisterModel {
  username:string;
  password:string;
}

// 添加物资 model
export interface AddGoodsModel {
  name:string;
  foodType:number[];
  foodInfo:string;
  time:string;
  phone:string;
  area:string
}
