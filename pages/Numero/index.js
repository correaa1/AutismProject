import React, { useState } from "react";
import { Text, Image, Button, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { Container, ImageAnimals, ImageBackgroundAnimals, ButtonAction, ViewAnimalsAction, TextAnimalName, ImageBackground } from "./styles";
import { StatusBar } from "react-native";
import * as Animatable from 'react-native-animatable';

function Numero() {
    const numero = [
        ["1", require("../Numero/src/1.png"),require(`../Numero/assets/Sound/1.mp3`)],
        ["2", require("../Numero/src/2.png"),require(`../Numero/assets/Sound/2.mp3`)],
        ["3", require("../Numero/src/3.png"),require(`../Numero/assets/Sound/3.mp3`)],
        ["4", require("../Numero/src/4.png"),require(`../Numero/assets/Sound/4.mp3`)],    
        ["5", require("../Numero/src/5.png"),require(`../Numero/assets/Sound/5.mp3`)],
        ["6", require("../Numero/src/6.png"),require(`../Numero/assets/Sound/6.mp3`)],
        ["7", require("../Numero/src/7.png"),require(`../Numero/assets/Sound/7.mp3`)],
        ["8", require("../Numero/src/8.png"),require(`../Numero/assets/Sound/8.mp3`)],
        ["9", require("../Numero/src/9.png"),require(`../Numero/assets/Sound/9.mp3`)],
        ["10", require("../Numero/src/10.png"),require(`../Numero/assets/Sound/10.mp3`)],
        ["11", require("../Numero/src/11.png"),require(`../Numero/assets/Sound/11.mp3`)],
        ["12", require("../Numero/src/12.png"),require(`../Numero/assets/Sound/12.mp3`)],
        ["13", require("../Numero/src/13.png"),require(`../Numero/assets/Sound/13.mp3`)],
        ["14", require("../Numero/src/14.png"),require(`../Numero/assets/Sound/14.mp3`)],
        ["15", require("../Numero/src/15.png"),require(`../Numero/assets/Sound/15.mp3`)],
        ["16", require("../Numero/src/16.png"),require(`../Numero/assets/Sound/16.mp3`)],
        ["17", require("../Numero/src/17.png"),require(`../Numero/assets/Sound/17.mp3`)],
        ["18", require("../Numero/src/18.png"),require(`../Numero/assets/Sound/18.mp3`)],
        ["19", require("../Numero/src/19.png"),require(`../Numero/assets/Sound/19.mp3`)],
        ["20", require("../Numero/src/20.png"),require(`../Numero/assets/Sound/20.mp3`)],

    ];


    const [sound, setSound] = React.useState();

    async function playSound(Numerosound) {
        const { sound } = await Audio.Sound.createAsync(Numerosound);
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

    
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
            <Container>
                <ViewAnimalsAction>
                    {numero.map((elem, index) => {
                        return (
                            <ButtonAction
                                key={index}
                                onPress={() => {
                                    playSound(elem[2]);
                                }}
                            >
                                <Animatable.Image animation='fadeInDownBig' style={{width:'90%',height:'70%'}}  source={elem[1]} />
                                <ImageBackgroundAnimals source={elem[1]} />
                                <TextAnimalName>{elem[0]}</TextAnimalName>
                            </ButtonAction>
                        );
                    })}
                </ViewAnimalsAction>
            </Container>
        </>
    );
    
}  
export default Numero;
    
    
   
    