import { Button, View, Text, Image } from "react-native";
import React from "react";
import { Containe } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Start({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Pagina inicial</Text>

            <View style={{ marginBottom: 5 }}>
                <Button title="Animais" onPress={() => navigation.navigate("Animals")} />
                <Button title="Frutas" onPress={() => navigation.navigate("Fruit")} />
                <Button title="Objeto de cozinha" onPress={() => navigation.navigate("Kitchen")} />
            </View>
        </View>
    );
}
