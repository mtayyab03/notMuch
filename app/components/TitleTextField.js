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

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function TitleTextField({ title, subtitle }) {
  return (
    <>
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(1),
        }}
      >
        <Text
          style={{
            fontWeight: "400",
            fontSize: RFPercentage(2.3),
            color: Colors.blacky,
            marginBottom: RFPercentage(1),
            fontFamily: FontFamily.medium,
          }}
        >
          {title}
        </Text>
      </View>

      <View
        style={{
          width: "90%",
          borderRadius: RFPercentage(1),
          backgroundColor: Colors.lightWhite,
          paddingLeft: RFPercentage(2),
          height: RFPercentage(7),
          justifyContent: "center",
        }}
      >
        <View style={{ width: "90%", justifyContent: "center" }}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: RFPercentage(2.3),
              color: Colors.blacky,
              fontFamily: FontFamily.semiBold,
            }}
          >
            {subtitle}
          </Text>
        </View>
      </View>
    </>
  );
}
