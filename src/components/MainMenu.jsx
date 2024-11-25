import { NavLink } from "react-router-dom";

export default function MainMenu() {
    return (
        <nav>
            <NavLink to="/">Home </NavLink>
            <NavLink to="/books">Books </NavLink>
            <NavLink to="/about">Abouts </NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
    )
}