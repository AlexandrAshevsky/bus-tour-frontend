import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

interface AdminLayoutProps {

}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ }) => {

    useEffect(() => {

    }, [])

    return(
        <div>
            <div>
                сайдбар
            </div>
            <Outlet/>
        </div>
    )
}