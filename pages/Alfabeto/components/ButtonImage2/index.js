import React, { useState } from "react";
import { Text, Button, View, TouchableOpacity } from "react-native";

import { Container, Image } from "./styles";

function ButtonImage2({ imagePath, playSoundFunction }) {
    const [opacity, setOpacity] = useState(0.1);

    const setColorAndPlaySound = () => {
        setOpacity(1); 
        playSoundFunction();
    }
   
    return (
        <TouchableOpacity 
            activeOpacity={0.1} 
            onPress={setColorAndPlaySound}>
            <Image source={imagePath} opacity={opacity} />
        </TouchableOpacity>
    );
}

export default ButtonImage2;
