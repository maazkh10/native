import React, { Component } from 'react';
import { Text, StyleSheet, View, Animated, TouchableOpacity } from 'react-native';
import Svg  from 'react-native-svg'; // Import the correct SVG components
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import SvgComponent from '../assets/svg';
const Stack = createStackNavigator();

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: new Animated.Value(0),
    };
  }

  handleSvgClick = () => {
    Animated.timing(this.state.translateY, {
      toValue: -900,
      duration: 900,
      useNativeDriver: false,
    }).start(() => {
      // Navigate to HomeScreen after the animation is complete
      this.props.navigation.navigate('Home');
    });
  };

  render() {
    const { translateY } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.intro, { transform: [{ translateY }] }]}>
         
        

        {/* SVG Component */}
        <TouchableOpacity onPress={this.handleSvgClick}>
      <SvgComponent  />
          
        </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen name="Intro" component={Intro} options= {{ headerShown : false}}  />
      <Stack.Screen name="Home" component={Home}  options= {{ headerShown : false}}  />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    alignItems: 'center',
    justifyContent: 'center',
  bottom: 50,
    backgroundColor: 'white',
  },
});

export default App;
