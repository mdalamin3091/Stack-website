import { Fragment } from "react";
import { useUserLoginMutation } from "../redux/features/auth/authApi";
import useToastAndApiHandler from "../hooks/useToastAndApiHandler";
import { IAuthError, IAuthResponse } from "../types";
import { Link } from "react-router-dom";
import FormInput from "../components/forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import Form from "../components/forms/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../schemas/authSchema";
import Logo from "../assets/icons/logo";

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [userLogin, { isSuccess, isError, isLoading, data, error }] =
    useUserLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    userLogin({
      email: data.email,
      password: data.password,
    });
  };

  const successMessage = "Signin successfully completed";
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
      <main className="min-h-[88vh] flex items-center justify-center container">
        <div className="max-w-[444px] w-full text-center shadow-lg rounded-md min-h-[576px] flex items-start justify-center flex-col p-16 ">
          <div>
            <Logo />
            <p className="text-lg font-semibold leading-6 mb-12 mt-5 text-secondary-500">
              Sign In to continue with Stack
            </p>
          </div>
          <Form submitHandler={onSubmit} resolver={yupResolver(signInSchema)}>
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
              placeholder="Password"
              name="password"
              disabled={isLoading}
            />
            <button className="btn-primary" type="submit" disabled={isLoading}>
              Sign In
            </button>
            <p className="text-base text-secondary-200 ">
              Don’t have an account yet?{" "}
              <Link to="/" className="text-primary font-[500]">
                Sign Up
              </Link>
            </p>
          </Form>
        </div>
      </main>
    </Fragment>
  );
};

export default SignIn;
