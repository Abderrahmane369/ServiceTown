// Navbar
import { Menu } from "antd";
import { _NABAR_MENU_SUBMENU_ITEMS_ } from "../data/navbar.jsx";

export default function NavBar() {
    return (
        <>
            <Menu
                theme="dark"
                mode="horizontal"
                items={_NABAR_MENU_SUBMENU_ITEMS_}
                style={{ minWidth: 0, flex: "auto" }}
                className="navbar"
            />
        </>
    );
}
