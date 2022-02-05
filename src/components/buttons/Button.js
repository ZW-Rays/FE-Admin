import React from 'react'
import styles from './Button.module.css'

export default function Button({ 
    className = '', 
    label = "", 
    type = 'button', 
    transparent = false,
    full = false, 
    padding = '',
    fontSize = '',
    disabled = false
}) {
    let buttonClass = styles.button
    let style = {}

    if (transparent) buttonClass = styles['button-transparent']

    if (full) buttonClass += ` ${styles['full']}`

    if (padding !== '') style.padding = padding

    if (fontSize !== '') style.fontSize = fontSize

    if (disabled) buttonClass = styles['button-disabled']

    return (
        <button 
            className={`${buttonClass} ${className}`} 
            type={type} 
            style={style}
            disabled={disabled}>{label}</button>
    )
}
