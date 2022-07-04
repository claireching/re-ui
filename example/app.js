import "./app.css"
import React from "react";
import Layout from "./layout/layout";
import {BrowserRouter} from "react-router-dom";
import LandingPage from "./gameCategory/landingPage";

const App = () => {
    return (
        <BrowserRouter>
            {/*<Layout/>*/}
            <LandingPage/>
        </BrowserRouter>
    );
};

export default App;
