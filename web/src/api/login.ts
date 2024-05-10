import { User } from "#contract/user";
import { BASE_URL } from "./config";

export const login = async (email: string, password: string): Promise<User> => {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const result = await response.json();
  if (response.status === 200) {
    return result;
  } else {
    throw new Error(result.error);
  }
};
