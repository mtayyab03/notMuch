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

export default function BookingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <Image
        style={{
          width: RFPercentage(30),
          height: RFPercentage(30),
        }}
        source={require("../../assets/images/booknowlogo.png")}
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
          No Appointment Booked
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
          You hve note booked any appointment yet.
        </Text>
      </View>
      {/* payment button */}
      <View style={{ marginTop: RFPercentage(2) }} />

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("BookingActiveScreen");
        }}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Book now" buttonColor={Colors.blacky} />
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
