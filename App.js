import React from "react";
import { NavigationContainer, } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Categorias from "./pages/Categorias/index";
import Home from "./pages/home/index";
import Animals from "./pages/animals/index";
import Scenes from "./pages/Scenes/index";
import Toobar from "./pages/Toobar/index";


export default function App() {
    
    const Stack = createStackNavigator();
   


    return (
        <>
            <NavigationContainer>

                
                <Stack.Navigator  initialRouteName="Toobar" >
                <Stack.Screen name="Toobar" component={Toobar}activeOperacity={0.2} />
                <Stack.Screen name="Categorias" component={Categorias}activeOperacity={0.2} />
                    <Stack.Screen name="Home" component={Home}activeOperacity={0.2} />
                    <Stack.Screen name="Animals" component={Animals} />
                    <Stack.Screen name="Scenes" component={Scenes} />
                </Stack.Navigator>

   

            </NavigationContainer>
        </>
    );
}