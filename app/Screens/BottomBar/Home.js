import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Linking,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import { Text, View, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

import { DATA, vanData } from "../../Utils/Data";
import VanLocationDetails from "../Details/VanLocationDetails";

export default function Home() {
  const [selectedId, setSelectedId] = useState();
  const [selectedVanItem, setselectedVanItem] = useState();
  const [ModalVisible, setModalVisible] = useState(false);
  const [SelectedVan, setSelectedVan] = useState(null);
  const [ShowSearchBar, setShowSearchBar] = useState(true);
  const [SearchValue, setSearchValue] = useState("");
  const [NewVanData, setNewVanData] = useState(vanData);

  useEffect(() => {
    searchData(SearchValue);
  }, [SearchValue]);

  const searchData = (text) => {
    if (text) {
      const newData = vanData.filter(function (item) {
        const itemData = item.vanTitle
          ? item.vanTitle.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      setNewVanData(newData);
    } else {
      setNewVanData(vanData);
    }
  };

  const SearchIcon = ({}) => (
    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Louer un Van</Text>
      <AntDesign
        name="search1"
        color={"#444444"}
        size={30}
        onPress={() => {
          console.log("show bar");
          setShowSearchBar(!ShowSearchBar);
        }}
      />
    </View>
  );
  const SearchBar = ({}) => (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
      }}
    >
      <TextInput
        style={{ width: "60%", fontSize: 18, padding: 5 }}
        placeholder={"Type your search here"}
        onChangeText={(text) => setSearchValue(text)}
        value={SearchValue}
        keyboardType="default"
      />
      <AntDesign
        name="search1"
        color={"#444444"}
        size={30}
        onPress={() => {
          console.log("show bar");
          setShowSearchBar(!ShowSearchBar);
        }}
      />
    </View>
  );
  const VanItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedVan(item);
        setModalVisible(true);
      }}
      style={{
        height: 80,
        width: "100%",
        borderRadius: 8,
        backgroundColor: "#B4C8EE",
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Image
        source={item.img}
        style={{ width: 60, height: 60, borderRadius: 8 }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>
            {item.vanTitle}
          </Text>
          <Text style={{ fontSize: 20 }}>{item.location}</Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.price}/J</Text>
      </View>
    </TouchableOpacity>
  );
  const Item = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        console.log("item");
      }}
      style={{
        height: 200,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={item.img}
        style={{ width: 180, height: 130, borderRadius: 8 }}
        alt=""
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, margin: 20 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={ModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!ModalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              width: 300,
            }}
          >
            <Image
              source={SelectedVan?.img}
              style={{ width: 150, height: 150 }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Brand : {SelectedVan?.vanTitle}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Location : {SelectedVan?.location}
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL(SelectedVan.link)}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                Lien de l'offre
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Prix : {SelectedVan?.price}
            </Text>

            <TouchableOpacity
              onPress={() => {
                console.log(SelectedVan);
                setModalVisible(!ModalVisible);
              }}
              style={{
                backgroundColor: "#2196F3",
                width: 100,
                height: 30,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>
          Find your {"\n"}
          destination
        </Text>

        <Ionicons name="notifications" color={"#444444"} size={30} />
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return <Item item={item} onPress={() => setSelectedId(item.id)} />;
        }}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        horizontal={true}
        style={{ flexGrow: 0 }}
      />
      {ShowSearchBar ? <SearchIcon /> : <SearchBar />}

      <FlatList
        data={NewVanData}
        renderItem={({ item }) => {
          return (
            <VanItem
              item={item}
              onPress={() => setselectedVanItem(vanItem.id)}
            />
          );
        }}
        keyExtractor={(vanitem) => vanitem.id}
        scrollEnabled={true}
        ListFooterComponent={<View style={{ height: 20 }} />}
      />
    </View>
  );
}
