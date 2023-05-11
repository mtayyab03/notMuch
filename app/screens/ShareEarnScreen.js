import React, { useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function ShareEarnScreen(props) {
  return (
    <Screen style={styles.screen}>
      <TouchableOpacity
        style={{ width: "90%", position: "absolute", top: RFPercentage(6) }}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("BottomTab", {
            screen: "Profilescreenn",
          });
        }}
      >
        <Image
          style={{
            width: RFPercentage(3.5),
            height: RFPercentage(3.5),
          }}
          source={require("../../assets/images/arrrowleftblack.png")}
        />
      </TouchableOpacity>
      <Image
        style={{
          width: RFPercentage(30),
          height: RFPercentage(30),
        }}
        source={require("../../assets/images/shareearnimg.png")}
      />
      <View
        style={{ width: "70%", alignItems: "center", justifyContent: "center" }}
      >
        <Text
          style={{
            fontSize: RFPercentage(4),
            color: Colors.blacky,
            fontFamily: FontFamily.bold,
            textAlign: "center",
          }}
        >
          Share with friends
        </Text>
        <View style={{ marginTop: RFPercentage(2) }} />
        <Text
          style={{
            fontSize: RFPercentage(2.6),
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
            textAlign: "center",
          }}
        >
          Refer to your friend and get a cash reward of $5
        </Text>
      </View>
      {/* payment button */}
      <View style={{ marginTop: RFPercentage(2) }} />

      <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
        <AppButton title="Share now " buttonColor={Colors.blacky} />
      </TouchableOpacity>
      <View style={{ marginBottom: RFPercentage(8) }} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2),
  },
});
