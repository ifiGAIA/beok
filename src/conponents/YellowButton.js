import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator ,DrawerActions} from '@react-navigation/stack';
import beok from "../json/json.json"
const Stack = createStackNavigator();

const YellowButton = ({navigation}) => {
    console.log(navigation)
    const [count, setCount] = useState(0);
    return (
        <ScrollView style={styles.container}>
       <View style={styles.ph}>
       <Text style={styles.w}>{count}</Text>
      <TouchableOpacity onPress={()=>setCount((count+1))}><Image style={styles.ybtn} source={{url:beok[0].ybtn}}/></TouchableOpacity>
      </View>
    </ScrollView>
    );
  };
  
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor:"#79B2B8",
      
    },
    ph:{
        alignItems: 'center'
      },
    ybtn:{
        width:200,
        height:226,
        marginTop:50
    },
    w:{
        color:"#fff",
        fontSize:100,
        fontWeight:"bold",
        opacity:0.5,
        marginTop:40
    }
   
  });

export default YellowButton;