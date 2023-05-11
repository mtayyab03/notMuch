import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppModal from "../components/AppModal";

export default function Profilescreen(props) {
  const handleNavigation = () => {
    props.navigation.navigate("LoginScreen");
    setFourthModalVisible(false);
  };
  const [fourthmodalVisible, setFourthModalVisible] = useState(false);
  const profileList = [
    {
      id: "1",
      imageSource: require("../../assets/images/partnerlogo.png"),
      title: "Register as Partner",
    },
    {
      id: "2",
      imageSource: require("../../assets/images/bookinglogo.png"),
      title: "My Booking",
    },
    {
      id: "3",
      imageSource: require("../../assets/images/helpcenterlogo.png"),
      title: "Help Center",
    },
    {
      id: "4",
      imageSource: require("../../assets/images/sharelogo.png"),
      title: "Share & Earn",
      onpress: () => {
        props.navigation.navigate("ShareEarnScreen");
      },
    },
    {
      id: "5",
      imageSource: require("../../assets/images/ratelog.png"),
      title: "Rate us",
    },
    {
      id: "6",
      imageSource: require("../../assets/images/faqlogo.png"),
      title: "FAQ’s",
      onpress: () => {
        props.navigation.navigate("FAQScreen");
      },
    },
    {
      id: "7",
      imageSource: require("../../assets/images/privacylogo.png"),
      title: "Privacy Policy",
      onpress: () => {
        props.navigation.navigate("PrivacyPolicyScreen");
      },
    },
    {
      id: "8",
      imageSource: require("../../assets/images/logoutlogo.png"),
      title: "Logout",
      onpress: () => setFourthModalVisible(true),
    },
  ];
  return (
    <Screen
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.white,
      }}
    >
      {/* profile */}
      <View
        style={{
          width: "90%",
          marginTop: RFPercentage(3),
          alignItems: "center",
          justifyContentL: "center",
        }}
      >
        {/* picture */}

        <Image
          style={{
            width: RFPercentage(14),
            height: RFPercentage(14),
            borderRadius: RFPercentage(5),
          }}
          source={require("../../assets/images/profilepic.png")}
        />

        {/* text */}
        <View style={{ marginTop: RFPercentage(2) }} />
        <Text
          style={{
            fontSize: RFPercentage(3),
            color: Colors.blacky,
            fontFamily: FontFamily.bold,
          }}
        >
          Alfred Ross
        </Text>
        <Text
          style={{
            fontSize: RFPercentage(2),
            color: Colors.blacky,
            marginTop: RFPercentage(1),
            fontFamily: FontFamily.medium,
          }}
        >
          Syalfreelance@gmail.com
        </Text>

        {/* //editicon */}

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("EditProfile");
          }}
          style={{
            width: RFPercentage(28),
            height: RFPercentage(7),
            borderWidth: RFPercentage(0.2),
            marginTop: RFPercentage(2),
            borderColor: Colors.blacky,
            borderRadius: RFPercentage(2),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.4),
              color: Colors.blacky,
            }}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>

      {/* profile line */}
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(4),
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.4),
            color: Colors.blacky,
          }}
        >
          Profile
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {profileList.map((item, i) => (
          <TouchableOpacity
            onPress={item.onpress}
            key={i}
            style={{ width: "90%" }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                marginTop: RFPercentage(2.4),
                marginBottom: RFPercentage(2.4),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "70%",
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.lightWhite,
                    padding: RFPercentage(1),
                    borderRadius: RFPercentage(1),
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{ width: RFPercentage(3), height: RFPercentage(3) }}
                    source={item.imageSource}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: FontFamily.semiBold,
                    fontSize: RFPercentage(2.6),
                    marginLeft: RFPercentage(2),
                    color: Colors.blacky,
                  }}
                >
                  {item.title}
                </Text>
              </View>

              {/* arrowicon */}
              <View
                style={{
                  position: "absolute",
                  right: 0,
                  width: "30%",
                  alignItems: "flex-end",
                }}
              >
                <Image
                  style={{ width: RFPercentage(3), height: RFPercentage(3) }}
                  source={require("../../assets/images/arrowright.png")}
                />
              </View>
            </View>

            <View
              style={{
                width: "100%",
                height: RFPercentage(0.2),
                backgroundColor: Colors.lightWhite,
                borderRadius: RFPercentage(1),
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 4th modal */}
      <AppModal
        modalVisible={fourthmodalVisible}
        setModalVisible={setFourthModalVisible}
        style={{ justifyContent: "flex-end" }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.modallineclose}
          onPress={() => setFourthModalVisible(!fourthmodalVisible)}
        />

        <View
          style={{
            marginTop: RFPercentage(1),
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.8),
              color: Colors.blacky,
            }}
          >
            Logout
          </Text>

          <Text
            style={{
              marginTop: RFPercentage(2),
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2.2),
              color: Colors.subtextcolor,
            }}
          >
            Are you sure you want to log out?
          </Text>
        </View>

        {/* //upload picture */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleNavigation}
          style={{
            marginTop: RFPercentage(4),
            backgroundColor: Colors.blacky,
            width: "100%",
            height: RFPercentage(8),
            borderRadius: RFPercentage(2),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.6),
            }}
          >
            Yes, Logout
          </Text>
        </TouchableOpacity>

        {/* //upload picture */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setFourthModalVisible(false)}
          style={{
            marginTop: RFPercentage(1.5),
            width: "100%",
            backgroundColor: Colors.lightWhite,
            height: RFPercentage(8),
            borderRadius: RFPercentage(2),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: Colors.subtextcolor,
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.6),
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </AppModal>
    </Screen>
  );
}
const styles = StyleSheet.create({
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
});
