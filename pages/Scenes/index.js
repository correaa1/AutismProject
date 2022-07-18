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
            image: require("./src/cloud2.png"), //aqui voce coloca o path da imagem
            sound: require(`./sound/Wolf.mp3`), //aqui o path do som
        },
        "nuvem" : {
            image: require("./src/Cloud.png"),
            sound: require(`./sound/Wolf.mp3`),
        },
            "Sun" : {
                image: require("./src/sun.png"), //aqui voce coloca o path da imagem
                sound: require(`./sound/Wolf.mp3`), //aqui o path do som
            },
            "Bird" : {
                image: require("./src/Bird.png"), //aqui voce coloca o path da imagem
                sound: require(`./sound/Wolf.mp3`), //aqui o path do som
            },
           
            "Home" : {
                image: require("./src/Home.png"), //aqui voce coloca o path da imagem
                sound: require(`./sound/Wolf.mp3`), //aqui o path do som
            },

            "Plane" : {
                image: require("./src/Plane.png"), //aqui voce coloca o path da imagem
                sound: require(`./sound/Wolf.mp3`), //aqui o path do som
            },

            "Ground" : {
                image: require("./src/ground.png"), //aqui voce coloca o path da imagem
                sound: require(`./sound/Wolf.mp3`), //aqui o path do som
            },

            "Tree" : {
                image: require("./src/Tree1.png"), //aqui voce coloca o path da imagem
                sound: require(`./sound/Wolf.mp3`), //aqui o path do som
            },

            
            
    }; // para usar você so precisa colocar... items.exemplo.image ai ele pega a imagem...


    return (
        <Container>

            {/* Abaxio segue um exemplo usando o objeto de items */}
            
            
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
