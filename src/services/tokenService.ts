// tokenService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const accessTokenKey = 'accessToken';
const refreshTokenKey = 'refreshToken';

export const saveTokens = async (accessToken: string, refreshToken: string) => {
  try {
    await AsyncStorage.setItem(accessTokenKey, accessToken);
    await AsyncStorage.setItem(refreshTokenKey, refreshToken);
  } catch (error) {
    console.error('Failed to save tokens:', error);
    throw error;
  }
};

export const getStoredToken = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(`Failed to get ${key}:`, error);
    throw error;
  }
};

export const storeToken = async (key: string, token: string) => {
  try {
    await AsyncStorage.setItem(key, token);
  } catch (error) {
    console.error(`Failed to store ${key}:`, error);
    throw error;
  }
};

export const clearTokens = async () => {
  try {
    await AsyncStorage.removeItem(accessTokenKey);
    await AsyncStorage.removeItem(refreshTokenKey);
  } catch (error) {
    console.error('Failed to clear tokens:', error);
    throw error;
  }
};
