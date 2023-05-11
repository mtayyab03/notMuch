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
import AppLine from "../components/AppLine";
import MainHeader from "../components/MainHeader";
import AppModal from "../components/AppModal";
import TitleDateRup from "../components/TitleDateRup";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import TextTwoEnd from "../components/TextTwoEnd";

export default function TicPoputScreen(props) {
  return (
    <Screen style={styles.screen}>
      <TouchableOpacity
        style={{ width: "90%", position: "absolute", top: RFPercentage(6) }}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("PaymentScreen");
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
        source={require("../../assets/images/ticlogo.png")}
      />
      <View
        style={{ width: "90%", alignItems: "center", justifyContent: "center" }}
      >
        <Text
          style={{
            fontSize: RFPercentage(4),
            color: Colors.blacky,
            fontFamily: FontFamily.bold,
            textAlign: "center",
          }}
        >
          Your Services has been booked
        </Text>
        <View style={{ marginTop: RFPercentage(2) }} />
        <Text
          style={{
            fontSize: RFPercentage(2.8),
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
            textAlign: "center",
          }}
        >
          Rightjoy team call you for booking confirmation
        </Text>
      </View>
      {/* payment button */}
      <View style={{ marginTop: RFPercentage(2) }} />

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("RetryScreen");
        }}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Back to home" buttonColor={Colors.blacky} />
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
