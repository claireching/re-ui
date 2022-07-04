import React, {useState} from "react";
import BasePage from "../basePage/basePage";
import BasePageContent from "../basePage/basePageContent";
import {Badge, Button, ButtonGroup, Col, Container, Dropdown, Input, Row, Section, Select, Table} from "../../../src/components";
import List from "../../../src/components/list/list";
import ListItem from "../../../src/components/list/listItem";
import LayoutContainer from "../../../src/components/layout/layoutContainer";
import BasePageButtons from "../basePage/basePageButtons";
import Icon from "../../../src/components/icon/icon";
import FormModal from "./formModal";
import generateData from "./generateData";

const HomePage = () => {
    const [modal, setModal] = useState();

    const handleModalClose = () => setModal(null);
    const handleFormSubmit = () => {

    };

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

            <FormModal isOpen={modal?.name === "create"} onClose={handleModalClose} onConfirm={handleFormSubmit}/>
        </BasePage>
    );
};

export default HomePage;
