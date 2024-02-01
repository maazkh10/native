import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

function OTPInput() {
  const [isFocused, setFocused] = useState(false);
  return (
    <TextInput
      placeholder="Enter text here"
          style={[styles.input, {
            borderColor: isFocused ? "green" : "blue",
            borderWidth: 1,
      }]}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

export default OTPInput;

const styles = StyleSheet.create({
    input: {
      
  },
});
