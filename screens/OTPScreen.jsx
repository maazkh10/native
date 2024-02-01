import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { theme } from "../assets/theme";
import PrimaryButton from "../components/PrimaryButton";

const OTPScreen = () => {
  const [code, setCode] = useState("");

  const handleCodeChange = (text) => {
    setCode(text);
  };

  const handleSendAgain = () => {
    // Add code to send OTP again
    console.log("Send OTP again");
  };

  const handleVerify = () => {
    // Add code to verify OTP
    console.log("Verify OTP:", code);
  };

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "flex-start" }}>
        <Text style={styles.title}>My mobile</Text>
        <Text style={styles.text}>
          Please enter your valid phone number We will send you a 4-digit code
          to verify your account
        </Text>
      </View>
      <PhoneInput
        layout="first"
        defaultCode="IN"
        countryPickerButtonStyle={{ backgroundColor: "transparent" }}
        containerStyle={styles.input}
        textContainerStyle={styles.textContainerStyle}
      />

      <View style={{ rowGap: 4, width: "100%" }}>
        <View style={styles.privacyContainer}></View>
        <PrimaryButton title="Continue" />
      </View>
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
    fontSize: 16,
    marginTop: 4,
    opacity: 0.5,
  },
  privacyContainer: {
    display: "flex",
    flexDirection: "row",
  },
  textContainerStyle: {
    backgroundColor: "#fff",
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.border,
    marginVertical: 10,
    paddingVertical: 2,
  },
  input: {
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
});

export default OTPScreen;
