import React from 'react'
import appendClass from 'utils/class'

export default function Container({ children, className = '', maxWidth = '' }) {
    const styles = {}

    if (maxWidth !== '') {
        styles.maxWidth = maxWidth
    }

    return (
        <div className={appendClass('container', className) } style={styles}>{children}</div>
    )
}
