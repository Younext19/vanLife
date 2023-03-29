import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Signup() {
  function signUpContinue() {
    const data = {
      fullName: fullName,
      mail: mail,
      pw: password,
    };
    console.log(data);
  }
  const navigation = useNavigation();
  const [fullName, setfullName] = useState("");
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");

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
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Signup</Text>

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
            style={{
              width: "80%",
              borderBottomWidth: 1,
              marginLeft: 10,
              fontSize: 16,
            }}
            placeholder={"Full Name"}
            onChangeText={(v) => {
              setfullName(v);
            }}
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
          <MaterialCommunityIcons name="email" color={"#444444"} size={22} />

          <TextInput
            style={{
              width: "80%",
              borderBottomWidth: 1.5,
              marginLeft: 10,
              fontSize: 16,
            }}
            placeholder={"example@gmail.com"}
            onChangeText={(v) => {
              setmail(v);
            }}
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
            style={{
              width: "80%",
              borderBottomWidth: 1,
              marginLeft: 10,
              fontSize: 16,
            }}
            placeholder={"Password"}
            secureTextEntry={true}
            onChangeText={(v) => {
              setpassword(v);
            }}
          />
        </View>
        <Text style={{ fontSize: 13 }}>
          By signing in you're agree to our Terms & Conditions and Privacy
          Policy
        </Text>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              width: 300,
              height: 40,
              backgroundColor: "#3066BE",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              flexDirection: "row",
              marginTop: 20,
            }}
            onPress={() => {
              // HNA TROH UNE AUTRE PAGE
              navigation.navigate("BottomNavigation", { screen: "Home" });
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, color: "white" }}>
              Continue
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              marginTop: 15,
              color: "#9DC08B",
            }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Joined us before? Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
