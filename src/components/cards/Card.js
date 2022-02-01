import React from 'react'
import appendClass from 'utils/class'
import styles from './Card.module.css'

export default function Card({ children, className = '', maxWidth = '', withShadow = false, style = {} }) {
    let elementClass = appendClass(styles.card, className)

    if (withShadow) {
        elementClass = appendClass(styles.card, styles.shadow, className)
    }

    if (maxWidth !== '') {
        style.maxWidth = maxWidth
    }

    return (
        <div className={elementClass} style={style}>
            {children}
        </div>
    )
}
