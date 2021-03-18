import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-native";

export default function Start() {
    return (
        <Container>
            <TouchableOpacity>
                {" "}
                <Link to="/animal">
                    {" "}
                    <Text>Começa</Text>{" "}
                </Link>{" "}
            </TouchableOpacity>
        </Container>
    );
}
