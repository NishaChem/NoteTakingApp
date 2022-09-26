import React, { useEffect, useState} from "react";
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity, AsyncStorage, ActivityIndicator } from "react-native";
import { ADD_BUTTON_IMG, BACKGROUND_COLOR, NOTE_IMG, DELETE_ICON } from "../../../res/drawables";
import ImgButton from "../../components/ImgButton";
import Create from "../Create";
import { FirebaseApp } from '../../../api/firebase';
import { collection, getDocs, getFirestore, query, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { async } from "@firebase/util";
import App from "../../../api/firebase";
import axios from "axios";
import { getTemperatureForACity } from "../../services/weather";

const Main = (props) =>{
    const [data, setData ] = useState ([])
    const [selectedNote, setSelectedNote] = useState ([])
    const [loading, setLoading] = useState([])
    const {email} = props.route.params
    const db= getFirestore(App)

    const loadData = async () => {
        setLoading(true)
        //alert(await getTemperatureForACity('Islamabad'))

        // let weather=await axios.get('')
        // console.log(weather)
        // let response = await axios.post('uri',{
        //     param1:'abc',
        //     parameter2:'asdfgh'
        // } )
        // console.log(weather.data.current.temp-c)
        // alert('Temperature in Vehari is: '+'weather.data.current.temp-c')

     //   let keys = []
//         const querySnapshot = await getDocs(collection(db, email));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
//   keys.push(doc.data())
// });
const q = query(collection(db, email))
try {
    let keys =[]
    

 const unsub = onSnapshot(q, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
       console.log(doc.data())
       keys.push(doc.data())
  });
  setData(keys)
});
 //console.log("keys are" + keys)
} catch (error) {
    
}


  setLoading(false)
    }    


    const unsubscribe = onSnapshot(collection(db, email), () => {
        // Respond to data
        // ...
      });
      
      // Later ...
      
      // Stop listening to changes
      unsubscribe();

    useEffect (() => {
        loadData()
       // console.log(loadData)
    
   
    //     loadAllKeyFromAsyncStorage()
    }, [])
    // const loadAllKeyFromAsyncStorage = async () => {
        
    //         let key = await AsyncStorage.getAllKeys()
    //         if (key.length != data.length)
    //         setData(key) 
        // }
    
    const DeleteData = async(title) => {
        try {
            await deleteDoc(doc(db, email, title));
        } catch (error) {
            console.log(e)
        }
    }   

    return(
        <View style={styles.container}>
            {loading ?<ActivityIndicator/> :null}
            <FlatList
           data={data}
           numColumns= '5'
            renderItem={({ item }) =>{
            return( 
            <TouchableOpacity onPress = {() => {
                props.navigation.navigate('Create', {title: item.title, description: item.description, email})
            }}>
                <View style={{margin: 5, height: '10%'}}>
                    <Image
                    style={styles.noteIcon}
                    source={NOTE_IMG}/>
                    <Text style={styles.text}>{item.title}</Text>
                </View>
                <TouchableOpacity>
                    <Image
                    style= {styles.deleteicon}
                    source= {DELETE_ICON}
                    onPress = {() => DeleteData }
                    />

                </TouchableOpacity>
            </TouchableOpacity>
            
            )
        }}
        keyExtractor={(item) => item}
        />
            <ImgButton
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    bottom: 0,
                    right:0,
                }}
                source={ADD_BUTTON_IMG} 
                onPress={() => props.navigation.navigate('Create', {title: null, description: null, email})} />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        
    }, deleteicon:
    {flex: 1,
      height: 10
    }
})
export default Main