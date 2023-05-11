import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";

export default function AppLine() {
  return (
    <View
      style={{
        width: "100%",
        marginTop: RFPercentage(3.5),
        height: RFPercentage(1),
        backgroundColor: Colors.lightWhite,
        borderRadius: RFPercentage(1),
      }}
    />
  );
}
