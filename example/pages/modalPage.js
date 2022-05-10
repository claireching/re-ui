import React, {useState} from "react";
import {Button, Modal} from "../../src";
import BasePage from "./basePage/basePage";
import BasePageContent from "./basePage/basePageContent";

const ModalPage = () => {
    const [modal, setModal] = useState(null);

    const closeModal = () => {
        setModal(null);
    };

    return (
        <BasePage>
            <BasePageContent>
                <Button onClick={() => setModal({name: "test1"})}>Open Modal</Button>
            </BasePageContent>

            <Modal isOpen={modal?.name === "test1"} onClose={closeModal}>
                <div>hihi</div>
            </Modal>
        </BasePage>
    );
};

export default ModalPage;
