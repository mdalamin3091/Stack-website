import Checkmark from "../../assets/icons/Checkmark";

type CheckboxPropsTypes = {
  isChecked?: boolean;
  isHeader?: boolean;
  onChange?: () => void;
};

const Checkbox = ({ isChecked, onChange, isHeader }: CheckboxPropsTypes) => {
  return (
    <label className="flex items-center mr-1 cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={onChange}
      />
      <div
        className={`w-6 h-6 border-2 rounded-lg flex items-center justify-center ${
          isChecked ? "border-brand-600" : "border-gray-400"
        }`}
      >
        {isChecked && isHeader && (
          <span className="block w-3 h-0.5 bg-primary"></span>
        )}
        {isChecked && !isHeader && <Checkmark />}
      </div>
    </label>
  );
};

export default Checkbox;
