import React from "react";
import './sidebar.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <img src="src\assets\images\logo.png" alt="LOGO"></img>
            <ul>
                <li>
                    <a href="#" class="active">
                        <span class="item">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="item">Layouts</span>
                    </a>
                </li>
            </ul>

            <div className="title">Pages</div>

            <ul>
                <li>
                    <a href="#">
                        <span class="item">Account Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="item">Authentication</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="item">Misc</span>
                    </a>
                </li>
            </ul>

            <div className="title">Components</div>


            <ul>
                <li>
                    <a href="#">
                        <span class="item">Cards</span>
                    </a>
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
    )
}

export default Sidebar