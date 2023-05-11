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
import TextTwoEnd from "../components/TextTwoEnd";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function CancelBookingscreen(props) {
  return (
    <Screen style={styles.screen}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(3),
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate("BookingActiveScreen");
            }}
          >
            <Image
              style={{
                width: RFPercentage(3.5),
                height: RFPercentage(3.5),
              }}
              source={require("../../assets/images/arrrowleftblack.png")}
            />
          </TouchableOpacity>
          <View style={{ width: "80%", marginLeft: RFPercentage(3) }}>
            <Text
              style={{
                fontSize: RFPercentage(3.5),
                color: Colors.blacky,
                fontFamily: FontFamily.bold,
              }}
            >
              #524587
            </Text>
          </View>

          <View
            style={{
              position: "absolute",
              right: 0,
              backgroundColor: Colors.lightWhite,
              width: RFPercentage(6),
              height: RFPercentage(6),
              borderRadius: RFPercentage(3),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: RFPercentage(3),
                height: RFPercentage(3),
              }}
              source={require("../../assets/images/calllogo.png")}
            />
          </View>
        </View>
        <AppLine />

        <TitleDateRup
          title="Apartment"
          subtitle="Suited for repair or replacement"
          rupees="49"
        />
        <TitleDateRup
          title="Waste Pipe leakage"
          subtitle="Suited for repair or replacement"
          rupees="29"
        />

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

          <View
            style={{
              width: "100%",
              marginTop: RFPercentage(2),
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.bold,
                fontSize: RFPercentage(2.6),
                color: Colors.blacky,
              }}
            >
              Tyrone Mitchell
            </Text>
            <Text
              style={{
                marginTop: RFPercentage(1),
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2.2),
                color: Colors.blacky,
              }}
            >
              Right joy pvt. Ltd.
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: RFPercentage(2),
              }}
            >
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                }}
                source={require("../../assets/images/locaicon.png")}
              />
              <Text
                style={{
                  marginLeft: RFPercentage(1),
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(2.2),
                  color: Colors.subtextcolor,
                }}
              >
                1534 Single street, USA
              </Text>
            </View>
          </View>
        </View>

        {/* container */}
        <View
          style={{
            width: "90%",
            borderRadius: RFPercentage(2),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.blacky,
            borderStyle: "dashed",
            backgroundColor: Colors.lightWhite,
            marginTop: RFPercentage(3),
            padding: RFPercentage(2),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.6),
              color: Colors.blacky,
            }}
          >
            Cancellation policy
          </Text>
          <Text
            style={{
              marginTop: RFPercentage(1),
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2.2),
              color: Colors.subtextcolor,
              lineHeight: RFPercentage(3),
            }}
          >
            If you cancel less than 24 hours before your bookging. you may be
            charged a cancellation fee up to the full amount of the services
            booked.
          </Text>
        </View>

        <View style={{ marginTop: RFPercentage(2) }} />
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

        {/* //cancel Booking picture */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("GiveFeedbackScreen");
          }}
          style={{
            marginTop: RFPercentage(7),
            width: "90%",
            height: RFPercentage(8),
            borderWidth: RFPercentage(0.2),
            borderBottomColor: Colors.blacky,
            borderRadius: RFPercentage(2),
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
});
