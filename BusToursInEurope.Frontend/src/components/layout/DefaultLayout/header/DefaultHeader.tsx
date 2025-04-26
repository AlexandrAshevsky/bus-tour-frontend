import React from "react";

export const DefaultHeader: React.FC = ({ }) => {
    return(
        <header>
            <div>
                Logo
            </div>
            <a>
                <div>
                    Туры
                </div>
            </a>
            <a href="/about">
                <div>
                    О нас
                </div>
            </a>
            <a>
                <div>
                    Личный кабинет
                </div>
            </a>
        </header>
    )
}