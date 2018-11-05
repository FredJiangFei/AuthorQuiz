import React from 'react';

function Clicker(props) {
    return <button onClick={event => props.handleClick('A')}>
        <label htmlFor="name" className="highlight" style={{backgroundColor:'yellow'}}>Foo Bar</label> A
    </button>
}
export default Clicker;