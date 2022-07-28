import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/index'
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#2291ff' }}>
      
      <Button
        title="Começar"
        onPress={() => navigation.navigate('Voltar')}
      />
    </View>
  );
}


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator shifting={true}
    sceneAnimationEnabled={false}
    screenOptions={{
    
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        headerStyle: {
            backgroundColor: '#0984ff',
        },
        headerTitleStyle: {
            color: "white",
        },tabBarStyle: {
          paddingBottom: 6,
          backgroundColor: "#0984ff",
          borderTopColor: "#0984ff",
      },
  }}  >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Voltar" component={Home} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator 
      shifting={true}
      sceneAnimationEnabled={false}
      screenOptions={{
        headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          headerStyle: {
              backgroundColor: '#0984ff',
          },
          headerTitleStyle: {
              color: "white",
          },tabBarStyle: {
            paddingBottom: 6,
            backgroundColor: "#0984ff",
            borderTopColor: "#0984ff",
        },
    }}
      >
        
        <Tab.Screen name="Home" component={HomeStackScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
