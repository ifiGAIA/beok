import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import beok from "../json/json.json"
const Graphic = ({navigation}) => {
    console.log(navigation)
    return (
        <ScrollView style={styles.container}>
        <View style={styles.w}>
        <Text style={styles.w1}>04/28</Text>
        <View style={styles.line}></View>
        <View style={styles.ry}>
        <Image style={styles.ryimg} source={{url:beok[1].r4}}/>
        <Text style={styles.ryw}>88</Text>
        </View>
        <View style={styles.ry}>
        <Image style={styles.ryimg} source={{url:beok[1].y1}}/>
        <Text style={styles.ryw}>45</Text>
        </View>
        <Text style={styles.w1}>04/27</Text>
        <View style={styles.line}></View>
        <View style={styles.ry}>
        <Image style={styles.ryimg} source={{url:beok[1].r1}}/>
        <Text style={styles.ryw}>10</Text>
        </View>
        <View style={styles.ry}>
        <Image style={styles.ryimg} source={{url:beok[1].ry}}/>
        <Text style={styles.ryw}>  0</Text>
        </View>
        </View>
      </ScrollView>
    );
  };
  
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor:"#79B2B8",
        
    },
    w:{
       
        alignItems: 'center'
    },
    w1:{
        color:"#fff",
        fontSize:25,
        marginTop:30,
        letterSpacing:5
    },
    line:{
        height:2,
        width:45,
        backgroundColor:"#fff",
        marginTop:8
    },
    ry:{
      flexDirection:"row",
      marginTop:20
    },
    ryimg:{
      width:280,
      height:15
    },
    ryw:{
      color:"#fff",
      marginLeft:10,
      fontSize:20,
      bottom:5,
      fontWeight:"bold"
    }
      
  });

export default Graphic;