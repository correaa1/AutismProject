import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home2 from '../Home2/IndexJs'
import Animals from '../animals/index'
import Alfabeto from '../Alfabeto/index'
import Numeros from '../Numero/index'
import Scenes from '../Scenes/index'
import Splash from  '../../splash'



const Stack = createNativeStackNavigator();
// dentro dessa função estão criadas as telas de navegação do app... apenas na tela home foi adicionado em options GestureEnabled, que impede que no ios de voltar pra tela de splash.
export default function (){
     return(
          <Stack.Navigator>
               <Stack.Screen options={{headerShown:false, }} name="Splash" component={Splash} />
               
               <Stack.Screen options={{headerShown:false, gestureEnabled:false}} name="Home" component={Home2} />
               <Stack.Screen options={{ tabBarActiveTintColor: '#e5e5e5',
                    headerStyle: { backgroundColor: '#0f87ff'},}} name="Animals" component={Animals}/>
               <Stack.Screen options={{ tabBarActiveTintColor: '#e5e5e5',
                    headerStyle: { backgroundColor: '#0f87ff'},
                    }} name="Alfabeto" component={Alfabeto}/>
               <Stack.Screen options={{ tabBarActiveTintColor: '#e5e5e5',
                    headerStyle: { backgroundColor: '#0f87ff'},}} name="Numeros" component={Numeros}/>
               <Stack.Screen options={{ tabBarActiveTintColor: '#e5e5e5',
                    headerStyle: { backgroundColor: '#0f87ff'},}} name="Colorir" component={Scenes}/>
               
          </Stack.Navigator>
     )
}

