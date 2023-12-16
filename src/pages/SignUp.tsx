import { useUserRegisterMutation } from "../redux/features/auth/authApi";
import { Fragment } from "react";
import useToastAndApiHandler from "../hooks/useToastAndApiHandler";
import { IAuthError, IAuthResponse } from "../types";
import { Link } from "react-router-dom";
import Form from "../components/forms/Form";
import { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../schemas/authSchema";
import FormInput from "../components/forms/FormInput";
import Logo from "../assets/icons/logo";

type FormValues = {
  email: string;
  password: string;
};

const Signup = () => {
  const [userRegister, { data, isSuccess, isError, error, isLoading }] =
    useUserRegisterMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    userRegister({
      email: data.email,
      password: data.password,
    });
  };
  const successMessage = "Registration successfully completed.";
  useToastAndApiHandler<IAuthResponse, IAuthError>(
    {
      isSuccess,
      isError,
      isLoading,
      data,
      error,
    },
    successMessage
  );

  return (
    <Fragment>
      <main className="min-h-[88vh] flex items-center justify-center container mt-4 md:mt-0 mb-4 md:mb-0">
        <div className="max-w-[444px] w-full text-center shadow-lg rounded-2xl min-h-[576px] flex items-start justify-center flex-col p-16 border border-secondary-600">
          <div>
            <Logo />
            <p className="text-lg font-semibold leading-6 mb-12 mt-5 text-secondary-500">
              Sign up to join with Stack{" "}
            </p>
          </div>
          <Form submitHandler={onSubmit} resolver={yupResolver(signupSchema)}>
            <FormInput
              type="text"
              label="Email"
              placeholder="Your Email"
              name="email"
              disabled={isLoading}
            />
            <FormInput
              type="password"
              label="Password"
              placeholder="Create Password"
              name="password"
              disabled={isLoading}
              isSignup={true}
            />
            <button className="btn-primary" type="submit" disabled={isLoading}>
              Sign Up
            </button>
            <p className="text-base text-secondary-200 ">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary">
                Sign In
              </Link>
            </p>
          </Form>
        </div>
      </main>
    </Fragment>
  );
};

export default Signup;
