import { View, Text, Image, TouchableOpacity, StyleSheet,BackHandler } from "react-native";
import  React, {useState} from 'react';
import { Container,Card,Texto,Imagem,  } from "./styles";
import Animals from "../animals/index"
import Home from "../home/index"
import Scenes from "../Scenes/index"
import Alfabeto from "../Alfabeto/index"
import Numero from "../Numero/index"
import { StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';



export default function App(){
  
 
const [page, setPage] = useState(0);
  const currentPage = [<></>,<Animals />,<Alfabeto /> , <Scenes />,<Numero /> ];
  return(<>


  <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    {currentPage[page]}
 
    <Container> 
  
    <Imagem >
   <Animatable.Image animation="flipInY" style = {{ width: 200, height: 200 }} source={require("../home/src/Autism.png")}/>
   </Imagem>

   <Animatable.View animation="fadeInUp" delay={600}>
   <Card mode="contained"onPress={() =>  setPage(1) }>
      <Image source={require("./src/HorseIcon.png")}  style = {{ width: 40, height: 40}} color="#999" />
    <Texto>Animais</Texto>  
    </Card>   
    </Animatable.View>

    <Animatable.View animation="fadeInUp" delay={700}>
    <Card  mode="contained"onPress={() =>  setPage(2) }>
      <Image source={require("./src/Alphabet.png")}  style = {{ width: 40, height: 40}} color="#999" />
 <Texto>Alfabeto</Texto> 
    </Card>   
    </Animatable.View>
   

    <Animatable.View animation="fadeInUp" delay={800}>
    <Card  mode="contained"onPress={() =>  setPage(4) } >
    <Image source={require("./src/numbers.png")}  style = {{ width: 40, height: 40}} color="#999" />
 <Texto>Números</Texto> 
    </Card>  
    </Animatable.View>

    <Animatable.View animation="fadeInUp" delay={900}>
    <Card  mode="contained"onPress={() =>  setPage(3) } >
    <Image source={require("./src/IconeButton.png")}  style = {{ width: 40, height: 40}} color="#999" />
 <Texto>Vamos Colorir</Texto> 
    </Card> 
    </Animatable.View>

    </Container></>

    
    )

}

