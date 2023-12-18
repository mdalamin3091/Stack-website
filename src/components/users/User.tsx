import { FC, useEffect, useState } from "react";
import { IUserDataResponse } from "../../types";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import Modal from "../modal/Modal";
import EditUser from "./EditUser";
import DeleteModal from "../modal/DeleteModal";
import Checkbox from "../forms/Checkbox";

interface PropsType {
  user: IUserDataResponse;
  checked: boolean;
}

const User: FC<PropsType> = ({ user, checked }) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <>
      <tr className="bg-white border-b">
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2">
          <Checkbox
            isChecked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
          <div className="flex items-center gap-3">
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-12 h-12 rounded-2xl"
            />
            <div>
              <p className="text-secondary-400 font-semibold">
                {user.first_name} {user.last_name}
              </p>
              <p className="text-secondary-400">{user.email}</p>
            </div>
          </div>
        </td>

        <td className="px-6 py-4 text-secondary-400">
          <p className="font-semibold">{user.email}</p>
          <p>
            {user.first_name} {user.last_name}
          </p>
        </td>
        <td className="px-6 py-4 text-secondary-400 font-semibold">
          <span className="p-2 rounded-full bg-success-50 text-[12px]">
            Customer
          </span>
        </td>
        <td className="px-6 py-4 flex items-center justify-start">
          <span
            className="p-2 cursor-pointer"
            onClick={() => setDeleteModal(true)}
          >
            <DeleteIcon />
          </span>
          <span
            className="p-2 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <EditIcon />
          </span>
        </td>
      </tr>
      <Modal
        title="Update User"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <EditUser id={user.id} setShowModal={setShowModal} />
      </Modal>
      <DeleteModal
        userId={user.id}
        showModal={deleteModal}
        setShowModal={setDeleteModal}
      />
    </>
  );
};

export default User;
