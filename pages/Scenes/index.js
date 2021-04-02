import { Text, StatusBar, Image, TouchableOpacity, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Container, House, Cloud, Sunny, Bird, Tree, BackgroundGrass, Background, Rainbow } from "./styles";

class Scene extends Component {
    /*   constructor(props){
       super(props);    
       this.click=0;
       this.vai= this.vai.bind(this);

       }
       click(){
           if (this.click != 0) {
return(
    <>
)
           }
            
       }
*/
    render() {
        return (
            <Container>
                <Background>
                    <Cloud source={require("./src/Cloud.png")} />

                    <Sunny source={require("./src/Sunny.png")} />

                    <Rainbow source={require("./src/Rainbow.png")} />

                    <Bird source={require("./src/Bird.png")} />

                    <House source={require("./src/House.png")} />

                    <Tree source={require("./src/Tree.png")} />

                    <BackgroundGrass></BackgroundGrass>
                </Background>
            </Container>
        );
    }
}

export default Scene;
