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
                <Row>
                    <div className={"_select _select-page"} style={{marginRight: 8}}>
                        <span style={{marginRight: 5}}>Page</span>
                        <Select options={[{label: 1, value: 1}, {label: 2, value: 2}, {label: 3, value: 3}]}
                                defaultSelected={1}
                                showSelectText={false}
                                dropdownPosition={"top"}/>
                    </div>
                    <div className="pagination" style={{marginRight: 8}}>
                        <div className="page previous disabled">Prev</div>
                        {/*<li className="page active">1</li>*/}
                        {/*<li className="page">2</li>*/}
                        {/*<li className="page">3</li>*/}
                        {/*<li className="page">4</li>*/}
                        {/*<li className="page">5</li>*/}
                        {/*<li className="page">6</li>*/}
                        <div className="page next">Next</div>
                    </div>


                    <div className={"_select _select-limit"}>
                        <span style={{marginRight: 5}}>Limit</span>
                        <Select options={[{label: "50",}, {label: "100", value: "100"}]}
                                defaultSelected={"100"}
                                showSelectText={false}
                                dropdownPosition={"top"}/>
                    </div>


                </Row>

            </div>
        </>
    );
};

export default Table;
