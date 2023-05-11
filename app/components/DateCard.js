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
import { add } from "react-native-reanimated";

export default function DateCard({
  weekday,
  addlogo,
  onpressstart,
  onpressend,
}) {
  return (
    <View
      style={{
        width: "90%",
        marginTop: RFPercentage(2),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.lightWhite,
        borderRadius: RFPercentage(1),
        padding: RFPercentage(2),
      }}
    >
      <View
        style={{
          width: "95%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ position: "absolute", left: 0 }}
        >
          <Text
            style={{
              fontSize: RFPercentage(2.3),
              color: Colors.blacky,
              fontFamily: FontFamily.regular,
            }}
          >
            {weekday}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={onpressstart}>
          <Image
            style={{
              width: RFPercentage(3.5),
              height: RFPercentage(3.5),
            }}
            source={addlogo}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onpressend}
          style={{ position: "absolute", right: 0 }}
        >
          <Image
            style={{
              width: RFPercentage(3.5),
              height: RFPercentage(3.5),
            }}
            source={addlogo}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
