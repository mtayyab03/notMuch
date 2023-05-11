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

export default function ProfileMain({
  imageSource,
  title,
  subtitle,
  onpress,
  onpressPic,
}) {
  return (
    <View
      style={{
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity activeOpacity={0.7} onPress={onpressPic}>
        <Image
          style={{
            width: RFPercentage(9),
            height: RFPercentage(9),
            borderRadius: RFPercentage(5),
          }}
          source={imageSource}
        />
      </TouchableOpacity>

      <View style={{ marginLeft: RFPercentage(3) }}>
        <Text
          style={{
            fontSize: RFPercentage(2.2),
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
          }}
        >
          {title}
        </Text>
        <View style={{ marginTop: RFPercentage(0.3) }} />
        <TouchableOpacity activeOpacity={0.7} onPress={onpress}>
          <Text
            style={{
              fontSize: RFPercentage(1.8),
              color: Colors.grey,
              fontFamily: FontFamily.regular,
              lineHeight: RFPercentage(3.3),
            }}
          >
            {subtitle}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
