import { navigate, useStoreDispatch } from "../store";
import { Screen } from "../components/Screen/Screen";

export const ErrorPage = () => {
  const dispatch = useStoreDispatch();

  const actions = [{ label: "back", callback: () => dispatch(navigate("/")) }];

  return (
    <Screen
      title="Error"
      content={<p>Something went wrong :(</p>}
      actions={actions}
    />
  );
};
