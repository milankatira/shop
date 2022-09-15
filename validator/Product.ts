import * as yup from "yup";

const form_validation = {
  name_required: "Name is required.",
  quntity_required: "Quntity is required.",
  price_required: "Price is required.",
  alertquantity_required: "Alert quantity is required.",
};
export const productValidator = yup.object().shape({
  name: yup.string().required(form_validation.name_required),
  quntity: yup.string().required(form_validation.quntity_required),
  price: yup.string().required(form_validation.price_required),
  alertquantity: yup.string().required(form_validation.alertquantity_required),
});
