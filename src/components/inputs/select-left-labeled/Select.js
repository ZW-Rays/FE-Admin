import React, { useEffect, useRef, useState } from 'react'
import AngelIcon from 'components/icons/AngelIcon'
import styles from './Select.module.css'

export default function Select({ className = '', label = '', placeholder = '', defaultValue, data = [] }) {
    const [selectedValue, setSelectedValue] = useState(() => data.find(item => item.value === defaultValue))
    const [isOpen, setIsOpen] = useState(false)
    
    const selectRef = useRef()

    useEffect(() => {
        const handleCloseDropdown = e => {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleCloseDropdown)

        return () => document.removeEventListener('mousedown', handleCloseDropdown)
    }, [])

    return (
        <div className={`${styles['select-container']} ${className}`}>
            <span>{label}</span>
            <div className={styles.select} ref={selectRef} onClick={() => setIsOpen(prevState => !prevState)}>
                {selectedValue 
                    ? <div className={styles['selected-value']}>{selectedValue.label}</div> 
                    : <div className={styles.placeholder}>{placeholder}</div>}

                <div className={`${styles['dropdown']} ${isOpen ? styles.open : ''}`}>
                    {data.map((item, i) => (
                        <Option 
                            key={item.value + i} 
                            label={item.label} 
                            value={item.value}
                            onClick={() => setSelectedValue(item)}
                            isSelected={selectedValue?.value === item.value}
                        />
                    ))}
                </div>
                <AngelIcon width='1rem' />
            </div>
        </div>
    )
}

function Option({ label = '', onClick, isSelected = false }) {
    return <div className={`${styles.option} ${isSelected ? styles.selected : ''}`} onClick={onClick}>{label}</div>
}
