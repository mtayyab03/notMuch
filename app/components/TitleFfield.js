import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function TitleFfield({ title, subtitle }) {
  const [Name, onChangeName] = useState("");
  return (
    <>
      <View style={{ width: "90%", justifyContent: "center" }}>
        <Text
          style={{
            fontWeight: "400",
            fontSize: RFPercentage(2),
            color: Colors.blacky,
            marginBottom: RFPercentage(1.5),
            fontFamily: FontFamily.regular,
          }}
        >
          {title}
        </Text>
      </View>

      <View
        style={{
          width: "90%",
          borderRadius: RFPercentage(1),
          borderWidth: RFPercentage(0.2),
          borderColor: Colors.blacky,
          height: RFPercentage(7),
          justifyContent: "center",
          padding: RFPercentage(2),
        }}
      >
        <View style={{ width: "90%", justifyContent: "center" }}>
          <TextInput
            style={{ width: RFPercentage(45), fontSize: RFPercentage(2) }}
            onChangeText={onChangeName}
            value={Name}
            placeholder={subtitle}
            placeholderTextColor={Colors.grey}
          />
        </View>
      </View>
    </>
  );
}
