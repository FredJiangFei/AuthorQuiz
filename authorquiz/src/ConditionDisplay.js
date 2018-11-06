import React from 'react'

function ConditionDisplay (props){
    return <div>{props.isVisible? props.children: null}</div>
}
export default ConditionDisplay;

