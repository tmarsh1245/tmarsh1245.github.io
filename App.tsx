import * as React from "react";
import {NavBar} from "./Components/NavBar";
import {HomePage} from "./HomePage";
export const App = () => (
    <div id="app-entry">
        <NavBar/>
        <HomePage/>
    </div>
);