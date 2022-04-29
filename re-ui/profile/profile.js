import "./profile.scss"
import React, {useState} from "react";
import clsx from "clsx";
import Dropdown from "../dropdown/dropdown";
import List from "../list/list";
import ListItem from "../list/listItem";
import Avatar from "./avatar";

const Profile = ({children, className, style,}) => {
    const [isOpen, setIsOpen] = useState(false);
    const profileNode = <Avatar/>;

    return (
        <div className={clsx("profile-container", className)} style={style}>
            <Dropdown isOpen={isOpen} onToggle={setIsOpen} toggle={profileNode}>
                <List>
                    <ListItem>haha</ListItem>
                </List>
            </Dropdown>
        </div>
    );
};

export default Profile;
