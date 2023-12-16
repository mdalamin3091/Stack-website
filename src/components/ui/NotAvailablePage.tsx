import { FC } from "react";
import { Link } from "react-router-dom";

interface PropsType {
  title: string;
}

const NotAvailablePage: FC<PropsType> = ({ title }) => {
  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        {title} Page Not Available
      </h2>
      <p className="text-gray-600 mb-4">
        Sorry, the page you are looking for is not available at the moment.
        Please try again later.
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotAvailablePage;
