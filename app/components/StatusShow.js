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

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
export default function StatusShow({ imageSource, title, logoSec }) {
  return (
    <View style={{ width: "90%", justifyContent: "center" }}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          width: RFPercentage(20),
          height: RFPercentage(6),
          borderRadius: RFPercentage(8),
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.purewhite,
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            width: RFPercentage(3),
            height: RFPercentage(3),
          }}
          source={imageSource}
        />
        <View style={{ marginLeft: RFPercentage(1.2) }} />
        <Text
          style={{
            fontSize: RFPercentage(2),
            color: Colors.darkgrey,
            fontFamily: FontFamily.regular,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
      <View style={{ position: "absolute", right: RFPercentage(1) }}>
        <Image
          style={{
            width: RFPercentage(2.5),
            height: RFPercentage(2.5),
          }}
          source={logoSec}
        />
      </View>
    </View>
  );
}
