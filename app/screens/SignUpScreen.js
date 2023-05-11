import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Formik } from "formik";
import * as yup from "yup";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//screen
import AppButton from "../components/AppButton";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
export default function SignUpScreen(props) {
  const [eyeIcon, setEyeIcon] = useState(false);
  const [email, onChangeEmail] = useState("");
  const [phoneNo, onChangePhoneNo] = useState("");
  const [Password, onChangePassword] = useState("");
  const [CPassword, onChangeCPassword] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/images/loginbg.png")}
      style={styles.background}
    >
      <View style={{ marginTop: RFPercentage(3) }} />
      <Text
        style={{
          fontFamily: FontFamily.bold,
          fontSize: RFPercentage(4.5),
          color: Colors.white,
        }}
      >
        Not much
      </Text>
      <View
        style={{
          width: "100%",
          height: "90%",
          position: "absolute",
          bottom: 0,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingVertical: RFPercentage(1),
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
            Sign up
          </Text>
        </View>

        {/* //email input */}

        <>
          <View style={styles.inputmaincontainer}>
            <View
              style={{
                width: "90%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(2.3),
                  color: Colors.subtextcolor,
                }}
              >
                Email
              </Text>
            </View>
            <View style={{ marginTop: RFPercentage(1) }} />
            <View
              style={{
                width: "90%",
                height: RFPercentage(7.5),
                backgroundColor: Colors.lightWhite,
                paddingLeft: RFPercentage(3),
                borderRadius: RFPercentage(1),
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(2.7),
                }}
                source={require("../../assets/images/mailicon.png")}
              />
              <View style={{ marginRight: RFPercentage(2) }} />
              <TextInput
                style={{
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(2.5),
                }}
                keyboardType="email-address"
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Username"
                placeholderTextColor={Colors.placeholder}
              />
            </View>
            {/* phone no */}
            <View style={{ marginTop: RFPercentage(1.5) }} />

            <View
              style={{
                width: "90%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(2.3),
                  color: Colors.subtextcolor,
                }}
              >
                Mobile number
              </Text>
            </View>
            <View style={{ marginTop: RFPercentage(1) }} />
            <View
              style={{
                width: "90%",
                height: RFPercentage(7.5),
                backgroundColor: Colors.lightWhite,
                paddingLeft: RFPercentage(3),
                borderRadius: RFPercentage(1),
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(2.5),
                }}
                source={require("../../assets/images/flagicon.png")}
              />
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                  marginLeft: RFPercentage(1),
                }}
                source={require("../../assets/images/downarrow.png")}
              />
              <View style={{ marginRight: RFPercentage(2) }} />
              <TextInput
                style={{
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(2.5),
                }}
                keyboardType="numeric"
                onChangeText={onChangePhoneNo}
                value={phoneNo}
                placeholder="111-111-111"
                placeholderTextColor={Colors.placeholder}
              />
            </View>
            {/* password */}
            <View style={{ marginTop: RFPercentage(1.5) }} />
            <View
              style={{
                width: "90%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(2.3),
                  color: Colors.subtextcolor,
                }}
              >
                Password
              </Text>
            </View>
            <View style={{ marginTop: RFPercentage(1) }} />
            <View style={styles.passwordmain}>
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(2.7),
                }}
                source={require("../../assets/images/passicon.png")}
              />
              <View style={{ marginRight: RFPercentage(2) }} />
              <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={Password}
                placeholder="Password"
                placeholderTextColor={Colors.placeholder}
                secureTextEntry={true && !eyeIcon}
              />
              <TouchableOpacity
                onPress={() => setEyeIcon(!eyeIcon)}
                activeOpacity={0.7}
                style={styles.eyeicon}
              >
                <MaterialCommunityIcons
                  color={Colors.blacky}
                  style={{ right: RFPercentage(1) }}
                  size={RFPercentage(3)}
                  name={eyeIcon ? "eye-outline" : "eye-off-outline"}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: RFPercentage(1.5) }} />
            <View
              style={{
                width: "90%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(2.3),
                  color: Colors.subtextcolor,
                }}
              >
                Confirm Password
              </Text>
            </View>
            <View style={{ marginTop: RFPercentage(1) }} />
            <View style={styles.passwordmain}>
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(2.7),
                }}
                source={require("../../assets/images/passicon.png")}
              />
              <View style={{ marginRight: RFPercentage(2) }} />
              <TextInput
                style={styles.input}
                onChangeText={onChangeCPassword}
                value={CPassword}
                placeholder="Confirm Password"
                placeholderTextColor={Colors.placeholder}
                secureTextEntry={true && !eyeIcon}
              />
              <TouchableOpacity
                onPress={() => setEyeIcon(!eyeIcon)}
                activeOpacity={0.7}
                style={styles.eyeicon}
              >
                <MaterialCommunityIcons
                  color={Colors.blacky}
                  style={{ right: RFPercentage(1) }}
                  size={RFPercentage(3)}
                  name={eyeIcon ? "eye-outline" : "eye-off-outline"}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("OTPScreen");
            }}
            style={styles.loginbutton}
            activeOpacity={0.7}
          >
            <AppButton title="Sign up" buttonColor={Colors.blacky} />
          </TouchableOpacity>
        </>

        <View style={{ marginTop: RFPercentage(1), alignItems: "center" }}>
          <Text
            style={{
              color: Colors.subtextcolor,
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2.2),
            }}
          >
            Or continue with
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: RFPercentage(2.5),
            }}
          >
            <Image
              style={{
                width: RFPercentage(5),
                height: RFPercentage(5),
              }}
              source={require("../../assets/images/glogo.png")}
            />
            <View style={{ marginRight: RFPercentage(4) }} />

            <Image
              style={{
                width: RFPercentage(5),
                height: RFPercentage(5),
              }}
              source={require("../../assets/images/flogo.png")}
            />
            <View style={{ marginRight: RFPercentage(3) }} />
            <Image
              style={{
                width: RFPercentage(5),
                height: RFPercentage(5),
              }}
              source={require("../../assets/images/twittwelogo.png")}
            />
          </View>

          {/* Signup */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: RFPercentage(2.5),
            }}
          >
            <Text
              style={{
                color: Colors.subtextcolor,
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2.2),
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("LoginScreen");
              }}
              activeOpacity={0.7}
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginLeft: RFPercentage(1),
              }}
            >
              <Text
                style={{
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.2),
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  inputmaincontainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(2),
  },
  eyeicon: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: RFPercentage(1),
    width: RFPercentage(5),
    height: RFPercentage(5),
  },
  emailmain: {},
  input: {},

  passwordmain: {
    width: "90%",
    height: RFPercentage(7.5),
    backgroundColor: Colors.lightWhite,
    paddingLeft: RFPercentage(3),
    borderRadius: RFPercentage(1),
    flexDirection: "row",
    alignItems: "center",
  },
  error: {
    color: "#FF0000",
    fontSize: RFPercentage(1.3),
    marginTop: RFPercentage(0.5),
    fontFamily: FontFamily.regular,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2),
    marginBottom: RFPercentage(2),
  },
});
