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

export default function LogoTitle({ imageSource, title, onpress }) {
  return (
    <>
      <View
        style={{
          marginLeft: RFPercentage(2),
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(3),
        }}
      >
        <Image
          style={{
            width: RFPercentage(4),
            height: RFPercentage(4),
          }}
          source={imageSource}
        />

        <View style={{ marginLeft: RFPercentage(4) }} />
        <TouchableOpacity activeOpacity={0.7} onPress={onpress}>
          <Text
            style={{
              fontSize: RFPercentage(2.5),
              color: Colors.blacky,
              fontFamily: FontFamily.medium,
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "90%",
          marginTop: RFPercentage(2.5),
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            width: "83%",
            height: RFPercentage(0.1),
            backgroundColor: Colors.grey,
            borderRadius: RFPercentage(1),
          }}
        />
      </View>
    </>
  );
}
