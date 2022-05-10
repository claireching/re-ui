import "./modal.scss";
import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "../button/button";
import Portal from "../portal";

const Modal = (props) => {
    let {
        style,
        className,
        isOpen = false,
        size,
        children,
        onOutsideClick,
        onConfirm,
        onClose,
        title,
        width,
        confirmText,
        closeText,
        isCenter,
        isConfirmDisable
    } = props;
    if (!isOpen) {
        return null;
    }

    const [animationClass, setAnimationClass] = useState(false);

    useEffect(() => {
        setAnimationClass(!!isOpen);
    }, [isOpen]);


    const handleCloseClick = () => {

    };

    let footerNode = null;
    if (typeof onConfirm === "function" && typeof onClose === "function") {
        footerNode = (
            <K2ModalFooter>
                <Button onClick={onConfirm} color={"primary"}
                        disabled={isConfirmDisable}>{confirmText || "Confirm"}</Button>
                <Button onClick={onClose} color="secondary">{closeText || "Cancel"}</Button>
            </K2ModalFooter>
        );
    } else if (typeof onClose === "function") {
        footerNode = (
            <K2ModalFooter>
                <Button onClick={onClose} color="secondary">{closeText || "Close"}</Button>
            </K2ModalFooter>
        );
    }

    const bodyNode = [];
    React.Children.forEach(children, (child, i) => {
        if (child?.type?.displayName === "K2ModalFooter") {
            footerNode = child;
        } else {
            bodyNode.push(child);
        }
    });

    return (
        <Portal>
            <div className={`k2modal-root${animationClass ? " modal-show" : ""}`}>
                <div className={"k2modal-container"}>
                    <div className="overlay" onClick={onOutsideClick}/>
                    <div className={clsx("k2modal", className, size, isCenter && "modal-center")}
                         style={width && {width: width}}>
                        {title && <div className={"k2modal-header"}>
                            <h4 className={"k2modal-title"}>{title}</h4>
                        </div>}
                        {bodyNode?.length ? <div className={"k2modal-body"}>
                            {bodyNode}
                        </div> : null}

                        {footerNode}
                    </div>
                </div>
            </div>
        </Portal>
    );
};


export const K2ModalFooter = (props) => {
    return (
        <div className={"k2modal-footer"}>
            {props.children}
        </div>
    );
};
K2ModalFooter.displayName = "K2ModalFooter";


Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onOutsideClick: PropTypes.func,
    onConfirm: PropTypes.func,
    onClose: PropTypes.func,
    size: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    style: PropTypes.string,
    width: PropTypes.number,
    isConfirmDisable: PropTypes.bool
};

export default Modal;
