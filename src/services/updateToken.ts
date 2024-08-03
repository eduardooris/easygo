import { http } from "./http";

export const updateToken = async (pushToken: string) => {
  try {
    const response = await http({
      url: "users",
      method: "PUT",
      body: { pushToken },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
