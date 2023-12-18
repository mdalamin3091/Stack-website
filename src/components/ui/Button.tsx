type ButtonProps = {
  title: string;
  classes: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ title, classes, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`${classes} inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm`}
    >
      {title}
    </button>
  );
};

export default Button;
