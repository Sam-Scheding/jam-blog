import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./HomePage/Homepage";
const App = () => (
    <Homepage />
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
