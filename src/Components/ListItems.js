import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

const ListItems = (props) =>{

    return(
        <View style={{flex:3}}>
             <Image style={{width:"90%",height:props.imageHeight ,marginTop:20,marginLeft:15,paddingLeft:10,borderTopLeftRadius:10,borderTopRightRadius:10}}  source={{uri:props.imageURL}}></Image>
             <View style={{width:"90%",backgroundColor:'#ffffff',marginLeft:15,paddingLeft:10,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                <Text style={{fontSize:20,margin:10, color:'#000000'}}>{props.name}</Text>
             </View>
        </View>
    );
}

const styles= StyleSheet.create({
    
   
})

export default ListItems;