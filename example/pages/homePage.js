import React from "react";
import BasePage from "./basePage/basePage";
import BasePageContent from "./basePage/basePageContent";
import {Button, Col, Container, Input, Row, Section, Select, Table} from "../../re-ui";
import List from "../../re-ui/list/list";
import ListItem from "../../re-ui/list/listItem";

const HomePage = () => {
    return (
        <BasePage title={"Example"}>
            <BasePageContent withPadding={true}>
                <Container>
                    <Row style={{justifyContent: "space-between", marginBottom: 20}}>
                        <Col>
                            <Row>
                                <Col>
                                    <Input/>
                                </Col>
                                <Col>
                                    <Select options={[{label: "test1",}, {label: "test2"}]}/>
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
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Height</th>
                            <th>Country</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>30</td>
                            <td>180</td>
                            <td>MY</td>
                            <td>Actions</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Alex</td>
                            <td>30</td>
                            <td>170</td>
                            <td>MY</td>
                            <td>Actions</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Susan</td>
                            <td>22</td>
                            <td>160</td>
                            <td>MY</td>
                            <td>Actions</td>
                        </tr>
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
                </Container>
            </BasePageContent>
        </BasePage>
    );
};

export default HomePage;
