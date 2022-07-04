import React from "react";
import HomePage from "../pages/homePage/homePage";
import ButtonPage from "../pages/buttonPage";
import ModalPage from "../pages/modalPage";
import DropdownPage from "../pages/dropdownPage";
import GridPage from "../pages/gridPage";
import CategoryHomePage from "../pages/categoryHome/categoryHomePage";

const routes = [
    {
        path: "/",
        name: "Home",
        icon: "icon-shouye",
        component: <HomePage/>
    },    {
        path: "/category",
        name: "Category",
        icon: "icon-shouye",
        component: <CategoryHomePage/>
    },
    {
        path: "/button",
        name: "Button",
        icon: "icon-fuzhi",
        component: <ButtonPage/>
    },
    {
        path: "/dropdown",
        name: "Dropdown",
        icon: "icon-fuzhi",
        component: <DropdownPage/>
    },
    {
        path: "/modal",
        name: "Modal",
        icon: "icon-fuzhi",
        component: <ModalPage/>
    },
    {
        path: "/grid",
        name: "Grid",
        icon: "icon-fuzhi",
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
