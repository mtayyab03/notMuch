import React, { useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppLine from "../components/AppLine";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function SearchHistoryScreen(props) {
  const [link, onChangeLink] = useState("");
  const searchHistoryList = [
    {
      id: 1,
      title: "Agartala",
    },
    {
      id: 2,
      title: "Agra",
    },
    {
      id: 3,
      title: "Ahmedabad",
    },
    {
      id: 4,
      title: "Ajmer",
    },
    {
      id: 5,
      title: "Akala",
    },
    {
      id: 6,
      title: "Alappuzha",
    },
    {
      id: 7,
      title: "Akala",
    },
  ];
  return (
    <Screen style={styles.screen}>
      {/* search */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          marginTop: RFPercentage(4),
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ width: "10%" }}
          onPress={() => {
            props.navigation.navigate("BottomTab", { screen: "HomeScreen" });
          }}
        >
          <Image
            style={{
              width: RFPercentage(4),
              height: RFPercentage(4),
            }}
            source={require("../../assets/images/arrrowleftblack.png")}
          />
        </TouchableOpacity>
        <View style={styles.searchmain}>
          <View style={styles.innermain}>
            <Image
              style={styles.img}
              source={require("../../assets/images/Search.png")}
            />

            <TextInput
              style={styles.inputtext}
              onChangeText={onChangeLink}
              value={link}
              placeholder="Search"
              placeholderTextColor={Colors.subtextcolor}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ position: "absolute", right: RFPercentage(2) }}
            >
              <Image
                style={styles.img}
                source={require("../../assets/images/cancelicon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <AppLine />

      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {searchHistoryList.map((item, i) => (
          <View
            key={i}
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                marginTop: RFPercentage(2),
              }}
            >
              <Image
                style={{
                  width: RFPercentage(5),
                  height: RFPercentage(5),
                }}
                source={require("../../assets/images/locarrow.png")}
              />
              <Text
                style={{
                  marginLeft: RFPercentage(1.5),
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(3),
                  color: Colors.blacky,
                }}
              >
                {item.title}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                marginTop: RFPercentage(2),
                height: RFPercentage(0.3),
                backgroundColor: Colors.lightWhite,
                borderRadius: RFPercentage(1),
              }}
            />
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  searchmain: {
    width: "85%",
    backgroundColor: Colors.lightWhite,
    padding: RFPercentage(1),
    borderRadius: RFPercentage(2),
    height: RFPercentage(8),
    justifyContent: "center",
    marginLeft: RFPercentage(1.5),
  },

  innermain: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFPercentage(2),
  },

  img: { width: RFPercentage(3), height: RFPercentage(3) },

  inputtext: {
    width: "100%",
    paddingLeft: RFPercentage(1.5),
    fontSize: RFPercentage(2.4),
    color: Colors.blacky,
    fontFamily: FontFamily.regular,
  },
});
