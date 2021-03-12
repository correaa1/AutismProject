import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { Container } from "./styles";

export default function App() {
    const [sound, setSound] = React.useState();
    async function playSound() {
        console.log("Loading Sound");
        const { sound } = await Audio.Sound.createAsync(require("./assets/CavaloAudio.mp3"));
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
        <View style={styles.container}>
            <TouchableOpacity title="Play Sound" onPress={playSound}>
                <Image source={require("./Imagens/Cavalo.jpg")} style={styles.imagens} onPress={() => this.moveToAddNewCustomer()} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require("./Imagens/Cachorro.jpg")} style={styles.imagens} onPress={() => this.moveToAddNewCustomer()} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    imagens: {
        resizeMode: "center",
        width: 250,
        height: 200,
    },
});
