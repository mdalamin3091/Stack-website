import { useState } from "react";
import { useUsersQuery } from "../redux/features/users/usersApi";
import User from "../components/users/User";
import { IUserDataResponse, IUserResponse } from "../types";
import Header from "../components/ui/Header";
import Pagination from "../components/ui/Pagination";
import ImportIcon from "../assets/icons/ImportIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import Modal from "../components/modal/Modal";
import AddUser from "../components/users/AddUser";
import TableSkeleton from "../components/ui/TableSkeleton";
import toast from "react-hot-toast";
import Checkbox from "../components/forms/Checkbox";
import DownArrow from "../assets/icons/DownArrow";

const UserList = () => {
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const { data, isSuccess, isLoading } = useUsersQuery({
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
      <div className="container mx-auto md:p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-300 py-4">
            Users
          </h2>
          <div className="flex items-center justify-between gap-2">
            <button
              className="default-btn gap-2"
              onClick={() =>
                toast.error("Unable to import resources at the moment.")
              }
            >
              <ImportIcon /> Import
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="default-btn bg-primary text-white hover:bg-primary"
            >
              <PlusIcon /> Add User
            </button>
          </div>
        </div>
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <div className="shadow-table-shadow border border-gray-200 rounded-lg p-5 overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-500 bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 flex items-center gap-2">
                    <Checkbox
                      isChecked={checked}
                      onChange={() => setChecked((prev) => !prev)}
                      isHeader={true}
                    />
                    User Info <DownArrow />
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
                    <User user={user} checked={checked} key={user.id} />
                  ))}
              </tbody>
            </table>
            {isSuccess && data.total_pages > 1 && (
              <Pagination
                data={data as IUserResponse}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            )}
            <Modal
              title="Add User"
              showModal={showModal}
              setShowModal={setShowModal}
            >
              <AddUser setShowModal={setShowModal} />
            </Modal>
          </div>
        )}
      </div>
    </>
  );
};

export default UserList;
