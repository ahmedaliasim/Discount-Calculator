import React, {useState, useEffect} from 'react';
import { Text,TextInput, FlatList,SafeAreaView,View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS,ScrollView,TextComponent} from 'react-native';
import { DataTable } from 'react-native-paper';
import Constants from 'expo-constants';



 export default function  ResultScreen ({route,navigation}) {
     
     const [dataset2, setDataset2]=useState(route.params.dataset)
     
     const deletehistory=()=>{
       setDataset2({
         price: "",
         discount:"",
         finalprice1: ""
       })
       
     }
     
     
     
  return (
    <View style={styles.container}>
    <View>
    
    <FlatList
        data={dataset2}
        renderItem={({item})=>(<View>
        
  <DataTable>
    <DataTable.Header>
    <DataTable.Title >Final Price</DataTable.Title>
    <DataTable.Title >Discount</DataTable.Title>
    <DataTable.Title>Price</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
    <DataTable.Cell >{item.finalprice1}</DataTable.Cell>
    <DataTable.Cell >{item.discount}%</DataTable.Cell>
    <DataTable.Cell> {item.price}</DataTable.Cell>     
    </DataTable.Row>
  </DataTable>
  
        </View>)}
        keyExtractor={(item, index) => item.id}
        
      />
      <Button title="Delete History" onPress={deletehistory} color = "#62664e" />
    </View>
     
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

  
});
