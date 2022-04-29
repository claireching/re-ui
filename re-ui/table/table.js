import React from "react";
import clsx from "clsx";
import "./table.scss";
import Select from "../form/select";
import Row from "../grid/row";

const Table = ({children, className, style, alt}) => {
    return (
        <>
            <table className={clsx("table-container", className)} style={style}>
                {children}
            </table>
            <div className={"pagination-container"}>
                <div>
                    Total 10026
                </div>
                <div>
                    <ul className="pagination">
                        <li className="previous disabled">prev</li>
                        <li className="page active">1</li>
                        <li className="page">2</li>
                        <li className="page">3</li>
                        <li className="page">4</li>
                        <li className="page">5</li>
                        <li className="page">6</li>
                        <li className="next">next</li>
                    </ul>
                </div>
                <div className={"limit-container"}>
                    <span style={{marginRight: 5}}>Limit</span>
                    <Select options={[{label: "50",}, {label: "100", value: "100"}]} defaultSelected={"100"} dropdownPosition={"top"}/>
                </div>

            </div>
        </>
    );
};

export default Table;
