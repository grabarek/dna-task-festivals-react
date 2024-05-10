import { useEffect } from "react";
import { onBrowserEvent, useStoreDispatch } from "./store";
import { Page } from "./pages";
import "./App.css";

export const App = () => {
  const dispatch = useStoreDispatch();

  useEffect(() => {
    const onPopState = () => {
      dispatch(onBrowserEvent());
    };

    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  });

  return (
    <div className="app">
      <div className="screen">
        <Page />
      </div>
    </div>
  );
};
