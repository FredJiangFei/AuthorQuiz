import React from 'react'

function DangerContainer (props){
    return <p dangerouslySetInnerHTML={{__html:props.dangerous }}></p>
}
export default DangerContainer;

