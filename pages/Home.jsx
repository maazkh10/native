import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import CustomImageCarousal from '../components/CustomImageCrousal';

const Home = ({navigation }) => {
  const data = [
    {
      image: require('../assets/girl1.jpg'),
      heading: 'Discover',
      text: 'Unlock the Door to New Relationships with Go Dating. Let’s Get Started!',
    },
    {
      image: require('../assets/girl2.jpg'),
      heading: 'Matches',
      text: 'Swipe your way to love! Explore a curated selection of profiles tailored just for you.',
    },
    {
      image: require('../assets/girl3.jpg'),
      heading: 'Premium',
      text: 'Sign up today and enjoy the first month of premium benefits on us.',
    },
  ];

  const handlePress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <CustomImageCarousal data={data} />
      
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.txt}>MAAZ</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // Your text styles here
  },
  txt: {
    marginBottom: 20
  }
});

export default Home;