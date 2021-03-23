import { Text, StatusBar, Image, Button, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Container, Waves, Cloud, Clouds, Dove, Group, Sunny, Tree, Vector, Chrysanthemum } from "./styles";

class Scene extends Component {
    render() {
        return (
            <View>
                <Waves source={require("../Scenes/src/waves_1.svg")} />
                <Cloud source={require("../Scenes/src/cloud-computing_1.svg")} />
                <Clouds source={require("../Scenes/src/clouds_1.svg")} />
                <Dove source={require("../Scenes/src/dove_1.svg")} />
                <Group source={require("../Scenes/src/group.svg")} />
                <Sunny source={require("../Scenes/src/sunny_1.svg")} />
                <Tree source={require("../Scenes/src/tree_1.svg")} />
                <Vector source={require("../Scenes/src/Vector_1.svg")} />
                <Chrysanthemum source={require("../Scenes/src/chrysanthemum_1.svg")} />
            </View>
        );
    }
}

export default Scene;
