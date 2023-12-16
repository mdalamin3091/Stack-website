import { useState } from "react";
import { useUsersQuery } from "../redux/features/users/usersApi";
import User from "../components/users/User";
import { IUserDataResponse } from "../types";
import Header from "../components/ui/Header";
import Pagination from "../components/ui/Pagination";
import ImportIcon from "../assets/icons/ImportIcon";
import PlusIcon from "../assets/icons/PlusIcon";

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
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-300 py-4">
            Users
          </h2>
          <div className="flex items-center justify-between gap-2">
            <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm gap-2">
              <ImportIcon /> Import
            </button>
            <button className="inline-flex items-center justify-center px-4 py-2 text-white font-medium leading-6 whitespace-no-wrap bg-primary border border-gray-200 rounded-md shadow-sm gap-2">
              <PlusIcon /> Add User
            </button>
          </div>
        </div>
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
                data.data.map((user: IUserDataResponse) => (
                  <User user={user} key={user.id} />
                ))}
            </tbody>
          </table>
          {isSuccess && data.total_pages > 1 && (
            <Pagination
              data={data}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default UserList;
