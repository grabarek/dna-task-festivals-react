import { useMemo, useState } from "react";
import { navigate, updateBalance, useStoreDispatch } from "../store";
import { Error } from "../components/Error/Error";
import { Screen } from "../components/Screen/Screen";
import { ButtonVariant } from "../components/Button/Button";
import { useIsUserLoggedIn } from "../hooks";
import { topUp } from "../api";

export const TopUpPage = () => {
  const user = useIsUserLoggedIn();
  const [amount, setAmount] = useState(10);
  const [error, setError] = useState<string>();
  const dispatch = useStoreDispatch();

  const actions = useMemo(
    () => [
      {
        label: "confirm",
        callback: async () => {
          if (!user) {
            return;
          }
          try {
            const newBalance = await topUp(user.id, amount);
            dispatch(updateBalance(newBalance));
            dispatch(navigate("/home"));
          } catch (e) {
            setError(String(e));
          }
        },
      },
      {
        label: "back",
        callback: () => {
          dispatch(navigate("/home"));
        },
        variant: ButtonVariant.SECONDARY,
      },
    ],
    [user, amount],
  );

  if (!user) {
    return null;
  }

  return (
    <Screen
      title="Top up your account"
      content={
        <>
          <form className="form">
            <label htmlFor="amount">Amount: </label>
            <input
              name="amount"
              type="number"
              autoFocus
              min={5}
              step={1}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </form>
          <Error message={error} />
        </>
      }
      actions={actions}
    />
  );
};
