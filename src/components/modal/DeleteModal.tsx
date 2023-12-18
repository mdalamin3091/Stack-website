import Modal from "./Modal";
import Button from "../ui/Button";
import { useDeleteUserMutation } from "../../redux/features/users/usersApi";
import { useEffect } from "react";
import toast from "react-hot-toast";

const DeleteModal = ({
  userId,
  showModal,
  setShowModal,
}: {
  userId: number;
  showModal: boolean;
  setShowModal: (x: boolean) => void;
}) => {
  const [deleteUser, { isSuccess, isLoading }] = useDeleteUserMutation();

  const handleDelete = (Id: number) => {
    deleteUser(Id).unwrap();
  };
  const successMessage = "user deleted successfully";
  useEffect(() => {
    if (isSuccess) {
      setShowModal(false);
      toast.success(successMessage);
    }
  }, [isSuccess]);

  return (
    <Modal
      title="Are you sure!"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div className="pt-3 flex justify-center gap-3">
        <Button
          title="No"
          type="button"
          classes="mt-3 bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-500 sm:mt-0"
          onClick={() => setShowModal(false)}
        />
        <Button
          title="Yes"
          type="button"
          classes="bg-red-500 hover:bg-red-700 focus:ring-red-500 mt-3 sm:mt-0"
          onClick={() => handleDelete(userId)}
          disabled={isLoading}
        />
      </div>
    </Modal>
  );
};

export default DeleteModal;
