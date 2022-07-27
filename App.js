import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/index'
import Animals from './pages/animals/index'



function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();



const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "gray",
      headerStyle: {
          backgroundColor: "#0066cc"
      },}}>
      <SettingsStack.Screen name="Homer" component={SettingsScreen}  />
      <SettingsStack.Screen name="Details" component={Home} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      hifting={true}
      sceneAnimationEnabled={false}
      screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          headerStyle: {
              backgroundColor: "#0066cc"
          },
          headerTitleStyle: {
              color: "white",
          },
          
          tabBarStyle: {
              paddingBottom: 6,
              backgroundColor: "#0066cc",
              borderTopColor: "#444",
          },tabBarStyle: {
            paddingBottom: 6,
            backgroundColor: "#0066cc",
            borderTopColor: "#0066cc",
        },
      }}
      >
        <Tab.Screen   name="Home" component={SettingsStackScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}