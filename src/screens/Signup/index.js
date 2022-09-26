import React, { useEffect, useState} from "react";
import { TextInput, View, Button, StyleSheet, AsyncStorage, Image } from "react-native";
import { BACKGROUND_COLOR, COLOR_BLACK, COLOR_WHITE } from "../../../res/drawables";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, addDoc, collection, db, getFirestore } from "firebase/firestore";
import App from "../../../api/firebase";
import { COLLECTION_USER } from "../../../res/strings";

const Signup = (props) => {
   
    const db = getFirestore(App);

    const [password, setPassword] = useState ('')
    const [email, setEmail] = useState ('')

    useEffect (() => {
    
    }, [])

    const onSignupPresssed = async () => {
        const auth = getAuth();
        if (email.includes('@') && password) {
        try {
            await addDoc(collection(db, email),{
            })
            let res = await createUserWithEmailAndPassword(auth, email, password)
            // await addDoc(collection(db, COLLECTION_USER, email))
            alert('User created successfully')
            props.navigation.goBack()
        } catch (error) {
            alert(e.message)
            // console.log(error)
        }
    }else{
        alert('Kindly enter email & password')
    }
    } 
    const onAlreadyAccountPressed = () => {
        props.navigation.goBack()
    }
  

 return (
    
    <View style = {StyleSheet.container}>
          <View style = {StyleSheet.container}>
        <Image style={StyleSheet.logo}
        source={require('../../../assets/logo.png')}/>
    </View>
        <View style = {{ ...styles.card, height: '8%' }}>
            <TextInput
                style={{margin: 10}}
                placeholder={'Enter Email here'}
                multiline={true}
                value={email}
                onChangeText={(t) => setEmail(t)}
                />
        </View>
        <View style = {{ ...styles.card, height: '8%' }}>
            <TextInput
                style={{margin: 10}}
                placeholder={'Enter Password here'}
                value={password}
                secureTextEntry={true}
                onChangeText={(t) => setPassword(t)}
                />

        </View>
        <Button
                 title={'Signup'}
                 onPress={() => onSignupPresssed()}/> 
             <Button
                 title={'Already have an account?'}
                 onPress={() => onAlreadyAccountPressed()}/> 
              
    </View>
 )   
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
    backgroundcolor: BACKGROUND_COLOR,
    justifyContent: 'center' 
}, card: {
    backgroundColor: COLOR_WHITE,
        shadowColor: COLOR_BLACK,
        borderRadius: 20,
        margin: 10,
        borderColor: COLOR_BLACK,
        borderwidth: 0.5
},  logo: {
    height: 150, 
    width: 200,
    alignSelf: 'center'
   }

})
export default Signup