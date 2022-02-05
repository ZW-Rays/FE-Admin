import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Pagination.module.css'
import appendClass from 'utils/class';

const Pagination = ({  
    className,
    totalPage,
    limit = 10,
    currentPage = 1
    // onPageClick
}) => {
    const [start, setStart] = useState(1)
    const [pageNow, setPageNow] = useState(currentPage)

    return (
        <div className={appendClass(styles.pagination, className)}>
            <div className={styles['pagination-arrow']}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div className={styles['pagination-items']}>
                {
                    Iterate({
                        start,
                        limit,
                        pageNow,
                        totalPage,
                        setStart,
                        setPageNow
                    })
                }
            </div>
            <div className={styles['pagination-arrow']}>
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </div>
    );
}

Pagination.Item = ({ 
    iteration, 
    className,
    onClick
}) => {
    return <div className={appendClass(styles['pagination-item'], className)} onClick={onClick}>{iteration}</div>
}

function Iterate({
    start,
    limit,
    pageNow,
    totalPage,
    setStart,
    setPageNow,
}) {
    const result = []

    const handleClick = i => {
        setPageNow(i)

        const middle = Math.ceil((start + (start + (limit - 1))) / 2)
        
        if (i < middle) {
            setStart(prev => {
                const newStart = (i - middle) + prev

                if (newStart <= 0) {
                    return 1
                }

                return newStart
            })
        }

        if (i > middle) {
            setStart(prev => {
                const newStart = prev - (middle - i)

                if ((newStart + (limit - 1)) >= totalPage) {
                    return totalPage - limit + 1
                }

                return newStart
            })
        }
        
    }

    for (let i = start; i <= totalPage; i++) {
        if (result.length >= limit) {
            break
        }

        result.push(
            <Pagination.Item 
                key={i}
                iteration={i} 
                onClick={() => handleClick(i)} 
                className={pageNow === i ? styles['pagination-active'] : ''} 
            />
        )
    }

    return result
}

export default Pagination 