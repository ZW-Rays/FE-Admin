import React from 'react';
import styles from './Table.module.css'

export default function Table({ full = true, align = 'center' }) {
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
        <table className={tableClass}>
            <thead className={styles['table-head']}>
                <tr>
                    <th>Item Number</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>UOM</th>
                    <th>Target Delivery</th>
                </tr>
            </thead>
            <tbody className={styles['table-body']}>
                <tr>
                    <td>Item Number</td>
                    <td>Item Name</td>
                    <td>Quantity</td>
                    <td>UOM</td>
                    <td>Target Delivery</td>
                </tr>
                <tr>
                    <td>Item Number</td>
                    <td>Item Name</td>
                    <td>Quantity</td>
                    <td>UOM</td>
                    <td>Target Delivery</td>
                </tr>
                <tr>
                    <td>Item Number</td>
                    <td>Item Name</td>
                    <td>Quantity</td>
                    <td>UOM</td>
                    <td>Target Delivery</td>
                </tr>
                <tr>
                    <td>Item Number</td>
                    <td>Item Name</td>
                    <td>Quantity</td>
                    <td>UOM</td>
                    <td>Target Delivery</td>
                </tr>
            </tbody>
        </table>
    );
}
