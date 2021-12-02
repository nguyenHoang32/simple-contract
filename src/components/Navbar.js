import React from "react";
import styles from "./Navbar.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);
const Navbar = () => {
    return(
        <nav className={cx("navbar")}>
        <div className="cursor-pointer opacity-30 hover:opacity-100">Home</div>
        <div className="cursor-pointer">Shop</div>
        <div className="cursor-pointer">Book</div>
    </nav>

    )
}
export default Navbar;