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

export default function LoginScreen(props) {
  const [eyeIcon, setEyeIcon] = useState(false);
  let validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password"),
  });
  return (
    <ImageBackground
      source={require("../../assets/images/loginbg.png")}
      style={styles.background}
    >
      <View style={{ marginTop: RFPercentage(5) }} />
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
            Login
          </Text>
        </View>

        {/* //email input */}
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={() => {
            props.navigation.navigate("BottomTab", { screen: "HomeScreen" });
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
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
                <View style={{ marginTop: RFPercentage(2) }} />
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
                    onChangeText={handleChange("email")}
                    onBlur={() => setFieldTouched("email")}
                    // value={text}
                    placeholder="Username"
                    placeholderTextColor={Colors.placeholder}
                  />
                </View>
                <View style={{ width: "90%" }}>
                  {touched.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}
                </View>
                <View style={{ marginTop: RFPercentage(2) }} />
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
                <View style={{ marginTop: RFPercentage(2) }} />
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
                    onChangeText={handleChange("password")}
                    onBlur={() => setFieldTouched("password")}
                    // value={Password}
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
                <View style={{ width: "90%" }}>
                  {touched.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}
                </View>
              </View>

              <TouchableOpacity
                style={styles.loginbutton}
                activeOpacity={0.7}
                onPress={handleSubmit}
              >
                <AppButton title="Login" buttonColor={Colors.blacky} />
              </TouchableOpacity>
            </>
          )}
        </Formik>
        {/* forget password */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("ForgetPasswordScreen");
          }}
          style={{ marginTop: RFPercentage(1) }}
        >
          <Text
            style={{
              color: Colors.blacky,
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.5),
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <View style={{ marginTop: RFPercentage(5), alignItems: "center" }}>
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
              marginTop: RFPercentage(4),
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
              marginTop: RFPercentage(3),
            }}
          >
            <Text
              style={{
                color: Colors.subtextcolor,
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2.2),
              }}
            >
              Dont have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("SignUpScreen");
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
                Sign up
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
    marginTop: RFPercentage(3),
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
