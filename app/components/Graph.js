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
import AppLine from "../components/AppLine";
export default function Graph() {
  const categoryList = [
    {
      id: 1,
      title: "Mon",
    },
    {
      id: 2,
      title: "Tue",
    },
    {
      id: 3,
      title: "Wed",
    },
    {
      id: 4,
      title: "Thu",
    },
    {
      id: 5,
      title: "Fri",
    },
    {
      id: 6,
      title: "Sat",
    },
    {
      id: 7,
      title: "Sun",
    },
  ];
  return (
    <>
      {/* line with num rupees */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(2),
        }}
      >
        <View
          style={{
            width: "7%",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(1.8),
              color: Colors.blacky,
              fontFamily: FontFamily.regular,
            }}
          >
            R10
          </Text>
        </View>
        <View style={{ marginLeft: "1%" }} />
        <View
          style={{
            width: "92%",
            alignItems: "flex-end",
          }}
        >
          <AppLine />
        </View>
      </View>
      {/* single line */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(2),
          justifyContent: "flex-end",
        }}
      >
        <View style={{ marginLeft: "1%" }} />
        <View
          style={{
            width: "92%",
            alignItems: "flex-end",
          }}
        >
          <AppLine />
        </View>
      </View>

      {/* 2nd */}
      {/* line with num rupees */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(2),
        }}
      >
        <View
          style={{
            width: "7%",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(1.8),
              color: Colors.blacky,
              fontFamily: FontFamily.regular,
            }}
          >
            R5
          </Text>
        </View>
        <View style={{ marginLeft: "1%" }} />
        <View
          style={{
            width: "92%",
            alignItems: "flex-end",
          }}
        >
          <AppLine />
        </View>
      </View>
      {/* single line */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(2),
          justifyContent: "flex-end",
        }}
      >
        <View style={{ marginLeft: "1%" }} />
        <View
          style={{
            width: "92%",
            alignItems: "flex-end",
          }}
        >
          <AppLine />
        </View>
      </View>

      {/* 3rd */}
      {/* line with num rupees */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(2),
        }}
      >
        <View
          style={{
            width: "7%",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(1.8),
              color: Colors.blacky,
              fontFamily: FontFamily.regular,
            }}
          >
            R0
          </Text>
        </View>
        <View style={{ marginLeft: "1%" }} />
        <View
          style={{
            width: "92%",
            alignItems: "flex-end",
          }}
        >
          <AppLine />
        </View>
      </View>
      {/* single line */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(2),
          justifyContent: "flex-end",
        }}
      >
        <View style={{ marginLeft: "1%" }} />
        <View
          style={{
            width: "92%",
            alignItems: "flex-end",
          }}
        >
          <AppLine />
        </View>
      </View>

      {/* days name  */}
      <View style={styles.horizocategory}>
        {categoryList.map((item, i) => (
          <Text
            key={i}
            style={{
              marginLeft: RFPercentage(2),
              marginRight: RFPercentage(2),
              fontSize: RFPercentage(1.8),
              color: Colors.blacky,
              fontFamily: FontFamily.regular,
            }}
          >
            {item.title}
          </Text>
        ))}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  horizocategory: {
    flexDirection: "row",
    width: "80%",
    marginTop: RFPercentage(2),
  },
});
