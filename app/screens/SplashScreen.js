import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//screen
import AppButton from "../components/AppButton";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function SplashScreen(props) {
  return (
    <ImageBackground
      source={require("../../assets/images/splashbg.png")}
      style={styles.background}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            fontFamily: FontFamily.bold,
            fontSize: RFPercentage(4.5),
            color: Colors.blacky,
          }}
        >
          Welcome to Not much
        </Text>
        <View style={{ marginTop: RFPercentage(2) }} />
        <Text
          style={{
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.8),
            color: Colors.blacky,
          }}
        >
          All servies on your fingertips.
        </Text>
      </View>

      {/* signup button */}
      <View style={{ marginTop: RFPercentage(1) }} />

      <TouchableOpacity
        style={styles.loginbutton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("LoginScreen");
        }}
      >
        <AppButton title="Login" buttonColor={Colors.blacky} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginbutton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("SignUpScreen");
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.bold,
            fontSize: RFPercentage(2.8),
            color: Colors.blacky,
          }}
        >
          Sign up
        </Text>
      </TouchableOpacity>
      <View style={{ marginBottom: RFPercentage(4) }} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2),
    marginBottom: RFPercentage(2),
  },
});
