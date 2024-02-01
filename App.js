import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform, SafeAreaView } from 'react-native';
import Intro from './pages/intro';
import Home from './pages/Home';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Intro />
     {/* <Home /> */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor : "white",
  padding: Platform.OS === 'android' ? StatusBar.currentHeight: 0,

  },
});
