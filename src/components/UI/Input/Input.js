import React from 'react'
import './Input.css'

const Input = props => {
    let classes = [];
    let inputElement;
    let showLabel;
    if (!props.isValid && props.touched) {
        classes.push("Invalid")
        showLabel = <label className="InvalidText">{props.inValidText}</label>
    }

    inputElement = <div className="Input">
        <input
            className={classes.join(" ")}
            {...props.elementconfig}
            value={props.value}
            onChange={props.changed} />
        {showLabel}
    </div>
    return inputElement
}

export default Input;