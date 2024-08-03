import * as Clipboard from "expo-clipboard";

export const CopyText = async (text: string) => {
  try {
    await Clipboard.setStringAsync(`http://192.168.100.23:3001/${text}`);
  } catch (error) {
    throw error;
  }
};
