import React from 'react';
import appendClass from 'utils/class';
import styles from './LabeledCard.module.css'

export default function LabeledCard({ children, className = '', label = '', labelBackground = '#fff', style }) {
    return (
        <div className={appendClass(styles['labeled-card'], className)} style={style}>
            <h2 className={styles['card-label']} style={{ backgroundColor: labelBackground }}>{label}</h2>
            <div className={styles['card-contents']}>
                {children}
            </div>
        </div>
    );
}
