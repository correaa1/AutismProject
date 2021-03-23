import { Button, View, Text, Image } from "react-native";
import React from "react";
import { Container } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Start({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Pagina inicial</Text>

            <View style={{ marginBottom: 5 }}>
                <Button title="Ir para lista de animais" onPress={() => navigation.navigate("Scenes")} />
            </View>
        </View>
    );
}
