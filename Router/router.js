import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";

import Start from "../Categorias/Start/index";
import Animal from "../Categorias/Animal/index";

function routes() {
    return (
        <>
            <Route exact path="/animal" component={Animal} />
            <Route exact path="/" component={Start} />
        </>
    );
}

export default routes;
