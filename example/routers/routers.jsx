import React from "react";
import {Route, Routes} from "react-router-dom";
import routes from "./routes";

const Routers = () => {
    const node = routes?.map(d => {
        if (d.children) {
            return d.children.map(v => <Route path={v.path} element={v.component} key={v.path}/>);
        }
        return <Route path={d.path} element={d.component} key={d.path}/>;
    });

    return (
        <Routes>
            {node}
        </Routes>
    );
};

export default Routers;
