import { http } from "./http";
import { saveTokens } from "./tokenService";
import { loginParams, registerParams } from "../types/Auth";

export const login = async ({ username, password }: loginParams) => {
  try {
    const response = await http({
      url: "users/login",
      method: "POST",
      body: { username, password },
    });
    if (response.accessToken && response.refreshToken) {
      await saveTokens(response.accessToken, response.refreshToken);
    }

    return response;
  } catch (error) {
    return error;
  }
};

export const register = async ({
  username,
  email,
  password,
  name,
  lastname,
}: registerParams) => {
  try {
    const response = await http({
      url: "auth/register",
      method: "POST",
      body: { username, email, password, name, lastname },
    });

    if (response.accessToken && response.refreshToken) {
      await saveTokens(response.accessToken, response.refreshToken);
    }

    return response;
  } catch (error) {
    return error;
  }
};

export const updateProfile = async ({
  username,
  email,
  name,
  lastname,
  pushToken,
}: registerParams) => {
  try {
    const response = await http({
      url: "auth/update-profile",
      method: "PUT",
      body: { username, email, name, lastname, pushToken },
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const getProfile = async () => {
  try {
    const response = await http({
      url: "users/profile",
      method: "GET",
    });
    return response;
  } catch (error) {
    return error;
  }
};
