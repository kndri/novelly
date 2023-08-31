import React from "react";
import {
  View,
  Text
} from "react-native";
export default ({ title, focused }: { title: string; focused: boolean }) => {
  return (
    <Text
      style={{
        marginBottom: 5,
        color: "rgb(143, 155, 179)",
        fontSize: 10,
      }}
    >
      {title}
    </Text>
  );
};
