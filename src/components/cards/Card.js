import React from 'react'
import appendClass from 'utils/class'
import styles from './Card.module.css'

export default function Card({ children, className = '', maxWidth = '', withShadow = false }) {
    let elementClass = appendClass(styles.card, className)

    if (withShadow) {
        elementClass = appendClass(styles.card, styles.shadow, className)
    }

    return (
        <div className={elementClass} style={{ maxWidth }}>
            {children}
        </div>
    )
}
