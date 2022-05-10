import React, {useState} from "react";
import "./topBar.css";
import Navbar from "../../src/navbar/navbar";
import Profile from "../../src/profile/profile";

const TopBar = ((props) => {
    const [modal, setModal] = useState("");

    const handleChangePassword = () => {
        setModal("edit");
    };

    const handleModalClose = () => {
        setModal("");
    };

    return (
        <Navbar style={{justifyContent: "space-between"}}>
            <div/>
            <Profile/>
        </Navbar>
    );
});

export default TopBar;
