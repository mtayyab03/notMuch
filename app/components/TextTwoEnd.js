import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function TextTwoEnd({ title, subtitle }) {
  return (
    <View
      style={{
        width: "90%",
        justifyContent: "center",
        marginTop: RFPercentage(2),
      }}
    >
      <Text
        style={{
          fontFamily: FontFamily.medium,
          fontSize: RFPercentage(2.2),
          color: Colors.subtextcolor,
        }}
      >
        {title}
      </Text>
      <View style={{ position: "absolute", right: RFPercentage(2) }}>
        <Text
          style={{
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.4),
            color: Colors.blacky,
          }}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
}
