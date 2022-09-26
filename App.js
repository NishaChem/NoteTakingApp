import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Switch, Button } from 'react-native';
import Navigation from './src/navigation';

export default function App() {
  return (
    <Navigation/>
  )}
    
    //<View style={styles.container}>
     {/* <Text>Open up App.js to start working on your app!</Text> */}
    
    // <StatusBar style="auto" />
      
    //</View>
    
 // );
  

const styles = StyleSheet.create({
  container: {
    display: "flex",
     flex: 1,
     alignItems: 'center',
     justifyContent:'center',
    backgroundColor: "#fff"
  }
      
});
