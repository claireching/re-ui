import React from "react";
import DATA from "./wishlist.json";
import {Col, Container, Image, Row} from "../../src";
import "./gameCategory.css"
import LayoutContainer from "../../src/components/layout/layoutContainer";

const LandingPage = () => {
    return (
        <div style={{background: "#0e0e10",height:"100%"}}>
            <LayoutContainer>
                <div className={"my-whislist"}>
                    <Row>
                        {Object.keys(DATA).map(d => {
                            DATA[d].id = d;
                            return <_Item data={DATA[d]} key={d}/>;
                        })}
                    </Row>
                </div>
                <div className={"category-board"}>
                    <h2>My Container</h2>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <_Box/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </LayoutContainer>
        </div>
    );
};

const _Box = () => {
    return (
        <div className={"category-box"}>
            <div className={"category-box-first category-box-item"}>
                <div className={"category-box-item-inner"}>

                </div>
            </div>
            <div className={"category-box-item"}>
                <div className={"category-box-item-inner"}>

                </div>
            </div>
        </div>
    );
};

const _Item = ({data}) => {
    const {name, capsule, screenshots, tags} = data || {};
    return (
        <Col>
            <Image src={capsule}/>
            <h3>{name}</h3>
        </Col>
    );
};

export default LandingPage;
