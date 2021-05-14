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

    const animals = [
        ["Abacaxi", require("../Fruit/src/abacaxi.png"), require(`./sound/cat.mp3`)],
        ["Maçã", require("../Fruit/src/maca.png"), require(`./sound/cat.mp3`)],
        ["Banana", require("../Fruit/src/banana.png"), require(`./sound/cat.mp3`)],
        ["Laranja", require("../Fruit/src/laranja.png"), require(`./sound/cat.mp3`)],
        ["Uvas", require("../Fruit/src/uvas.png"), require(`./sound/cat.mp3`)],
        ["Melancia", require("../Fruit/src/melancia.png"), require(`./sound/cat.mp3`)],
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
                    {animals.map((elem, index) => {
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
