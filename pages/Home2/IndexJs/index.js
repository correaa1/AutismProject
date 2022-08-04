import React, {useEffect} from 'react';
import { View, Text, StyleSheet,Image,BackHandler } from 'react-native';
import { Container,Card,Texto,Imagem,  } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "react-native";
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

//o use useEffect foi feito para que o usuário do android não consiga voltar pra tela de splash
export default function Home(){

  useEffect(() =>{
    BackHandler.addEventListener('hardBackPress', () => {
      return true
    })
  }, [])

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
     navigation.navigate('Colorir')
   }

  return(
     <Container>
           <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    
    <View >
     
     <Animatable.Image animation="rotate"  style = {{ width: 200, height: 200, top:"-3%"}} source={require("../src/Autism.png")}/>
  
      <Animatable.View animation="rotate" delay={600} bounceOut>
      <Card   onPress={ navegaAnimals } >
      <Image source={require("../src/HorseIcon.png")}style = {{ width: 40, height: 40}} color="#999"  />
      <Texto> Animals </Texto>
      </Card>
      </Animatable.View>

      <Animatable.View animation="rotate" delay={700}>
      <Card   onPress={ navegaAlfabeto } >
      <Image source={require("../src/Alphabet.png")}  style = {{ width: 40, height: 40}} color="#999" />
          <Texto> Alfabeto </Texto>
      </Card>
      </Animatable.View>
      
      <Animatable.View animation="rotate" delay={800}>
      <Card   onPress={ navegaNumeros } >
      <Image source={require("../src/numbers.png")}  style = {{ width: 40, height: 40}} color="#999" />
          <Texto> Números </Texto>
      </Card>
      </Animatable.View>

      <Animatable.View animation="rotate" delay={900}>
      <Card   onPress={ navegaColorir } >
      <Image source={require("../src/IconeButton.png")}  style = {{ width: 40, height: 40}} color="#999" />
          <Texto> Vamos Colorir </Texto>
      </Card>
      </Animatable.View>
      
    </View>
    </Container>
  )
}

