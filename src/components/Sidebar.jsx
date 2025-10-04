import React from "react";
import AppNav from "../components/AppNav/AppNav";
import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import styles from "./Sidebar.module.css";


function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <p>List of cities</p>
            <footer className={styles.footer}></footer> 
            <p className={styles.copyright}></p>           
        </div>
    );
}

export default Sidebar
