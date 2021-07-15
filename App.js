import React from "react";
import { NavigationContainer, } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/home/index";
import Animals from "./pages/animals/index";
import Fruit from "./pages/Fruit/index";
import Scenes from "./pages/Scenes/index";
import Register from "./Login/Register/index";

export default function App() {
    const Stack = createStackNavigator();
   


    return (
        <>
            <NavigationContainer>
                <Stack.Navigator  initialRouteName="Register" >
                    <Stack.Screen name="Home" component={Home}activeOperacity={0.2} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Animals" component={Animals} />
                    <Stack.Screen name="Fruit" component={Fruit} />
                    <Stack.Screen name="Scenes" component={Scenes} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
