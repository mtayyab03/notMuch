import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function Rating() {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {[1, 2, 3, 4, 5].map((value) => (
        <TouchableOpacity
          key={value}
          style={{ marginRight: RFPercentage(2) }}
          onPress={() => handleRating(value)}
        >
          <Icon
            size={27}
            name={value <= rating ? "star" : "star"}
            type="font-awesome"
            color={value <= rating ? "#FAA11E" : Colors.lightWhite}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
