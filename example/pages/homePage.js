import React from "react";
import BasePage from "./basePage/basePage";
import BasePageContent from "./basePage/basePageContent";
import {Badge, Button, ButtonGroup, Col, Container, Dropdown, Input, Row, Section, Select, Table} from "../../re-ui";
import List from "../../re-ui/list/list";
import ListItem from "../../re-ui/list/listItem";
import LayoutContainer from "../../re-ui/layout/layoutContainer";
import BasePageButtons from "./basePage/basePageButtons";
import Icon from "../../re-ui/icon/icon";
import {chooseRandom} from "../helper/utils";

const DATA_LENGTH = 10;
const DATA_SAMPLE = {
    id: 1,
    name: "John",
    age: 30,
    country: "MY",
    height: 170,
    weight: 70,
    IQ: 100,
    income: 6000,
    status: "done"
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
                    let add = [10, 20, 3, 4, 5];
                    if (k === "income") {
                        add = [10000, 200, 300, 400, 500];
                    }
                    toInsert[k] = chooseRandom(add);
                    break;
                case "country":
                    toInsert.country = "MY";
                    break;
                case "status":
                    let statusArr = ["done", "processing", "open"];
                    toInsert[k] = chooseRandom(statusArr);
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
                    <Button outline><Icon icon={"icon-add-select"} fontSize={18}
                                          style={{marginRight: 5}}/>Create</Button>
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
                                    <Input placeholder={"Name"}/>
                                </Col>
                                <Col md={3} lg={2}>
                                    <Input placeholder={"Age"}/>
                                </Col>
                                <Col md={3} lg={2}>
                                    <Input placeholder={"Country"}/>
                                </Col>
                                <Col md={3} lg={2}>
                                    <Input placeholder={"Number"}/>
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
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            list?.data?.map(o => {
                                const tdNode = Object.keys(o).map(k => {
                                    let value = o[k];

                                    if (k.toLowerCase() === "status") {
                                        value = <Badge>{value}</Badge>;
                                    }
                                    if (k.toLowerCase() === "income") {
                                        value = <>
                                            <div>{value}</div>
                                            <div style={{fontSize: 10, color: "#a8a8a8"}}>MYR</div>
                                        </>;
                                    }
                                    return <td key={k}>{value}</td>;
                                });
                                return (
                                    <tr key={o.id}>
                                        {tdNode}
                                        <td>
                                            <Select toggle={<Icon icon={"icon-gengduo"} fontSize={20}/>}
                                                    options={[{label: "Edit"}, {label: "Delete"}]}/>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </Table>
                </LayoutContainer>
            </BasePageContent>
        </BasePage>
    );
};

export default HomePage;
