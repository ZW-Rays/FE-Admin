import React from 'react';
import styles from './LabeledCard.module.css'

export default function LabeledCard({ children, label = '', labelBackground = '#fff', style }) {
    return (
        <div className={styles['labeled-card']} style={style}>
            <h2 className={styles['card-label']} style={{ backgroundColor: labelBackground }}>{label}</h2>
            <div className={styles['card-contents']}>
                {children}
            </div>
        </div>
    );
}
