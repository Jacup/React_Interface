import React from "react";
import './HelloWorld.css';

function HelloWorld(props) {
    const style = { color: 'red', fontWeight: 'bold' };

    return (
        <div>
            <p className="color">
                Hello <span style={style}>{props.name}</span>
            </p>
        </div>
    )
}

export default HelloWorld