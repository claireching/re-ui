import React, {useEffect, useState} from "react";
import SideBar from "./sideBar/sideBar";
import TopBar from "./topBar";
import Routers from "../routers/routers";

const Layout = (props) => {
    const [menuCollapse, setMenuCollapse] = useState(false);

    const toggleMenu = () => {
        const toggle = !menuCollapse;
        setMenuCollapse(toggle);
    };

    return (
        <div className={`root-container ${menuCollapse ? "collapsed" : ""}`}>
            <div className={`side-bar`}>
                <SideBar toggleMenu={toggleMenu} menuCollapse={menuCollapse} {...props}/>
            </div>
            <div className="main-content-wrap">
                <TopBar {...props}/>
                <div className="main-content">
                    <Routers {...props}/>
                </div>
            </div>
        </div>
    );
};

export default Layout;
