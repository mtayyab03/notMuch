import React, { useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import CardSwiper from "../components/CardSwiper";
import AppLine from "../components/AppLine";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function HomeScreen(props) {
  const [link, onChangeLink] = useState("");
  const categoryList = [
    {
      id: 1,
      title: "Cleaning",
      imageSource: require("../../assets/images/cleanicon.png"),
      // onpress: () => {
      //   props.navigation.navigate("Shopscreen");
      // },
    },
    {
      id: 2,
      title: "Paint",
      imageSource: require("../../assets/images/painticon.png"),
    },
    {
      id: 3,
      title: "Laundry",
      imageSource: require("../../assets/images/laundryicon.png"),
    },
    {
      id: 4,
      title: "Plumbing",
      imageSource: require("../../assets/images/plumbicon.png"),
    },
    {
      id: 5,
      title: "Ac Repar...",
      imageSource: require("../../assets/images/acicon.png"),
    },
    {
      id: 6,
      title: "Pest contr...",
      imageSource: require("../../assets/images/pesticon.png"),
    },
    {
      id: 7,
      title: "Appliance",
      imageSource: require("../../assets/images/applianceicon.png"),
    },
    {
      id: 8,
      title: "More",
      imageSource: require("../../assets/images/moreicon.png"),
    },
  ];
  const cleaningList = [
    {
      id: 1,
      title: "Bathroom Cleani...",
      price: "$47",
      subtitle: "Free waxing",
      imageSource: require("../../assets/images/cleanimg1.png"),
      // onpress: () => {
      //   props.navigation.navigate("Shopscreen");
      // },
    },
    {
      id: 2,
      title: "Car Cleaning",
      subtitle: "Service at Home",
      price: "$162",
      imageSource: require("../../assets/images/carcleanimg.png"),
    },
    {
      id: 3,
      title: "Salon",
      subtitle: "Free waxing",
      price: "$50",
      imageSource: require("../../assets/images/cleanimg1.png"),
    },
  ];

  const bestServiceList = [
    {
      id: 1,
      title: "Salon",
      price: "$47",
      subtitle: "Free waxing",
      imageSource: require("../../assets/images/salonimg.png"),
    },
    {
      id: 2,
      title: "Message Therapy",
      subtitle: "Free head massage",
      price: "$162",
      imageSource: require("../../assets/images/messageimg.png"),
    },
    {
      id: 3,
      title: "Car Cleaning",
      subtitle: "Free waxing",
      price: "$50",
      imageSource: require("../../assets/images/carcleanimg.png"),
    },
  ];

  const nextThingList = [
    {
      id: 1,
      title: "Messgae",
      price: "under $947",
      imageSource: require("../../assets/images/mesaageimg.png"),
    },
    {
      id: 2,
      title: "Haircut",
      price: "Offers",
      imageSource: require("../../assets/images/haircutimag.png"),
    },
    {
      id: 3,
      title: "Head to toe",
      price: " packages",
      imageSource: require("../../assets/images/headtotoeimg.png"),
    },
  ];

  const offersList = [
    {
      id: 1,
      imageSource: require("../../assets/images/offerimg1.png"),
    },
    {
      id: 2,
      imageSource: require("../../assets/images/offerimg1.png"),
    },
    {
      id: 3,
      imageSource: require("../../assets/images/offerimg1.png"),
    },
  ];
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
            marginTop: RFPercentage(2),
          }}
        >
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                style={{
                  width: RFPercentage(4),
                  height: RFPercentage(4),
                }}
                source={require("../../assets/images/Location.png")}
              />
            </View>
            <View style={{ marginLeft: RFPercentage(1.8) }}>
              <Text
                style={{
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(2.2),
                  color: Colors.subtextcolor,
                }}
              >
                Current location
              </Text>
              <View
                style={{ flexDirection: "row", marginTop: RFPercentage(0.5) }}
              >
                <Text
                  style={{
                    fontFamily: FontFamily.semiBold,
                    fontSize: RFPercentage(3),
                    color: Colors.blacky,
                  }}
                >
                  New york city
                </Text>
                <Image
                  style={{
                    marginLeft: RFPercentage(1),
                    width: RFPercentage(3),
                    height: RFPercentage(3),
                  }}
                  source={require("../../assets/images/dropicon.png")}
                />
              </View>
            </View>
          </View>

          <View style={{ position: "absolute", right: 0 }}>
            <Image
              style={{
                width: RFPercentage(4),
                height: RFPercentage(4),
              }}
              source={require("../../assets/images/bellicon.png")}
            />
          </View>
        </View>

        {/* search */}
        <View style={styles.searchmain}>
          <View style={styles.innermain}>
            <Image
              style={styles.img}
              source={require("../../assets/images/Search.png")}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                props.navigation.navigate("SearchHistoryScreen");
              }}
            >
              <Text style={styles.inputtext}>Search</Text>
            </TouchableOpacity>
            <View style={{ position: "absolute", right: RFPercentage(2) }}>
              <Image
                style={styles.img}
                source={require("../../assets/images/Filter.png")}
              />
            </View>
          </View>
        </View>

        {/* text specila offer */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(4),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.7),
              color: Colors.blacky,
            }}
          >
            Special offers
          </Text>
          <View style={{ position: "absolute", right: RFPercentage(2) }}>
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.2),
                color: Colors.blacky,
              }}
            >
              View all
            </Text>
          </View>
        </View>

        {/* Swiper horizontal */}
        <CardSwiper image={require("../../assets/images/sliderpic.png")} />

        {/* Services offer */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(1),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.7),
              color: Colors.blacky,
            }}
          >
            Services
          </Text>
          <View style={{ position: "absolute", right: RFPercentage(2) }}>
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.2),
                color: Colors.blacky,
              }}
            >
              View all
            </Text>
          </View>
        </View>

        {/*services scroll left */}

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
          {categoryList.map((item, i) => (
            <View
              key={i}
              style={{
                alignItems: "center",
                marginRight: RFPercentage(4.5),
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                // onPress={item.onpress}

                style={{
                  width: RFPercentage(8),
                  height: RFPercentage(8),
                  backgroundColor: Colors.lightWhite,
                  borderRadius: RFPercentage(4),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(3.5),
                    height: RFPercentage(3.5),
                  }}
                  source={item.imageSource}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: RFPercentage(1),
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.2),
                  color: Colors.blacky,
                }}
              >
                {item.title}
              </Text>
            </View>
          ))}
        </ScrollView>

        <AppLine />
        {/* text specila offer */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(4),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.7),
              color: Colors.blacky,
            }}
          >
            Cleeaning an pest control
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("CleaningControl");
            }}
            style={{ position: "absolute", right: RFPercentage(2) }}
          >
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.2),
                color: Colors.blacky,
              }}
            >
              View all
            </Text>
          </TouchableOpacity>
        </View>

        {/* Cleaning scroll left */}

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
          {cleaningList.map((item, i) => (
            <View
              key={i}
              style={{
                alignItems: "center",
                marginRight: RFPercentage(4.5),
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                // onPress={item.onpress}

                style={{
                  width: RFPercentage(24),
                  height: RFPercentage(15),
                  backgroundColor: Colors.lightWhite,
                  borderRadius: RFPercentage(2),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(24),
                    height: RFPercentage(15),
                    borderRadius: RFPercentage(2),
                  }}
                  source={item.imageSource}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: RFPercentage(1),
                  fontFamily: FontFamily.bold,
                  fontSize: RFPercentage(2.5),
                  color: Colors.blacky,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  marginTop: RFPercentage(1),
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.4),
                  color: Colors.subtextcolor,
                }}
              >
                {item.subtitle}
              </Text>
              <Text
                style={{
                  marginTop: RFPercentage(1),
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.2),
                  color: Colors.subtextcolor,
                }}
              >
                Starts at {item.price}
              </Text>
            </View>
          ))}
        </ScrollView>

        <AppLine />
        {/* text specila offer */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(4),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.7),
              color: Colors.blacky,
            }}
          >
            Our best services
          </Text>
          <View style={{ position: "absolute", right: RFPercentage(2) }}>
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.2),
                color: Colors.blacky,
              }}
            >
              View all
            </Text>
          </View>
        </View>

        {/* Our best services scroll left */}

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
          {bestServiceList.map((item, i) => (
            <View
              key={i}
              style={{
                alignItems: "center",
                marginRight: RFPercentage(4.5),
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                // onPress={item.onpress}

                style={{
                  width: RFPercentage(24),
                  height: RFPercentage(15),
                  backgroundColor: Colors.lightWhite,
                  borderRadius: RFPercentage(2),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(24),
                    height: RFPercentage(15),
                    borderRadius: RFPercentage(2),
                  }}
                  source={item.imageSource}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: RFPercentage(1),
                  fontFamily: FontFamily.bold,
                  fontSize: RFPercentage(2.5),
                  color: Colors.blacky,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  marginTop: RFPercentage(1),
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.4),
                  color: Colors.subtextcolor,
                }}
              >
                {item.subtitle}
              </Text>
              <Text
                style={{
                  marginTop: RFPercentage(1),
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.2),
                  color: Colors.subtextcolor,
                }}
              >
                Starts at {item.price}
              </Text>
            </View>
          ))}
        </ScrollView>

        <AppLine />
        {/* next things offer */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(4),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.7),
              color: Colors.blacky,
            }}
          >
            Next thing on your mind
          </Text>
          <View style={{ position: "absolute", right: RFPercentage(2) }}>
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.2),
                color: Colors.blacky,
              }}
            >
              View all
            </Text>
          </View>
        </View>

        {/* Our best services scroll left */}

        <ScrollView
          contentContainerStyle={{
            marginTop: RFPercentage(4),
            marginLeft: RFPercentage(3),
            paddingRight: 30,
            flexDirection: "row",
          }}
          style={{ flexShrink: 0, flexGrow: 0 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {nextThingList.map((item, i) => (
            <View
              key={i}
              style={{
                alignItems: "center",
                marginRight: RFPercentage(3.5),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FontFamily.bold,
                  fontSize: RFPercentage(2.5),
                  color: Colors.blacky,
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  marginTop: RFPercentage(1),
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.2),
                  color: Colors.blacky,
                }}
              >
                {item.price}
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                // onPress={item.onpress}

                style={{
                  marginTop: RFPercentage(1),
                  width: RFPercentage(22),
                  height: RFPercentage(20),
                  backgroundColor: Colors.lightWhite,
                  borderRadius: RFPercentage(2),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(22),
                    height: RFPercentage(20),
                    borderRadius: RFPercentage(2),
                  }}
                  source={item.imageSource}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <AppLine />
        {/* next things offer */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(4),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.7),
              color: Colors.blacky,
            }}
          >
            Next thing on your mind
          </Text>
          <View style={{ position: "absolute", right: RFPercentage(2) }}>
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.2),
                color: Colors.blacky,
              }}
            >
              View all
            </Text>
          </View>
        </View>

        {/* Our best services scroll left */}

        <ScrollView
          contentContainerStyle={{
            marginTop: RFPercentage(4),
            marginLeft: RFPercentage(3),
            paddingRight: 30,
            flexDirection: "row",
          }}
          style={{ flexShrink: 0, flexGrow: 0 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {offersList.map((item, i) => (
            <View
              key={i}
              style={{
                alignItems: "center",
                marginRight: RFPercentage(3.5),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                // onPress={item.onpress}

                style={{
                  marginTop: RFPercentage(1),
                  width: RFPercentage(45),
                  height: RFPercentage(25),
                  borderRadius: RFPercentage(2),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(45),
                    height: RFPercentage(25),
                    borderRadius: RFPercentage(2),
                  }}
                  source={item.imageSource}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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
  searchmain: {
    width: "90%",
    backgroundColor: Colors.lightWhite,
    padding: RFPercentage(1),
    borderRadius: RFPercentage(2),
    height: RFPercentage(8),
    justifyContent: "center",
    marginTop: RFPercentage(4),
  },

  innermain: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFPercentage(2),
  },

  img: { width: RFPercentage(3), height: RFPercentage(3) },

  inputtext: {
    width: "100%",
    paddingLeft: RFPercentage(1.5),
    fontSize: RFPercentage(2.4),
    color: Colors.subtextcolor,
    fontFamily: FontFamily.regular,
  },
});
