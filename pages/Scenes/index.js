import React, { useState } from "react";
import { Text, Image, Button, View, TouchableOpacity } from "react-native";

import ButtonImage from "./components/ButtonImage";

import { Container,  Cloud, Cloud2, Home,Sun,Tree,Tree2,Gram,Bird,Plane,ImageAnimals, ImageBackgroundAnimals, ButtonAction, ViewAnimalsAction, TextAnimalName, ImageBackground } from "./styles";
function Scenes2() {
  
    const [sound, setSound] = React.useState();

    /*Abaixo é o array dos animais, cada elemento do array tem outro array dentro.
     O array de dentro é composto pelo nome do animal, require da imagem, e o require do som.
     Ou seja, para mudar o animal basta mudar o nome do diretorio e caso necessário também o formato.*/

    const animals = [
        require(`./sound/Wolf.mp3`)
    ]
    async function playSound(animalsound) {
        console.log("Loading Sound");
        const { sound } = await Audio.Sound.createAsync(animalsound);
        ("  ");
        setSound(sound);

        console.log("Playing Sound");
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
        <Container>
            <Cloud>
                <ButtonImage onPress={() => {playSound(animals[0])}} imagePath={require("./src/Cloud.png")} initialOpacity={0.4} />
            </Cloud>
            <Cloud2>
                <ButtonImage  imagePath={require("./src/cloud2.png")} initialOpacity={0.3} />
            </Cloud2>
            <Home>
                <ButtonImage  imagePath={require("./src/Home.png")} initialOpacity={0.3} />
            </Home>
           <Sun>
                <ButtonImage imagePath={require("./src/sun.png")} initialOpacity={0.2} />
           </Sun>
          
           <Tree> 
               <ButtonImage imagePath={require("./src/Tree1.png")} initialOpacity={0.2} />
           </Tree>
         
           <Tree2> 
               <ButtonImage imagePath={require("./src/Tree1.png")} initialOpacity={0.2} />
           </Tree2>

           <Gram>
         
           </Gram>
            
                   

         <Bird> 
         <ButtonImage   imagePath={require("./src/Bird.png")} initialOpacity={0.3} />
         </Bird   >

        <Plane>
        <ButtonImage  imagePath={require("./src/Plane.png")} initialOpacity={0.3} />
        </Plane>

        </Container>
    );
}


export default Scenes2;
