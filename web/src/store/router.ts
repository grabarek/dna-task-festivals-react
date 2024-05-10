import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const PAGES = {
  LANDING: "landing",
  LOGIN: "login",
  REGISTER: "register",
  HOME: "home",
  TOP_UP: "top-up",
  ERROR: "error",
} as const;

export type Page = (typeof PAGES)[keyof typeof PAGES];

const ROUTING = {
  "/": PAGES.LANDING,
  "/start": PAGES.LANDING,
  "/register": PAGES.REGISTER,
  "/sign-up": PAGES.REGISTER,
  "/login": PAGES.LOGIN,
  "/sign-in": PAGES.LOGIN,
  "/home": PAGES.HOME,
  "/top-up": PAGES.TOP_UP,
} satisfies Record<string, Page>;

export type Route = keyof typeof ROUTING;

const isRoute = (arg: string): arg is Route => {
  return Object.keys(ROUTING).includes(arg);
};

export const getPageFromUrl = (): Page => {
  const url = window.location.pathname;

  if (isRoute(url)) {
    return ROUTING[url];
  }

  return PAGES.ERROR;
};

export interface RouterState {
  page: Page;
}

const initialState: RouterState = {
  page: getPageFromUrl(),
};

export const routerSlice = createSlice({
  name: "router",
  initialState,
  reducers: {
    navigate: (state, action: PayloadAction<Route>) => {
      const route = action.payload;
      window.history.pushState(undefined, "Festivals", route);
      state.page = ROUTING[route];
    },
    onBrowserEvent: (state) => {
      state.page = getPageFromUrl();
    },
  },
});

// Action creators are generated for each case reducer function
export const { navigate, onBrowserEvent } = routerSlice.actions;

export default routerSlice.reducer;
