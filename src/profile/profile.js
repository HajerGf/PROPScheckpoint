import React from 'react'

const profile = (props, show) => {
    return (
        <div>
            <button onClick={() => show(props.fullname)}>click me</button>
            <h1>{props.fullname}</h1>
            <p>{props.bio}</p>
            <h3>{props.profession}</h3>
        </div>
    )
}

export default profile
