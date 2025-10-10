import styles from './AppNav.module.css';

function AppNav() {
    return (
        <nav classname={styles.nav}>
            <ul>
                <li
                <NavLink to='cities'>Cities</NavLink>
                </li>
                <li>Countries</li>
                <li>Form</li>
            </ul>
        </nav>
    );
}

export default AppNav
