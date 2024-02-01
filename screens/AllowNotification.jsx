import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { AllowNotificationIcon } from "../assets/Icon";

const AllowNotification = ({ navigation }) => {
  return (
    <View style={{ padding: 10, flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.svgContainer}>
          <View style={styles.iconWrapper}>
            <AllowNotificationIcon
              style={{ width: 40, height: 40, fill: "#fff" }}
            />
          </View>
          <Text style={styles.text}>Allow </Text>
          <Text style={styles.text}>Notification</Text>
          <Text style={styles.textt}>
            We sneakily peek at your AllowNotification to unveil potential
            matches just around the corner. It's like having a matchmaking ninja
            in your pocket!
          </Text>
        </View>
      </View>
      <PrimaryButton
        title="Allow Notification"
        onPress={() => navigation.navigate("MyProfile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Center vertically
  },
  iconWrapper: {
    padding: 4,
    width: 60,
    height: 60,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
      backgroundColor: "#A72024",
      marginBottom:10,
  },
  buttonn: {
    backgroundColor: "#A72024",
    width: 250,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    // marginTop: 200,
  },
  txt: {
    color: "#fff",
    fontWeight: "normal",
    fontSize: 16,
  },

  svgContainer: {
    marginRight: 60,
  },
  text: {
    // Add margin to the left of the text
    marginRight: 40, // Add margin to the right of the SVG
    fontWeight: "bold",
    fontSize: 30,
    padding: 5,
  },
  textt: {
    marginLeft: 10, // Add margin to the left of the text
    marginRight: 60,
    fontSize: 15,
    margin: 10,
  },
});

export default AllowNotification;
