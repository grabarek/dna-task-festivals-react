import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

export { store } from "./store";
export { setUser, updateBalance } from "./user";
export { navigate, onBrowserEvent, PAGES, type Page } from "./router";

export const useStoreDispatch = useDispatch.withTypes<AppDispatch>();
export const useStoreSelector = useSelector.withTypes<RootState>();
