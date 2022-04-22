import React, {useState} from "react";
import "./topBar.css";

const TopBar = ((props) => {
    const [modal, setModal] = useState("");

    const handleChangePassword = () => {
        setModal("edit");
    };

    const handleModalClose = () => {
        setModal("");
    };

    return (
        <>
            <div className="top-bar">

            </div>
        </>

    );
});

export default TopBar;
