import { Text, StatusBar, Image, TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import React, { Component } from "react";
import { Container, House, Cloud, Sunny, Bird, Tree, Background, Rainbow } from "./styles";

class Scene extends Component {
    state = {
        selectButton: "",
    };

    changeColor() {
        if (!this.state.pressed) {
            this.setState({ pressed: true, tintColor: "gray" });
        } else {
            this.setState({ pressed: false, tintColor: "none" });
        }
    }
    render() {
        return (
            <Container>
                <Background>
                    <TouchableOpacity onPress={() => this.changeColor()}>
                        <Cloud style={{ tintColor: "gray" }} source={require("./src/Cloud.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ tintColor: this.state.selectedButton === "button1" ? "gray" : "none", padding: 15 }} onPress={() => this.setState({ selectedButton: "button1" })}>
                        <Sunny style={{ tintColor: this.state.selectedButton === "button1" ? "gray" : "none", padding: 15 }} onPress={() => this.setState({ selectedButton: "button1" })} onPress={() => this.setState({ selectedButton: "button1" })} source={require("./src/Sunny.png")} />
                    </TouchableOpacity>
                    <Rainbow source={require("./src/Rainbow.png")} />

                    <Bird source={require("./src/Bird.png")} />

                    <House source={require("./src/House.png")} />

                    <Tree source={require("./src/Tree.png")} />
                </Background>
            </Container>
        );
    }
}

export default Scene;
