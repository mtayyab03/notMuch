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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppLine from "../components/AppLine";
import TitleDateRup from "../components/TitleDateRup";
import TextTwoEnd from "../components/TextTwoEnd";
import TitleSubEndImg from "../components/TitleSubEndImg";
import Rating from "../components/Rating";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function GiveFeedbackScreen(props) {
  const [eyeIcon, setEyeIcon] = useState(false);

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
              props.navigation.navigate("BottomTab", { screen: "HomeScreen" });
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
                Completed
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

        {/* container levi ray */}

        <View
          style={{
            width: "90%",
            borderRadius: RFPercentage(2),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.lightWhite,
            marginTop: RFPercentage(3),
            paddingHorizontal: RFPercentage(2),
          }}
        >
          <TitleSubEndImg
            title="Levi ray"
            stars="4.8"
            rating="192 "
            imageSource={require("../../assets/images/persomimg.png")}
          />
          <View
            style={{
              width: "100%",
              marginTop: RFPercentage(2),
              height: RFPercentage(0.2),
              backgroundColor: Colors.lightWhite,
              borderRadius: RFPercentage(1),
            }}
          />
          <Text
            style={{
              marginTop: RFPercentage(2),
              marginBottom: RFPercentage(2),
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2.2),
              color: Colors.blacky,
            }}
          >
            Job completed at 04:24 PM or firday, 22 march 21
          </Text>
        </View>

        {/* rating conatiner */}
        <View
          style={{
            width: "90%",
            borderRadius: RFPercentage(2),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.lightWhite,
            marginTop: RFPercentage(3),
            padding: RFPercentage(2),
            justifyContent: "center",
            paddingBottom: RFPercentage(3),
          }}
        >
          <View
            style={{
              width: "100%",
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
              Your Rating
            </Text>
          </View>

          <View
            style={{ justifyContent: "center", marginTop: RFPercentage(2.5) }}
          >
            <Rating />

            <View
              style={{
                position: "absolute",
                right: 0,
                padding: RFPercentage(1.5),
                paddingHorizontal: RFPercentage(3),
                borderRadius: RFPercentage(1),
                borderRadius: RFPercentage(4),
                borderWidth: RFPercentage(0.2),
                borderColor: Colors.lightWhite,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(2),
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                }}
              >
                3.0
              </Text>
            </View>
          </View>
        </View>

        {/* vendor container */}
        {/* rating conatiner */}
        <View
          style={{
            width: "90%",
            borderRadius: RFPercentage(2),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.lightWhite,
            marginTop: RFPercentage(3),
            padding: RFPercentage(2),
            justifyContent: "center",
            paddingBottom: RFPercentage(3),
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.6),
                color: Colors.blacky,
              }}
            >
              Vendor comment
            </Text>
            <Text
              style={{
                marginTop: RFPercentage(1),
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.6),
                color: Colors.subtextcolor,
              }}
            >
              Comment from vendor
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: RFPercentage(1.5),
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.6),
                color: Colors.blacky,
              }}
            >
              ------------
            </Text>

            <TouchableOpacity
              onPress={() => setEyeIcon(!eyeIcon)}
              activeOpacity={0.7}
              style={styles.eyeicon}
            >
              <MaterialCommunityIcons
                color={Colors.blacky}
                size={RFPercentage(3)}
                name={eyeIcon ? "eye-outline" : "eye-off-outline"}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: RFPercentage(3) }} />
        <View
          style={{
            width: "100%",
            marginTop: RFPercentage(2),
            height: RFPercentage(0.2),
            backgroundColor: Colors.lightWhite,
            borderRadius: RFPercentage(1),
          }}
        />
        {/* order summarytext */}
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

        <View style={{ alignItems: "center", marginTop: RFPercentage(4) }}>
          <Text
            style={{
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2),
              color: Colors.subtextcolor,
            }}
          >
            We’ve sent a copy of this bill to your email id
          </Text>
          <View style={{ marginTop: RFPercentage(1) }} />
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2),
              color: Colors.blacky,
            }}
          >
            Support@rightjoy.com
          </Text>
        </View>
        {/* //cancel Booking picture */}
        <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
          <AppButton title="Give Feedback" buttonColor={Colors.blacky} />
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
  eyeicon: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2),
  },
});
