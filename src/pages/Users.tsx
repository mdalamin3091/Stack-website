import { useState } from "react";
import { useUsersQuery } from "../redux/features/users/usersApi";
import User from "../components/users/User";
import { IUserResponse } from "../types";
import Header from "../components/ui/Header";

const UserList = () => {
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess } = useUsersQuery({
    skip,
    page: currentPage,
  });

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSkip((page - 1) * 10);
  };
  return (
    <>
      <Header />
      <div className="container mx-auto p-0 md:p-4">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-300 py-4">
          User List
        </h2>
        <div className="shadow-table-shadow border border-gray-200 rounded-lg p-5">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 flex items-center gap-2">
                  <input
                    id="vue-checkbox-list"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  User Info
                </th>
                <th scope="col" className="px-6 py-3">
                  About
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {isSuccess &&
                data.data.map((user: IUserResponse) => (
                  <User user={user} key={user.id} />
                ))}
            </tbody>
          </table>
          {isSuccess && data.total_pages > 1 && (
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
                    Page {data.per_page * data.page} of {data.total}
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
          )}
        </div>
      </div>
    </>
  );
};

export default UserList;
