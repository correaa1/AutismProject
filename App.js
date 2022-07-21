import  React, {useState} from "react";
import { View, Text,Button } from "react-native";
import { NavigationContainer, } from "@react-navigation/native";
import { BottomNavigation } from 'react-native-paper';
import Categorias from "./pages/Categorias/index";
import Home from "./pages/home/index";
import Animals from "./pages/animals/index";
import Scenes from "./pages/Scenes/index";



    const MyComponent = () => {

      
      const [index, setIndex] = React.useState(0);
      const [routes] = React.useState([
        { key: 'Home', title: 'Home',  },
        { key: 'Home', title: 'Categorias', icon: 'history', },
      ]);
    
      const renderScene = BottomNavigation.SceneMap({
        Home: Home, 
        Categorias:Home,
      });

        return (
         
         
       <BottomNavigation
            barStyle={{ backgroundColor: '#3057b1' }}
              navigationState={{ index, routes }}
              onIndexChange={setIndex}
              renderScene={renderScene}
             
              
            />
           
      
         
            );
    
        };
        
    
        export default MyComponent;

