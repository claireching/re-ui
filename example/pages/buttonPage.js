import React from "react";
import {Button, ButtonGroup, Section} from "../../src/components";
import BasePage from "./basePage/basePage";
import BasePageContent from "./basePage/basePageContent";

const ButtonPage = () => {
    return (
        <BasePage>
            <BasePageContent>
                <Section>
                    <h1>Buttons</h1>
                    <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for
                        multiple sizes, states, and more.</p>
                </Section>

                <Section>
                    <h2>Examples</h2>
                    <p>Bootstrap includes several predefined button styles, each serving its own semantic purpose, with
                        a few extras thrown in for more control.</p>
                </Section>

                <ButtonGroup>
                    <Button>Primary</Button>
                    <Button color={"secondary"}>Secondary</Button>
                    <Button color={"danger"}>Danger</Button>
                    <Button color={"info"}>Info</Button>
                </ButtonGroup>
            </BasePageContent>
        </BasePage>
    );
};

export default ButtonPage;
