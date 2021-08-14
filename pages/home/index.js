import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styled from 'styled-components'
import {Button} from 'react-native-paper'



import { Welcome } from "./styles";


export default function Start({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            

            <View style={{ marginBottom: 5 }}>
            <Welcome title="Toobar" onPress={() => navigation.navigate("Toobar")} />
                <Welcome title="Animals" onPress={() => navigation.navigate("Animals")} />
                <Button title="Button" onPress={() => navigation.navigate("Button")} />
                <Button title="Kitchen" onPress={() => navigation.navigate("Kitchen")} />
                <Button color="#ff5c5c" title="Cenas" onPress={() => navigation.navigate("Scenes")} />
                <Button color="#004a95" mode="contained" onPress={() => navigation.navigate("Categorias")}>
                    Começar
</Button>
            </View>
        </View>
    );
}
