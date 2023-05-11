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

//Components
import Screen from "../components/Screen";
import MainHeader from "../components/MainHeader";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function PrivacyPolicyScreen(props) {
  return (
    <Screen style={styles.screen}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View style={{ marginTop: RFPercentage(3) }} />
        <MainHeader
          imageSource={require("../../assets/images/arrrowleftblack.png")}
          title="Privacy Policy"
          selectColor={Colors.blacky}
          onpress={() => {
            props.navigation.navigate("BottomTab", {
              screen: "Profilescreen",
            });
          }}
        />
        <View style={{ marginTop: RFPercentage(2) }} />
        <View style={{ width: "90%", marginTop: RFPercentage(2) }}>
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.6),
              color: Colors.blacky,
            }}
          >
            Acceptance of the privacy policy
          </Text>
          <Text
            style={{
              marginTop: RFPercentage(2),
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(2),
              color: Colors.textcolor,
              lineHeight: RFPercentage(3),
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Auctor morbi consequat
            vivamus feugiat magna. Mauris posuere fames amet mattis proin. In
            egestas placerat volutpat iaculis turpis bibendum velit. Sit
            ullamcorper phasellus nullam et duis tincidunt consectetur sed eu.
            Posuere nulla vestibulum vulputate turpis eu morbi potenti sit.
            Aliquam molestie tincidunt egestas donec molestie nulla adipiscing.
            Orci penatibus sem enim rutrum. Placerat erat enim quisque at
            lectus. Sagittis ipsum in massa enim odio ornare donec eget proin.
            Id aliquet accumsan urna non ipsum dictum massa eu nulla. Venenatis
            ipsum nisl egestas sit eget sit a. Facilisis id eget enim posuere
            purus. Convallis hendrerit sagittis sapien eu pharetra. Id vulputate
            purus ut ultrices tortor. Id consequat nunc arcu ante. Eu sit cursus
            iaculis commodo elementum risus praesent. Et eu faucibus justo eget
            tristique libero et tortor ultricies. Etiam elementum ornare dictum
            pellentesque. Eget suspendisse nisi dolor odio. Nulla dui arcu quis
            sed nec orci tempus. Elementum ac natoque ut enim malesuada nulla
            vestibulum. Et aliquam risus ultricies posuere neque consectetur eu.
            Risus egestas imperdiet id sit. Porttitor ornare sagittis elementum
            pretium neque mauris. Volutpat ut sed risus nibh. Turpis hac lectus
            eget sed enim tellus pharetra viverra. Sed porttitor vitae nulla
            dolor curabitur venenatis enim. Sed risus eu pellentesque risus
            risus. Commodo pellentesque aenean euismod tellus id et
          </Text>
        </View>

        <View style={{ width: "90%", marginTop: RFPercentage(2) }}>
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.6),
              color: Colors.blacky,
            }}
          >
            1. Typs of data we collect
          </Text>
          <Text
            style={{
              marginTop: RFPercentage(2),
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(2),
              color: Colors.textcolor,
              lineHeight: RFPercentage(3),
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Massa et quis magna urna id
            felis enim sapien. Nunc dui consectetur nunc quis vel ipsum. Tellus
            convallis varius eu vitae elementum velit suscipit. Id euismod nibh
            faucibus risus vitae dignissim nulla id.
          </Text>
        </View>
        <View style={{ width: "90%", marginTop: RFPercentage(2) }}>
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.6),
              color: Colors.blacky,
            }}
          >
            2. User of your personal data
          </Text>
          <Text
            style={{
              marginTop: RFPercentage(2),
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(2),
              color: Colors.textcolor,
              lineHeight: RFPercentage(3),
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Egestas accumsan viverra
            pellentesque vel malesuada arcu vestibulum. Et dolor tellus nunc
            orci turpis. Risus iaculis tristique nunc integer lacus
            pellentesque. Aliquam molestie faucibus diam porttitor viverra fames
            vitae. Parturient a hendrerit dictumst gravida purus imperdiet
            mattis leo sit.
          </Text>
        </View>

        <View style={{ width: "90%", marginTop: RFPercentage(2) }}>
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.6),
              color: Colors.blacky,
            }}
          >
            3. Disclosure to your personal data
          </Text>
          <Text
            style={{
              marginTop: RFPercentage(2),
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(2),
              color: Colors.textcolor,
              lineHeight: RFPercentage(3),
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Egestas accumsan viverra
            pellentesque vel malesuada arcu vestibulum. Et dolor tellus nunc
            orci turpis. Risus iaculis tristique nunc integer lacus
            pellentesque. Aliquam molestie faucibus diam porttitor viverra fames
            vitae. Parturient a hendrerit dictumst gravida purus imperdiet
            mattis leo sit. Massa pellentesque sapien lacus et adipiscing sed
            bibendum lacus vulputate. Massa metus posuere dui urna est. Sed nibh
            orci nisl natoque diam sit nec mauris. Bibendum sociis vitae amet
            egestas tincidunt. Sed vitae integer urna donec urna amet elit.
            Aliquam porttitor ipsum at risus odio arcu. Viverra enim pharetra
            molestie sit eu sed morbi donec. Commodo risus vel pellentesque diam
            eget pellentesque commodo. Faucibus sagittis tincidunt dis augue
            amet felis.
          </Text>
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
});
