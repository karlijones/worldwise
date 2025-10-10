import styles from './AppNav.module.css';

function AppNav() {
    return (
        <nav classname={styles.nav}>
            <ul>
                <li
                <NavLink to='cities'>Cities</NavLink>
                </li>
                <li>
                <NavLink to='countries'>Countries</NavLink>
                </li>
                <li>
                <NavLink to='form'>Form</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default AppNav
