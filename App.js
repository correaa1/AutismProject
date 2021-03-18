import * as React from "react";
import { View, Text } from "react-native";
import Route from "./Router/router.js";

import Animal from "./Categorias/Animal/index";
import Start from "./Categorias/Start/index";

export default function App() {
    return (
        <NativeRouter>
            <Route />
        </NativeRouter>
    );
}
