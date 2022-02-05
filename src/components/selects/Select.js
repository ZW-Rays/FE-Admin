import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import styles from './Select.module.css'
import appendClass from 'utils/class'

export default function Select({ 
    className = '', 
    label = '', 
    labelWidth = '15rem', 
    data = [], 
    defaultValue, 
    style, 
    onChange 
}) {
    const [selectedValue, setSelectedValue] = useState(() => {
        if (defaultValue) {
            return data.find(item => item.value === defaultValue)
        }

        return data[0]
    })
    const [isOpen, setIsOpen] = useState(false)
    const [, setIndexActive] = useState(() => {
        if (selectedValue !== undefined) {
            return data.findIndex(item => item.value === selectedValue.value)
        }

        return 0
    })
    
    const selectRef = useRef()
    const dropdownSelectRef = useRef()

    useEffect(() => {
        const handleCloseDropdown = e => {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }        
        
        document.addEventListener('click', handleCloseDropdown)

        return () => document.removeEventListener('click', handleCloseDropdown)
    }, [])

    const handleKeyDown = e => {
        const lastIndex = data.length - 1

        switch (e.key) {
            case "Escape" :
                setIsOpen(false)       
                break
            case "Enter" :
                setIsOpen(prev => !prev)
                break
            case "ArrowUp":
                setIndexActive(prev => {
                    if (prev === 0) {
                        return prev
                    }

                    const newIndex = prev - 1
                    dropdownSelectRef.current.children[newIndex].scrollIntoView({ block: 'nearest' })
                    onChange(data[newIndex])
                    setSelectedValue(data[newIndex])
                    return newIndex
                })
                break
            case "ArrowDown":
                setIndexActive(prev => {
                    if (prev === lastIndex) {
                        return prev
                    }

                    const newIndex = prev + 1
                    dropdownSelectRef.current.children[newIndex].scrollIntoView({ block: 'nearest' })
                    onChange(data[newIndex])
                    setSelectedValue(data[newIndex])
                    return newIndex
                })
                break
            default :
                return
        }
    }

    return (
        <div 
            className={appendClass(styles['select'], className)} 
            tabIndex={0} 
            role="button"
            onKeyDown={handleKeyDown}
            onBlur={() => setIsOpen(false)}
            style={style}
        >
            <label style={{ width: labelWidth }}>{label}</label>
            <div 
                className={`${styles['select-input']} ${isOpen ? styles['open'] : ''}`} 
                onClick={() => setIsOpen(prev => !prev)}
                ref={selectRef}
            >
                <span>{selectedValue?.label}</span>
                <ul className={styles['select-dropdown']} ref={dropdownSelectRef}>
                    {data.map((item, i) => (
                        <Option 
                            key={i} 
                            className={`${item.value === selectedValue?.value ? styles['select-dropdown-selected'] : ''}`}
                            onClick={() => {
                                onChange(item)
                                setSelectedValue(item)
                            }}
                            onMouseOver={() => setIndexActive(i)}
                            label={item.label}
                        />
                    ))}
                </ul>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
        </div>
    )
}

function Option({ label = '', className, onClick, onMouseOver }) {
    return <li 
        className={className}
        onClick={onClick}
        onMouseOver={onMouseOver}
    >
        {label}
    </li>
}
