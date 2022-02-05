import React from 'react';
import appendClass from 'utils/class';
import styles from './LeftLabeledInput.module.css'

export default function LeftLabeledInput({ 
    className = '', 
    label, 
    labelWidth = '15rem', 
    type = 'text', 
    placeholder = '', 
    onChange,
    readOnly = false,
    style,
    value,
    defaultValue,
    name
}) {
    return (
        <div className={appendClass(styles['left-labeled-input'], className)} style={style}>
            <label htmlFor={label} style={{ width: labelWidth }}>{label}</label>
            <input type={type} id={label} placeholder={placeholder} onChange={onChange} readOnly={readOnly} value={value} defaultValue={defaultValue} name={name} />
        </div>
    );
}
