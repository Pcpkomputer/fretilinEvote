import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import { StatusBarHeight } from '../utils/HeightUtils';

import Carousel from "pinar";


export default function LandingScreen() {

  let [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={{flex:1,backgroundColor:"white"}}>
        <View style={{height:StatusBarHeight}}></View>
        <View style={{flex:1,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
            <View style={{height:EStyleSheet.value("150rem"),width:"100%",justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:EStyleSheet.value("40rem")}}>eVote</Text>
            </View>
            <View style={{flex:1}}>
                <Carousel 
                onIndexChanged={(index)=>{
                    setCurrentIndex(index.index);
                }}
                overScrollMode="never" showsControls={false} showsDots={false}>
                    <View style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
                       <Image style={{marginTop:EStyleSheet.value("55rem"),width:EStyleSheet.value("290rem"),height:EStyleSheet.value("290rem")}} source={require("../assets/evote-box.png")}></Image>
                    </View>
                    <View style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
                       <Image style={{marginTop:EStyleSheet.value("55rem"),width:EStyleSheet.value("290rem"),height:EStyleSheet.value("290rem")}} source={require("../assets/countable-3.jpg")}></Image>
                    </View>
                    <View style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
                       <Image resizeMode="stretch" style={{marginTop:EStyleSheet.value("55rem"),width:EStyleSheet.value("290rem"),height:EStyleSheet.value("290rem")}} source={require("../assets/Candidat.png")}></Image>
                    </View>
                </Carousel>
            </View>
            
        </View>
        <View style={{paddingVertical:EStyleSheet.value("10rem"),paddingHorizontal:EStyleSheet.value("20rem"),marginTop:EStyleSheet.value("50rem")}}>
            {
                (currentIndex===0) &&
                <View style={{marginBottom:EStyleSheet.value("15rem")}}>
                        <Text style={{fontSize:EStyleSheet.value("19rem"),marginBottom:EStyleSheet.value("5rem"),fontWeight:"bold",color:"#292929"}}>Sign up now!</Text>
                        <Text style={{fontSize:EStyleSheet.value("14rem"),color:"grey",fontWeight:"bold"}}>Already to vote now?</Text>
                </View>
            }
              {
                (currentIndex===1) &&
                <View style={{marginBottom:EStyleSheet.value("15rem")}}>
                        <Text style={{fontSize:EStyleSheet.value("19rem"),marginBottom:EStyleSheet.value("5rem"),fontWeight:"bold",color:"#292929"}}>Countable</Text>
                        <Text style={{fontSize:EStyleSheet.value("14rem"),color:"grey",fontWeight:"bold"}}>Keep track of vote count, real-time.</Text>
                </View>
            }
              {
                (currentIndex===2) &&
                <View style={{marginBottom:EStyleSheet.value("15rem")}}>
                        <Text style={{fontSize:EStyleSheet.value("19rem"),marginBottom:EStyleSheet.value("5rem"),fontWeight:"bold",color:"#292929"}}>Candidate</Text>
                        <Text style={{fontSize:EStyleSheet.value("14rem"),color:"grey",fontWeight:"bold"}}>Fast to know who is your candidate.</Text>
                </View>
            }
            <View style={{flexDirection:"row"}}>
                <View style={{backgroundColor:(currentIndex===0) ? "#d8c15a":"#9296a4",marginRight:EStyleSheet.value("5rem"),width:EStyleSheet.value("10rem"),height:EStyleSheet.value("10rem"),borderRadius:999}}></View>
                <View style={{backgroundColor:(currentIndex===1) ? "#d8c15a":"#9296a4",marginRight:EStyleSheet.value("5rem"),width:EStyleSheet.value("10rem"),height:EStyleSheet.value("10rem"),borderRadius:999}}></View>
                <View style={{backgroundColor:(currentIndex===2) ? "#d8c15a":"#9296a4",marginRight:EStyleSheet.value("5rem"),width:EStyleSheet.value("10rem"),height:EStyleSheet.value("10rem"),borderRadius:999}}></View>
            </View>
        </View>
        <View style={{backgroundColor:"white",paddingVertical:EStyleSheet.value("5rem")}}>
            <View style={{backgroundColor:"#e83e32",borderRadius:EStyleSheet.value("10rem"),justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("12rem"),paddingHorizontal:EStyleSheet.value("15rem"),marginHorizontal:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("15rem")}}>
                <Text style={{color:"white",fontSize:EStyleSheet.value("18rem")}}>Get Started</Text>
            </View>
        </View>
    </View>
  );
}
