import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SvgComponent from '../assets/svg';
const Signup = () => {
    return (
        <View style={styles.container}>
            <View style={styles.svgg}>
            <SvgComponent />
            <Text style={styles.tvx}>Sign up to continue</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    svgg: {
   alignItems: "center",
   justifyContent:"center",
   top: 230,
   
    }
})

export default Signup;
