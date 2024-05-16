import { useEffect } from "react";
import { onBrowserEvent, useStoreDispatch } from "./store";
import { Navbar } from "./components/Navbar/Navbar";
import { Page } from "./pages";

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
        <Navbar />
        <Page />
    </div>
  );
};
