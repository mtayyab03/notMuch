import React, { useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppLine from "../components/AppLine";
import MainHeader from "../components/MainHeader";
import AppModal from "../components/AppModal";
import TitleDateRup from "../components/TitleDateRup";
import TextTwoEnd from "../components/TextTwoEnd";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function PaymentScreen(props) {
  const [menuid, setmenuid] = useState(0);
  const categoryList = [
    {
      id: 1,
      title: "Pay with UPID",
      imageSource: require("../../assets/images/upilogo.png"),
    },
    {
      id: 2,
      title: "Pay with Gpay",
      imageSource: require("../../assets/images/gopaylogo.png"),
    },
    {
      id: 3,
      title: "Pay on cash",
      imageSource: require("../../assets/images/applepaylog.png"),
    },
  ];
  return (
    <Screen style={styles.screen}>
      <View style={{ marginTop: RFPercentage(3) }} />
      <MainHeader
        imageSource={require("../../assets/images/arrrowleftblack.png")}
        title="Payment method"
        selectColor={Colors.blacky}
        onpress={() => {
          props.navigation.navigate("AppointmentScreen");
        }}
      />

      {/* radio button title */}
      <FlatList
        style={{
          width: "90%",
          flexGrow: 0,
          marginTop: RFPercentage(3),
        }}
        data={categoryList}
        keyExtractor={(categoryList) => categoryList.id.toString()}
        showsVerticalScrollIndicator={false}
        vertical
        renderItem={({ item }) => (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              height: RFPercentage(8),
              borderRadius: RFPercentage(2),
              borderWidth: RFPercentage(0.2),
              borderColor: Colors.lightWhite,
              marginTop: RFPercentage(2),
              paddingHorizontal: RFPercentage(2),
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setmenuid(item.id)}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                }}
                source={item.imageSource}
              />

              <Text
                style={{
                  marginLeft: RFPercentage(2),
                  fontSize: RFPercentage(2.4),
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                position: "absolute",
                right: RFPercentage(2),
                width: RFPercentage(3),
                height: RFPercentage(3),
                borderWidth: RFPercentage(0.5),
                borderRadius: RFPercentage(4),
                borderColor: Colors.blacky,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {menuid === item.id ? (
                <View
                  style={{
                    width: RFPercentage(1.7),
                    height: RFPercentage(1.7),
                    borderRadius: RFPercentage(2),
                    backgroundColor: Colors.blacky,
                  }}
                />
              ) : null}
            </View>
          </View>
        )}
      />

      <View style={{ marginTop: RFPercentage(5) }} />
      <View
        style={{
          width: "100%",
          marginTop: RFPercentage(2),
          height: RFPercentage(0.2),
          backgroundColor: Colors.lightWhite,
          borderRadius: RFPercentage(1),
        }}
      />
      {/* office pest text */}
      <View style={{ marginTop: RFPercentage(2) }} />
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(1),
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.bold,
            fontSize: RFPercentage(2.8),
            color: Colors.blacky,
          }}
        >
          Order summary
        </Text>
      </View>
      {/* end */}
      <View style={{ marginTop: RFPercentage(1) }} />
      <TextTwoEnd title="Subtotal" subtitle="$156.00" />
      <View style={{ marginTop: RFPercentage(1) }} />
      <TextTwoEnd title="Est.Tax" subtitle="$12.00" />

      <View
        style={{
          width: "90%",
          marginTop: RFPercentage(3),
          height: RFPercentage(0.2),
          backgroundColor: Colors.lightWhite,
          borderRadius: RFPercentage(1),
        }}
      />
      <View style={{ marginTop: RFPercentage(1) }} />
      <TextTwoEnd title="Total" subtitle="$168" />

      {/* payment button */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("TicPoputScreen");
        }}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Payment now" buttonColor={Colors.blacky} />
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
  buttontext: {
    color: Colors.white,
    fontSize: RFPercentage(2.5),
    fontFamily: FontFamily.bold,
  },
  modallineclose: {
    width: RFPercentage(10),
    height: RFPercentage(0.5),
    backgroundColor: Colors.third,
    borderRadius: RFPercentage(4),
    position: "absolute",
    top: 20,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: RFPercentage(2),
    bottom: RFPercentage(3),
  },
});
