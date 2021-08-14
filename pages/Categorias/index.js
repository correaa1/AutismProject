import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Container} from "./styles";


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => (
  <Container>
 <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
  
    <Card.Cover source ={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
    </Card.Actions>
  <Card.Cover source ={{ uri: 'https://picsum.photos/700' }}  />
  <Card.Actions>
    </Card.Actions>
  <Card.Cover source ={{ uri: 'https://picsum.photos/700' }} />
    </Card>
  
  </Container>


);

export default MyComponent;
