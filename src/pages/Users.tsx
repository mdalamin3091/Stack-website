import { useState } from "react";
import { useUsersQuery } from "../redux/features/users/usersApi";
import User from "../components/users/User";
import { IUserResponse } from "../types";
import LeftArrow from "../assets/icons/LeftArrow";
import RightArrow from "../assets/icons/RightArrow";
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
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 uppercase">
                  #Id
                </th>
                <th scope="col" className="px-6 py-3 uppercase">
                  User
                </th>
                <th scope="col" className="px-6 py-3 uppercase">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 uppercase">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              {isSuccess &&
                data.data.map((user: IUserResponse) => <User user={user} />)}
            </tbody>
          </table>
        </div>
        {isSuccess && data.total_pages > 1 && (
          <div className="mt-4">
            <ul className="flex space-x-2">
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <LeftArrow />
              </button>
              {Array.from({ length: data.total_pages }, (_, i) => (
                <li
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`text-base px-3 py-1 rounded-xl cursor-pointer ${
                    i + 1 === currentPage
                      ? "bg-primary text-white border border-transparent"
                      : "bg-white text-[#333333] border border-secondary-100"
                  }`}
                >
                  {i + 1}
                </li>
              ))}
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === data.total_pages}
              >
                <RightArrow />
              </button>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default UserList;
