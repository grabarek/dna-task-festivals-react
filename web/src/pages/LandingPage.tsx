import { navigate, useStoreDispatch } from "../store";
import { Screen } from "../components";

export const LandingPage = () => {
  const dispatch = useStoreDispatch();

  const actions = [
    { label: "login", callback: () => dispatch(navigate("/login")) },
    {
      label: "register",
      callback: () => dispatch(navigate("/register")),
    },
  ];

  return (
    <Screen
      title="Fantastic Festivals Web App!"
      content={<h2>Welcome!</h2>}
      actions={actions}
    />
  );
};
