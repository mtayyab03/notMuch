import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function Fieldtwoend({ inputTitle, imageSource }) {
  return (
    <View
      style={{
        width: "90%",
        borderRadius: RFPercentage(1),
        borderWidth: RFPercentage(0.2),
        borderColor: Colors.blacky,
        height: RFPercentage(7),
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Text
        style={{
          marginLeft: RFPercentage(2),
          fontFamily: FontFamily.regular,
          fontSize: RFPercentage(2),
          color: Colors.grey,
          fontWeight: "400",
        }}
      >
        {inputTitle}
      </Text>
      <View style={{ position: "absolute", right: RFPercentage(2) }}>
        <Image
          style={{
            width: RFPercentage(2),
            height: RFPercentage(1),
          }}
          source={imageSource}
        />
      </View>
    </View>
  );
}
