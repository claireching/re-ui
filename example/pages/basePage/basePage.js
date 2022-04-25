import "./basePage.css";
import React from "react";
import Check from "../../components/checkif";
import {Container} from "../../../re-ui";

const BasePage2 = (props) => {
    const {isLoading, title, className = ""} = props;

    return (
        <div className={`base-page ${className}`}>
            <Check if={title}>
                <Container>
                    <h1 className="page-title">{title}</h1>
                </Container>

            </Check>
            {props.children}
        </div>
    );
};

// optimize rendering by return cached component if not active
const BasePage = React.memo(BasePage2, (prevProps, nextProps) => {
    return nextProps.active === false;
});

export default BasePage;
