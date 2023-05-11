import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

//screens
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen";
import OTPScreen from "../screens/OTPScreen";
import SearchHistoryScreen from "../screens/SearchHistoryScreen";
import CleaningControl from "../screens/CleaningControl";
import CleanPayment from "../screens/CleanPayment";
import AddressScreen from "../screens/AddressScreen";
import AppointmentScreen from "../screens/AppointmentScreen";
import PaymentScreen from "../screens/PaymentScreen";
import TicPoputScreen from "../screens/TicPoputScreen";
import RetryScreen from "../screens/RetryScreen";
import BookingActiveScreen from "../screens/BookingActiveScreen";
import CancelBookingscreen from "../screens/CancelBookingscreen";
import GiveFeedbackScreen from "../screens/GiveFeedbackScreen";
import ShareEarnScreen from "../screens/ShareEarnScreen";
import EditProfile from "../screens/EditProfile";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import FAQScreen from "../screens/FAQScreen";

//navigation
import BottomTab from "./BottomTab";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "false" }}
      initialRouteName="SplashScreen"
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen
        name="SearchHistoryScreen"
        component={SearchHistoryScreen}
      />
      <Stack.Screen name="CleaningControl" component={CleaningControl} />
      <Stack.Screen name="CleanPayment" component={CleanPayment} />
      <Stack.Screen name="AddressScreen" component={AddressScreen} />
      <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="TicPoputScreen" component={TicPoputScreen} />
      <Stack.Screen name="RetryScreen" component={RetryScreen} />
      <Stack.Screen name="GiveFeedbackScreen" component={GiveFeedbackScreen} />
      <Stack.Screen name="ShareEarnScreen" component={ShareEarnScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="FAQScreen" component={FAQScreen} />

      <Stack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />

      <Stack.Screen
        name="CancelBookingscreen"
        component={CancelBookingscreen}
      />

      <Stack.Screen
        name="BookingActiveScreen"
        component={BookingActiveScreen}
      />

      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}
