import { FC } from "react";
import { IUserResponse } from "../../types";

interface PropsType {
  data: IUserResponse;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const Pagination: FC<PropsType> = ({ data, currentPage, handlePageChange }) => {
  return (
    <div className="mt-4">
      <ul className="flex space-x-2 items-center justify-between">
        <button
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none disabled:bg-gray-200 disabled:cursor-not-allowed"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex items-center justify-between gap-2">
          <p>
            Page {data.page} of {data.total_pages}
          </p>
        </div>
        <button
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none disabled:bg-gray-200  disabled:cursor-not-allowed"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === data.total_pages}
        >
          Next
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
