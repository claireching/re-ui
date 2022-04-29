import React, {useState} from "react";
import "./topBar.css";
import Navbar from "../../re-ui/navbar/navbar";
import Profile from "../../re-ui/profile/profile";

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
