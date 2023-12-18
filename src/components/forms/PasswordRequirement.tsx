import { FC, Fragment, useEffect, useState } from "react";

interface PropsType {
  passwordValue: string;
}

const PasswordRequirement: FC<PropsType> = ({ passwordValue }) => {
  const [message, setMessage] = useState("");
  const [textColor, setTextColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [strength, setStrength] = useState(0);

  const handleSetPasswordStrength = (
    message: string,
    textColor: string,
    bgColor: string,
    strength: number
  ) => {
    setMessage(message);
    setTextColor(textColor);
    setBgColor(bgColor);
    setStrength(strength);
  };

  const passwordStrengthCheck = () => {
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    strengthChecks.length = passwordValue.length >= 6 ? 1 : 0;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    const verifiedList = Object.values(strengthChecks).filter((value) => value);
    return verifiedList;
  };

  useEffect(() => {
    const strength = passwordStrengthCheck();

    if (strength.length >= 4) {
      handleSetPasswordStrength(
        "Strong Password",
        "text-green-400",
        "bg-green-400",
        strength.length
      );
    } else if (strength.length >= 2) {
      handleSetPasswordStrength(
        "Good Password",
        "text-yellow-400",
        "bg-yellow-400",
        strength.length
      );
    } else if (strength.length == 1) {
      handleSetPasswordStrength(
        "Weak Password",
        "text-red-400",
        "bg-red-400",
        strength.length
      );
    } else {
      handleSetPasswordStrength("", "", "", 0);
    }
  }, [passwordValue]);

  return (
    <Fragment>
      <div className="flex items-center justify-between gap-3 mb-1 mt-4 ">
        {Array.from({ length: 6 }).map((_, idx) => {
          return (
            <div
              key={idx}
              className={`${
                !strength
                  ? "bg-gray-200"
                  : idx <= strength
                  ? bgColor
                  : "bg-gray-200"
              } rounded-lg h-1 w-full`}
            />
          );
        })}
      </div>
      <p className={`text-sm text-left mb-6 mt-2 ${textColor}`}>{message}</p>
    </Fragment>
  );
};

export default PasswordRequirement;
