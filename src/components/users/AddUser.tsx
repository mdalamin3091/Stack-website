import { SubmitHandler } from "react-hook-form";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { addUserSchema } from "../../schemas/authSchema";
import Button from "../ui/Button";
import { useAddUserMutation } from "../../redux/features/users/usersApi";
import useToastAndApiHandler from "../../hooks/useToastAndApiHandler";
import { IAuthError, IUserDataResponse } from "../../types";

type FormValues = {
  name: string;
  job: string;
};

const AddUser = ({ setShowModal }: { setShowModal: (x: boolean) => void }) => {
  const [addUser, { isSuccess, isError, isLoading, data, error }] =
    useAddUserMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const res = await addUser(data).unwrap();
    if (res) {
      setShowModal(false);
    }
  };

  const successMessage = "user added successfully";

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
    <Form submitHandler={onSubmit} resolver={yupResolver(addUserSchema)}>
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
          title="Submit"
          type="submit"
          classes="mt-3 bg-yellow-500  hover:bg-yellow-700 focus:ring-yellow-500 sm:mt-0"
          disabled={isLoading}
        />
      </div>
    </Form>
  );
};

export default AddUser;
