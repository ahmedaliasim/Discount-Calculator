import React, {useState} from 'react';
import { Text,TextInput, View,FlatList, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS,ScrollView,TextComponent} from 'react-native';
import Constants from 'expo-constants';


 export default function  StartScreen ({route,navigation}) {

 const startnav =()=>{

  navigation.navigate('Disount Cal 096')
   
 }

    return(
      <View style= {styles.container}>
     
      <Button title="Start Discount Cal" onPress={startnav} color = "#62664e"/>
      
    </View>
  );
}
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#4a4324',
  },
  colorscheme: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  }

  
});


