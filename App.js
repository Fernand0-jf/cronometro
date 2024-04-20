import React from "react";
import {View, Text,StyleSheet,Image} from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      
      <Image
      source={require('./src/crono.png')}
      style={styles.img}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  img:{
    width:230,
    height:50
  }

});