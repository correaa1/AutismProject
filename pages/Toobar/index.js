import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animals from "../animals/index";
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

 export default function MyTabs() {
  return (
    <NavigationContainer independent={true}
    >
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Animals} />
      <Tab.Screen name="Settings" component={Animals} />
    </Tab.Navigator> </NavigationContainer>
  );
}