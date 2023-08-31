import React from "react";
import {
  View,
  Text
} from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  return (
<View>
  <Text>About Screen</Text>
</View>
  );
}
