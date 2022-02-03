import React, { useRef } from 'react'
import styles from './SearchInput.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchInput({ className = '', onSubmit, id = '', placeholder = '', style }) {
    const inputRef = useRef()

    return (
        <form className={`${styles['search-input']} ${className}`} onSubmit={e => onSubmit(inputRef.current.value, e)} style={style} >
            <label htmlFor={id}>
                <FontAwesomeIcon icon={faSearch} className='grey-color3' />
            </label>
            <input type='text' id={id} placeholder={placeholder} ref={inputRef} />
            <div />
        </form>
    )
}
