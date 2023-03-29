import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/Screens/Auth/Login";
import Signup from "./app/Screens/Auth/Signup";
import BottomNavigation from "./app/Screens/BottomBar/BottomNav";
import AuthNavigator from "./app/Screens/Auth/AuthNavigator";
import { isConnected } from "./app/Utils/Data";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // If Connected : Go to Home ELSE :  go to Login
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
