import "./Nav.css";
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className="nav">
            <NavLink className="link" to="/">Profile</NavLink>
            <NavLink className="link" to="/messages">Messages</NavLink>
            <NavLink className="link" to="/users">Users</NavLink>
        </nav>
    );
}

export default Nav;