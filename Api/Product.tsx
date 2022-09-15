import { product_url, single_product_url } from "../constant/api_url";
import { Iproduct } from "../interface";
import axios from "axios";

export const AddProduct = (packet: Iproduct) =>
  axios
    .post(product_url, packet)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const GetProduct = () =>
  axios
    .get(product_url)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const UpdateProduct = (id: string, packet: Iproduct) =>
  axios
    .post(single_product_url(id), packet)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const DeleteProduct = (id: string) =>
  axios
    .delete(single_product_url(id))
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
