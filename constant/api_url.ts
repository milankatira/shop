import { server_url } from "./app_config";

export const product_url = `${server_url}/product`;
export const single_product_url = (id: string) => `${server_url}/product/${id}`;
