import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

interface DefaultLayoutProps {

}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ }) => {

    useEffect(() => {

    }, [])

    return(
        <div>
            <header>
                Дефолтная шапка
            </header>
            <Outlet />
            <footer>
                Дефолтный футер
            </footer>
        </div>
    )
}