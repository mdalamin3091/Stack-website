import { FC } from "react";
import { IUserDataResponse } from "../../types";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";

interface PropsType {
  user: IUserDataResponse;
}

const User: FC<PropsType> = ({ user }) => {
  return (
    <tr className="bg-white border-b ">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2">
        <input
          id="vue-checkbox-list"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
          Random Sticker Label
        </span>
      </td>
      <td className="px-6 py-4 flex items-center justify-start">
        <span className="p-2 cursor-pointer">
          <DeleteIcon />
        </span>
        <span className="p-2 cursor-pointer">
          <EditIcon />
        </span>
      </td>
    </tr>
  );
};

export default User;
