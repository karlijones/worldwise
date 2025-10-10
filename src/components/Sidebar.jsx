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

            <Outlet />
            
            <footer className={styles.footer}></footer> 
            <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} WorldWise
            by WorldWise Inc.
            </p>           
        </div>
    );
}

export default Sidebar
