import { NavLink } from "react-router-dom";
import style from "./MenuLink.module.css"
const MenuLink = ({ children, to }) => {
    return (
        <NavLink
            className={
                ({ isActive }) =>
                    `${style.link} ${isActive ? style.linkDestacado : ''}`
            }
            to={to}
        >
            {children}
        </NavLink>
    );
}

export default MenuLink