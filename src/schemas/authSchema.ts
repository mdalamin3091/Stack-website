import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid Email Address"),
  password: yup.string().min(6).max(32).required("Password is required"),
  // .matches(/a-z/, "Includes lowercase letter")
  // .matches(/A-Z/, "Includes uppercase letter")
  // .matches(/[$&+,:;=?@#|'<>.^*()%!-]/, "Includes special symbol"),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid Email Address"),
  password: yup.string().required("Password is required"),
});
