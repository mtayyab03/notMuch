import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//Components
import MainHeader from "../components/MainHeader";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function OTPScreen(props) {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleOTPChange = (index, value) => {
    if (value.length === 0 || /^[0-9]+$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (value.length === 1 && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = () => {
    // handle OTP verification logic here
  };
  return (
    <ImageBackground
      source={require("../../assets/images/loginbg.png")}
      style={styles.background}
    >
      <View style={{ marginTop: RFPercentage(5) }} />
      <MainHeader
        imageSource={require("../../assets/images/arrowleft.png")}
        title="Verify"
        selectColor={Colors.white}
        onpress={() => {
          props.navigation.navigate("LoginScreen");
        }}
      />
      <View
        style={{
          width: "100%",
          height: "87%",
          position: "absolute",
          bottom: 0,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingVertical: RFPercentage(4),
          backgroundColor: Colors.white,
          borderTopLeftRadius: RFPercentage(4),
          borderTopRightRadius: RFPercentage(4),
        }}
      >
        <View
          style={{
            width: "90%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(4.5),
              color: Colors.blacky,
            }}
          >
            Phone number
          </Text>
        </View>

        <View style={{ width: "90%" }}>
          <Text
            style={{
              marginTop: RFPercentage(2),

              fontSize: RFPercentage(2.2),
              fontFamily: FontFamily.regular,
              color: Colors.subtextcolor,
              marginBottom: 30,
            }}
          >
            Enter your phone number and get opt code from app name
          </Text>
        </View>
        <View style={styles.otpContainer}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={otp[index]}
              onChangeText={(text) => handleOTPChange(index, text)}
              keyboardType="numeric"
              maxLength={1}
              ref={(ref) => (inputRefs.current[index] = ref)}
              onSubmitEditing={() => {
                if (index < 5) {
                  inputRefs.current[index + 1].focus();
                }
              }}
              returnKeyType={index === 5 ? "done" : "next"}
            />
          ))}
        </View>

        {/* button */}
        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.loginbutton}
          activeOpacity={0.7}
        >
          <AppButton title="Submit" buttonColor={Colors.blacky} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    width: "90%",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.primary,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  otpInput: {
    width: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(7),
  },
});
