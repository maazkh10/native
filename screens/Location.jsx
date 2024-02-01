import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SvgLocation } from '../assets/svgrwo';

const Location = () => {
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <SvgLocation />
        <Text style={styles.text}>Set your location </Text>
        <Text style={styles.text}>Service</Text>
        <Text style={styles.textt}>We sneakily peek at your location to unveil potential matches just around the corner. It's like having a matchmaking ninja in your pocket!</Text>
      </View>
      <TouchableOpacity style={styles.buttonn}>
            <Text style={styles.txt}>Set location services</Text>
           </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    
    alignItems: 'center',
    // justifyContent: 'center', // Center vertically
  },
  buttonn:{

    backgroundColor: "#A72024",
    width: 250,
    padding: 16,
      borderRadius: 10,
      alignItems: 'center',
   marginTop: 200
      },
      txt:{
        color:"#fff",
        fontWeight:"normal",
        fontSize: 16
    },

  svgContainer: {
   marginTop: 210,
   marginRight: 60,
  },
  text: {
    marginLeft: 10, // Add margin to the left of the text
    marginRight: 40, // Add margin to the right of the SVG
    fontWeight: 'bold',
    fontSize: 30,
    padding: 5
  },
  textt:{
    marginLeft: 20, // Add margin to the left of the text
    marginRight: 60, 
    fontSize: 15,
    margin: 10
  }
});

export default Location;
