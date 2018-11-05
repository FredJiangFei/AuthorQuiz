import React from 'react';

interface SumProps {
    a: number,
    b: number
}

function Sum(props: SumProps) {
    return <h1>{props.a} + {props.b} = {props.a + props.b}</h1>
}
export default Sum;