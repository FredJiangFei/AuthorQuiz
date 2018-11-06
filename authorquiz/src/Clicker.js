import React from 'react';

function Clicker(props) {
    const clickHandler = e => props.handleClick('A');
    return <button onClick={ clickHandler }>
        <label htmlFor="name" className="highlight" style={{backgroundColor:'yellow'}}>Foo Bar</label> A
    </button>
}
export default Clicker;