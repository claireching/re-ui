import React, {useState} from "react";
import "./topBar.css";
import Navbar from "../../src/components/navbar/navbar";
import Profile from "../../src/components/profile/profile";

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
