import { Fragment, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { IInput } from "../../types";
import { getErrorMessageByPropertyName } from "../../utils/schema-validator";
import PasswordRequirement from "./PasswordRequirement";

const FormInput = ({
  name,
  type,
  value,
  disabled,
  placeholder,
  id,
  label,
  isSignup,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = getErrorMessageByPropertyName(errors, name);
  const [passwordValue, setPasswordValue] = useState("");
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Fragment>
            <label
              htmlFor={id}
              className="text-sm font-medium text-gray-700 mb-2 block text-left"
            >
              {label}
            </label>
            <input
              type={type}
              className={`w-full p-2 outline-none focus:outline-none text-secondary-100 px-[14px] py-[10px] border border-brand-50 rounded-lg focus:shadow-Input-basic ${
                errorMessage ? "shadow-Input-error border-error-300" : ""
              }`}
              placeholder={placeholder}
              disabled={disabled}
              {...field}
              onChange={(e) => {
                field.onChange(e);
                setPasswordValue(e.target.value);
              }}
              value={value ? value : field.value}
            />
            <small className="text-left text-error-500 mb-4 mt-2 block text-sm">
              {errorMessage}
            </small>
            {type === "password" && isSignup && (
              <PasswordRequirement passwordValue={passwordValue} />
            )}
          </Fragment>
        )}
      />
    </>
  );
};

export default FormInput;
