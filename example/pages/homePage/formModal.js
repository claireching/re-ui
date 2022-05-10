import React from "react";
import {Input, Modal} from "../../../src";

const FormModal = ({isOpen, onConfirm, onClose}) => {
    return (
        <Modal isOpen={isOpen} onConfirm={onConfirm} onClose={onClose}>
            <Input label={"Name"}/>
            <Input label={"Price"}/>
        </Modal>
    );
};

export default FormModal;
