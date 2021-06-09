import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { Welcome, Button } from "./styles";

export default function Start({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Welcome>BEM VINDO</Welcome>

            <View style={{ marginBottom: 5 }}>
                <Button title="Animais" onPress={() => navigation.navigate("Animals")} />
                <Button title="Frutas" onPress={() => navigation.navigate("Fruit")} />
                <Button title="Objeto de cozinha" onPress={() => navigation.navigate("Kitchen")} />
                <Button color="#ff5c5c" title="Cenas" onPress={() => navigation.navigate("Scenes")} />
            </View>
        </View>
    );
}
