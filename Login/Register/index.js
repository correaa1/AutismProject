import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity,StyleSheet,Animated, } from 'react-native';
import React, { useState,useEffect} from 'react';


export default function Register() {
const [offset] = useState(new Animated.ValueXY({x:0,y: 80}));

useEffect(( )=> {
  Animated.spring(offset.y,{
    toValue:0,
    speed:4,
  }).start();
},[]);
 


  return (
    <KeyboardAvoidingView style={styles.background} >

     
     <Animated.View style={
       styles.container,
       {
         transform: [
           {translateY:offset.y }
         ]
       }
       }>
      <TextInput
        style={styles.Input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={()=> {}}
      />
           
<TextInput
style={styles.Input}
 placeholder="Senha"
 autoCorrect={false}
 onChangeText={()=> {}}
/>

    <TouchableOpacity style={styles.btnSubmit}>
      <Text style={styles.btnTexto} >
        Acessar     
         </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnRegister}>
      <Text style={styles.btnRegisterText}>
        Criar conta gratuita     
         </Text>
    </TouchableOpacity>
     </Animated.View>

    </KeyboardAvoidingView>

 
  );
};

const styles = StyleSheet.create({
  background:{
  flex:1,
  justifyContent: 'center',
  backgroundColor:'#191919',
  },
  containerlogo:{
    flex:1,
    justifyContent:'center',
  },
    container:{
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
      width: '90%',
    },
 Input:{
  backgroundColor: '#FFF',
  width:'90%',
  marginBottom: 15,
  color:'#222',
  fontSize:17,
  borderRadius: 7,
  padding: 10,
  
 },
 btnSubmit:{
 backgroundColor:'#35AAFF',
width:'90%',
height:45,
alignItems: 'center',
justifyContent: 'center',
borderRadius:7,
 },
 btnTexto:{
   color:'#fff',
   fontSize:18

 },

 btnRegister:{
 marginTop:10,
 alignItems:'center',
 },

 btnRegisterText:{
color:'#fff'
 }

});

