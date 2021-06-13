import React, { useState } from "react";
import { Text, Button, View, TouchableOpacity } from "react-native";

import { Container, Image } from "./styles";

function ButtonImage({ imagePath, initialOpacity = 0.1 }) {
    const [opacity, setOpacity] = useState(initialOpacity);

    return (
        <TouchableOpacity activeOpacity={0.1} onPress={() => setOpacity(1)}>
            <Image source={imagePath} opacity={opacity} />
        </TouchableOpacity>
    );
}

export default ButtonImage;
