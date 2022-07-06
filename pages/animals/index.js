import React, { useState } from "react";
import { Audio } from "expo-av";
import { StatusBar } from "react-native";
import backgroundbganimals from "./assets/background.png";
import { Container, ImageAnimals, ImageBackgroundAnimals, ButtonAction, ViewAnimalsAction, TextAnimalName, ImageBackground } from "./styles";

export default function App() {
    const [sound, setSound] = React.useState();

    /*Abaixo é o array dos animais, cada elemento do array tem outro array dentro.
     O array de dentro é composto pelo nome do animal, require da imagem, e o require do som.
     Ou seja, para mudar o animal basta mudar o nome do diretorio e caso necessário também o formato.*/

    const animals = [
        ["Gato", require("./assets/images/cat.png"), require(`./assets/sounds/cat.mp3`)],
        ["Vaca", require("./assets/images/cow.png"), require(`./assets/sounds/Cow.mp3`)],
        ["Cachorro", require("./assets/images/dog.png"), require(`./assets/sounds/Dog.mp3`)],
        ["Elefante", require("./assets/images/elephant.png"), require(`./assets/sounds/Elephant.mp3`)],
        ["Galo", require("./assets/images/rooster.png"), require(`./assets/sounds/Rooster.mp3`)],
        ["Cavalo", require("./assets/images/horse.png"), require(`./assets/sounds/horse.mp3`)],
        ["Coruja", require("./assets/images/owl.png"), require(`./assets/sounds/Owl.mp3`)],
        ["Porco", require("./assets/images/pig.png"), require(`./assets/sounds/Pig.mp3`)],
        ["Ovelha", require("./assets/images/sheep.png"), require(`./assets/sounds/Sheep.mp3`)],
        ["Lobo", require("./assets/images/Wolf.png"), require(`./assets/sounds/Wolf.mp3`)],
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
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
            <ImageBackground source={backgroundbganimals} />
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
