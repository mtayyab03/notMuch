import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function TitleDateRup({ title, subtitle, rupees, style }) {
  return (
    <>
      <View
        style={[
          {
            width: "90%",
            marginTop: RFPercentage(2),
            borderRadius: RFPercentage(1),
            justifyContent: "center",
          },
          style,
        ]}
      >
        <View style={{ width: "80%" }}>
          <Text
            style={{
              fontSize: RFPercentage(2.6),
              color: Colors.blacky,
              fontFamily: FontFamily.bold,
            }}
          >
            {title}
          </Text>
          <View style={{ marginTop: RFPercentage(1.5) }} />
          <Text
            style={{
              fontSize: RFPercentage(2.2),
              color: Colors.subtextcolor,
              fontFamily: FontFamily.semiBold,
            }}
          >
            {subtitle}
          </Text>
        </View>
        <View style={{ marginLeft: RFPercentage(1) }} />
        <View style={{ position: "absolute", right: 0, flexDirection: "row" }}>
          <Text
            style={{
              fontSize: RFPercentage(2.7),
              color: Colors.blacky,
              fontFamily: FontFamily.bold,
            }}
          >
            ${rupees}
          </Text>
        </View>
      </View>
      <View
        style={[
          {
            width: "90%",
            marginTop: RFPercentage(2),
            height: RFPercentage(0.2),
            backgroundColor: Colors.lightWhite,
            borderRadius: RFPercentage(1),
          },
          style,
        ]}
      />
    </>
  );
}
