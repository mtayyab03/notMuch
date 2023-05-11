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
import MapView, { Marker, Polyline } from "react-native-maps";
import AntDesign from "react-native-vector-icons/AntDesign";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppLine from "../components/AppLine";
import TitleDateRup from "../components/TitleDateRup";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function TitleSubEndImg({ title, stars, rating, imageSource }) {
  return (
    <View
      style={{
        width: "100%",
        marginTop: RFPercentage(2),
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontFamily: FontFamily.bold,
          fontSize: RFPercentage(2.6),
          color: Colors.blacky,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(1.5),
        }}
      >
        <Image
          style={{
            width: RFPercentage(3),
            height: RFPercentage(3),
          }}
          source={require("../../assets/images/staricon.png")}
        />
        <Text
          style={{
            marginLeft: RFPercentage(0.5),
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(2),
            color: Colors.yellow,
          }}
        >
          {stars}
        </Text>
        <Text
          style={{
            marginLeft: RFPercentage(1),
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(2),
            color: Colors.subtextcolor,
          }}
        >
          {rating} Ratings
        </Text>
      </View>
      <View
        style={{
          width: RFPercentage(6),
          height: RFPercentage(6),
          borderRadius: RFPercentage(3),
          position: "absolute",
          right: 0,
        }}
      >
        <Image
          style={{
            width: RFPercentage(6),
            height: RFPercentage(6),
            borderRadius: RFPercentage(3),
          }}
          source={imageSource}
        />
      </View>
    </View>
  );
}
