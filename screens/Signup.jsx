import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SvgComponent } from "../assets/svg";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../assets/svgrwo";
import { useNavigation } from "@react-navigation/native";
const Signup = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.svgg}>
        <SvgComponent />
        <View style={styles.min}>
          <Text style={styles.tvx}>Sign up to continue</Text>

          <TouchableOpacity style={styles.buttonn}>
            <Text style={styles.txt}>Continue with email</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('MyMobile')} style={styles.btnn}>
            <Text style={styles.txtt}>Use phone number</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sign}>
          <Text style={styles.txttt}>Or sign up with</Text>
        </View>
        <View style={styles.svh}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </View>
        <View style={styles.term}>
          <Text>Terms of use</Text>
          <Text> privacy Policy</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  svh: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "45%",
  },
  term: {
    margin: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  svgg: {
    alignItems: "center",
    justifyContent: "center",
    top: 230,
  },
  min: {
    padding: 70,
    alignItems: "center",
  },
  tvx: {
    fontWeight: "500",
    fontSize: 20,
  },
  buttonn: {
    backgroundColor: "#A72024",
    width: 250,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  btnn: {
    width: 250,

    alignItems: "center",
    marginTop: 30,
  },
  txtt: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#A72024",
  },
  txt: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 16,
  },
  sign: {
    width: "20%",
    // alignItems:"center"
  },
  txttt: {
    fontWeight: "500",
    fontSize: 16,
    alignContent: "center",
    alignItems: "center",
  },
});

export default Signup;
