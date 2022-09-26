import React, { useEffect, useState} from "react";
import { TextInput, View, Button, StyleSheet, AsyncStorage } from "react-native";
import { BACKGROUND_COLOR, COLOR_BLACK, COLOR_WHITE } from "../../../res/drawables";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import App from "../../../api/firebase";
import { getAuth } from "firebase/auth";


const Create = (props) => {
    //let { noteTitle } = props.route.params
    const db = getFirestore(App);
    const auth =getAuth()
     const { email, title: noteTitle, description: noteDescription }= props.route.params
     console.log(email)
    const [title, setTitle] = useState (noteTitle)
    const [description, setDescription] = useState (noteDescription)

    const loadData = async () => {
    }

    useEffect (() => {
        loadData()
    }, [])
    // const loadData = async () => {
    //     if (noteTitle) {
    //         let description = await AsyncStorage.getItem(noteTitle)
    //         setTitle(noteTitle)
    //         setDescription(description)
    //     }
    // }
    const onAddPressed = async () => {
        if (title != '' && description != '') {
            try {
                //add doc, it creates a random document id
                // const docRef = await addDoc(collection(db, "Notes"), {
                //     title: title,
                //     description: description,w
                //   });
                 
                 const docRef = await setDoc(doc(db, email, title), {
                    title: title,
                    description: description
                 });

                //   await setDoc(doc(db, "Notes", title), {
                //     title,
                //    description
                //   });
            
                // //   console.log("Document written with ID: ", docRef.id);

                // let value = await AsyncStorage.getItem(title)
                // if (value && !noteTitle) { 
                //     alert('Title already exists')
                // } else {
                //     await AsyncStorage.setItem(title, description)
                //     setTitle('')
                //     setDescription('')
                     alert('Note Saved')
                  props.navigation.navigate('Main')
                //}
            } catch (e) {
                console.log(e)
            }
        } else {
            alert('Kindly add title & description')
        }
    }




 return (
    <View style = {StyleSheet.container}>
        <View style = {{ ...styles.card, height: '8%' }}>
            <TextInput
                style={{margin: 10}}
                placeholder={'Enter title here'}
                multiline={true}
                value={title}
                editable={noteTitle ? false : true}
                onChangeText={(t) => setTitle(t)}
                />
        </View>
        <View style = {{ ...styles.card, height: '70%' }}>
            <TextInput
                style={{margin: 10}}
                placeholder={'Enter description here'}
                multiline={true}
                value={description}
                onChangeText={(t) => setDescription(t)}
                />

        </View>
        <Button
                 title={noteTitle ? "Update Note" : 'Add Note'}
                 
                 onPress={() => onAddPressed()}/> 
    </View>
 )   
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
    backgroundcolor: BACKGROUND_COLOR 
}, card: {
    backgroundColor: COLOR_WHITE,
        shadowColor: COLOR_BLACK,
        borderRadius: 20,
        margin: 10,
        borderColor: COLOR_BLACK,
        borderwidth: 0.5
}

})
export default Create