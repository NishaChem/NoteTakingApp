import React, { useEffect, useState} from "react";
import { TextInput, View, Button, StyleSheet, AsyncStorage, Image } from "react-native";
import { BACKGROUND_COLOR, COLOR_BLACK, COLOR_WHITE } from "../../../res/drawables";
import Signup from "../Signup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const Login = (props) => {
   

    const [password, setPassword] = useState ('')
    const [email, setEmail] = useState ('')

    useEffect (() => {
    
    }, [])

    const onLoginPressed = async () => {
        const auth = getAuth();
        if (email && password) {        
        try {
            let userCredential = await signInWithEmailAndPassword(auth, email, password)
            alert('User Signed In')
            console.log(userCredential)
            props.navigation.navigate('Main', {email: email})
        } catch (error) {
            alert(e.message)
            // console.log(error)
        } 
    } else {
           alert("Kindly enter your email & password")
    }
    } 

    const onForgetPasswordPressed = async () => {
        const auth = getAuth()
        if (email.includes('@')) {
            try {
                await sendPasswordResetEmail(auth, email)
                alert('Check your email to restore password')
            } catch (error) {
                
            }
            
        } else {
            alert('Kindly enter email to recover your password')
            
        }

    } 
    const onSignupPresssed = () => {
        props.navigation.navigate('Signup')

    }
  

 return (
    
    <View style = {StyleSheet.container}>
          <View
          style={{ flex: 1,
            paddingTop: '30%',
            paddingBottom: '20%',
           height: '15%',
           alignSelf:'center'
        }}
          >
        <Image 
        // style={StyleSheet.logo}
        source={require('../../../assets/logo.png')}/>
    </View>
        <View style = {{ ...styles.card, height: '8%',  backgroundColor: COLOR_WHITE,
                    shadowColor: COLOR_BLACK,
                    borderRadius: 20,
                    margin: 10,
                    borderColor: COLOR_BLACK,
                    borderwidth: 0.5
                     }}>
            <TextInput
                style={{margin: 8}}
                placeholder={'Enter Email here'}
                multiline={true}
                value={email}
                onChangeText={(t) => setEmail(t)}
                />
        </View>
        <View style = {{ ...styles.card, height: '8%',  backgroundColor: COLOR_WHITE,
                    shadowColor: COLOR_BLACK,
                    borderRadius: 10,
                    margin: 8,
                    borderColor: COLOR_BLACK,
                    borderwidth: 0.5 }}>
            <TextInput
                style={{margin: 8  }}
                placeholder={'Enter Password here'}
                value={password}
                secureTextEntry={true}
                onChangeText={(t) => setPassword(t)}
                />

        </View>
       
       <View 
       style = {{ marginEnd: 10, marginBottom: 2, marginStart: 10, height: '10%'}}
       >
        <Button 
                 

                 title={'Login'}
                 onPress={() => onLoginPressed()}/> 
                 </View>
                 <View 
                style = {{ marginEnd: 10, marginBottom: 2, marginStart: 10, height: '10%'}}
                 >
             <Button
                 title={'Forget Password?'}
                 onPress={() => onForgetPasswordPressed()}/> 
                 </View>
              <View 
              style = {{ marginEnd: 10, marginBottom: 3, marginStart: 10, height: '15%'}}
              >
              <Button
                 title={'Does not have an account?'}
                 onPress={() => onSignupPresssed()}/>
                 </View> 
                 
    </View>
 )   
}

const styles = StyleSheet.create ({
    container:{
      flex: 1,
    backgroundcolor: BACKGROUND_COLOR,
    justifyContent: 'space-between',
    margin: 10,
},
//  card: {
//     backgroundColor: COLOR_WHITE,
//         shadowColor: COLOR_BLACK,
//         borderRadius: 20,
//         margin: 10,
//         borderColor: COLOR_BLACK,
//         borderwidth: 0.5,
// }, 
//  logo: {
//     height: 150, 
//     width: 150,
//     alignSelf: 'center'
//    // flex: 1.5
//    }

})
export default Login