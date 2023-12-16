import { requirements } from "@/constants";
import { FC, Fragment } from "react";

interface PropsType {
  passwordValue: string | undefined;
}

const PasswordRequirement: FC<PropsType> = ({ passwordValue }) => {
  function getStrength() {
    let multiplier = passwordValue && passwordValue.length > 5 ? 0 : 1;

    requirements.forEach((requirement) => {
      if (!requirement.re.test(passwordValue as string)) {
        multiplier += 1;
      }
    });

    return Math.round(
      Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10)
    );
  }

  const strength = getStrength();
  const color =
    strength === 100
      ? "bg-green-400 text-green-400"
      : strength > 50
      ? "bg-yellow-400 text-yellow-400"
      : strength > 10
      ? "bg-red-400"
      : "bg-secondary";

  return (
    <Fragment>
      <div className="flex items-center justify-between gap-3 mb-1 mt-4 ">
        {requirements.map((_, index) => (
          <div key={index} className={`${color} rounded-lg h-1 w-full`} />
        ))}
      </div>
      <p
        className={` text-sm text-left mb-6 ${
          strength === 100
            ? " text-green-400"
            : strength > 50
            ? " text-yellow-400"
            : strength > 10
            ? "text-red-400"
            : ""
        }`}
      >
        {strength === 100
          ? "Strong Password"
          : strength > 50
          ? "Good Password"
          : strength > 10
          ? "Weak Password"
          : null}
      </p>
    </Fragment>
  );
};

export default PasswordRequirement;
