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
            sound: require(`./sound/Cloud.mp3`), 
        },
        "Cloud" : {
            image: require("./src/Cloud.png"),
            sound: require(`./sound/Cloud.mp3`),
        },
            "Sun" : {
                image: require("./src/sun.png"), 
                sound: require(`./sound/Sun.mp3`), 
            },
            "Bird" : {
                image: require("./src/Bird.png"), 
                sound: require(`./sound/Bird.mp3`), 
            },
           
            "Home" : {
                image: require("./src/Home.png"), 
                sound: require(`./sound/Home.mp3`),
            },

            "Plane" : {
                image: require("./src/Plane.png"), 
                sound: require("./sound/Plane.mp3"),
            },

            "Ground" : {
                image: require("./src/ground.png"), 
               
            },

            "Tree" : {
                image: require("./src/Tree1.png"), 
                sound: require(`./sound/Tree.mp3`),
            },

            
            
    }; 


    return (
        <Container>

            
            
            
            <Cloud>
            <ButtonColor imagePath={items.Cloud.image} playSoundFunction={() => playSound(items.Cloud.sound)} /> 
            </Cloud>

            <Cloud2>
            <ButtonColor imagePath={items.Cloud2.image} playSoundFunction={() => playSound(items.Cloud2.sound)} /> 
            </Cloud2>

            <Sun>
            <ButtonColor imagePath={items.Sun.image} playSoundFunction={() => playSound(items.Sun.sound)} /> 
           </Sun> 
            
            <Bird>
            <ButtonColor imagePath={items.Bird.image} playSoundFunction={() => playSound(items.Bird.sound)} /> 
            </Bird>

            <Home>
            <ButtonColor imagePath={items.Home.image} playSoundFunction={() => playSound(items.Home.sound)} /> 
            </Home>

            <Plane>
            <ButtonColor imagePath={items.Plane.image} playSoundFunction={() => playSound(items.Plane.sound)} /> 
            </Plane>

            <Ground>
            <ButtonColor imagePath={items.Ground.image}  /> 
            </Ground>
            
            <Tree>
            <ButtonColor imagePath={items.Tree.image} playSoundFunction={() => playSound(items.Tree.sound)} /> 
            </Tree>
          
           

        </Container>
    );
}


export default Scenes2;
