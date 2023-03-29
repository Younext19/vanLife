import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
      }}
    >
      <MaterialCommunityIcons name="face-man-profile" size={100} />
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Younext Adams</Text>
      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          borderRadius: 8,
          backgroundColor: "#9DC08B",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Rent My Van
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          borderRadius: 8,
          backgroundColor: "#9DC08B",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Plan a trip
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          borderRadius: 8,
          backgroundColor: "#DF6765",
        }}
        onPress={() => {
          console.log("Disconnect");
          navigation.navigate("AuthNavigator");
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Disconnect
        </Text>
      </TouchableOpacity>
    </View>
  );
}
