import { Image, StyleSheet } from "react-native";

interface AvatarProps {
  uri: string;
  size: "sm" | "md" | "lg";
}
const baseImageUrl = "https://easygoimage.s3.sa-east-1.amazonaws.com";
const avatarMock = "https://mighty.tools/mockmind-api/content/human/75.jpg";
export const Avatar = ({ uri, size }: AvatarProps) => {
  const styleSize = sizes[size] || sizes.md;
  return (
    <Image
      source={{ uri: uri ? `${baseImageUrl}/${uri}` : avatarMock }}
      style={{ ...styleSize }}
    />
  );
};

const style = StyleSheet.create({
  avatar: {
    borderRadius: 100,
  },
});

const sizes = StyleSheet.create({
  sm: {
    width: 50,
    height: 50,
    ...style.avatar,
  },
  md: {
    width: 75,
    height: 77,
    ...style.avatar,
  },
  lg: {
    width: 100,
    height: 100,
    ...style.avatar,
  },
});
