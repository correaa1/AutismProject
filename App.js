import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from './pages/home/index'


const Tab = createBottomTabNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Tab.Navigator shifting={true}
                sceneAnimationEnabled={false}
                screenOptions={{
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "gray",
                    headerStyle: {
                        backgroundColor: "#379bff"
                    },
                    headerTitleStyle: {
                        color: "white",
                    },
                    headerLeft: () => <MaterialCommunityIcons onPress={() => navigation.navigate('Home')} style={{ marginTop: 5, marginLeft: 20 }} name="arrow-left" color="white" size={26} />,
                    tabBarStyle: {
                        paddingBottom: 6,
                        backgroundColor: "#379bff",
                        borderTopColor: "#444",
                    },
                }}>
        <Tab.Screen name="Home" component={Home}  />
      
      </Tab.Navigator>
    </NavigationContainer>
  );
}