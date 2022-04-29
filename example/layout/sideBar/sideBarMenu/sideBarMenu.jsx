import "../sideBar.css";
import "./sideBarMenu.css";
import React, {useContext, useState} from "react";
import RoleNavItem from "./roleNav/roleNavItem";
import routes from "../../../routers/routes";
import {useNavigate} from "react-router-dom";
import RoleNavDropdown from "./roleNavDropdown/roleNavDropdown";
import RoleNavDropDownItem from "./roleNavDropdown/roleNavDropdownItem";

const MAX_TAB_LENGTH = 16;
const SideBarMenu = (props) => {
    const [activeLink, setActiveLink] = useState(null);
    const navigate = useNavigate();

    const handleNavContainerClick = (link) => {
        if (activeLink === link) {
            setActiveLink(null);
        } else {
            setActiveLink(link);
        }
    };


    const handleNavItemClick = (link) => {
        navigate(link);
    }

    return routes.map(d => {
        if (d.children) {
            return (
                <RoleNavDropdown path={d.path}
                                 name={d.name}
                                 key={d.path}
                                 icon="iconfont icon-Asset19"
                                 onClick={handleNavContainerClick}
                                 activeLink={activeLink}>
                    {d.children.map(v => {
                        return (
                            <RoleNavDropDownItem link={v.path}
                                                 key={v.path}
                                                 onClick={handleNavItemClick}
                                                 icon="iconfont icon-Asset25"
                                                 name={v.name}/>
                        );
                    })}
                </RoleNavDropdown>
            );
        } else {
            return (
                <RoleNavItem link={d.path}
                             key={d.path}
                             icon={d.icon}
                             onClick={handleNavItemClick}
                             isActive={activeLink === d.path}
                             name={d.name}/>
            );
        }
    });
};

export default SideBarMenu;

