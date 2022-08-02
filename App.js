import * as React from 'react';
import { Button, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import Routes from "./pages/Routes/routes.js"

export default function (){
  return(
    <NavigationContainer>
    <Routes/>
    </NavigationContainer>                       
  )

}