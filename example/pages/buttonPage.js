import React from "react";
import {Button, ButtonGroup} from "../../re-ui";
import BasePage from "./basePage/basePage";
import BasePageContent from "./basePage/basePageContent";

const ButtonPage = () => {
    return (
        <BasePage>
            <BasePageContent>
                <h1>Buttons</h1>
                <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for
                    multiple sizes, states, and more.</p>

                <h2>Examples</h2>
                <p>Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a
                    few extras thrown in for more control.</p>

                <ButtonGroup>
                    <Button>Click Me</Button>
                    <Button color={"secondary"}>Click Me</Button>
                    <Button color={"danger"}>Click Me</Button>
                </ButtonGroup>
            </BasePageContent>
        </BasePage>
    );
};

export default ButtonPage;
