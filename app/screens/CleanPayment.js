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
import CardSwiper from "../components/CardSwiper";
import AppLine from "../components/AppLine";
import MainHeader from "../components/MainHeader";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function CleanPayment(props) {
  const cleaningList = [
    {
      id: 1,
      title: "Apartment",
      time: "45 min",
      price: "$45",
      iconColor: Colors.blacky,
      icon: require("../../assets/images/plusicon.png"),
    },
    {
      id: 2,
      title: "Bungalow",
      time: "45 min",
      price: "$75",
      iconColor: Colors.white,
      icon: require("../../assets/images/subtracticons.png"),
    },
    {
      id: 3,
      title: "Appartment",
      time: "45 min",
      price: "$90",
      iconColor: Colors.blacky,
      icon: require("../../assets/images/plusicon.png"),
    },
    {
      id: 4,
      title: "Utensils Removal Service",
      time: "45 min",
      price: "$144",
      iconColor: Colors.blacky,
      icon: require("../../assets/images/plusicon.png"),
    },
    {
      id: 5,
      title: "Retail shop",
      time: "45 min",
      price: "$500",
      iconColor: Colors.blacky,
      icon: require("../../assets/images/plusicon.png"),
    },
  ];
  return (
    <Screen style={styles.screen}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View style={{ marginTop: RFPercentage(3) }} />
        <MainHeader
          imageSource={require("../../assets/images/arrrowleftblack.png")}
          title="Cockroach, Ant & 
        General pest control"
          selectColor={Colors.blacky}
          onpress={() => {
            props.navigation.navigate("BottomTab", { screen: "HomeScreen" });
          }}
        />
        <AppLine />

        {cleaningList.map((item, i) => (
          <View
            key={i}
            style={{
              width: "100%",
              alignItems: "center",
              marginTop: RFPercentage(1.5),
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                flexDirection: "row",

                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View>
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
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Image
                      style={{
                        width: RFPercentage(2),
                        height: RFPercentage(2),
                      }}
                      source={require("../../assets/images/timeicon.png")}
                    />
                    <Text
                      style={{
                        marginLeft: RFPercentage(0.8),
                        fontSize: RFPercentage(2.2),
                        color: Colors.grey,
                        fontFamily: FontFamily.medium,
                      }}
                    >
                      {item.time}
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginTop: RFPercentage(0.5),
                      fontSize: RFPercentage(2.4),
                      color: Colors.blacky,
                      fontFamily: FontFamily.regular,
                    }}
                  >
                    More info
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  position: "absolute",
                  right: RFPercentage(2),
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: RFPercentage(2.4),
                    color: Colors.blacky,
                    fontFamily: FontFamily.bold,
                  }}
                >
                  {item.price}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("CleanPayment");
                  }}
                  style={{
                    width: RFPercentage(4),
                    height: RFPercentage(4),
                    borderRadius: RFPercentage(1),
                    backgroundColor: item.iconColor,
                    marginLeft: RFPercentage(2),
                    borderWidth: RFPercentage(0.3),
                    borderColor: Colors.blacky,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{
                      width: RFPercentage(2.5),
                      height: RFPercentage(2.5),
                    }}
                    source={item.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                marginTop: RFPercentage(2),
                height: RFPercentage(0.2),
                backgroundColor: Colors.lightWhite,
                borderRadius: RFPercentage(1),
              }}
            />
          </View>
        ))}
        <View
          style={{
            width: "100%",
            position: "relative",
            bottom: RFPercentage(3),
          }}
        >
          <AppLine />
        </View>

        {/* office pest text */}
        <View
          style={{
            width: "90%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(3),
              color: Colors.blacky,
            }}
          >
            Offices pest control
          </Text>
        </View>
        {/* end */}

        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginTop: RFPercentage(2),
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              flexDirection: "row",

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
              <View>
                <Text
                  style={{
                    fontSize: RFPercentage(2.5),
                    color: Colors.blacky,
                    fontFamily: FontFamily.semiBold,
                  }}
                >
                  Office
                </Text>
                <View style={{ marginTop: RFPercentage(1) }} />
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Image
                    style={{
                      width: RFPercentage(2),
                      height: RFPercentage(2),
                    }}
                    source={require("../../assets/images/timeicon.png")}
                  />
                  <Text
                    style={{
                      marginLeft: RFPercentage(0.8),
                      fontSize: RFPercentage(2.2),
                      color: Colors.grey,
                      fontFamily: FontFamily.medium,
                    }}
                  >
                    30 min
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                right: RFPercentage(2),
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(2.4),
                  color: Colors.blacky,
                  fontFamily: FontFamily.bold,
                }}
              >
                $99
              </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("CleanPayment");
                }}
                style={{
                  width: RFPercentage(4),
                  height: RFPercentage(4),
                  borderRadius: RFPercentage(1),
                  backgroundColor: Colors.white,
                  marginLeft: RFPercentage(2),
                  borderWidth: RFPercentage(0.3),
                  borderColor: Colors.blacky,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(2.5),
                    height: RFPercentage(2.5),
                  }}
                  source={require("../../assets/images/subtracticons.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              marginTop: RFPercentage(2),
              height: RFPercentage(0.2),
              backgroundColor: Colors.lightWhite,
              borderRadius: RFPercentage(1),
            }}
          />
        </View>

        {/* last button */}

        <View
          style={{
            width: "90%",
            flexDirection: "row",
            marginTop: RFPercentage(4),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "40%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFPercentage(3),
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                }}
              >
                168 1 item
              </Text>
              <View style={{ marginTop: RFPercentage(1) }} />
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: RFPercentage(2.5),
                    color: Colors.grey,
                    fontFamily: FontFamily.medium,
                  }}
                >
                  Inc. of all taxes
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate("AddressScreen");
            }}
            style={{
              width: "60%",
              height: RFPercentage(8),
              borderRadius: RFPercentage(2),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.blacky,
            }}
          >
            <Text style={styles.buttontext}>Proceed</Text>
          </TouchableOpacity>
        </View>
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
  buttontext: {
    color: Colors.white,
    fontSize: RFPercentage(2.5),
    fontFamily: FontFamily.bold,
  },
});
