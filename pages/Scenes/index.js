import { Text, StatusBar, Image, Button, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Container, Waves, Cloud, Dove, Group, Sunny, Tree, Vector, Chrysanthemum, House } from "./styles";

class Scene extends Component {
    render() {
        return (
            <Container>
                <Cloud source={require("./src/cloud-computing_1.svg")} />
                <Sunny source={require("./src/sunny_1.svg")} />
                <Dove source={require("./src/dove_1.svg")} />
                <Group source={require("./src/Group.svg")} />
                <House source={require("./src/house_1.svg")} />
                <Tree source={require("./src/tree_1.svg")} />
                <Chrysanthemum source={require("./src/chrysanthemum_1.svg")} />
                <Vector source={require("./src/Vector_1.svg")} />
            </Container>
        );
    }
}

export default Scene;
