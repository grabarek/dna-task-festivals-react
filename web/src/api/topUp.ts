import { BASE_URL } from "./config";

export const topUp = async (
  userId: string,
  amount: number,
): Promise<number> => {
  const response = await fetch(`${BASE_URL}/users/account/top-up`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, amount }),
  });
  const result = await response.json();
  if (response.status === 200) {
    return result.newBalance;
  } else {
    throw new Error(result.error);
  }
};
