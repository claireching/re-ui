import React from "react";
import {Button, Col, Container, Dropdown, Row} from "../../src";
import BasePage from "./basePage/basePage";
import BasePageContent from "./basePage/basePageContent";


const DropdownPage = () => {

    return (
        <BasePage>
            <BasePageContent>
                <h1>Dropdown</h1>
                <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for
                    multiple sizes, states, and more.</p>

                <Dropdown toggle={"Click Me"}>
                    <Container background={"#fff"}>
                        <Row>
                            <Col>
                                <h1>Buttons</h1>
                                <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for
                                    multiple sizes, states, and more.</p>
                                <h1>Buttons</h1>
                                <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for
                                    multiple sizes, states, and more.</p>
                            </Col>
                        </Row>
                    </Container>
                </Dropdown>

                <h2>Dropdown</h2>
                <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for
                    multiple sizes, states, and more.</p>

            </BasePageContent>
        </BasePage>
    );
};

export default DropdownPage;
