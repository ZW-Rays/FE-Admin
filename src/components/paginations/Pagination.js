import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Pagination.module.css'
import appendClass from 'utils/class';

const Pagination = ({ children, className }) => {
    return (
        <div className={appendClass(styles.pagination, className)}>
            <div className={styles['pagination-arrow']}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div className={styles['pagination-items']}>
                {children}
            </div>
            <div className={styles['pagination-arrow']}>
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </div>
    );
}

Pagination.Item = ({ iteration }) => {
    return <div className={styles['pagination-item']}>{iteration}</div>
}

export default Pagination 