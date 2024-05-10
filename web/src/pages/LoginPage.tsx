import { useMemo, useState } from "react";
import { navigate, setUser, useStoreDispatch } from "../store";
import { Error, Screen } from "../components";
import { login } from "../api";

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
