import { ComponentType } from "react";
import { useStoreSelector, useStoreDispatch, navigate, Page as PageType, PAGES } from "../store";
import { LandingPage } from "./LandingPage";
import { RegistrationPage } from "./RegistrationPage";
import { LoginPage } from "./LoginPage";
import { OnboardingPage } from "./OnboardingPage";
import { HomePage } from "./HomePage";
import { TopUpPage } from "./TopUpPage";
import { ErrorPage } from "./ErrorPage";
import { LogoutPage } from "./LogoutPage";

type AuthPageType = Partial<typeof Page>;

const PAGE_COMPONENT: Record<PageType, ComponentType> = {
  [PAGES.LANDING]: LandingPage,
  [PAGES.LOGIN]: LoginPage,
  [PAGES.ONBOARDING]: OnboardingPage,
  [PAGES.HOME]: HomePage,
  [PAGES.REGISTER]: RegistrationPage,
  [PAGES.TOP_UP]: TopUpPage,
  [PAGES.ERROR]: ErrorPage,
  [PAGES.LOGOUT]: LogoutPage,
};

export const Page = () => {
  const page = useStoreSelector((store) => store.router.page);
  const user = useStoreSelector((store) => store.user.data);
  const dispatch = useStoreDispatch();

  const authRequiredPages: AuthPageType[] = [PAGES.ONBOARDING, PAGES.HOME, PAGES.TOP_UP];
  const requiresAuth = authRequiredPages.includes(page as AuthPageType);
  if (requiresAuth && !user) {
    dispatch(navigate("/login"));
    return null;
  }
  if (requiresAuth && user && !user.isOnboarded) {
    dispatch(navigate("/onboarding"));
  }

  const PageComponent = PAGE_COMPONENT[page] || ErrorPage;
  return <PageComponent />;
};
