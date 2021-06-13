import React, { useState } from "react";
import { Audio } from "expo-av";
import { StatusBar } from "react-native";
/*import backgroundbganimals from "./assets/background.png";*/
import { Container, ImageAnimals, ImageBackgroundAnimals, ButtonAction, ViewAnimalsAction, TextAnimalName, ImageBackground } from "./styles";

export default function App() {
    const [sound, setSound] = React.useState();

    /*Abaixo é o array dos animais, cada elemento do array tem outro array dentro.
     O array de dentro é composto pelo nome do animal, require da imagem, e o require do som.
     Ou seja, para mudar o animal basta mudar o nome do diretorio e caso necessário também o formato.*/

    const Object = [
        ["Cadeira", require("../Kitchen/src/cadeira.png"), require(`./sound/cat.mp3`)],
        ["Mesa", require("../Kitchen/src/mesa.png"), require(`./sound/cat.mp3`)],
        ["Colher", require("../Kitchen/src/colher.png"), require(`./sound/cat.mp3`)],
        ["Garfo", require("../Kitchen/src/garfo.png"), require(`./sound/cat.mp3`)],
        ["Faca", require("../Kitchen/src/faca.png"), require(`./sound/cat.mp3`)],
        ["Copo", require("../Kitchen/src/copo.png"), require(`./sound/cat.mp3`)],
        ["Fogão", require("../Kitchen/src/fogao.png"), require(`./sound/cat.mp3`)],
        ["Geladeira", require("../Kitchen/src/geladeira.png"), require(`./sound/cat.mp3`)],
    ];

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
        <>
            <StatusBar barStyle="light-content" backgroundColor="#fff" />
            <Container>
                <ViewAnimalsAction>
                    {kitchen.map((elem, index) => {
                        return (
                            <ButtonAction
                                key={index}
                                onPress={() => {
                                    playSound(elem[2]);
                                }}
                            >
                                <ImageAnimals source={elem[1]} />
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
