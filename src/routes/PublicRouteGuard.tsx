import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { selectToken } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/app/hooks";
interface Props {
  children: ReactNode;
}
const PublicRouteGuard: FC<Props> = ({ children }) => {
  const token = useAppSelector(selectToken);

  if (!token) {
    return children;
  } else {
    return <Navigate to="/users" />;
  }
};

export default PublicRouteGuard;
