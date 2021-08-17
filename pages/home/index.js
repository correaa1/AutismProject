import { View, Text, Image, TouchableOpacity } from "react-native";
import * as React from 'react';
import { Button } from 'react-native-paper';
import { Container} from "./styles";



const MyComponent = () => (
    <Container> 
        
        <Button color='#3057b1'
 icon={require('./src/autism.png' ) } mode="contained" onPress={() => console.log('Pressed')}>
      Aperte para começar!
    </Button>
    </Container>
  );
  export default MyComponent;
