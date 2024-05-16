import { useMemo, useState } from "react";
import { navigate, setUser, useStoreDispatch } from "../store";
import { Error } from "../components/Error/Error";
import { Screen } from "../components/Screen/Screen";
import { login } from "../api";
import { ButtonVariant } from "../components/Button/Button";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>();
  const dispatch = useStoreDispatch();

  const actions = useMemo(
    () => [
      {
        label: "login",
        callback: async () => {
          try {
            const user = await login(email, password);
            dispatch(setUser(user));
            dispatch(navigate("/home"));
          } catch (e) {
            setError(String(e));
          }
        },
      },
      {
        label: "don't have an account yet?",
        callback: () => dispatch(navigate("/register")),
        variant: ButtonVariant.EXTRA
      }
    ],
    [email, password],
  );

  return (
    <Screen
      title="Login"
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
