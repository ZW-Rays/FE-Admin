import React from 'react';
import appendClass from 'utils/class';
import styles from './Table.module.css'

const Table = ({ children, full = true, align = 'center', className = '', style }) => {
    let tableClass = styles.table

    if (full) {
        tableClass += ` ${styles['table-full']}`
    }

    if (align === 'left') {
        tableClass += ` ${styles['table-align-left']}`
    }

    if (align === 'right') {
        tableClass += ` ${styles['table-align-right']}`
    }

    return (
        <table className={appendClass(tableClass, className)} style={style}>
            { children }
        </table>
    );
}

Table.THead = ({ children, className }) => {
    return (
        <thead className={appendClass(styles['table-head'], className)}>
            { children }
        </thead>
    )
}

Table.TBody = ({ children, className }) => {
    return (
        <tbody className={appendClass(styles['table-body'], className)}>
            {children}
        </tbody>
    )
}

Table.TRow = ({ children, className }) => {
    return <tr className={className}>{ children }</tr>
}

Table.TD = ({ children, className }) => {
    return <td className={className}>{ children }</td>
}

Table.TH = ({ children, className }) => {
    return <th className={className}>{ children }</th>
}

export default Table