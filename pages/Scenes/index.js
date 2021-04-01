import { Text, StatusBar, Image, Button, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Container, House, Cloud, Sunny, Bird, Tree, Grass } from "./styles";

class Scene extends Component {
    render() {
        return (
            <Container>
                <Cloud source={require("./src/Cloud.png")} />
                <Sunny source={require("./src/Sunny.png")} />
                <Bird source={require("./src/Bird.png")} />
                <House source={require("./src/House.png")} />
                <Tree source={require("./src/Tree.png")} />
                <Grass source={require("./src/Grass.png")} />
            </Container>
        );
    }
}

export default Scene;
