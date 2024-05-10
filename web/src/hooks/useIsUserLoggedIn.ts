import { navigate, useStoreDispatch, useStoreSelector } from "../store";
import { useEffect } from "react";

export const useIsUserLoggedIn = () => {
  const user = useStoreSelector((store) => store.user.data);
  const dispatch = useStoreDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(navigate("/login"));
      return;
    }
  }, [user]);

  return user;
};
