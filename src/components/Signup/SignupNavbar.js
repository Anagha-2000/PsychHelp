import React from "react";
import classes from '../../UI/Navbar/Navbar.module.css';
import { Link } from "react-router-dom";

const SignupNavbar = () => {
    const style = {
        color: "white",
    };
    return (
        <nav className={classes.Navbar}>
            <Link style={style} to="/">
                <h3 className={classes.title}>PsychHelp</h3>
            </Link>
        </nav>
    );
};

export default SignupNavbar;
