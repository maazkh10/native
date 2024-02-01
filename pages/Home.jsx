import React from "react";
import { View, StyleSheet, Text, TouchableOpacity,SafeAreaView, StatusBar } from "react-native";
import CustomImageCarousal from "../components/CustomImageCrousal";
import { useNavigation } from "@react-navigation/native";

const Home = ({navigation }) => {

 

  const handlePress = () => {
    navigation.navigate('Signup');
  };
// intro page nhi aa raha hai start mai bhai 
  return (
    <>
      <StatusBar backgroundColor={'#fff'}/>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <CustomImageCarousal data={data} />
          <TouchableOpacity onPress={handlePress}>
          <Text>MAAZ</Text>
        </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  contentContainer: {
    // justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    marginBottom: 20
  }
});

export default Home;

const data = [
  {
    image: require("../assets/girl1.jpg"),
    heading: "Discover",
    text: "Unlock the Door to New Relationships with Go Dating. Let’s Get Started!",
  },
  {
    
    image: require("../assets/girl2.jpg"),
    heading: "Matches",
    text: "Swipe your way to love! Explore a curated selection of profiles tailored just for you.",
  },
  {
    image: require("../assets/girl3.jpg"),
    heading: "Premium",
    text: "Sign up today and enjoy the first month of premium benefits on us.",
  },
];