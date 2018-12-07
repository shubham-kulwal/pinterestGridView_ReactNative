import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';

const Header = () =>{
  return(
      <View style={styles.container}>
          <Image style={{  width:"6%",height:"55%",marginTop:20,marginLeft:15,paddingLeft:10}}  source={require('../Images/pininterest_icon.png') }  ></Image>

          <View style={{  width:"65%"}}></View>
          <Image style={styles.pininterestIconStyle}  source={require('../Images/search_icon.png') } resizeMode="center" ></Image>
          <Image style={styles.pininterestIconStyle}  source={require('../Images/message_icon.png') } resizeMode="center" ></Image>
          <Image style={styles.pininterestIconStyle}  source={require('../Images/profile_icon.png') } resizeMode="center" ></Image>
      </View>
  );

}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height:"7%",
      flexDirection:'row',

    },

    pininterestIconStyle:{
       width:"20%",
       height:"50%",
       marginTop:15,
       flex:3
    }
  });

export default Header;