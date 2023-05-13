import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { Outlet, Link } from "react-router-dom";

function Sidebar() {
    const [fontSize, setFontSize] = useState(16);
    const [theme, setTheme] = useState("dark");
    const sidebarClass = `sidebar ${theme}`;

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };


    useEffect(() => {
        const items = document.querySelectorAll(".item");
        items.forEach(item => item.style.fontSize = `${fontSize}px`);
    }, [fontSize]);

    const increaseFontSize = () => {
        setFontSize(prevFontSize => prevFontSize + 2);
    };

    const decreaseFontSize = () => {
        setFontSize(prevFontSize => prevFontSize - 2);
    };
    return (
        <>
            <div>
                <div id="sidebar" className={sidebarClass}>
                    <img src="src\assets\images\logo.png" alt="LOGO"></img>
                    <ul>
                        <li>
                            <a href="#" class="active">
                                <span class="item">
                                    Current size: {fontSize}.<br></br>
                                    <button onClick={increaseFontSize}>+</button>
                                    <button onClick={decreaseFontSize}>-</button>
                                    <button onClick={toggleTheme}>Zmień motyw</button>
                                </span>
                            </a>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </li>
                        <li>
                            <a href="#">
                                <span class="item">User Interface</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="item">Extended UI</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="item">BoxIcons</span>
                            </a>
                        </li>
                    </ul>

                    <div className="title">Forms & Tables</div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default Sidebar