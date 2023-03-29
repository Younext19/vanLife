import React from "react";
import { Image, TextInput } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { isConnected } from "../../Utils/Data";

export default function Login() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* <Image/> */}
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../../../assets/vanLogo.png")}
        />
      </View>

      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Login</Text>
        <View
          style={{
            width: "100%",
            height: 40,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <MaterialCommunityIcons name="email" color={"#444444"} size={22} />

          <TextInput
            style={{
              width: "80%",
              borderBottomWidth: 1,
              padding: 3,
              marginLeft: 10,
            }}
            placeholder={"example@gmail.com"}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: 40,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Ionicons name="lock-closed" color={"#444444"} size={22} />

          <TextInput
            style={{ width: "80%", borderBottomWidth: 1.5, marginLeft: 10 }}
            placeholder={"Password"}
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            marginEnd: 50,
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#5C9AFF" }}>
            Forgot Password?
          </Text>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            width: 300,
            height: 40,
            backgroundColor: "#3066BE",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
          }}
          onPress={() => {
            console.log("Login");
            navigation.navigate("BottomNavigation", { screen: "Home" });
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17, color: "white" }}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <View style={{ width: "30%", height: 1, backgroundColor: "black" }} />
          <View>
            <Text
              style={{ width: 50, textAlign: "center", fontWeight: "bold" }}
            >
              OR
            </Text>
          </View>
          <View style={{ width: "30%", height: 1, backgroundColor: "black" }} />
        </View>

        <TouchableOpacity
          style={{
            width: 300,
            height: 40,
            backgroundColor: "#9DC08B",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            flexDirection: "row",
            marginTop: 20,
          }}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17, color: "white" }}>
            Register a new account
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
