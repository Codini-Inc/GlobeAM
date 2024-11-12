import * as yup from "yup";

export const schema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  phone: yup.number().required("Phone is required"),
  message: yup.string().required("Message is required"),
});
