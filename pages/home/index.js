import { View, Text, Image, TouchableOpacity, BackHandler } from "react-native";
import  React, {useState} from 'react';
import { Button } from 'react-native-paper';
import { Container,Card,Card2} from "./styles";
import Animals from "../animals/index"
import Home from "../home/index"
import Scenes from "../Scenes/index"
  
export default function App(){


const [page, setPage] = useState(0);
  const currentPage = [<></>, <Scenes />, <Animals /> ];
  return(<>
    {currentPage[page]}
 
    <Container> 
 
               <Card 
 icon={require('./src/autism.png' ) } mode="contained"onPress={() =>  setPage(1) }
 ><Text>Atividade1!</Text> 
    </Card>   
    <Card2 
 icon={require('./src/autism.png' ) } mode="contained"onPress={() =>  setPage(2) }
 ><Text>Atividade2!</Text> 
    </Card2>   
    </Container></>
)


  }
