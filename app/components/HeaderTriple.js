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

export default function HeaderTriple({
  firstImage,
  title,
  secondImage,
  onpress,
  onpressSec,
}) {
  return (
    <View
      style={{
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: RFPercentage(3),
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onpress}
        style={{ position: "absolute", left: 0 }}
      >
        <Image
          style={{
            width: RFPercentage(3.5),
            height: RFPercentage(3.5),
          }}
          source={firstImage}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: RFPercentage(2.8),
          color: Colors.blacky,
          fontFamily: FontFamily.medium,
        }}
      >
        {title}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onpressSec}
        style={{ position: "absolute", right: 0 }}
      >
        <Image
          style={{
            width: RFPercentage(3.5),
            height: RFPercentage(3.5),
          }}
          source={secondImage}
        />
      </TouchableOpacity>
    </View>
  );
}
