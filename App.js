import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS, } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import ResultScreen from './components/ResultScreen';
import DiscountScreen from './components/DiscountScreen';
import StartScreen from './components/StartScreen';

export default function App({navigation}){
  return(
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Welcome" component={StartScreen}  options={{
         
          headerStyle: {
            backgroundColor: '#2f3b39',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Disount Cal 096" component={DiscountScreen} options={{
      
          headerStyle: {
            backgroundColor: '#2f3b39',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />
        <Stack.Screen name="History" component={ResultScreen} options={{
          
          headerStyle: {
            backgroundColor: '#2f3b39',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
