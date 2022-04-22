import React from "react";
import HomePage from "../pages/homePage";
import ButtonPage from "../pages/buttonPage";
import ModalPage from "../pages/modalPage";
import DropdownPage from "../pages/dropdownPage";
import GridPage from "../pages/gridPage";

const routes = [
    {
        path: "/",
        name: "Home",
        component: <HomePage/>
    },
    {
        path: "/button",
        name: "Button",
        component: <ButtonPage/>
    },
    {
        path: "/dropdown",
        name: "Dropdown",
        component: <DropdownPage/>
    },
    {
        path: "/modal",
        name: "Modal",
        component: <ModalPage/>
    },
    {
        path: "/grid",
        name: "Grid",
        component: <GridPage/>
    },
    // {
    //     path: "/sms",
    //     name: "Sms",
    //     children: [
    //         {
    //             path: "/developer-console",
    //             name: "Developer Console",
    //             component: <TesterPage/>
    //         },
    //     ]
    // },
];

export default routes;
