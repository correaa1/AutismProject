import React, { useState } from "react";
import { Text, Image, Button, View, TouchableOpacity } from "react-native";

import ButtonImage from "./components/ButtonImage";

import { Container,  Cloud, Cloud2, Home,Sun,Tree,Tree2,Gram,Bird,Plane } from "./styles";
function Scenes2() {
    return (
        <Container>
            <Cloud>
                <ButtonImage imagePath={require("./src/Cloud.png")} initialOpacity={0.4} />
            </Cloud>
            <Cloud2>
                <ButtonImage  imagePath={require("./src/cloud2.png")} initialOpacity={0.3} />
            </Cloud2>
            <Home>
                <ButtonImage  imagePath={require("./src/Home.png")} initialOpacity={0.3} />
            </Home>
           <Sun>
                <ButtonImage imagePath={require("./src/sun.png")} initialOpacity={0.2} />
           </Sun>
          
           <Tree> 
               <ButtonImage imagePath={require("./src/Tree1.png")} initialOpacity={0.2} />
           </Tree>
         
           <Tree2> 
               <ButtonImage imagePath={require("./src/Tree1.png")} initialOpacity={0.2} />
           </Tree2>

           <Gram>
         
           </Gram>
            
                   

         <Bird> 
         <ButtonImage   imagePath={require("./src/Bird.png")} initialOpacity={0.3} />
         </Bird   >

        <Plane>
        <ButtonImage  imagePath={require("./src/Plane.png")} initialOpacity={0.3} />
        </Plane>

        </Container>
    );
}

export default Scenes2;
