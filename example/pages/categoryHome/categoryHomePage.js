import React, {useState} from "react";
import BasePage from "../basePage/basePage";
import BasePageContent from "../basePage/basePageContent";
import {
    Badge,
    Button,
    ButtonGroup,
    Col,
    Container,
    Dropdown,
    Input,
    Image,
    Row,
    Section,
    Select,
    Table
} from "../../../src/components";
import LayoutContainer from "../../../src/components/layout/layoutContainer";
import BasePageButtons from "../basePage/basePageButtons";
import Icon from "../../../src/components/icon/icon";
import "./sss.css";
import {constInputType} from "../../../src/components/form/input";

const DATA = [
    {
        name: "Fish",
        price: 10,
        desc: "For all lover",
        stock: 100,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGb_hB6FoSB9MF_4vKUfCrzZAt5dBDp27NA&usqp=CAU"
    },
    {
        name: "Sotong",
        price: 40,
        desc: "No Stock",
        stock: 0,
        img: "data:image/jpeg;base64,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"
    },
    {
        name: "Crab",
        price: 190,
        desc: "King of seafood",
        stock: 3,
        img: "data:image/jpeg;base64,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"
    },
];

const CategoryHomePage = () => {
    const [modal, setModal] = useState();

    const handleModalClose = () => setModal(null);
    const handleFormSubmit = () => {

    };

    return (
        <BasePage title={<><Icon icon={"icon-bianji"} className={"i-mar"}/>Example</>}>
            <BasePageContent withPadding={false}>
                <Container>
                    {
                        DATA.map(d => <List {...d}/>)
                    }
                </Container>
            </BasePageContent>
        </BasePage>
    );
};

const List = ({img, name, desc, price, stock}) => {
    return (
        <Row className={"list1"}>
            <Col>
                <Image src={img}/>
            </Col>
            <Col className={"_body"}>
                <Row className={"_body"}>
                    <Col>
                        <div className={"_title"}>{name}</div>
                        <div className={"_desc"}>{desc}</div>
                        <div className={"_price"}>{price}</div>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <span>Qty</span>
                                <Input withQuantityControl={true} type={constInputType.number} value={1}/>
                            </Col>
                            <Col>
                                <Button>Add to cart</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};


export default CategoryHomePage;
