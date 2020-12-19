import React, {useState} from 'react';
import { Text,TextInput, View,FlatList, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS,ScrollView,TextComponent} from 'react-native';
import Constants from 'expo-constants';


 export default function  DiscountScreen ({route,navigation}) {
    
     const[discount,setDiscount]=useState(0)
    const [warning, setWarning] = useState(false)
     const[finalprice1,setFinalprice1]=useState(0)
     const [error1, setError1] = useState("")
     const[price,setPrice]=useState(0)
     const [viewbutton, setViewbutton] = useState(false)
     const[save,setSave]=useState(0)
     

     const [dataset, setDataset]=useState([{
         price: "",
         discount:"",
         finalprice1: ""
         }])
  
      const newdisprice = (Currentvalue) =>{
        var discount1=Currentvalue
        setDiscount(discount1);
        var save1=(price * (discount1 / 100));
        setSave(save1);
        var newfinalprice=price-save1;
        setFinalprice1(newfinalprice);
        if(discount1==0||discount1==0||discount1>100){
          if(discount1>100){
            setError1("discount value should be below 100%")
            setViewbutton(false)

          }
          setViewbutton(false)
       }else if(discount1!=0&&discount1!=0){
         setError1("")
         setViewbutton(true)
       }

        
        }

          
     const newprice = (Currentvalue) =>{
       var price1=Currentvalue
       setPrice(price1);
       setViewbutton(true)

       var save1=(price1 * (discount / 100))
       setSave(save1)
       var newfinalprice=price1-save1
       setFinalprice1(newfinalprice)
       if(newfinalprice==0||discount==0){
         setViewbutton(false)
       }else{
         setViewbutton(true)
       }
       }

       const viewhistory =()=>{

  navigation.navigate('History',{ dataset:dataset })
   
 }

        const [backup, setBackup]=useState([{
         price: "",
         discount:"",
         finalprice1: ""
         }])
      const saveData1 =()=>{
  
        setDataset([...dataset, {
        price: price,
        discount:discount,
        finalprice1:finalprice1  

        }])
  setViewbutton(false)

 }

  return (
    <View style={styles.container}>
     <TextInput
        style={{ width: 100, textAlign: 'center', borderWidth: 2, borderRadius: 0 ,borderColor: 'black', height: 50, }}
        placeholder="Enter Price"
        keyboardType='numeric'
        onChangeText={ Currentvalue => newprice(Currentvalue) }
      />
      
      <TextInput
        style={{ width: 100, textAlign: 'center', borderWidth: 2, borderRadius: 0,borderColor: 'black', height: 50, }}
        placeholder="Enter Discount"
        keyboardType='numeric'
        onChangeText={ Currentvalue => newdisprice(Currentvalue) }
      />
      <Text>Final Price: {finalprice1}</Text>
      <Text>Discount: {discount}</Text>
      <Text>{error1}</Text>
      <Text>Price: {price}</Text>
      <Text>Save: {save}</Text>
     
      
      { viewbutton ? <Button title="Save" onPress={saveData1}  color="#62664e"/> : null }
      <Button title="View History" onPress={viewhistory} color="#62664e"/>
      
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


