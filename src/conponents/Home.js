import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity } from 'react-native';
import beok from "../json/json.json"
const Home = ({navigation}) => {
  console.log(navigation)
  return (
  <ScrollView style={styles.container}>
      <View style={styles.ph}>
    <Image style={styles.iam} source={{url:beok[0].iam}}/>
    <TouchableOpacity onPress={() => navigation.navigate("RedButton")}><Image style={styles.angry} source={{url:beok[0].angry}}/></TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("YellowButton")}><Image style={styles.sad} source={{url:beok[0].sad}}/></TouchableOpacity>
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
  iam:{
      width:70,
      height:40,
      marginTop:50
  },
  angry:{
      width:150,
      height:150,
      marginTop:50
  },
  sad:{
    width:150,
    height:150,
    marginTop:30
  }


    
    
});

export default Home;