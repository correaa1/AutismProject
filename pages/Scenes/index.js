import React, { useState } from "react";
import { Text, Image, Button, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import ButtonColor from './components/ButtonImage/index'


import { Container,  Cloud, Cloud2, Home,Sun,Tree,Tree2,Gram,Bird,Plane} from "./styles";
function Scenes2() {

    const [sound, setSound] = React.useState();

    async function playSound(animalsound) {
        const { sound } = await Audio.Sound.createAsync(animalsound);
        setSound(sound);
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                  console.log("Unloading Sound");
                  sound.unloadAsync();
              }
            : undefined;
    }, [sound]);

    const items = {
        "exemplo" : {
            image: require("./src/cloud2.png"), //aqui voce coloca o path da imagem
            sound: require(`./sound/Wolf.mp3`), //aqui o path do som
        },
        "nuvem" : {
            image: require("./src/cloud2.png"),
            sound: require(`./sound/Wolf.mp3`),
        },
    }; // para usar você so precisa colocar... items.exemplo.image ai ele pega a imagem...


    return (
        <Container>

            {/* Abaxio segue um exemplo usando o objeto de items */}
            <ButtonColor imagePath={items.nuvem.image} playSoundFunction={() => playSound(items.nuvem.sound)} /> 
            
            <Home>
            <ButtonColor imagePath={items.nuvem.image} playSoundFunction={() => playSound(items.nuvem.sound)} /> 
            </Home>

            <Sun>
            <ButtonColor imagePath={items.nuvem.image} playSoundFunction={() => playSound(items.nuvem.sound)} /> 
           </Sun> 
            
           
            {/* <Cloud>
                <ButtonImage sound={0} imagePath={require("./src/Cloud.png")} />
            </Cloud>
            <Cloud2>
                <ButtonImage onPress={() => {playSound(animals[0])}}  imagePath={require("./src/cloud2.png")} initialOpacity={0.3} />
            </Cloud2>
            <Home>
                <ButtonImage onPress={() => {playSound(animals[0])}}  imagePath={require("./src/Home.png")} initialOpacity={0.3} />
            </Home>
           <Sun>
                <ButtonImage onPress={() => {playSound(animals[0])}} imagePath={require("./src/sun.png")} initialOpacity={0.2} />
           </Sun> */}
          
           {/* <Tree> 
               <ButtonImage onPress={() => {playSound(animals[0])}} imagePath={require("./src/Tree1.png")} initialOpacity={0.2} />
           </Tree>
         
           <Tree2> 
               <ButtonImage onPress={() => {playSound(animals[0])}} imagePath={require("./src/Tree1.png")} initialOpacity={0.2} />
           </Tree2> */}
{/* 
           <Gram>
         
           </Gram>
            
                   

         <Bird> 
         <ButtonImage   imagePath={require("./src/Bird.png")} initialOpacity={0.3} />
         </Bird   >

        <Plane>
        <ButtonImage  imagePath={require("./src/Plane.png")} initialOpacity={0.3} />
        </Plane> */}

        </Container>
    );
}


export default Scenes2;
