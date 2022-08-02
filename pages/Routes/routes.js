import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import stackRoutes from '../Routes/stackroutes'
import Animals from "../animals/index"
import Scenes from "../Scenes/index"
import Alfabeto from "../Alfabeto/index"
import Numero from "../Numero/index"
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function Routes(){
     
     return(
          <Tab.Navigator 
               screenOptions={{
                    tabBarActiveTintColor: '#121212',
                    headerStyle: { backgroundColor: '#0f87ff'},
                    tabBarStyle:{
                    position: 'absolute',
                    backgroundColor:'#0f87ff',
                    borderRadius:8,     
                    
               }

                  }}
               
         
          >
          <Tab.Screen name="Inicio" component={stackRoutes} options={{
               headerShown:false,
          tabBarIcon:({color,size}) => {
                         return <Icon name="home" color={color} size={size}/>
                    }
          
          }} />
          

          </Tab.Navigator>
     )

}

