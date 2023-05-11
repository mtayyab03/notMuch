import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

export default function EditProfile(props) {
  const [phoneNo, onChangePhoneNo] = useState("");

  return (
    <Screen style={styles.screen}>
      <View
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: RFPercentage(2),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("BottomTab", {
              screen: "Profilescreenn",
            });
          }}
          style={{ position: "absolute", left: 0 }}
        >
          <Text
            style={{
              fontSize: RFPercentage(2.2),
              color: Colors.subtextcolor,
              fontFamily: FontFamily.bold,
            }}
          >
            Close
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: RFPercentage(3.2),
            color: Colors.blacky,
            fontFamily: FontFamily.bold,
          }}
        >
          Edit profile
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ position: "absolute", right: 0 }}
        >
          <Text
            style={{
              fontSize: RFPercentage(2.2),
              color: Colors.blacky,
              fontFamily: FontFamily.bold,
            }}
          >
            Edit
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: RFPercentage(3) }} />
      <Image
        style={{
          width: RFPercentage(16),
          height: RFPercentage(16),
        }}
        source={require("../../assets/images/editiconimg.png")}
      />

      {/* Name */}
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(2.5),
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.3),
            color: Colors.blacky,
          }}
        >
          Name
        </Text>
      </View>
      <View
        style={{
          width: "90%",
          height: RFPercentage(7.5),
          backgroundColor: Colors.lightWhite,
          paddingHorizontal: RFPercentage(2),
          borderRadius: RFPercentage(2),
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(1.5),
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.2),
            color: Colors.blacky,
          }}
        >
          Alfredo Ross
        </Text>
        <View style={{ position: "absolute", right: RFPercentage(3) }}>
          <Image
            style={{
              width: RFPercentage(3),
              height: RFPercentage(3),
            }}
            source={require("../../assets/images/picon.png")}
          />
        </View>
      </View>

      {/* email */}
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(2.5),
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2.2),
            color: Colors.blacky,
          }}
        >
          Email ID
        </Text>
      </View>
      <View
        style={{
          width: "90%",
          height: RFPercentage(7.5),
          backgroundColor: Colors.lightWhite,
          paddingHorizontal: RFPercentage(2),
          borderRadius: RFPercentage(2),
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(1.5),
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.2),
            color: Colors.blacky,
          }}
        >
          Syalfreelance@gmail.com
        </Text>
        <View style={{ position: "absolute", right: RFPercentage(3) }}>
          <Image
            style={{
              width: RFPercentage(3),
              height: RFPercentage(3),
            }}
            source={require("../../assets/images/msgicon.png")}
          />
        </View>
      </View>

      {/* phone no */}
      <View style={{ marginTop: RFPercentage(2.5) }} />

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
            color: Colors.blacky,
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
          placeholder="+91 9876543210"
          placeholderTextColor={Colors.placeholder}
        />
      </View>

      {/* bio */}
      {/* Name */}
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(2.5),
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.3),
            color: Colors.blacky,
          }}
        >
          Bio
        </Text>
      </View>
      <View
        style={{
          width: "90%",
          height: RFPercentage(7.5),
          backgroundColor: Colors.lightWhite,
          paddingHorizontal: RFPercentage(3),
          borderRadius: RFPercentage(2),
          marginTop: RFPercentage(1.5),
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.2),
            color: Colors.blacky,
          }}
        >
          -------------
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("BottomTab", { screen: "Profilescreenn" });
        }}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Save" buttonColor={Colors.blacky} />
      </TouchableOpacity>
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
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2),
  },
});
