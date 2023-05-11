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
import TitleDateRup from "../components/TitleDateRup";
import TitleSubEndImg from "../components/TitleSubEndImg";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function BookingActiveScreen(props) {
  const [menuid, setmenuid] = useState(1);
  const categoryList = [
    {
      id: 1,
      title: "Active",
    },
    {
      id: 2,
      title: "Success",
    },
    {
      id: 3,
      title: "Cancelled",
    },
  ];
  return (
    <Screen style={styles.screen}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
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
                width: "33.33%",
                height: RFPercentage(7),
                backgroundColor: menuid === item.id ? Colors.blacky : null,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: RFPercentage(2),
              }}
            >
              <Text
                style={{
                  fontFamily: FontFamily.bold,
                  fontSize: RFPercentage(2.5),
                  color: menuid === item.id ? Colors.white : Colors.blacky,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* container */}
        <View
          style={{
            width: "90%",
            borderRadius: RFPercentage(2),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.lightWhite,
            marginTop: RFPercentage(3),
            padding: RFPercentage(2),
            paddingTop: RFPercentage(2.5),
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: RFPercentage(2.2),
                color: Colors.subtextcolor,
                fontFamily: FontFamily.bold,
              }}
            >
              #524587
            </Text>

            <View
              style={{
                position: "absolute",
                right: 0,
                width: RFPercentage(11),
                height: RFPercentage(4.5),
                borderRadius: RFPercentage(1),
                backgroundColor: Colors.lightWhite,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(1.8),
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                }}
              >
                Accepted
              </Text>
            </View>
          </View>

          <TitleDateRup
            title="Home cleaner"
            subtitle="22 sep 21, 03:00 - 04:30 PM"
            rupees="149"
            style={{ width: "100%" }}
          />

          <TitleSubEndImg
            title="Levi ray"
            stars="4.8"
            rating="192 "
            imageSource={require("../../assets/images/persomimg.png")}
          />
        </View>

        {/* container 2 */}
        <View
          style={{
            width: "90%",
            borderRadius: RFPercentage(2),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.lightWhite,
            marginTop: RFPercentage(3),
            padding: RFPercentage(2),
            paddingTop: RFPercentage(2.5),
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: RFPercentage(2.2),
                color: Colors.subtextcolor,
                fontFamily: FontFamily.bold,
              }}
            >
              #524587
            </Text>

            <View
              style={{
                position: "absolute",
                right: 0,
                width: RFPercentage(11),
                height: RFPercentage(4.5),
                borderRadius: RFPercentage(1),
                backgroundColor: Colors.lightWhite,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(1.8),
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                }}
              >
                Submitted
              </Text>
            </View>
          </View>

          <View
            style={[
              {
                width: "100%",
                marginTop: RFPercentage(2),
                borderRadius: RFPercentage(1),
                justifyContent: "center",
              },
            ]}
          >
            <View style={{ width: "80%" }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.6),
                  color: Colors.blacky,
                  fontFamily: FontFamily.bold,
                }}
              >
                Home cleaner
              </Text>
              <View style={{ marginTop: RFPercentage(1.5) }} />
              <Text
                style={{
                  fontSize: RFPercentage(2.2),
                  color: Colors.subtextcolor,
                  fontFamily: FontFamily.semiBold,
                }}
              >
                22 sep 21, 03:00 - 04:30 PM
              </Text>
            </View>
            <View style={{ marginLeft: RFPercentage(1) }} />
            <View
              style={{ position: "absolute", right: 0, flexDirection: "row" }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(2.7),
                  color: Colors.blacky,
                  fontFamily: FontFamily.bold,
                }}
              >
                $ 149
              </Text>
            </View>
          </View>

          {/* //cancel Booking picture */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate("CancelBookingscreen");
            }}
            style={{
              marginTop: RFPercentage(4),
              width: "100%",
              height: RFPercentage(8),
              borderWidth: RFPercentage(0.2),
              borderBottomColor: Colors.blacky,
              borderRadius: RFPercentage(3),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: Colors.blacky,
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.6),
              }}
            >
              Cancel booking
            </Text>
          </TouchableOpacity>
        </View>

        {/* container 3 */}
        <View
          style={{
            width: "90%",
            borderRadius: RFPercentage(2),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.lightWhite,
            marginTop: RFPercentage(3),
            padding: RFPercentage(2),
            paddingTop: RFPercentage(2.5),
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: RFPercentage(2.2),
                color: Colors.subtextcolor,
                fontFamily: FontFamily.bold,
              }}
            >
              #524587
            </Text>

            <View
              style={{
                position: "absolute",
                right: 0,
                width: RFPercentage(11),
                height: RFPercentage(4.5),
                borderRadius: RFPercentage(1),
                backgroundColor: Colors.lightWhite,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(1.8),
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                }}
              >
                Ongoing
              </Text>
            </View>
          </View>

          <TitleDateRup
            title="Home cleaner"
            subtitle="22 sep 21, 03:00 - 04:30 PM"
            rupees="149"
            style={{ width: "100%" }}
          />

          <TitleSubEndImg
            title="Levi ray"
            stars="4.8"
            rating="192 "
            imageSource={require("../../assets/images/persomimg.png")}
          />
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
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2),
  },
});
