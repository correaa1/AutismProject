import * as React from "react";
import { NavigationContainer, } from "@react-navigation/native";
import { BottomNavigation, Text } from 'react-native-paper';

import Categorias from "./pages/Categorias/index";
import Home from "./pages/home/index";
import Animals from "./pages/animals/index";
import Scenes from "./pages/Scenes/index";


 const MusicRoHoute = () => <Text  >Home</Text>;    
    const RecentsRoute = () => <Text>Configurações</Text>;
    
    const MyComponent = () => {
      const [index, setIndex] = React.useState(0);
      const [routes] = React.useState([
        { key: 'Home', title: 'Home',  },
        { key: 'Configurações', title: 'Configurações', icon: 'history', },
      ]);
    
      const renderScene = BottomNavigation.SceneMap({
        Home: Home, 
        Configurações: RecentsRoute,
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