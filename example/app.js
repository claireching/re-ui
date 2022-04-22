import "./app.css"
import React from "react";
import Layout from "./layout/layout";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    );
};

export default App;
