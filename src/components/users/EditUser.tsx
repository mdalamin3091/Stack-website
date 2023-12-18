import { SubmitHandler } from "react-hook-form";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { addUserSchema } from "../../schemas/authSchema";
import Button from "../ui/Button";
import {
  useEditUserMutation,
  useSingleUserQuery,
} from "../../redux/features/users/usersApi";
import useToastAndApiHandler from "../../hooks/useToastAndApiHandler";
import { IAuthError, IUserDataResponse } from "../../types";

type FormValues = {
  name: string;
  job: string;
};

const EditUser = ({
  setShowModal,
  id,
}: {
  setShowModal: (x: boolean) => void;
  id: number;
}) => {
  // get single user by id
  const { data: userData } = useSingleUserQuery(id);

  // edit user api mutation
  const [editUser, { isSuccess, isError, isLoading, data, error }] =
    useEditUserMutation();
  const name =
    `${userData?.data?.first_name} ${userData?.data?.last_name}` || "";

  const defaultValues = {
    name,
    job: "zion resident",
  };

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const res = await editUser({ id: id, userData: data }).unwrap();
    if (res) {
      setShowModal(false);
    }
  };

  const successMessage = "user updated successfully";

  useToastAndApiHandler<IUserDataResponse, IAuthError>(
    {
      isSuccess,
      isError,
      isLoading,
      data,
      error,
    },
    successMessage
  );

  return (
    <Form
      submitHandler={onSubmit}
      defaultValues={defaultValues}
      resolver={yupResolver(addUserSchema)}
    >
      <FormInput
        type="text"
        label="Name"
        placeholder="User Name"
        name="name"
        disabled={isLoading}
      />
      <FormInput
        type="text"
        label="Job"
        placeholder="User job"
        name="job"
        disabled={isLoading}
      />
      <div className="pt-3 flex justify-center gap-3">
        <Button
          title="Cancel"
          type="button"
          classes="bg-red-500 hover:bg-red-700 focus:ring-red-500"
          onClick={() => setShowModal(false)}
          disabled={isLoading}
        />
        <Button
          title="Update"
          type="submit"
          classes="mt-3 bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-500 sm:mt-0"
          disabled={isLoading}
        />
      </div>
    </Form>
  );
};

export default EditUser;
