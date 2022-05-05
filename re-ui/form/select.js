import React, {useEffect, useRef, useState} from "react";
import Dropdown from "../dropdown/dropdown";
import clsx from "clsx";
import "./select.scss";

const DEFAULT_LABEL = "Select";
const Select = ({
                    options = [],
                    label,
                    id,
                    name,
                    onChange,
                    value = "",
                    defaultSelected,
                    dropdownPosition,
                    showSelectText = false,
                    toggle
                }) => {
    const [toggleWidth, setToggleWidth] = useState();
    const [selected, setSelected] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const toggleRef = useRef(null);
    const containerRef = useRef(null);


    useEffect(() => {
        if (options?.length) {
            const toggleWidth1 = _getToggleWidth(options);
            setToggleWidth(toggleWidth1);
            // if (!toggleWidth || (toggleDomWidth > toggleWidth)) {
            //     setToggleWidth(toggleDomWidth);
            // }
            if (defaultSelected) {
                const option = options?.find(d => d.value === defaultSelected);
                setSelected(option || defaultSelected);
            } else {
                setSelected({label: DEFAULT_LABEL});
            }
        }
    }, [options]);

    if (!id) {
        id = `select${JSON.stringify(options)}`;
    }

    const handleChange = (option) => {
        const {value, label} = option || {};
        setSelected(option);
        if (typeof onChange === "function") {
            onChange(value, name);
        }
        setIsOpen(false);
    };

    const containerDom = containerRef?.current?.getBoundingClientRect();
    const containerDomWidth = containerDom?.width;
    const bodyWidth = containerDomWidth > toggleWidth ? containerDomWidth : toggleWidth;

    const toggleInput = toggle || <div className={clsx("_toggle _input select-input", isOpen && "_active")}
                             ref={toggleRef}>{selected?.label}</div>;
    return (
        <div className={"form-container select-container"} ref={containerRef}>
            {label && <label htmlFor={id}>{label}</label>}
            <Dropdown toggle={toggleInput} isOpen={isOpen} onToggle={setIsOpen} dropdownPosition={dropdownPosition}>
                <div className={"_options"} style={{width: bodyWidth}}>
                    {showSelectText &&
                    <div className={"_item"} onClick={() => handleChange({label: DEFAULT_LABEL, value: null})}>
                        {DEFAULT_LABEL}
                    </div>}
                    {options?.map(d => {
                        const value = d?.value || d?.label;
                        return <div className={"_item"}
                                    onClick={() => handleChange(d)}
                                    key={value}>{d?.label}</div>;
                    })}
                </div>
            </Dropdown>

            {/*<select onChange={handleChange} value={value}>*/}
            {/*    <option value={""}>Please Select</option>*/}
            {/*    {options?.map(d => {*/}
            {/*        return <option value={d?.value || d?.label} key={d?.value || d?.label}>{d?.label}</option>;*/}
            {/*    })}*/}
            {/*</select>*/}
        </div>
    );
};

const _getToggleWidth = (options) => {
    const longestLabel = options?.reduce((a, b) => a?.label?.length > b?.label?.length ? a : b);
    const strLength = longestLabel?.length > DEFAULT_LABEL?.length ? longestLabel?.length : DEFAULT_LABEL?.length;
    return strLength * 10;
};

export default Select;
