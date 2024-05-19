import { logout, useStoreDispatch, navigate } from "../store";

export const LogoutPage = () => {
  const dispatch = useStoreDispatch();

  dispatch(logout());
  dispatch(navigate("/"));

  return null;
};
