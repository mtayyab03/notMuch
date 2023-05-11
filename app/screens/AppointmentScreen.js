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

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function AppointmentScreen(props) {
  const [menuid, setmenuid] = useState(0);
  const [timeid, settimeid] = useState(0);
  const [noonid, setnoonid] = useState(0);
  const [fourthmodalVisible, setFourthModalVisible] = useState(false);

  const handleNavigation = () => {
    props.navigation.navigate("PaymentScreen");
    setFourthModalVisible(false);
  };
  const categoryList = [
    {
      id: 1,
      title: "10:00",
    },
    {
      id: 2,
      title: "10:00",
    },
    {
      id: 3,
      title: "10:00",
    },
  ];

  const noontimeList = [
    {
      id: 1,
      title: "12:15",
    },
    {
      id: 2,
      title: "01:00",
    },
    {
      id: 3,
      title: "01:45",
    },
    {
      id: 4,
      title: "2:30",
    },
    {
      id: 5,
      title: "03:15",
    },
    {
      id: 6,
      title: "04:00",
    },
    {
      id: 7,
      title: "4:30",
    },
    {
      id: 8,
      title: "5:15",
    },
    {
      id: 9,
      title: "06:00",
    },
    {
      id: 10,
      title: "6:30",
    },
    {
      id: 11,
      title: "07:15",
    },
  ];

  const daysList = [
    {
      id: 1,
      date: "01",
      day: "Sun",
    },
    {
      id: 2,
      date: "02",
      day: "Mon",
    },
    {
      id: 3,
      date: "03",
      day: "Tue",
    },
    {
      id: 4,
      date: "04",
      day: "Wed",
    },
    {
      id: 5,
      date: "05",
      day: "Thur",
    },
    {
      id: 6,
      date: "06",
      day: "Fri",
    },
    {
      id: 7,
      date: "08",
      day: "Sat",
    },
    {
      id: 8,
      date: "09",
      day: "Sun",
    },
    {
      id: 9,
      date: "10",
      day: "Mon",
    },
    {
      id: 10,
      date: "11",
      day: "Tue",
    },
    {
      id: 11,
      date: "12",
      day: "Wed",
    },
    {
      id: 12,
      date: "13",
      day: "Thu",
    },
    {
      id: 13,
      date: "14",
      day: "Fri",
    },
    {
      id: 14,
      date: "15",
      day: "Sat",
    },
    {
      id: 15,
      date: "16",
      day: "Sun",
    },
    {
      id: 16,
      date: "17",
      day: "Sat",
    },
    {
      id: 17,
      date: "18",
      day: "Sun",
    },
    {
      id: 18,
      date: "19",
      day: "Mon",
    },
    {
      id: 19,
      date: "20",
      day: "Tue",
    },
    {
      id: 20,
      date: "21",
      day: "Wed",
    },
    {
      id: 21,
      date: "22",
      day: "Thu",
    },
    {
      id: 22,
      date: "23",
      day: "Fri",
    },
    {
      id: 23,
      date: "24",
      day: "Sat",
    },
    {
      id: 24,
      date: "25",
      day: "Sun",
    },
    {
      id: 25,
      date: "26",
      day: "Sat",
    },
    {
      id: 26,
      date: "27",
      day: "Sun",
    },
    {
      id: 27,
      date: "28",
      day: "Mon",
    },
    {
      id: 28,
      date: "29",
      day: "Tue",
    },
    {
      id: 29,
      date: "30",
      day: "Wed",
    },
  ];
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
          title="Cleaning control"
          selectColor={Colors.blacky}
          onpress={() => {
            props.navigation.navigate("BottomTab", { screen: "HomeScreen" });
          }}
        />
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
              fontSize: RFPercentage(3),
              color: Colors.blacky,
            }}
          >
            Appointment
          </Text>
        </View>
        {/* end */}

        {/* Appointment scroll list */}
        <ScrollView
          contentContainerStyle={{
            marginTop: RFPercentage(3),
            marginLeft: RFPercentage(3),
            paddingRight: 30,
            flexDirection: "row",
          }}
          style={{ flexShrink: 0, flexGrow: 0 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {daysList.map((item, i) => (
            <TouchableOpacity
              onPress={() => setmenuid(item.id)}
              key={i}
              activeOpacity={0.7}
              style={{
                width: RFPercentage(8),
                height: RFPercentage(14),
                backgroundColor:
                  menuid === item.id ? Colors.blacky : Colors.lightWhite,
                borderRadius: RFPercentage(4),
                alignItems: "center",
                justifyContent: "center",
                marginRight: RFPercentage(2),
              }}
            >
              <Text
                style={{
                  fontFamily: FontFamily.bold,
                  fontSize: RFPercentage(2.8),
                  color: menuid === item.id ? Colors.white : "#616161",
                }}
              >
                {item.date}
              </Text>
              <Text
                style={{
                  marginTop: RFPercentage(1),
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(2),
                  color: menuid === item.id ? Colors.white : "#616161",
                }}
              >
                {item.day}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* morning text */}
        <View style={{ marginTop: RFPercentage(2) }} />
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(1),
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: RFPercentage(1.5),
              height: RFPercentage(1.5),
              backgroundColor: Colors.blacky,
              borderRadius: RFPercentage(1),
              marginTop: RFPercentage(1),
            }}
          />
          <View style={{ width: "95%", marginLeft: RFPercentage(2) }}>
            <Text
              style={{
                fontFamily: FontFamily.bold,
                fontSize: RFPercentage(3),
                color: Colors.blacky,
              }}
            >
              Morning
            </Text>
            {/* flatlist morning time list */}

            <FlatList
              numColumns={3}
              scrollEnabled={false}
              contentContainerStyle={{
                width: "100%",
                marginTop: RFPercentage(1),
              }}
              style={{ flexGrow: 0 }}
              data={categoryList}
              keyExtractor={(categoryList) => categoryList.id.toString()}
              renderItem={({ item, i }) => (
                <View
                  key={i}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => settimeid(item.id)}
                    style={{
                      marginTop: RFPercentage(1),
                      marginRight: RFPercentage(1.5),
                      alignItems: "center",
                      justifyContent: "center",
                      paddingHorizontal: RFPercentage(2.3),
                      height: RFPercentage(6.2),
                      borderRadius: RFPercentage(3),
                      backgroundColor:
                        timeid === item.id ? Colors.lightWhite : Colors.white,
                      borderColor:
                        timeid === item.id ? Colors.blacky : Colors.lightWhite,
                      borderWidth: RFPercentage(0.3),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFPercentage(2.5),
                        fontFamily: FontFamily.medium,
                        color: Colors.blacky,
                      }}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
        {/* end */}

        {/* Noon text */}
        <View style={{ marginTop: RFPercentage(2) }} />
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(1),
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: RFPercentage(1.5),
              height: RFPercentage(1.5),
              backgroundColor: Colors.blacky,
              borderRadius: RFPercentage(1),
              marginTop: RFPercentage(1),
            }}
          />
          <View style={{ width: "95%", marginLeft: RFPercentage(2) }}>
            <Text
              style={{
                fontFamily: FontFamily.bold,
                fontSize: RFPercentage(3),
                color: Colors.blacky,
              }}
            >
              After noon
            </Text>
            {/* flatlist noon time list */}

            <FlatList
              numColumns={4}
              scrollEnabled={false}
              contentContainerStyle={{
                width: "100%",
                marginTop: RFPercentage(1),
              }}
              style={{ flexGrow: 0 }}
              data={noontimeList}
              keyExtractor={(noontimeList) => noontimeList.id.toString()}
              renderItem={({ item, i }) => (
                <View
                  key={i}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setnoonid(item.id)}
                    style={{
                      marginTop: RFPercentage(1),
                      marginRight: RFPercentage(1.5),
                      marginBottom: RFPercentage(1),
                      alignItems: "center",
                      justifyContent: "center",
                      paddingHorizontal: RFPercentage(2.3),
                      height: RFPercentage(6.2),
                      borderRadius: RFPercentage(3),
                      backgroundColor:
                        noonid === item.id ? Colors.lightWhite : Colors.white,
                      borderColor:
                        noonid === item.id
                          ? Colors.lightWhite
                          : Colors.lightWhite,
                      borderWidth: RFPercentage(0.3),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFPercentage(2.5),
                        fontFamily: FontFamily.medium,
                        color:
                          noonid === item.id
                            ? Colors.subtextcolor
                            : Colors.blacky,
                      }}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>

        {/* last button */}

        <View
          style={{
            width: "90%",
            flexDirection: "row",
            marginTop: RFPercentage(10),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "40%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFPercentage(3),
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                }}
              >
                168 1 item
              </Text>
              <View style={{ marginTop: RFPercentage(1) }} />
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: RFPercentage(2.5),
                    color: Colors.grey,
                    fontFamily: FontFamily.medium,
                  }}
                >
                  Inc. of all taxes
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setFourthModalVisible(true)}
            style={{
              width: "60%",
              height: RFPercentage(8),
              borderRadius: RFPercentage(2),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.blacky,
            }}
          >
            <Text style={styles.buttontext}>Proceed</Text>
          </TouchableOpacity>
        </View>
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
            marginTop: RFPercentage(2),
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(3),
              color: Colors.blacky,
            }}
          >
            Confirmation
          </Text>
          <Text
            style={{
              marginTop: RFPercentage(2),
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.5),
              color: Colors.blacky,
            }}
          >
            Akshay syal
          </Text>
          <Text
            style={{
              marginTop: RFPercentage(1),
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2.5),
              color: Colors.subtextcolor,
            }}
          >
            1534 Signle Street, USA
          </Text>
          <Text
            style={{
              marginTop: RFPercentage(1),
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2.5),
              color: Colors.subtextcolor,
            }}
          >
            at 11:30 AM, Wed 19th Sep 2021.
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
            Continue
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
});
