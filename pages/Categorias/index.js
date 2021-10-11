import * as React from 'react';
import { Avatar, Button, Card, IconButton, Paragraph } from 'react-native-paper';
import { Container} from "./styles";
import Animals from '../animals/index'
import Home from '../home/index'


export default  function Categorias (){
  const MyComponent = () => (
    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={(props) => <Avatar.Icon {...props} icon="folder" />}
      right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
    />
  );
  
  
  
  
};