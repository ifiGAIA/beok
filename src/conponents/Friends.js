import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity } from 'react-native';
import beok from "../json/json.json"

const Friends = ({navigation}) => {
    console.log(navigation)
    return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
      <View style={styles.headl}>
      <Image style={styles.day} source={{url:beok[0].day}}/>
      </View>
      <View style={styles.headr}>
          <View style={styles.b1}></View>
          <Text style={styles.b1w}>05</Text>
          <Text style={styles.line}>/</Text>
          <View style={styles.b2}></View>
          <Text style={styles.b2w}>01</Text>
          <Text style={styles.line}>/</Text>
          <View style={styles.b3}></View>
          <Text style={styles.b3w}>2020</Text>
      </View>
      </View>
      <View style={styles.box}>
          <View style={styles.box1}>
              <Text style={styles.box1w}>Mary</Text>
              <View style={styles.ball}>
              <View style={styles.b}>
                  <View style={styles.rb}></View>
                  <Text style={styles.rbw}>88</Text>
              </View>
              <View style={styles.b}>
                  <View style={styles.yb}></View>
                  <Text style={styles.ybw}>100</Text>
              </View>
              </View>
          </View>
      </View>
      <View style={styles.box}>
          <View style={styles.box2}>
              <Text style={styles.box1w}>Jerry</Text>
              <View style={styles.ball}>
              <View style={styles.b}>
                  <View style={styles.rb}></View>
                  <Text style={styles.rbw}>42</Text>
              </View>
              <View style={styles.b}>
                  <View style={styles.yb}></View>
                  <Text style={styles.ybw}>31</Text>
              </View>
              </View>
          </View>
      </View>
      <View style={styles.box}>
          <View style={styles.box2}>
              <Text style={styles.box1w}>Cathy</Text>
              <View style={styles.ball}>
              <View style={styles.b}>
                  <View style={styles.rb}></View>
                  <Text style={styles.rbw}>0</Text>
              </View>
              <View style={styles.b}>
                  <View style={styles.yb}></View>
                  <Text style={styles.ybw}>19</Text>
              </View>
              </View>
          </View>
      </View>
    </ScrollView>
    );
  };
  
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor:"#79B2B8",
      
    },
    header:{
        flexDirection:"row",
    },
    headl:{
        flexDirection:"row",
        backgroundColor:"#79B2B8",
        borderColor:"#fff",
        borderWidth:4,
        width:75,
        height:60,
        marginTop:40,
        marginLeft:22,
        borderTopStartRadius:999,
        borderBottomStartRadius:999,
        alignItems: 'center',
        justifyContent: 'center'
    },
    day:{
        width:30,
        height:30,
        marginLeft:10
    },
    headr:{
        flexDirection:"row",
        backgroundColor:"#79B2B8",
        borderColor:"#fff",
        borderTopWidth:4,
        borderRightWidth:4,
        borderBottomWidth:4,
        width:255,
        height:60,
        marginTop:40,
        marginLeft:0,
        borderTopEndRadius:999,
        borderBottomEndRadius:999,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    b1:{
        backgroundColor:"#fff",
        borderRadius:999,
        height:35,
        width:55,
        opacity:0.4,
        marginRight:0,
       
    },
    b1w:{
        position:"absolute",
        color:"#fff",
        right:197,
        fontSize:20
    },
    b2:{
        backgroundColor:"#fff",
        borderRadius:999,
        height:35,
        width:55,
        opacity:0.4,
        marginRight:0,
       
    },
    b2w:{
        position:"absolute",
        color:"#fff",
        right:119,
        fontSize:20
    },
    b3:{
        backgroundColor:"#fff",
        borderRadius:999,
        height:35,
        width:65,
        opacity:0.4,
        marginRight:0,
       
    },
    b3w:{
        position:"absolute",
        color:"#fff",
        right:20,
        fontSize:20,
    },
    line:{
        color:"#fff",
        fontSize:25,
        opacity:0.5,
        marginRight:8,
        marginLeft:8
    },
    box:{
        alignItems:'center',
        justifyContent:'center'
    },
    box1:{
        backgroundColor:"#fff",
        borderRadius:15,
        height:120,
        width:330,
        marginTop:40,
        flexDirection:"row",
    },
    box1w:{
        color:"#727272",
        fontSize:20,
        margin:15,
        marginLeft:20
    },
    b:{
        flexDirection:"row",
    },
    rb:{
        width:30,
        height:30,
        borderRadius:999,
        backgroundColor:"#FF9297",
        margin:15,
        marginLeft:150
    },
    rbw:{
        color:"#727272",
        margin:22,
        marginLeft:0
    },
    yb:{
        width:30,
        height:30,
        borderRadius:999,
        backgroundColor:"#FFC956",
        margin:15,
        marginLeft:150
    },
    ybw:{
        color:"#727272",
        margin:22,
        marginLeft:0
    },
    box2:{
        backgroundColor:"#fff",
        borderRadius:15,
        height:120,
        width:330,
        marginTop:20,
        flexDirection:"row",
    },

  });

export default Friends;