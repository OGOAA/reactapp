import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import styles from './Module.style.css';


function Layout() {
const newstyle ={
    color:"white",
    backgroundColor:"blue",
    padding:"20px",
    fontFamily:"sanserif",

}

    return (
        <div className="hann">
            <nav>
                <ul className="header">
                    <li>
                        <Link to="Aboutus">Aboutus</Link>
                    </li>
                    <li>
                        <Link to="Home">Home</Link>
                    </li>
                    <li>
                        <Link to="Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
export default Layout;