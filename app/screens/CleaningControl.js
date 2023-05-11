import React, { useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppLine from "../components/AppLine";
import MainHeader from "../components/MainHeader";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
export default function CleaningControl(props) {
  const cleaningList = [
    {
      id: 1,
      title: "Cockroach & ant control",
      subtitle: "Include visitng charge",
      imageSource: require("../../assets/images/cleanimg1.png"),
    },
    {
      id: 2,
      title: "Bedbugs Control",
      subtitle: "Include visitng charge",
      imageSource: require("../../assets/images/cleanimg2.png"),
    },
    {
      id: 3,
      title: "Termite Control",
      subtitle: "Include visitng charge",
      imageSource: require("../../assets/images/cleanimg3.png"),
    },
    {
      id: 4,
      title: "Pest Control",
      subtitle: "Include visitng charge",
      imageSource: require("../../assets/images/cleanimg4.png"),
    },
    {
      id: 5,
      title: "Full Home Clearing",
      subtitle: "Include visitng charge",
      imageSource: require("../../assets/images/cleanimg5.png"),
    },
    {
      id: 6,
      title: "Bathroom cleaning",
      subtitle: "Include visitng charge",
      imageSource: require("../../assets/images/cleanimg6.png"),
    },
  ];

  return (
    <Screen style={styles.screen}>
      <View style={{ marginTop: RFPercentage(3) }} />
      <MainHeader
        imageSource={require("../../assets/images/arrrowleftblack.png")}
        title="Cleaning control"
        selectColor={Colors.blacky}
        onpress={() => {
          props.navigation.navigate("BottomTab", { screen: "HomeScreen" });
        }}
      />
      <AppLine />

      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {cleaningList.map((item, i) => (
          <View
            key={i}
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                marginTop: RFPercentage(2.5),
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "90%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity activeOpacity={0.7}>
                  <Image
                    style={{
                      width: RFPercentage(8),
                      height: RFPercentage(8),
                      borderRadius: RFPercentage(1),
                    }}
                    source={item.imageSource}
                  />
                </TouchableOpacity>

                <View style={{ marginLeft: RFPercentage(2) }}>
                  <Text
                    style={{
                      fontSize: RFPercentage(2.4),
                      color: Colors.blacky,
                      fontFamily: FontFamily.semiBold,
                    }}
                  >
                    {item.title}
                  </Text>
                  <View style={{ marginTop: RFPercentage(1) }} />
                  <TouchableOpacity activeOpacity={0.7}>
                    <Text
                      style={{
                        fontSize: RFPercentage(2.2),
                        color: Colors.grey,
                        fontFamily: FontFamily.semiBold,
                      }}
                    >
                      {item.subtitle}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("CleanPayment");
                }}
                style={{ position: "absolute", right: RFPercentage(2) }}
              >
                <Image
                  style={{
                    width: RFPercentage(4),
                    height: RFPercentage(4),
                  }}
                  source={require("../../assets/images/movearrow.png")}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                marginTop: RFPercentage(2.5),
                height: RFPercentage(0.2),
                backgroundColor: Colors.lightWhite,
                borderRadius: RFPercentage(1),
              }}
            />
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});
