import React from "react";
import {Link} from "react-router-dom"
import classes from './styles.module.css'

export const DefaultHeader: React.FC = () => {
    return(
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to={"/"} className={classes.logo}>
                    Logo
                </Link>
                <nav className={classes.navigation}>
                    <Link to={"/tours"} className={classes.navLink}>
                        <div className={classes.headerElement}>
                            Туры
                        </div>
                    </Link>
                    <Link to={"/about"} className={classes.navLink}>
                        <div className={classes.headerElement}>
                            О нас
                        </div>
                    </Link>
                    <Link to={"/profile"} className={classes.navLink}>
                        <div className={classes.headerElement}>
                            Личный кабинет
                        </div>
                    </Link>
                </nav>
            </div>
        </header>
    );
};