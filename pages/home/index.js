import { View, Text, Image, TouchableOpacity, BackHandler } from "react-native";
import  React, {useState} from 'react';
import { Button } from 'react-native-paper';
import { Container} from "./styles";
import Animals from "../animals/index"
import Home from "../home/index"
import Scenes from "../Scenes/index"
  
export default function App(){


const [page, setPage] = useState(0);
  const currentPage = [<></>, <Scenes />, <Home /> ];
  return(<>
    {currentPage[page]}
 
    <Container> 
 
               <Button color='#3057b1'
 icon={require('./src/autism.png' ) } mode="contained"onPress={() =>  setPage(1) }
 > Aperte para começar!
    </Button>   
    </Container></>
)


  }
