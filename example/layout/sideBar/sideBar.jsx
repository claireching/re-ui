import "./sideBar.css";
import React from "react";
import SideBarMenu from "./sideBarMenu/sideBarMenu";


const SideBar = (props) => {
    const {toggleMenu} = props;

    return (
        <React.Fragment>
            <div className="side-bar-head" onClick={toggleMenu}>
                UI
            </div>
            <div className="sidebar-menu">
                <SideBarMenu {...props}/>
            </div>
        </React.Fragment>
    );
};

// use last rendered sideBar if return true
const MemoSideBarMenu = React.memo(SideBar, (prevProps, nextProps) => {
    return prevProps.menuCollapse === nextProps.menuCollapse;
});

export default MemoSideBarMenu;
