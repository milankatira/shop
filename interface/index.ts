export interface Iproduct {
  name: string;
  quntity: number;
  price: number;
  alertquantity: number;
}

export interface IproductApi {
  _id: string;
  name: string;
  quntity: number;
  price: number;
  alertquantity: number;
}

export interface IUpdateproduct {
  quntity: number;
}
