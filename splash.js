import React, { useEffect, View } from 'react';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';




export default function ChangingColorOfLayers() {


  
     const navigation = useNavigation();
     return (
      
       <Lottie style={{backgroundColor: '#409fff'}} 
         source={require('./src/puzzle.json')}
         autoPlay
         loop={false}
         onAnimationFinish={() => navigation.navigate('Home')}
         resizeMode="contain"
         
         
       />
       
     );
   }