import React from "react";
import BasePage from "./basePage/basePage";
import BasePageContent from "./basePage/basePageContent";
import {Button, ButtonGroup, Col, Container, Input, Row, Section, Select, Table} from "../../re-ui";
import List from "../../re-ui/list/list";
import ListItem from "../../re-ui/list/listItem";
import LayoutContainer from "../../re-ui/layout/layoutContainer";
import BasePageButtons from "./basePage/basePageButtons";
import Icon from "../../re-ui/icon/icon";

const DATA_LENGTH = 15;
const DATA_SAMPLE = {
    id: 1,
    name: "John",
    age: 30,
    country: "MY",
    height: 170,
    weight: 70,
    IQ: 100,
    income: 6000
};
const generateData = () => {
    const DATA = [];
    const headers = [];
    for (let i = 0; i < DATA_LENGTH; i++) {
        const toInsert = {};
        Object.keys(DATA_SAMPLE).forEach(k => {
            const value = DATA_SAMPLE[k];
            switch (k) {
                case "id":
                    toInsert.id = i + 1;
                    break;
                case "name":
                    toInsert.name = (Math.random() + 1).toString(36).substring(7);
                    break;
                case "age":
                case "height":
                case "weight":
                case "IQ":
                case "income":
                    let add = [1, 2, 3, 4, 5];
                    if (k === "income") {
                        add = [1000, 200, 300, 400, 500];
                    }
                    const randomIndex = Math.floor(Math.random() * add.length);
                    toInsert[k] = value + add[randomIndex];
                    break;
                case "country":
                    toInsert.country = "MY";
            }
            if (headers?.length < Object.keys(DATA_SAMPLE)?.length) {
                headers.push(k);
            }
        });
        DATA.push(toInsert);
    }

    return {data: DATA, headers};
};

const HomePage = () => {
    const list = generateData();
    return (
        <BasePage title={<><Icon icon={"icon-bianji"} className={"i-mar"}/>Example</>}>
            <BasePageButtons>
                <ButtonGroup>
                    <Button outline>Config</Button>
                    <Button outline>Create</Button>
                </ButtonGroup>
            </BasePageButtons>

            <BasePageContent withPadding={false}>
                <LayoutContainer>

                    <Row style={{justifyContent: "flex-end", marginBottom: 20}}>
                        <Col grow>
                            <Row className={"table-filter"}>
                                <Col md={3} lg={2}>
                                    <Input/>
                                </Col>
                                <Col md={3} lg={2}>
                                    <Select options={[{label: "test1",}, {label: "test2"}]}/>
                                </Col>
                                <Col md={3} lg={2}>
                                    <Input/>
                                </Col>
                                <Col md={3} lg={2}>
                                    <Input/>
                                </Col>
                                <Col md={3} lg={2}>
                                    <Input/>
                                </Col>
                                <Col md={3} lg={2}>
                                    <Input/>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Button>Submit</Button>
                        </Col>
                    </Row>


                    <Table>
                        <thead>
                        <tr>
                            {
                                list?.headers?.map(d => {
                                    return (
                                        <th key={d}>{d}</th>
                                    );
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            list?.data?.map(o => {
                                const tdNode = Object.keys(o).map(k => <td key={k}>{o[k]}</td>);
                                return (
                                    <tr key={o.id}>
                                        {tdNode}
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </Table>
                    {/*<Section>*/}
                    {/*    <h2>List</h2>*/}
                    {/*    <List>*/}
                    {/*        <ListItem>*/}
                    {/*            Test A*/}
                    {/*        </ListItem>*/}
                    {/*        <ListItem>*/}
                    {/*            Test B*/}
                    {/*        </ListItem>*/}
                    {/*        <ListItem>*/}
                    {/*            Test C*/}
                    {/*        </ListItem>*/}
                    {/*    </List>*/}
                    {/*</Section>*/}
                </LayoutContainer>
            </BasePageContent>
        </BasePage>
    );
};

export default HomePage;
