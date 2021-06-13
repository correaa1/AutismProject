import React, { useState } from "react";
import { Text, Image, Button, View, TouchableOpacity } from "react-native";

import ButtonImage from "./components/ButtonImage";

import { Container, Teste, Cloud, Cloud2, House,Sun,Tree } from "./styles";
function Scenes2() {
    return (
        <Container>
            <Cloud>
                <ButtonImage imagePath={require("./src/cloud.png")} initialOpacity={0.4} />
            </Cloud>
            <Cloud2>
                <ButtonImage  imagePath={require("./src/cloud2.png")} initialOpacity={0.3} />
            </Cloud2>
            <House>
                <ButtonImage  imagePath={require("./src/house1.png")} initialOpacity={0.3} />
            </House>
           <Sun>
                <ButtonImage imagePath={require("./src/sun.png")} initialOpacity={0.2} />
           </Sun>
           <Tree> 
               <ButtonImage imagePath={require("./src/tree1.png")} initialOpacity={0.2} />
           </Tree>
            <ButtonImage imagePath={require("./src/waves.png")} initialOpacity={0.1} />
            <ButtonImage imagePath={require("./src/ground.png")} initialOpacity={0.2} />
            <ButtonImage imagePath={require("./src/dove.png")} initialOpacity={0.2} />
            <ButtonImage imagePath={require("./src/flowers.png")} initialOpacity={0.2} />
            <ButtonImage imagePath={require("./src/flower.png")} initialOpacity={0.2} />
        </Container>
    );
}

export default Scenes2;
