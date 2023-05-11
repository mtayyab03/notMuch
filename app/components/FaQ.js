import React, { useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function FaQ({ title, subtitle }) {
  const [menuid, setmenuid] = useState("true");

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(3),
        }}
      >
        <TouchableOpacity activeOpacity={0.7} onPress={() => setmenuid(true)}>
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.2),
              color: Colors.blacky,
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
        <View style={{ position: "absolute", right: 0 }}>
          {menuid == true ? (
            <Image
              style={{
                width: RFPercentage(3),
                height: RFPercentage(3),
              }}
              source={require("../../assets/images/downarrow.png")}
            />
          ) : (
            <Image
              style={{
                width: RFPercentage(3),
                height: RFPercentage(3),
              }}
              source={require("../../assets/images/uparrow.png")}
            />
          )}
        </View>
      </View>
      {menuid == true ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setmenuid(false)}
          style={{ width: "90%" }}
        >
          <Text
            style={{
              marginTop: RFPercentage(2),
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(2),
              color: Colors.textcolor,
              lineHeight: RFPercentage(3),
            }}
          >
            {subtitle}
          </Text>
        </TouchableOpacity>
      ) : null}

      <View style={{ marginTop: RFPercentage(2.5) }} />
      <View
        style={{
          width: "90%",
          height: RFPercentage(0.2),
          backgroundColor: Colors.lightWhite,
          borderRadius: RFPercentage(1),
        }}
      />
    </View>
  );
}
