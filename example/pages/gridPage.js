import React from "react";
import {Button, ButtonGroup, Col, Container, Row} from "../../src";
import BasePage from "./basePage/basePage";
import BasePageContent from "./basePage/basePageContent";
import Image from "../../src/image/image";

const GridPage = () => {
    return (
        <BasePage>
            <BasePageContent withPadding={false}>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <Container>
                                <h1>Grid</h1>
                                <p>Powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to
                                    a
                                    twelve column system, six default responsive tiers.</p>

                                <Row withMargin>
                                    <Col md={4}>
                                        <Image
                                            src={"https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.600x338.jpg?t=1646996408"}/>
                                        <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more
                                            with
                                            support
                                            for multiple sizes, states, and more.</p>
                                        <Button>View</Button>
                                    </Col>
                                    <Col md={4}>
                                        <Image
                                            src={"https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_dc55eeb409d6e187456a8e159018e8da098fa468.600x338.jpg?t=1646996408"}/>
                                        <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more
                                            with
                                            support
                                            for multiple sizes, states, and more.</p>
                                        <Button>View</Button>
                                    </Col>
                                    <Col md={4}>
                                        <Image
                                            src={"https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_90a33d7764a2d23306091bfcb52265c3506b4fdb.600x338.jpg?t=1646996408"}/>
                                        <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more
                                            with
                                            support
                                            for multiple sizes, states, and more.</p>
                                        <Button>View</Button>
                                    </Col>
                                </Row>

                                <h2>Two Column</h2>
                                <p>Sample</p>

                                <Row>
                                    <Col md={6}>
                                        <Image
                                            src={"https://cdn.cloudflare.steamstatic.com/steam/apps/812140/ss_0ef33c0f230da6ebac94f5959f0e0a8bbc48cf8a.600x338.jpg?t=1646425720"}/>
                                        <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more
                                            with
                                            support
                                            for multiple sizes, states, and more.</p>
                                        <Button>View</Button>
                                    </Col>
                                    <Col md={6}>
                                        <Image
                                            src={"https://cdn.cloudflare.steamstatic.com/steam/apps/812140/ss_3f8f4a09fb1d69648a8c20aae19ca2924ba275bd.600x338.jpg?t=1646425720"}/>
                                        <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more
                                            with
                                            support
                                            for multiple sizes, states, and more.</p>
                                        <Button>View</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col lg={4} style={{backgroundColor: "#eee", height: "100vh"}}>

                        </Col>
                    </Row>
                </Container>
            </BasePageContent>
        </BasePage>
    );
};

export default GridPage;
