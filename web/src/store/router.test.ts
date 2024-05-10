import { getPageFromUrl, PAGES } from "./router";
import reducer, { navigate } from "./router";

describe("router", () => {
  describe("getPageFromUrl", () => {
    it.each([
      ["https://domain.com/", PAGES.LANDING],
      ["https://domain.com/start", PAGES.LANDING],
      ["https://domain.com/register", PAGES.REGISTER],
      ["https://domain.com/sign-up", PAGES.REGISTER],
      ["https://domain.com/login", PAGES.LOGIN],
      ["https://domain.com/sign-in", PAGES.LOGIN],
      ["https://domain.com/home", PAGES.HOME],
      ["https://domain.com/top-up", PAGES.TOP_UP],
      ["https://domain.com/not-found", PAGES.ERROR],
    ])("should return page name based on current url %s", (url, page) => {
      jest
        .spyOn(global.window, "location", "get")
        .mockReturnValue(new URL(url) as unknown as Location);

      expect(getPageFromUrl()).toEqual(page);
    });
  });

  describe("navigate", () => {
    it("should update current page", () => {
      expect(reducer({ page: PAGES.LANDING }, navigate("/login"))).toEqual({
        page: PAGES.LOGIN,
      });
    });

    it("should update url", () => {
      const pushStateSpy = jest.spyOn(global.window.history, "pushState");

      reducer({ page: PAGES.LANDING }, navigate("/login"));

      expect(pushStateSpy).toHaveBeenCalledWith(
        undefined,
        "Festivals",
        "/login",
      );
    });
  });
});
