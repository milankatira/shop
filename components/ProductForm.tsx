import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form, Field } from "formik";
import { initialValue } from "../constant/Intial_value";
import { productValidator } from "../validator/Product";
import { Iproduct } from "../interface";
import { AddProduct } from "../Api/Product";

const ProductForm = () => {
  const onFormSubmit = (data: Iproduct) => {
    const packet = {
      name: data.name,
      price: data.price,
      quntity: data.quntity,
      alertquantity: data.alertquantity,
    };
    AddProduct(packet);
  };

  return (
    <Formik
      initialValues={initialValue.Product}
      validationSchema={productValidator}
      onSubmit={onFormSubmit}
    >
      {(props: any) => {
        return (
          <Form className="w-full p-4">
            <h1 className="text-lg font-bold text-center">Add Product</h1>
            <br />
            <br />
            <Field
              as={TextField}
              className="w-full"
              id="outlined-basic"
              label="Product"
              variant="outlined"
              helperText={
                props.touched && props.touched.name && props.errors.name
              }
              error={props.touched && props.touched.name && props.errors.name}
              name="name"
            />
            <br />
            <br />
            <Field
              as={TextField}
              className="w-full"
              id="outlined-basic"
              label="Quntity"
              variant="outlined"
              name="quntity"
              type="number"
              helperText={
                props.touched && props.touched.quntity && props.errors.quntity
              }
              error={
                props.touched && props.touched.quntity && props.errors.quntity
              }
            />
            <br />
            <br />
            <Field
              as={TextField}
              className="w-full"
              id="outlined-basic"
              label="Price"
              variant="outlined"
              name="price"
              type="number"
              helperText={
                props.touched && props.touched.price && props.errors.price
              }
              error={props.touched && props.touched.price && props.errors.price}
            />
            <br />
            <br />
            <Field
              error={
                props.touched &&
                props.touched.alertquantity &&
                props.errors.alertquantity
              }
              as={TextField}
              className="w-full"
              id="outlined-basic"
              label="alertquantity"
              variant="outlined"
              type="number"
              name="alertquantity"
              helperText={
                props.touched &&
                props.touched.alertquantity &&
                props.errors.alertquantity
              }
            />
            <br />
            <br />
            <Button
              className="w-full bg-blue-500"
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProductForm;
