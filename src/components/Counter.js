import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>ClickMe!</button>
        </div>
    )
}

export default Counter