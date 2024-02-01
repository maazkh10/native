import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { theme } from "../assets/theme";
import PrimaryButton from "../components/PrimaryButton";
import { LockIcon } from "../assets/Icon";

const OTPScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>00:42</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 36,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    marginTop: 4,
    opacity: 0.5,
  },
  
});

export default OTPScreen;
