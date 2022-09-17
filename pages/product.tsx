import React, { useEffect, useState } from "react";
import { GetProduct, DeleteProduct } from "../Api/Product";
import { IproductApi } from "../interface";
import type { NextPage } from "next";

interface Productprops {
  product: IproductApi[];
}

const Product: NextPage<Productprops> = ({ product }) => {
  const [productData, setproductData] = useState<IproductApi[]>();
  const DeleteHandler = async (_id: string) => {
    await DeleteProduct(_id);
    setproductData(await (await GetProduct()).data.product);
  };
  useEffect(() => {
    setproductData(product);
  }, []);
  return (
    <div>
      <h1 className="text-center title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        product
      </h1>
      <div className="p-4 lg:w-full flex flex-col lg:flex-row">
        {productData && productData.length == 0 && (
          <h1 className="text-center w-full font-semibold text-2xl">
            no product avalable
          </h1>
        )}
        {productData &&
          productData.map((data: IproductApi) => (
            <div key={data._id} className="flex flex-col my-2 lg:mx-4 w-full lg:w-1/2">
              <div className="w-full">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-4 w-4 ml-auto"
                    onClick={() => DeleteHandler(data._id)}
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                  <div className="flex justify-between">
                    <h1 className="title-font sm:text-2xl text-xl font-medium">
                      name-
                    </h1>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      {data.name}
                    </h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="title-font sm:text-2xl text-xl font-medium">
                      quantity-
                    </h1>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      {data.quntity}
                    </h1>{" "}
                  </div>

                  <div className="flex justify-between">
                    <h1 className="title-font sm:text-2xl text-xl font-medium">
                      price-
                    </h1>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      {data.price}
                    </h1>{" "}
                  </div>
                  <div className="flex justify-between">
                    <h1 className="title-font sm:text-2xl text-xl font-medium">
                      alert quantity-
                    </h1>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      {data.alertquantity}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;

export async function getServerSideProps() {
  const product = await GetProduct();
  return { props: { product: product.data.product } };
}
