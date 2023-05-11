import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Swiper from "react-native-swiper";

//config
import Colors from "../config/Colors";

export default function CardSwiper({ image }) {
  return (
    <View
      style={{
        width: "90%",
        height: RFPercentage(25),
        backgroundColor: Colors.grey,
        marginTop: RFPercentage(2.5),
        marginBottom: RFPercentage(3),
        borderRadius: RFPercentage(2),
        overflow: "hidden",
      }}
    >
      <Swiper
        activeDotColor={Colors.blue}
        dotColor={Colors.lightWhite}
        activeDotStyle={{}}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "100%",
              height: RFPercentage(25),
            }}
            source={image}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "100%",
              height: RFPercentage(25),
            }}
            source={image}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "100%",
              height: RFPercentage(25),
            }}
            source={image}
          />
        </View>
      </Swiper>
    </View>
  );
}
