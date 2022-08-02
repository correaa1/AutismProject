import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import stackRoutes from '../Routes/stackroutes'
import Animals from "../animals/index"
import Scenes from "../Scenes/index"
import Alfabeto from "../Alfabeto/index"
import Numero from "../Numero/index"

const Tab = createBottomTabNavigator();

export default function Routes(){
     
     return(
          <Tab.Navigator 
               screenOptions={{
                    tabBarActiveTintColor: '#e5e5e5',
                    headerStyle: { backgroundColor: '#0f87ff'},
                    tabBarStyle:{
                    position: 'absolute',
                    backgroundColor:'#0f87ff',
                    borderRadius:8,     
               }

                  }}
               
         
          >
          <Tab.Screen options={{headerShown:false}} name="Inicio" component={stackRoutes}/>
          <Tab.Screen options={{headerShown:false}} name="Animals" component={stackRoutes}/>
          <Tab.Screen name="Scenes" component={Scenes}/>
          <Tab.Screen name="Alfabeto" component={Alfabeto}/>
          <Tab.Screen name="Numero" component={Numero}/>

          </Tab.Navigator>
     )

}

