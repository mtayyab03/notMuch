import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//Components
import Screen from "../components/Screen";
import MainHeader from "../components/MainHeader";
import InputIcon from "../components/InputIcon";
import FaQ from "../components/FaQ";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function FAQScreen(props) {
  const [menuid, setmenuid] = useState("true");
  const faqList = [
    {
      id: 1,
      title: "Is instalalation offered for all services?",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Can i trust on vendors ?",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Are there any hidden charges ?",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Can i cancel a booking?",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      title: "Do you also sell products ?",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      title: "How can i reach to your help center?",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <Screen style={styles.screen}>
      <View style={{ marginTop: RFPercentage(3) }} />
      <MainHeader
        imageSource={require("../../assets/images/arrrowleftblack.png")}
        title="FAQ’s"
        selectColor={Colors.blacky}
        onpress={() => {
          props.navigation.navigate("BottomTab", {
            screen: "Profilescreen",
          });
        }}
      />
      <View style={{ marginTop: RFPercentage(2) }} />
      <InputIcon
        title="Search"
        imageSource={require("../../assets/images/Search.png")}
      />
      <View style={{ marginTop: RFPercentage(3) }} />
      {faqList.map((item, i) => (
        <FaQ key={i} title={item.title} subtitle={item.subtitle} />
      ))}
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
});
