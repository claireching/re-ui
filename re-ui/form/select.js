import React, {useEffect, useRef, useState} from "react";
import Dropdown from "../dropdown/dropdown";

const Select = ({options = [], label, id, name, onChange, value = "", defaultSelected}) => {
    const [toggleWidth, setToggleWidth] = useState();
    const [selected, setSelected] = useState();
    const toggleRef = useRef(null);

    useEffect(() => {
        const toggleDom = toggleRef.current.getBoundingClientRect();
        setToggleWidth(toggleDom.width);
        if (defaultSelected) {
            const option = options?.find(d => d.value === defaultSelected);
            setSelected(option || defaultSelected);
        } else {
            setSelected({label: "Please Select"});
        }
    }, []);

    if (!id) {
        id = `select${JSON.stringify(options)}`;
    }

    const handleChange = (option) => {
        const {value, label} = option || {};
        setSelected(option);
        if (typeof onChange === "function") {
            onChange(value, name);
        }
    };

    const toggleInput = <div className={"_input select-input"}
                             style={{minWidth: toggleWidth}}
                             ref={toggleRef}>{selected?.label}</div>;
    return (
        <div className={"form-container select-container"}>
            {label && <label htmlFor={id}>{label}</label>}
            <Dropdown toggle={toggleInput}>
                <div className={"_options"} style={{minWidth: toggleWidth}}>
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

export default Select;
