import { View, Text, Image, TouchableOpacity, StyleSheet,BackHandler } from "react-native";
import  React, {useState} from 'react';
import { Container,Card,Texto,Imagem,  } from "./styles";
import Animals from "../animals/index"
import Home from "../home/index"
import Scenes from "../Scenes/index"
import Alfabeto from "../Alfabeto/index"
import { StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';



export default function App(){
  
 
const [page, setPage] = useState(0);
  const currentPage = [<></>,<Animals />,<Alfabeto /> , <Scenes /> ];
  return(<>


  <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    {currentPage[page]}
 
    <Container> 
  
    <Imagem>
   <Image  style = {{ width: 200, height: 200 }} source={require("./src/Autism.png")}/>
   </Imagem>

   <Card mode="contained"onPress={() =>  setPage(1) }>
   <Image source={require("./src/HorseIcon.png")}  style = {{ width: 40, height: 40}} color="#999" />
    
  
 <Texto>Animais</Texto>  
  
    </Card>   

    <Card  mode="contained"onPress={() =>  setPage(2) }>
      <Image source={require("./src/Alphabet.png")}  style = {{ width: 40, height: 40}} color="#999" />
 <Texto>Alfabeto</Texto> 
    </Card>   

    <Card  mode="contained"onPress={() =>  setPage(3) } >
    <Image source={require("./src/IconeButton.png")}  style = {{ width: 40, height: 40}} color="#999" />
 <Texto>Vamos Colorir</Texto> 
    </Card>   
    </Container></>

    
    )

}

