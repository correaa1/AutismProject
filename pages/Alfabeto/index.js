import React, { useState } from "react";
import { Text, Image, Button, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import ButtonColor from './components/ButtonImage2/index'


import { Container,} from "./styles";
function Alfabeto() {

    const [sound, setSound] = React.useState();

    async function playSound(alfabetosound) {
        const { sound } = await Audio.Sound.createAsync(alfabetosound);
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
        "A" : {
            image: require("./src/A.png"), 
            
        },
       

            
            
    }; 


    return (
        <Container>          
            
            <Cloud>
            <ButtonColor imagePath={items.nuvem.image} playSoundFunction={() => playSound(items.nuvem.sound)} /> 
            </Cloud>

          
           

        </Container>
    );
}

    export default Alfabeto;