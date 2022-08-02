import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home2 from '../Home2/IndexJs'
import Animals from '../animals/index'


const Stack = createNativeStackNavigator();

export default function (){
     return(
          <Stack.Navigator>
               <Stack.Screen name="Inicio" component={Home2}/>
               <Stack.Screen name="Animals" component={Animals}/>
          </Stack.Navigator>
     )
}