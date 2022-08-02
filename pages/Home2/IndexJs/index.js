import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Container,Card,Texto,Imagem,  } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "react-native";
import * as Animatable from 'react-native-animatable';
import Alfabeto from './../../Alfabeto/index';

export default function Home(){
  const navigation = useNavigation();

  function navegaAnimals(){
    navigation.navigate('Animals')
  }
  function navegaAlfabeto(){
     navigation.navigate('Alfabeto')
   }

   function navegaNumeros(){
     navigation.navigate('Numeros')
   }

   function navegaColorir(){
     navigation.navigate('Scenes')
   }

  return(
     <Container>
           <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    
    <View >
     <Imagem >
     <Animatable.Image animation="flipInY"  style = {{ width: 200, height: 200 }} source={require("../src/Autism.png")}/>
   </Imagem>
     

      <Animatable.View animation="fadeInUp" delay={600}>
      <Card   onPress={ navegaAnimals } >
      <Image source={require("../src/HorseIcon.png")}style = {{ width: 40, height: 40}} color="#999"  />
          <Texto> Animals </Texto>
      </Card>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={700}>
      <Card   onPress={ navegaAlfabeto } >
      <Image source={require("../src/Alphabet.png")}  style = {{ width: 40, height: 40}} color="#999" />
          <Texto> Alfabeto </Texto>
      </Card>
      </Animatable.View>
      
      <Animatable.View animation="fadeInUp" delay={800}>
      <Card   onPress={ navegaNumeros } >
      <Image source={require("../src/numbers.png")}  style = {{ width: 40, height: 40}} color="#999" />
          <Texto> Números </Texto>
      </Card>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={900}>
      <Card   onPress={ navegaColorir } >
      <Image source={require("../src/IconeButton.png")}  style = {{ width: 40, height: 40}} color="#999" />
          <Texto> Vamos Colorir </Texto>
      </Card>
      </Animatable.View>
      
    </View>
    </Container>
  )
}

