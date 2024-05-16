import { useMemo, useState } from "react";
import { navigate, setUser, useStoreDispatch } from "../store";
import { Error } from "../components/Error/Error";
import { Screen } from "../components/Screen/Screen";
import { ButtonVariant } from "../components/Button/Button";
import { register } from "../api";

export const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>();
  const dispatch = useStoreDispatch();

  const actions = useMemo(
    () => [
      {
        label: "register",
        callback: async () => {
          try {
            const user = await register(email, password);
            dispatch(setUser(user));
            dispatch(navigate("/home"));
          } catch (e) {
            setError(String(e));
          }
        },
        variant: ButtonVariant.PRIMARY,
      },
      {
        label: "already have an account?",
        callback: () => dispatch(navigate("/login")),
        variant: ButtonVariant.EXTRA
      }
    ],
    [email, password],
  );

  return (
    <Screen
      title="Register"
      content={
        <>
          <form className="form">
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              type="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password: </label>
            <input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <Error message={error} />
        </>
      }
      actions={actions}
    />
  );
};
