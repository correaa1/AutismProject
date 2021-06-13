import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { Welcome, Button } from "./styles";

export default function Start({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Welcome>BEM VINDO</Welcome>

            <View style={{ marginBottom: 5 }}>
                <Button title="Animals" onPress={() => navigation.navigate("Animals")} />
                <Button title="Fruits" onPress={() => navigation.navigate("Fruit")} />
                <Button title="Kitchen" onPress={() => navigation.navigate("Kitchen")} />
                <Button color="#ff5c5c" title="Cenas" onPress={() => navigation.navigate("Scenes")} />
            </View>
        </View>
    );
}
