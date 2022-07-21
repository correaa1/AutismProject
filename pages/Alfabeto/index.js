import React, { useState } from "react";
import { Text, Image, Button, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { Container, ImageAnimals, ImageBackgroundAnimals, ButtonAction, ViewAnimalsAction, TextAnimalName, ImageBackground } from "./styles";
import { StatusBar } from "react-native";

function Alfabeto() {
    const alfabeto = [
        ["A", require("../Alfabeto/assets/images/A.png"), require(`./assets/sounds/cat.mp3`)],
        ["B", require("../Alfabeto/assets/images/B.png"), require(`./assets/sounds/cat.mp3`)],
        ["C", require("../Alfabeto/assets/images/C.png"), require(`./assets/sounds/cat.mp3`)],
        ["D", require("../Alfabeto/assets/images/D.png"), require(`./assets/sounds/cat.mp3`)],
        ["E", require("../Alfabeto/assets/images/E.png"), require(`./assets/sounds/cat.mp3`)],
        ["F", require("../Alfabeto/assets/images/F.png"), require(`./assets/sounds/cat.mp3`)],
        ["G", require("../Alfabeto/assets/images/G.png"), require(`./assets/sounds/cat.mp3`)],
        ["H", require("../Alfabeto/assets/images/H.png"), require(`./assets/sounds/cat.mp3`)],
        ["I", require("../Alfabeto/assets/images/I.png"), require(`./assets/sounds/cat.mp3`)],
        ["J", require("../Alfabeto/assets/images/J.png"), require(`./assets/sounds/cat.mp3`)],
        ["K", require("../Alfabeto/assets/images/K.png"), require(`./assets/sounds/cat.mp3`)],
        ["L", require("../Alfabeto/assets/images/L.png"), require(`./assets/sounds/cat.mp3`)],
        ["M", require("../Alfabeto/assets/images/M.png"), require(`./assets/sounds/cat.mp3`)],
        ["N", require("../Alfabeto/assets/images/N.png"), require(`./assets/sounds/cat.mp3`)],
        ["O", require("../Alfabeto/assets/images/O.png"), require(`./assets/sounds/cat.mp3`)],
        ["P", require("../Alfabeto/assets/images/P.png"), require(`./assets/sounds/cat.mp3`)],
        ["Q", require("../Alfabeto/assets/images/Q.png"), require(`./assets/sounds/cat.mp3`)],
        ["R", require("../Alfabeto/assets/images/R.png"), require(`./assets/sounds/cat.mp3`)],
        ["S", require("../Alfabeto/assets/images/S.png"), require(`./assets/sounds/cat.mp3`)],
        ["T", require("../Alfabeto/assets/images/T.png"), require(`./assets/sounds/cat.mp3`)],
        ["U", require("../Alfabeto/assets/images/U.png"), require(`./assets/sounds/cat.mp3`)],
        ["V", require("../Alfabeto/assets/images/V.png"), require(`./assets/sounds/cat.mp3`)],
        ["X", require("../Alfabeto/assets/images/X.png"), require(`./assets/sounds/cat.mp3`)],
        ["Y", require("../Alfabeto/assets/images/Y.png"), require(`./assets/sounds/cat.mp3`)],
        ["Z", require("../Alfabeto/assets/images/Z.png"), require(`./assets/sounds/cat.mp3`)],
        
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
    
    
    /*const items = {
        "A" : {
            image: require("./src/A.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "B" : {
            image: require("./src/B.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "C" : {
            image: require("./src/C.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "D" : {
            image: require("./src/D.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "E" : {
            image: require("./src/E.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "F" : {
            image: require("./src/F.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "G" : {
            image: require("./src/G.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "H" : {
            image: require("./src/H.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "I" : {
            image: require("./src/I.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "J" : {
            image: require("./src/J.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "K" : {
            image: require("./src/Q.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "L" : {
            image: require("./src/L.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "M" : {
            image: require("./src/M.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "N" : {
            image: require("./src/N.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "O" : {
            image: require("./src/O.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "P" : {
            image: require("./src/P.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "Q" : {
            image: require("./src/Q.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },


        "R" : {
            image: require("./src/R.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "S" : {
            image: require("./src/S.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "T" : {
            image: require("./src/T.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "U" : {
            image: require("./src/U.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "V" : {
            image: require("./src/V.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },
        "W" : {
            image: require("./src/V.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "X" : {
            image: require("./src/X.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "Y" : {
            image: require("./src/Y.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

        "Z" : {
            image: require("./src/Z.png"), 
            sound: require(`./sound/Wolf.mp3`),
        },

       

            
            
    }; 


    return (
        <Container>          
            
            <A>
            <ButtonColor imagePath={items.A.image} playSoundFunction={() => playSound(items.A.sound)} /> 
            </A>

            <A>
            <ButtonColor imagePath={items.B.image} playSoundFunction={() => playSound(items.A.sound)} /> 
            </A>

           

        </Container>
    );

*/
    