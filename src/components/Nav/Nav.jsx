import styles from "./Nav.module.css";
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className={styles.nav}>
            <NavLink className={styles.link} to="/">Profile</NavLink>
            <NavLink className={styles.link} to="/messages">Messages</NavLink>
            <NavLink className={styles.link} to="/users">Users</NavLink>
        </nav>
    );
}

export default Nav;