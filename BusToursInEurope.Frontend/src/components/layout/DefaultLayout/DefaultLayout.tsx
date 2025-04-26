import React from "react";
import { Outlet } from "react-router-dom";
import { DefaultHeader } from "./header/DefaultHeader";
import { DefaultFooter } from "./footer/DefaultFooter";


export const DefaultLayout: React.FC = () => {
    return(
        <div>
            <DefaultHeader />
            <Outlet />
            <DefaultFooter />
        </div>
    )
}