import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';

import Navigation from "./src/navigation";
import { AuthProvider } from "./src/provider/AuthProvider";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    TrapBold: require('./assets/fonts/Trap-Bold.otf'),
  });

  if (!fontsLoaded && !!fontError) {
    return null;
  }
  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <StatusBar />
    </>
  );
}
