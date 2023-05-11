import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  Switch,
  Modal,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function IconTitle({ image, title }) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        marginTop: RFPercentage(4),
        alignItems: "center",
      }}
    >
      <TouchableOpacity activeOpacity={0.7}>
        <Image
          style={{
            width: RFPercentage(3.5),
            height: RFPercentage(3.5),
          }}
          source={image}
        />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            color: Colors.blacky,
            fontSize: RFPercentage(2.5),
            fontWeight: "500",
            marginLeft: RFPercentage(4),
            fontFamily: FontFamily.regular,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
