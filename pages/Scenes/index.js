import React, { useState } from "react";
import { Text, Image, Button, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import ButtonColor from './components/ButtonImage/index'


import { Container,  Cloud, Cloud2, Home,Sun,Tree,Tree2,Ground,Bird,Plane} from "./styles";
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
        "Cloud2" : {
            image: require("./src/cloud2.png"), 
            sound: require(`./sound/Wolf.mp3`), 
        },
        "nuvem" : {
            image: require("./src/Cloud.png"),
            sound: require(`./sound/Wolf.mp3`),
        },
            "Sun" : {
                image: require("./src/sun.png"), 
                sound: require(`./sound/Wolf.mp3`), 
            },
            "Bird" : {
                image: require("./src/Bird.png"), 
            },
           
            "Home" : {
                image: require("./src/Home.png"), 
            },

            "Plane" : {
                image: require("./src/Plane.png"), 
            },

            "Ground" : {
                image: require("./src/ground.png"), 
                sound: require(`./sound/Wolf.mp3`), 
            },

            "Tree" : {
                image: require("./src/Tree1.png"), 
                sound: require(`./sound/Wolf.mp3`),
            },

            
            
    }; 


    return (
        <Container>

            
            
            
            <Cloud>
            <ButtonColor imagePath={items.nuvem.image} playSoundFunction={() => playSound(items.nuvem.sound)} /> 
            </Cloud>

            <Cloud2>
            <ButtonColor imagePath={items.Cloud2.image} playSoundFunction={() => playSound(items.nuvem.sound)} /> 
            </Cloud2>

            <Sun>
            <ButtonColor imagePath={items.Sun.image} playSoundFunction={() => playSound(items.nuvem.sound)} /> 
           </Sun> 
            
            <Bird>
            <ButtonColor imagePath={items.Bird.image} playSoundFunction={() => playSound(items.nuvem.sound)} /> 
            </Bird>

            <Home>
            <ButtonColor imagePath={items.Home.image} playSoundFunction={() => playSound(items.nuvem.sound)} /> 
            </Home>

            <Plane>
            <ButtonColor imagePath={items.Plane.image} playSoundFunction={() => playSound(items.nuvem.sound)} /> 
            </Plane>

            <Ground>
            <ButtonColor imagePath={items.Ground.image} playSoundFunction={() => playSound(items.nuvem.sound)} /> 
            </Ground>
            
            <Tree>
            <ButtonColor imagePath={items.Tree.image} playSoundFunction={() => playSound(items.nuvem.sound)} /> 
            </Tree>
          
           

        </Container>
    );
}


export default Scenes2;
