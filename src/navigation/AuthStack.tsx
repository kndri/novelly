import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ForgetPassword from "../screens/auth/ForgetPassword";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Welcome from "../screens/auth/Welcome";

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      {/* <AuthStack.Screen name="Register" component={Register} /> */}
      {/* <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} /> */}
    </AuthStack.Navigator>
  );
};

export default Auth;
