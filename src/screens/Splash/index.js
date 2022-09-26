import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { BACKGROUND_COLOR } from "../../../res/drawables";

const Splash = (props) => {
     setTimeout (() => {
        props.navigation.replace('Login')
    }, 3000)

return (
    <View style = {StyleSheet.container}>
        <Image 
        //style={StyleSheet.logo}
        source={require('../../../assets/logo.png')}/>
    </View>
)}
const styles = StyleSheet.create({
    container: {
        flex: 1,
     backgroundColor: BACKGROUND_COLOR,
     marginHorizontal: 16,
     justifyContent: 'center'
    }
    // , logo: {
        
    //      flex:0.5,
    //      height: '50%',
    //     //  justifyContent: "space-around",
    //     justifyContent: 'center'
    // }
})
export default Splash