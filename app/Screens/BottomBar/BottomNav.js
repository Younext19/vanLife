import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./Home";
import Profile from "./Profile";

export default function BottomNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          activeTintColor: "#9DC08B",
          keyboardHidesTabBar: true,
          headerShown: false,
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Accueil",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" color={"#191825"} size={30} />
            ),
          }}
          name="Home"
          component={Home}
        />

        <Tab.Screen
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="face-man-profile"
                color={"#191825"}
                size={30}
              />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </View>
  );
}
