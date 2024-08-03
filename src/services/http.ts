import { getStoredToken, storeToken } from "./tokenService";

const baseUrl = "http://192.168.100.23:3000/api";
const accessTokenKey = "accessToken";
const refreshTokenKey = "refreshToken";

interface httpParams {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: any;
  headers?: Record<string, string>;
}

const refreshTokens = async () => {
  try {
    const refreshToken = await getStoredToken(refreshTokenKey);
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await fetch(`${baseUrl}/users/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (response.ok) {
      const tokens = await response.json();
      await storeToken(accessTokenKey, tokens.accessToken);
      await storeToken(refreshTokenKey, tokens.refreshToken);
      return tokens.accessToken;
    } else {
      throw new Error("Failed to refresh token");
    }
  } catch (error) {
    console.error("Error refreshing tokens:", error);
    throw error;
  }
};

export async function http({ url, method, body, headers = {} }: httpParams) {
  try {
    const accessToken = await getStoredToken(accessTokenKey);
    let response = await fetch(`${baseUrl}/${url}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        ...headers,
      },
    });

    if (response.status === 401) {
      const newAccessToken = await refreshTokens();
      // Reenviar a requisição original com o novo token
      response = await fetch(`${baseUrl}/${url}`, {
        method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newAccessToken}`,
          ...headers,
        },
      });
    }

    if (response.ok) {
      return response.json();
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("HTTP error:", error);
    throw error;
  }
}
