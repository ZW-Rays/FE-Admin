import React from 'react'
import styles from './Input.module.css'

export default function Input({ className, inputClass, label, type, onChange, autoFocus, placeholder }) {
    return (
        <div className={`${styles.input} ${className}`} >
            <label htmlFor={label}>{label}</label>
            <input 
                className={inputClass} 
                type={type} 
                id={label} 
                onChange={onChange} 
                autoFocus={autoFocus} 
                placeholder={placeholder}
            />
        </div>
    )
}
