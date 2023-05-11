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
import TitleTextField from "../components/TitleTextField";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function AddressScreen(props) {
  const [menuid, setmenuid] = useState(1);
  const categoryList = [
    {
      id: 1,
      title: "Office",
    },
    {
      id: 2,
      title: "Home",
    },
  ];
  return (
    <Screen style={styles.screen}>
      {/* yellow backgroundColor */}
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: Colors.primary,
          alignItems: "center",
        }}
      >
        {/* menu */}
        <View style={{ width: "90%", zIndex: 1, marginTop: RFPercentage(2) }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate("CleanPayment");
            }}
            style={{
              width: RFPercentage(6),
              height: RFPercentage(6),
              borderRadius: RFPercentage(3),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.white,
            }}
          >
            <Image
              style={{
                width: RFPercentage(2.5),
                height: RFPercentage(2.5),
              }}
              source={require("../../assets/images/arrrowleftblack.png")}
            />
          </TouchableOpacity>
        </View>

        {/* card */}
        <View
          style={{
            width: "100%",
            height: "70%",
            alignItems: "center",
            backgroundColor: Colors.white,
            borderRadius: RFPercentage(2),
            zIndex: 1,
            position: "absolute",
            bottom: 0,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <View
            style={{
              width: "30%",
              height: RFPercentage(0.7),
              backgroundColor: Colors.lightWhite,
              borderRadius: RFPercentage(1),
              marginTop: RFPercentage(1.5),
            }}
          />
          {/* categorized */}
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              borderRadius: RFPercentage(2),
              marginTop: RFPercentage(3),
              borderColor: Colors.white,
              backgroundColor: Colors.lightWhite,
              alignItems: "center",
            }}
          >
            {categoryList.map((item, i) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setmenuid(item.id)}
                key={i}
                style={{
                  width: "50%",
                  height: RFPercentage(7),
                  backgroundColor: menuid === item.id ? Colors.blacky : null,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: RFPercentage(2),
                }}
              >
                <Text
                  style={{
                    fontFamily: FontFamily.medium,
                    fontSize: RFPercentage(2.5),
                    color: menuid === item.id ? Colors.white : Colors.blacky,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* title text field */}
          <View style={{ marginTop: RFPercentage(2) }} />
          <TitleTextField
            title="Your Pick address"
            subtitle="Right joy Pvt. Ltd."
          />
          {/* title text field */}
          <View style={{ marginTop: RFPercentage(2) }} />
          <TitleTextField
            title="Street/Building/flat"
            subtitle="1534 Single Streeet, USA"
          />
          {/* title text field */}
          <View style={{ marginTop: RFPercentage(2) }} />
          <TitleTextField title="Your name" subtitle="Tyrone Mitchelll" />

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("AppointmentScreen");
            }}
            style={styles.loginbutton}
            activeOpacity={0.7}
          >
            <AppButton title="Continue" buttonColor={Colors.blacky} />
          </TouchableOpacity>
        </View>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -33.9249,
            longitude: 18.4241,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: -33.9249, longitude: 18.4241 }}
            style={{ width: 20, height: 20 }}
            title={"Clean Center"}
            description={"The Cleaning Service Center"}
            image={require("../../assets/images/locicon.png")}
          />
          {/* container */}
        </MapView>
      </View>
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2),
    marginBottom: RFPercentage(2),
  },
});
