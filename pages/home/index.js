import { View, Text, Image, TouchableOpacity, BackHandler } from "react-native";
import  React, {useState} from 'react';
import { Button } from 'react-native-paper';
import { Container,Card,Texto, } from "./styles";
import Animals from "../animals/index"
import Home from "../home/index"
import Scenes from "../Scenes/index"
  
export default function App(){

 
const [page, setPage] = useState(0);
  const currentPage = [<></>, <Animals />, <Scenes /> ];
  return(<>
    {currentPage[page]}
 
    <Container> 
 
               <Card 
 icon={require('./src/autism.png' ) } mode="contained"onPress={() =>  setPage(1) }
 ><Texto>Descubra o animal</Texto> 
    </Card>   
    <Card 
 icon={require('./src/autism.png' ) } mode="contained"onPress={() =>  setPage(2) }
 ><Texto>Vamos pintar</Texto> 
    </Card>   
    </Container></>
)


  }
