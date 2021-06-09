import React, { useState } from "react";
import { Text, Image, Button, View, TouchableOpacity } from "react-native";

import { Container } from "./styles";

function ButtonImage({ imagePath, initialOpacity = 0.1 }) {
    const [opacity, setOpacity] = useState(initialOpacity);

    return (
        <Container>
            <View>
                <TouchableOpacity activeOpacity={0.1} onPress={() => setOpacity(1)}>
                    <Image source={imagePath} opacity={opacity} />
                </TouchableOpacity>
            </View>
        </Container>
    );
}

export default ButtonImage;
