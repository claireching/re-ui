import "./basePage.scss";
import React from "react";
import Check from "../../components/checkif";
import LayoutContainer from "../../../re-ui/layout/layoutContainer";

const BasePage2 = (props) => {
    const {isLoading, children, title, className = ""} = props;

    const bodyNode = [];
    let baseButtonNode;
    React.Children.forEach(children, (child, i) => {
        if (child?.type?.displayName === "BasePageButtons") {
            baseButtonNode = child;
        } else {
            bodyNode.push(child);
        }
    });

    let headNode;
    if (title || baseButtonNode) {
        headNode = (
            <LayoutContainer>
                <div className={"_header"}>
                    <Check if={title}>
                        <h1 className="page-title">{title}</h1>
                    </Check>
                    {baseButtonNode}
                </div>
            </LayoutContainer>
        );
    }

    return (
        <div className={`base-page ${className}`}>
            {headNode}
            {bodyNode}
        </div>
    );
};

// optimize rendering by return cached component if not active
const BasePage = React.memo(BasePage2, (prevProps, nextProps) => {
    return nextProps.active === false;
});

export default BasePage;
