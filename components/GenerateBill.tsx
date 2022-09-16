import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form, Field } from "formik";
import { initialValue } from "../constant/Intial_value";
import { productValidator } from "../validator/Product";
import { PDFExport } from "@progress/kendo-react-pdf";
import { UpdateProduct, GetProduct } from "../Api/Product";
import { Iproduct } from "../interface";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
const GenerateBill = () => {
  const pdfExportComponent: any = React.useRef(null);
  const [productData, setproductData] = useState<Iproduct[]>([]);

  useEffect(() => {
    GetProduct().then((res) => setproductData(res.data));
  }, []);

  console.log(productData);
  const onFormSubmit = (data: any) => {
    console.log(data, "Data", data.quntity);
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
    UpdateProduct(data.name, {
      quntity: data.quntity,
      name: "",
      price: 0,
      alertquantity: 0
    });
  };

  return (
    <Formik
      initialValues={initialValue.Product}
      validationSchema={productValidator}
      onSubmit={onFormSubmit}
    >
      {(props: any) => {
        console.log(props, "props");
        return (
          <Form className="w-full p-4">
            <h1 className="text-lg font-bold text-center">Add Product</h1>

            <PDFExport paperSize="A4" margin="1cm" ref={pdfExportComponent}>
              <br />
              <br />
              {/* <Field
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
              /> */}

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-error">product</InputLabel>

                <Field
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  label="product"
                  error={
                    props.touched && props.touched.name && props.errors.name
                  }
                  as={Select}
                  name="name"
                >
                  {productData &&
                    productData.map((singleValue: any) => (
                      <MenuItem value={singleValue._id} key={singleValue._id}>
                        {singleValue.name}
                      </MenuItem>
                    ))}
                  <FormHelperText>
                    {props.touched && props.touched.name && props.errors.name}
                  </FormHelperText>
                </Field>
              </FormControl>
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
                error={
                  props.touched && props.touched.price && props.errors.price
                }
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
            </PDFExport>

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

export default GenerateBill;
