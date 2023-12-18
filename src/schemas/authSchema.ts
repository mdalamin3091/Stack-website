import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid Email Address"),
  password: yup.string().min(6).max(32).required("Password is required"),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid Email Address"),
  password: yup.string().required("Password is required"),
});

export const addUserSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  job: yup.string().required("job is required"),
});
