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
       <Stack.Screen name="Welcome" component={StartScreen} />
        <Stack.Screen name="Disount Cal 096" component={DiscountScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
