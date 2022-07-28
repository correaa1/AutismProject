import React, { useState } from "react";
import { Text, Image, Button, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { Container, ImageAnimals, ImageBackgroundAnimals, ButtonAction, ViewAnimalsAction, TextAnimalName, ImageBackground } from "./styles";
import { StatusBar } from "react-native";

function Alfabeto() {
    const alfabeto = [
        ["A", require("../Alfabeto/assets/images/A.png"), require(`./assets/sounds/LetraA.mp3`)],
        ["B", require("../Alfabeto/assets/images/B.png"), require(`./assets/sounds/LetraB.mp3`)],
        ["C", require("../Alfabeto/assets/images/C.png"), require(`./assets/sounds/LetraC.mp3`)],
        ["D", require("../Alfabeto/assets/images/D.png"), require(`./assets/sounds/LetraD.mp3`)],
        ["E", require("../Alfabeto/assets/images/E.png"), require(`./assets/sounds/LetraE.mp3`)],
        ["F", require("../Alfabeto/assets/images/F.png"), require(`./assets/sounds/LetraF.mp3`)],
        ["G", require("../Alfabeto/assets/images/G.png"), require(`./assets/sounds/LetraG.mp3`)],
        ["H", require("../Alfabeto/assets/images/H.png"), require(`./assets/sounds/LetraH.mp3`)],
        ["I", require("../Alfabeto/assets/images/I.png"), require(`./assets/sounds/LetraI.mp3`)],
        ["J", require("../Alfabeto/assets/images/J.png"), require(`./assets/sounds/LetraJ.mp3`)],
        ["K", require("../Alfabeto/assets/images/K.png"), require(`./assets/sounds/LetraK.mp3`)],
        ["L", require("../Alfabeto/assets/images/L.png"), require(`./assets/sounds/LetraL.mp3`)],
        ["M", require("../Alfabeto/assets/images/M.png"), require(`./assets/sounds/LetraM.mp3`)],
        ["N", require("../Alfabeto/assets/images/N.png"), require(`./assets/sounds/LetraN.mp3`)],
        ["O", require("../Alfabeto/assets/images/O.png"), require(`./assets/sounds/LetraO.mp3`)],
        ["P", require("../Alfabeto/assets/images/P.png"), require(`./assets/sounds/LetraP.mp3`)],
        ["Q", require("../Alfabeto/assets/images/Q.png"), require(`./assets/sounds/LetraQ.mp3`)],
        ["R", require("../Alfabeto/assets/images/R.png"), require(`./assets/sounds/LetraR.mp3`)],
        ["S", require("../Alfabeto/assets/images/S.png"), require(`./assets/sounds/LetraS.mp3`)],
        ["T", require("../Alfabeto/assets/images/T.png"), require(`./assets/sounds/LetraT.mp3`)],
        ["U", require("../Alfabeto/assets/images/U.png"), require(`./assets/sounds/LetraU.mp3`)],
        ["V", require("../Alfabeto/assets/images/V.png"), require(`./assets/sounds/LetraV.mp3`)],
        ["W", require("../Alfabeto/assets/images/W.png"), require(`./assets/sounds/LetraW.mp3`)],
        ["X", require("../Alfabeto/assets/images/X.png"), require(`./assets/sounds/LetraX.mp3`)],
        ["Y", require("../Alfabeto/assets/images/Y.png"), require(`./assets/sounds/LetraY.mp3`)],
        ["Z", require("../Alfabeto/assets/images/Z.png"), require(`./assets/sounds/LetraZ.mp3`)],       
    ];


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

    
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
            <Container>
                <ViewAnimalsAction>
                    {alfabeto.map((elem, index) => {
                        return (
                            <ButtonAction
                                key={index}
                                onPress={() => {
                                    playSound(elem[2]);
                                }}
                            >
                                <ImageAnimals  source={elem[1]} />
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
export default Alfabeto;
    
    
   
    