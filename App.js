import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import Svg from "react-native-svg"; // Import the correct SVG components
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Intro from "./screens/Intro";
import MyMobile from "./screens/MyMobile";
import OTPScreen from "./screens/OTPScreen";
import MyProfile from "./screens/MyProfile";
import Location from "./screens/Location";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OTPScreen">
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyMobile"
          component={MyMobile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  intro: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 50,
    backgroundColor: "white",
  },
});

export default App;
