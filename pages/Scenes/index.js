import React, { useState } from "react";
import { Text, Image, Button, View, TouchableOpacity } from "react-native";

import ButtonImage from "./components/ButtonImage";

import { Container, Teste } from "./styles";
function Scenes2() {
    return (
        <Container>
            {/* <ButtonImage imagePath={require("./src/Tree.png")} /> */}
            <ButtonImage imagePath={require("./src/cloud.png")} initialOpacity={0.4} />
            <ButtonImage imagePath={require("./src/cloud2.png")} initialOpacity={0.3} />
            <ButtonImage imagePath={require("./src/house1.png")} initialOpacity={0.3} />
            <ButtonImage imagePath={require("./src/sun.png")} initialOpacity={0.2} />
            <ButtonImage imagePath={require("./src/tree1.png")} initialOpacity={0.2} />
            <ButtonImage imagePath={require("./src/waves.png")} initialOpacity={0.1} />
            <ButtonImage imagePath={require("./src/ground.png")} initialOpacity={0.2} />
            <ButtonImage imagePath={require("./src/dove.png")} initialOpacity={0.2} />
            <ButtonImage imagePath={require("./src/flowers.png")} initialOpacity={0.2} />
            <ButtonImage imagePath={require("./src/flower.png")} initialOpacity={0.2} />
        </Container>
    );
}

export default Scenes2;
