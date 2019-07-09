import React from 'react'
import classes from './Initialize.css'

const initialize = (props) => {
    return <div className={classes.Container}>Let start initialize {props.name} - {props.age} {Math.random()*props.age}
    <button onClick={props.click}>Click From Here!!!</button><input type="text" onChange={props.changed} value={props.name} /></div>
}

export default initialize;